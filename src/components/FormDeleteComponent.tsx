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

});

export default function FormDeleteCarComponent() {
  // 1 define form
  const form = useForm<z.infer<typeof formValidation>>({
    resolver: zodResolver(formValidation),
    defaultValues: {
      car_id: "",
    },
  });

  return (
    <div className="w-[350px] border p-8 rounded-2xl mx-auto mt-5 ">
      <Form {...form}>
        <form className="space-y-8 grid ">
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

          

          <Button>Delete Car</Button>
        </form>
      </Form>
    </div>
  );
}
