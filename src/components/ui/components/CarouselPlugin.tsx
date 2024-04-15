"use client"

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";


import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
 type IProps ={
  content?:React.ReactNode,
  images:string[]
 }
export function CarouselPlugin({content,images}:IProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );


  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images?.map((item, i) => (
          <CarouselItem key={i}>
            <div className="p-1 w-full relative ">
              <Image
                className="h-[200px] md:h-[500px] w-full object-cover"
                alt="Image_1"
                width={500}
                height={200}
                src={item}
              />
              <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col justify-center items-center ">
                
                {/* content */}
                {content}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
