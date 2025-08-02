import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { getSession } from "next-auth/react";

// update basequery
// const baseQuery = fetchBaseQuery({
//     // baseUrl: process.env.NEXT_PUBLIC_CAR_API_URL,
//     baseUrl: process.env.NEXT_PUBLIC_BASE_URL_MBANKING_API,
//     prepareHeaders : (headers, {getState}) => {
//         const token = (getState() as RootState).auth.token;

//         if(token){
//             headers.set('authorizetion',`Bearer ${token}`)
//         }
//         return headers
//     }
// })

const customBaseQuery = async (args: any, api: any, extraOptions: any) => {
  const session = await getSession();

  const rawBaseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL_MBANKING_API,
    prepareHeaders: (headers) => {
      if (session?.access_token) {
        headers.set("Authorization", `Bearer ${session.access_token}`);
      }
      return headers;
    },
  });

  return rawBaseQuery(args, api, extraOptions);
};


// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery,
//   endpoints: () => ({}),
// });



export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: customBaseQuery,
  endpoints: () => ({}),
});
