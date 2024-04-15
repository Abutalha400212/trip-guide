"use client"
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../card";
import Link from "next/link";
import Image from "next/image";

export default function BlogCard({ props }: { props: any }) {
  const { image, title, id, description } = props;
  return (
    <Card className=" p-1  bg-transparent">
      <CardHeader className="p-1">
        {" "}
        <CardTitle>
          {" "}
          <Image
            src={image}
            width={500}
            className=" rounded-md"
            alt="Image 1"
          />
        </CardTitle>
        <Link href="#"></Link>
      </CardHeader>
      <CardContent className="p-1 py-0">
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className=" text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
      <CardFooter className="py-3 px-1">
        <Link
          href={`/blog?blogId=${id}`}
          className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
        >
          Read in 2 minutes
        </Link>
      </CardFooter>
    </Card>
  );
}
