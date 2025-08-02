'use client';
import CardCustomerComponent from "@/components/CardCustomerComponent";
import { useGetCustomerQuery } from "@/redux/services/customer/customer";

export default function page() {
  const { data, isFetching, isLoading, error } = useGetCustomerQuery();

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (error) return <p>Error loading customer data</p>;
  if (!data) return <p>No customer data found</p>;

  return (
    <div>
      {
        data.map((cus,index) =>(
            <CardCustomerComponent
            key={index}
            fullName={cus.fullName}
            gender={cus.gender}
            phoneNumber={cus.phoneNumber}
            segment={cus.segment}
            segmentDescription={cus.segmentDescription}
            />
        ))
      }
    </div>
  );
}
