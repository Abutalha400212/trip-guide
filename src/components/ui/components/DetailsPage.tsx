"use client"
/* eslint-disable @next/next/no-img-element */

import {
  BadgeCheck,
  CornerDownRight,
  Globe,
  MessageCircleReply,
} from "lucide-react";
import { Ratings } from "../rating";
import { Separator } from "../separator";
import { BookingCard } from "./BookingCard";
import { CarouselPlugin } from "./CarouselPlugin";
import { CardHeader, CardTitle } from "../card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ModalContent } from "./ModalContent";
import { useGetPlaceByIdQuery } from "@/redux/service/placeApi";
import { useParams } from "next/navigation";
import Form from "@/components/Form/Form";
import FormTextArea from "@/components/Form/FormTextArea";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";
import {
  useAddCommentMutation,
  useReplyMutation,
} from "@/redux/service/commentApi";
import { useToast } from "../use-toast";
import { useGetUserByEmailQuery } from "@/redux/service/authApi";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { useState } from "react";
export function DetailsPage() {
  const [rating, setRating] = useState<number>(0);
  const handleClick = () => {
    if (rating < 5) {
      setRating(rating + 1);
    }
  };

  const { data: userInfo } = useGetUserByEmailQuery(undefined);
  const { toast } = useToast();
  const [addComment] = useAddCommentMutation();
  const [reply] = useReplyMutation();
  const { id } = useParams();
  const { data } = useGetPlaceByIdQuery(id);
  const handleComment = async (payload: any) => {
    const data = {
      id,
      userId: userInfo?._id,
      rating,
      comment: payload?.comment,
      author: userInfo?.name,
      image_url: userInfo?.image_url,
    };
    try {
      const res = await addComment({ ...data }).unwrap();
      if (!!res) {
        toast({
          className: "bg-purple-500 text-white",
          title: "Thanks for comment!",
        });
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: `${err?.message}`,
      });
    }
  };
  const handleReply = async (payload: any, commentId: string) => {
    const data = {
      commentId,
      userId: userInfo?._id,
      reply: payload?.reply,
      author: userInfo?.name,
      image_url: userInfo?.image_url,
    };
    try {
      const res = await reply({ ...data }).unwrap();
      if (!!res) {
        toast({
          className: "bg-purple-500 text-white",
          title: "Reply Done!",
        });
      }
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: `${err?.message}`,
      });
    }
  };
  return (
    <Dialog>
      <ModalContent />
      <div className="p-3 space-y-2">
        <div className="space-y-2">
          <CardTitle>
            <DialogTrigger asChild>
              <Button variant="default">Reserve Now & Pay Later</Button>
            </DialogTrigger>
          </CardTitle>
          <h4 className="text-xl font-medium leading-none py-2">
            {data?.title}
          </h4>
          <div className="md:flex md:h-6 my-4 items-center md:space-x-4 space-y-2 md:space-y-0  text-sm">
            <div className="py-1 flex items-center gap-x-1.5">
              <Ratings variant="yellow" rating={data?.rating || 0} />{" "}
              <span className="text-sm tracking-widest font-semibold">
                {data?.reviews}
              </span>
            </div>
            <Separator className="sm:hidden md:block" orientation="vertical" />
            <div className="flex items-center gap-x-1">
              <BadgeCheck className="h-4 w-4" /> Badge of Excellence
            </div>
            <Separator className="hidden md:block" orientation="vertical" />
            <div className="flex items-center gap-x-1">
              <Globe className="h-4 w-4" /> {data?.location}
            </div>
            <Separator className="hidden md:block" orientation="vertical" />
            <div className="flex items-center gap-x-1">
              <Avatar>
                <AvatarImage
                  className="w-10 h-10 object-contain"
                  src={
                    data?.user?.image_url
                      ? data?.user?.image_url
                      : "https://github.com/shadcn.png"
                  }
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>{" "}
              Posted by <span className="font-semibold text-purple-700">{data?.user?.name}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-4">
          <div className="md:w-7/12">
            <CarouselPlugin images={data?.imageGallery} />
            <CardHeader className="px-0 font-bold py-2">
              Details Content-
            </CardHeader>
            <p>{data?.description}</p>
            <hr className="my-5" />
            <section className="w-full rounded-lg border-2  p-4 my-8 mx-auto ">
              <h3 className="font-os text-lg font-bold">Comments</h3>

              {data?.comments?.map(
                ({
                  reply,
                  id: commentId,
                  author,
                  comment,
                  image_url,
                  date,
                }: {
                  reply: any;
                  id: string;
                  author: string;
                  comment: string;
                  image_url: string;
                  date: string;
                }) => (
                  <div key={commentId}>
                    <div className="flex mt-4 items-center justify-between">
                      <div className="flex ">
                        <Avatar>
                          <AvatarImage
                            className="w-12 h-12 object-contain"
                            src={
                              image_url
                                ? image_url
                                : "https://github.com/shadcn.png"
                            }
                            alt="@shadcn"
                          />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <div className="font-medium text-purple-800">
                            {author}
                          </div>
                          <div className="text-gray-600 text-sm">
                            Commented on {date ? date : "2023-10-02 15:15"}
                          </div>
                          <div className="mt-0.5 text-purple-800">
                            {comment}
                          </div>
                        </div>{" "}
                      </div>{" "}
                      <Popover>
                        <PopoverTrigger asChild>
                          {userInfo?._id === data?.user?._id && <MessageCircleReply />}
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <Form
                                submitHandler={(values) =>
                                  handleReply(values, commentId)
                                }
                              >
                                <div className="flex gap-y-4 flex-col mt-4">
                                  <FormTextArea
                                    placeholder="Mention it"
                                    label="Reply"
                                    name="reply"
                                  />
                                  <Button type="submit" className="w-4/12">
                                    Reply
                                  </Button>
                                </div>
                              </Form>
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    </div>

                    {reply?.map(
                      ({
                        reply,
                        userId,
                        author,

                        image_url,
                        date,
                      }: {
                        reply: string;
                        userId: string;
                        author: string;
                        image_url: string;
                        date: string;
                      }) => (
                        <div key={userId} className="ml-12 flex items-center">
                          <CornerDownRight className="text-gray-400 mr-2" />
                          <div className="flex mt-4 items-center justify-between">
                            <div className="flex ">
                              <Avatar>
                                <AvatarImage
                                  className="w-12 h-12 object-contain"
                                  src={
                                    image_url
                                      ? image_url
                                      : "https://github.com/shadcn.png"
                                  }
                                  alt="@shadcn"
                                />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <div className="ml-3">
                                <div className="font-medium text-green-700">
                                  {author}
                                </div>
                                <div className="text-gray-600 text-sm">
                                  Replied on {date ? date : "2023-10-02 15:15"}
                                </div>
                                <div className="mt-0.5 text-green-600">
                                  {reply}
                                </div>
                              </div>{" "}
                            </div>{" "}
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )
              )}
            {userInfo?._id !== data?.user?._id &&  <Form submitHandler={handleComment}>
                <div className="flex gap-y-4 flex-col mt-4">
                  <FormTextArea
                    placeholder="Your Opinion"
                    label="Comment"
                    name="comment"
                  />
                  <Ratings
                    onClick={handleClick}
                    variant="yellow"
                    rating={rating}
                  />{" "}
                  <Button
                    disabled={rating < 1}
                    type="submit"
                    className="md:w-2/12 w-4/12"
                  >
                    Post Comment
                  </Button>
                </div>
              </Form>}
            </section>
          </div>
          <div className="flex-auto md:w-5/12 justify-center  flex items-center ">
            <BookingCard placeId={id} />
          </div>
        </div>
      </div>
    </Dialog>
  );
}
