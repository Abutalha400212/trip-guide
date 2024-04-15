"use client"
import Form from "@/components/Form/Form";
import FormInput from "@/components/Form/FormInput";
import FormTextArea from "@/components/Form/FormTextArea";
import { Plane, Store } from "lucide-react";
import React from "react";
import { Button } from "../button";
import FormMultipleFileInput from "@/components/Form/FormMultipleFiles";
import { useToast } from "../use-toast";
import { useRouter } from "next/navigation";
import { useAddPlaceMutation } from "@/redux/service/placeApi";
import { useGetUserByEmailQuery } from "@/redux/service/authApi";

const AddPlaceForm = () => {
  const { data: userInfo } = useGetUserByEmailQuery(undefined);
  const { toast } = useToast();
  const router = useRouter();
  const [addPlace] = useAddPlaceMutation();
  const handleAddPlace = async (payload: any) => {
    const { files, ...data } = payload;

    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.append(
      "data",
      JSON.stringify({ ...data, user: userInfo?._id, rating: 4, reviews: 50 })
    );
    try {
      const res = await addPlace(formData).unwrap();
      if (!!res) {
        toast({
          className: "bg-purple-500 text-white",
          title: "Place Added successfully!",
        });
        router.replace("/");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div className="w-full px-5 py-10 md:py-2">
      <h1 className="text-xl text-gray-700 font-bold mb-2 flex items-center ">
        <Plane className="mr-1" /> Add Place
      </h1>
      <p className="text-md font-light text-gray-800 text-center leading-tight mb-5">
        Carefully fillup the form
      </p>
      <Form submitHandler={handleAddPlace}>
        <div className="space-y-4">
          <FormInput
            label="Place Title"
            name="title"
            placeholder="Title here!"
          />
          <FormTextArea
            name="description"
            cols={16}
            placeholder="Description Here"
            label="Description"
          />
          <div className="grid md:grid-cols-2 md:gap-6">
            <FormInput
              name="location"
              label="Location"
              placeholder="Location here!"
            />
            <FormInput
              type="number"
              name="price"
              label="Booking Price"
              placeholder="Booking price here!"
            />
          </div>
          <FormMultipleFileInput name="files" />
          <Button type="submit" variant={"outline"}>
            Add Place
          </Button>{" "}
        </div>
      </Form>
    </div>
  );
};

export default AddPlaceForm;
