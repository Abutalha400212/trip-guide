"use client"
import { useGetPlacesQuery } from "@/redux/service/placeApi";
import { useSearchParams } from "next/navigation";
import CardWithImage from "./CardWithImage";
import notFound from "@/assets/not-found.png"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../button";
export default function SearchPage() {
  const searchParams = useSearchParams();
  const search = searchParams.get("searchTerm");
  const { data } = useGetPlacesQuery({ searchTerm: search });
  return (
   <>
    <div>
      <h1 className="font-bold py-2 text-2xl text-center">
       {data?.langth && "Searching Result.."} 
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 p-3 place-items-center">
        {data?.map((item: any) => (
          <CardWithImage item={item} key={item?.id} />
        ))}
      </div>
    </div>

    {!data?.length && <div className="flex text-center justify-center items-center h-[100vh]">
        <div className="flex flex-col gap-y-2">
            <Image src={notFound} alt="Not-Found" width={200} height={200} />
            <h1 className="text-xl font-semibold">No Data found</h1>
            <small>Data is empty or try adjusting filter</small>
            <br />
            <Link href={"/"}><Button>Back to Home</Button></Link>
        </div>
        
        </div>}
   </>
  );
}
