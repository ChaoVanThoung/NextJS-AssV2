import { CarCreateType, CarResponseType } from "../../../lib/cars/CarResponse";
import { baseApi } from "@/redux/baseApi";

export const carApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // get all cars
    getCar: builder.query<CarResponseType[], { page: number; limit: number }>({
      query: ({ page, limit }) => `/cars?skip=${page}&limit=${limit}`,
    }),

    // get car by ID
    getCarById: builder.query<CarResponseType, string>({
      query: (id) => `/cars/${id}`,
    }),

    // create new car
    createCar: builder.mutation<
      CarResponseType,
      { newCar: CarCreateType; accessToken: string }
    >({
      query: ({ newCar, accessToken }) => ({
        url: "/cars",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: newCar,
      }),
    }),

    // update new car
    updateCar: builder.mutation<
      CarResponseType,
      { updateCar: CarCreateType; accessToken: string; id: string }
    >({
      query: ({ updateCar, accessToken, id }) => ({
        url: `/cars/${id}`,
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: updateCar,
      }),
    }),

    // delete car
    deleteCar: builder.mutation<
      CarResponseType,
      { accessToken: string; id: string }
    >({
      query: ({ accessToken, id }) => ({
        url: `cars/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }),
    }),
  }),
});

export const {
  useGetCarQuery,
  useGetCarByIdQuery,
  useCreateCarMutation,
  useUpdateCarMutation,
  useDeleteCarMutation,
} = carApi;
