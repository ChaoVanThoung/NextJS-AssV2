import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";

// update basequery
const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_CAR_API_URL,
    prepareHeaders : (headers, {getState}) => {
        const token = (getState() as RootState).auth.token;

        if(token){
            headers.set('authorizetion',`Bearer ${token}`)
        }
        return headers
    }
})


export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  endpoints: () => ({}),
});
