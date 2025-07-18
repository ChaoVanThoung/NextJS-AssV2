"use client";
import { useForm } from "react-hook-form";

export default function FormComponent() {
  const { register, handleSubmit, formState:{errors}, reset } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmed_password: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit((data)=>console.log(data))}
      className="mx-auto p-6  shadow-md rounded-lg space-y-4"
    >
      <label htmlFor="">First Name: </label>
      <input
        type="text"
        {...register("firstName")}
        placeholder="Enter your firstName"
        className="rounded-lg p-2 border "
      />
      <br />

      <label htmlFor="">last Name: </label>
      <input
        type="text"
        {...register("lastName")}
        placeholder="Enter your LastName"
        className="rounded-lg p-2 border"
      />
      <br />
      <label htmlFor="">Email: </label>
      <input
        type="email"
        {...register("email")}
        placeholder="Enter your email"
        className="rounded-lg p-2 border"
      />
      <br />
      <label htmlFor="">Password: </label>
      <input
        type="password"
        {...register("password")}
        placeholder="Enter your password"
        className="rounded-lg p-2 border"
      />
      <br />
      <label htmlFor="">Confirmed Password: </label>
      <input
        type="password"
        {...register("confirmed_password")}
        placeholder="Enter your confirm password"
        className="rounded-lg p-2 border"
      />
      {
        errors.confirmed_password && <p>{errors.confirmed_password.message}</p>
      }

      <input type="submit" onClick={()=>reset()} />
    </form>
  );
}
