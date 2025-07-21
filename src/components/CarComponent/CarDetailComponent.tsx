"use client";

import { useGetCarByIdQuery } from "@/redux/services/car/car";
import Image from "next/image";

type carId = {
    carId:string
}

export default function CarDetailComponent({carId}:carId) {
  const { data, isLoading, error } = useGetCarByIdQuery(carId);
  return (
    <div>
      {
        <div>
          <Image
            src={data?.image || ""}
            width={200}
            height={150}
            alt={data?.model || ""}
          />
          <h1>{`${data?.make} ${data?.model}`}</h1>
        </div>
      }
    </div>
  );
}
