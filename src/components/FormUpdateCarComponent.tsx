"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
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
import { useUpdateCarMutation } from "@/redux/services/car/car";
import { CarUpdateType } from "@/lib/cars/CarResponse";

const formValidation = z.object({
  car_id: z.string().min(1, "At least 1 number in id"),
  make: z.string().min(3, { message: "At least 3 characters in make" }),
  model: z.string().min(3, { message: "At least 3 characters in model" }),
  year: z.coerce.number().int().gte(1900).lte(new Date().getFullYear()), // ✅ coercing string to number
  price: z.coerce.number().positive({ message: "Price must be a number" }),
  mileage: z.coerce.number().positive({ message: "mileage must be a number" }),
  description: z.string().min(5),
  color: z.string().min(3),
  fuel_type: z.string().min(2),
  transmission: z.string().min(2),
  image: z.string().min(3, { message: "At least 3 characters in image" }),
  is_sold: z.coerce.boolean({ message: "is sold is true or false" }),
});

export default function FormUpdateCarComponent() {
  // call updateCarMutation
  const [updateCar, { data, isLoading, error }] = useUpdateCarMutation();

  // 1 define form
  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation) as never,
    defaultValues: {
      car_id: "",
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
      is_sold: true,
    },
  });

  const onSubmit = (values: z.infer<typeof formValidation>) => {
    // update request
    const updateCarReq: CarUpdateType = {
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
      isSold: values.is_sold,
    };

    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmdAZ21haWwuY29tIiwiZXhwIjoxNzUzMTE1Mjk3LCJ0eXBlIjoiYWNjZXNzIn0.Fr9BWoF1bojcC8jdG_dxIwbjySdzTJ5zV7ABsjExjqE";

    updateCar({
      updateCar: updateCarReq,
      accessToken: accessToken,
      id: values.car_id,
    });
  };

  return (
    <div className="w-[800px] border p-8 rounded-2xl mx-auto mt-5 ">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 grid grid-cols-3 gap-5">
          {/* car id */}
          <FormField
            control={form.control}
            name="car_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Car Id</FormLabel>
                <FormControl>
                  <Input placeholder="Car id" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

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
                  <Input placeholder="Toyota Revo-Rally" {...field} />
                </FormControl>
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
                  <Input placeholder="ex: 2025" {...field} />
                </FormControl>
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
                  <Input placeholder="mileage" {...field} />
                </FormControl>
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
                  <Input placeholder="description" {...field} />
                </FormControl>
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
                  <Input placeholder="fuel type" {...field} />
                </FormControl>
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
                  <Input placeholder="transmission" {...field} />
                </FormControl>
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

          {/* is sold */}
          <FormField
            control={form.control}
            name="is_sold"
            render={({ field }) => (
              <FormItem className="flex items-center space-x-2">
                <FormLabel className="mb-0">Is Sold</FormLabel>
                <FormControl>
                  <Input
                    type="checkbox"
                    checked={field.value}
                    onChange={(e) => field.onChange(e.target.checked)}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <div className="col-span-3">
            <Button type="submit">
              {isLoading ? "Updating..." : "Update The Car"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
