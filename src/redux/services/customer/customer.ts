
import { baseApi } from "@/redux/baseApi";

type CustomerResponse = {
  fullName: string;
  gender: string;
  phoneNumber: string;
  segment: string;
  segmentDescription: string;
};

export const customerApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCustomer: builder.query<CustomerResponse[],void>({
        query: () => `/customers`
    })
  }),
});

export const {
    useGetCustomerQuery
} = customerApi