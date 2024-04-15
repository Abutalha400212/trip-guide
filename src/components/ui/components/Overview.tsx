"use client"
import React from 'react'
import CardWithImage from './CardWithImage'
import { useGetPlacesQuery } from '@/redux/service/placeApi'

export default function Overview() {
  const {data} = useGetPlacesQuery(undefined)
  console.log(data)
  return (
<div>
  <h1 className='font-bold py-2 text-2xl text-center'>Recommended based on your Choose</h1>
<div className='grid grid-cols-1 md:grid-cols-4 gap-3 p-3 place-items-center'>
  {data?.map((item:any) =>    <CardWithImage item={item} key={item?._id}/> )}
  </div>
</div>
  )
}
