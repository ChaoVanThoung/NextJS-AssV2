"use client";
import { useGetCarQuery } from "@/redux/services/car/car";
import React from "react";
import { CardCarousel } from "@/components/ui/card-carousel";

export default function CarCartDisplay() {
  const { data, isFetching, isLoading, error } = useGetCarQuery({
    page: 1,
    limit: 7,
  });

  return (
    <div className="pt-40">
      {data?.map((data) => (
        <div key={data.id} className="mb-4">
          <p className="text-lg font-semibold">{data.make}</p>
          <img
            src={data.image}
            alt={data.model}
            className="w-64 h-40 object-cover"
          />
        </div>
      ))}
    </div>
  );
}
