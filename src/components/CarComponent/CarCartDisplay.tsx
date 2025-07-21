"use client";
import { useGetCarQuery } from "@/redux/services/car/car";
import React from "react";
import { CardCarousel } from "@/components/ui/card-carousel";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function CarCartDisplay() {
  const { data, isFetching, isLoading, error } = useGetCarQuery({
    page: 1,
    limit: 6,
  });
  const router = useRouter()

  return (
    // <div className="pt-40">
    //   {data?.map((data) => (
    //     <div key={data.id} className="mb-4">
    //       <p className="text-lg font-semibold">{data.make}</p>
    //       <img
    //         src={data.image}
    //         alt={data.model}
    //         className="w-64 h-40 object-cover"
    //       />
    //     </div>
    //   ))}
    // </div>

    <div className=" grid grid-cols-4 gap-5">
      {data?.map((data) => (
        <div key={data.id}>
          <div className="w-full mx-auto overflow-hidden shadow-lg transition-all hover:shadow-xl">
            <img
              src={data.image || "/placeholder.svg"}
              width={300}
              height={100}
              className="object-cover"
              alt={data.model || "car image"}
            />
            <div className="p-4 pb-2">
              <h2 className="text-xl font-bold">{`${data.make} ${data.model}`}</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {`${data.year} | ${data.description}`}
              </p>
              <h3 className="font-bold">{data.price}$</h3>
            </div>
            <div className="px-4">
              <Button onClick={() => router.push(`/product/${data.id}`)} className="w-full cursor-pointer">View Detail</Button>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}
