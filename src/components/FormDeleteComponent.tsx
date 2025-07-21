"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useDeleteCarMutation } from "@/redux/services/car/car";

const formValidation = z.object({
  car_id: z.string().min(1, {
    message: "At leaset input 1 character in make",
  }),
});

export default function FormDeleteCarComponent() {
  const [deleteCar, { data, isLoading, error }] = useDeleteCarMutation();

  // 1 define form
  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      car_id: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formValidation>) => {
    const accessToken =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJzdHJpbmdAZ21haWwuY29tIiwiZXhwIjoxNzUzMTE3NzMwLCJ0eXBlIjoiYWNjZXNzIn0.gIrkaJNrxXz0PXhaSYrw1eOaB1uapv4ZubK8gfGEqCk";

    deleteCar({
      accessToken: accessToken,
      id: values.car_id,
    });
  };

  return (
    <div className="w-[350px] border p-8 rounded-2xl mx-auto mt-5 ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 grid "
        >
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

          <div className="col-span-3">
            <Button type="submit">
              {isLoading ? "Delete..." : "Delete The Car"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
