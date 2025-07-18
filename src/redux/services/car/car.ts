
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {CarResponseType} from "../../../lib/cars/CarResponse"
export const carApi = createApi({
    reducerPath: "carApi",
    baseQuery: fetchBaseQuery({baseUrl: process.env.NEXT_PUBLIC_CAR_API_URL}),
    endpoints: (builder) => ({

        getCar:builder.query<CarResponseType[],{page:number,limit:number}>({
            query: ({ page, limit }) => `/cars?skip=${page}&limit=${limit}`,
        })
    })
})

export const {useGetCarQuery} = carApi;