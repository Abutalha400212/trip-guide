"use client"
/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../card'
import Image from 'next/image'
import image_1 from "@/assets/images/img_2.jpg"
import { Globe } from 'lucide-react'
import Link from 'next/link'
import { Ratings } from '../rating'

export default function CardWithImage({item}:{item:any}) {
  const {title,location,price,imageGallery,rating,_id,reviews} = item
  return (
   <Link href={`/place/${_id}`}>
    <Card className="md:w-[350px] ">
      <CardHeader className='p-0'>
        <CardTitle ><figure >
  <img className="md:h-48 w-full object-center rounded-tl-lg" src={imageGallery[0]} alt="image description"/>
  
</figure></CardTitle>
        <CardDescription className='flex ml-1.5 items-center gap-2'><Globe className='w-5 h-5' /> <span>{location}</span></CardDescription>
      </CardHeader>
      <CardContent className='p-0 pl-2'>
    <Link href={`/place/${_id}`} className='font-bold text-md underline tracking-tight '>{title}</Link>
      </CardContent>
      <CardFooter className='p-2 pl-2 flex-col '>
        <div className='py-1 flex items-center gap-x-1.5'>
        <Ratings variant='yellow' rating={rating}/> <span className='text-sm tracking-widest font-semibold'>{reviews}</span>
        </div>
       <p>from <span className='font-bold text-md '>${price}</span></p>
      </CardFooter>
    </Card>
   </Link>
  )
}
