"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useCreateCarMutation } from "@/redux/services/car/car";
import { CarCreateType } from "@/lib/cars/CarResponse";

// Zod schema
const formValidation = z.object({
  make: z.string().min(3, { message: "At least 3 characters in make" }),
  model: z.string().min(3, { message: "At least 3 characters in model" }),
  year: z.coerce.number().int().gte(1900).lte(new Date().getFullYear()), // ✅ coercing string to number
  price: z.coerce.number().positive({ message: "Price must be a number" }),
  mileage: z.coerce.number().positive({ message: "Price must be a number" }),
  description: z.string().min(5),
  color: z.string().min(3),
  fuel_type: z.string().min(2),
  transmission: z.string().min(2),
  image: z
    .string().min(3, { message: "At least 3 characters in image" }),
});

export default function FormCreateCarComponent() {
  
  // calling createCarMutation
  const [createCar,{data,isLoading,error}] = useCreateCarMutation()

  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation) as never,
    defaultValues: {
      make: "",
      model: "",
      year: new Date().getFullYear(),
      price: 0,
      mileage: 0,
      description: "",
      color: "",
      fuel_type: "",
      transmission: "",
      image: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formValidation>) => {

    // create request
    const createNewCar: CarCreateType = {
      make: values.make,
      model: values.model,
      year: values.year,
      price: values.price,
      mileage: values.mileage,
      description: values.description,
      color: values.color,
      fuel_type: values.fuel_type,
      transmission: values.transmission,
      image: values.image,
    };

    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmdAZ21haWwuY29tIiwiZXhwIjoxNzUzMTA5NzcxLCJ0eXBlIjoiYWNjZXNzIn0.SCkA83tVxk8lP8ou9VudY4gB2me6h-CGzFz2nmzwECE";

      createCar({
        newCar: createNewCar,
        accessToken: accessToken
      })

      console.log("The data: ",data);
      console.log(error);


  };

  return (
    <div className="w-[800px] border p-8 rounded-2xl mx-auto mt-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 grid grid-cols-3 gap-5"
        >
          {/* make */}
          <FormField
            control={form.control}
            name="make"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Make</FormLabel>
                <FormControl>
                  <Input placeholder="Toyota" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* model */}
          <FormField
            control={form.control}
            name="model"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Model</FormLabel>
                <FormControl>
                  <Input placeholder="Revo Rally" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* year */}
          <FormField
            control={form.control}
            name="year"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Year</FormLabel>
                <FormControl>
                  <Input placeholder="2025" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="10000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* mileage */}
          <FormField
            control={form.control}
            name="mileage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mileage</FormLabel>
                <FormControl>
                  <Input placeholder="5000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Very good car" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* color */}
          <FormField
            control={form.control}
            name="color"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color</FormLabel>
                <FormControl>
                  <Input placeholder="Red" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* fuel_type */}
          <FormField
            control={form.control}
            name="fuel_type"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fuel Type</FormLabel>
                <FormControl>
                  <Input placeholder="Petrol" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* transmission */}
          <FormField
            control={form.control}
            name="transmission"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Transmission</FormLabel>
                <FormControl>
                  <Input placeholder="Automatic" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* image */}
         <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image</FormLabel>
                <FormControl>
                  <Input placeholder="image" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          <div className="col-span-3">
            <Button type="submit">
              {
                isLoading? "Createing...": "Create The Car"
              }
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
