"use client"
import FormInput from "@/components/Form/FormInput";
import React from "react";
import { Button } from "../../button";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Form from "@/components/Form/Form";

export default function Footer() {
  const handleSubscribe = (data: any) => {
    console.log(data);
  };
  return (
    <section className="w-full py-8 md:py-8 lg:py-8 bg-zinc-900 dark:bg-zinc-100">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h2 className="text-2xl py-2 font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
          Stay Connected
        </h2>
        <p className="mx-auto max-w-[700px] text-zinc-100 md:text-lg dark:text-zinc-800">
          Subscribe to our newsletter and follow us on our social media.
        </p>
        <div className="w-full max-w-md space-y-2 my-4">
          <Form submitHandler={handleSubscribe}>
            <div className="flex space-x-2 justify-center">
              <FormInput
              className="py-2 px-2"
                name="email"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                className=" border-white"
                type="submit"
                variant="outline"
              >
                Subscribe
              </Button>
            </div>
          </Form>
        </div>
        <div className="flex justify-center space-x-4">
          <Link aria-label="Facebook page" className="text-white" href="#">
            <FacebookIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="Twitter profile" className="text-white" href="#">
            <TwitterIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="Instagram profile" className="text-white" href="#">
            <InstagramIcon className="h-6 w-6" />
          </Link>
          <Link aria-label="LinkedIn profile" className="text-white" href="#">
            <LinkedinIcon className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
