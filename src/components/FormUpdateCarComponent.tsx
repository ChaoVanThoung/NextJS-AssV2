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

const formValidation = z.object({
  car_id: z.string().min(1, {
    message: "At leaset input 1 character in make",
  }),
  make: z.string().min(3, {
    message: "At leaset input 3 character in make",
  }),
  model: z.string().min(3, {
    message: "At least input 3 charater in model",
  }),
  year: z
    .string()
    .length(4, {
      message: "Year must be 4 digit number",
    })
    .regex(/^\d{4}$/, { message: "Year must contain only numbers" }),
  price: z
    .string()
    .min(1, {
      message: "At least input 1 digit number",
    })
    .regex(/^\d{4}$/, { message: "Year must contain only numbers" }),
  mileage: z.string().min(2, {
    message: "At least input 2 digit number",
  }),
  description: z.string().min(5, {
    message: "At least input 5 charater in description",
  }),
  color: z.string().min(3, {
    message: "At least input 3 charater in color",
  }),
  fuel_type: z.string().min(2, {
    message: "At leaset input 2 charater in Fuel Type",
  }),
  transmission: z.string().min(2, {
    message: "At least input 2 charater in transmission",
  }),
  image: z
    .any()
    .refine((file) => file instanceof File, {
      message: "Image is required",
    })
    .refine((file) => file?.type?.startsWith("image/"), {
      message: "Only image files are allowed",
    }),
  is_sold: z.boolean({
    message: "Please select sold status",
  }),
});

export default function FormUpdateCarComponent() {
  // 1 define form
  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      car_id: "",
      make: "",
      model: "",
      year: "",
      price: "",
      mileage: "",
      description: "",
      color: "",
      fuel_type: "",
      transmission: "",
      image: "",
      is_sold: true,
    },
  });

  return (
    <div className="w-[800px] border p-8 rounded-2xl mx-auto mt-5 ">
      <Form {...form}>
        <form className="space-y-8 grid grid-cols-3 gap-5">
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
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                    }}
                    {...form}
                  />
                </FormControl>
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

          <Button>Update Car</Button>
        </form>
      </Form>
    </div>
  );
}
