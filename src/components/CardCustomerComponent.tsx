
type CardCustomerProps = {
  fullName: string;
  gender: string;
  phoneNumber: string;
  segment: string;
  segmentDescription: string;
};

export default function CardCustomerComponent({
  fullName,
  gender,
  phoneNumber,
  segment,
  segmentDescription,
} : CardCustomerProps) {
  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Customer Infomation</h2>
       <div>
        <p><strong>Full Name:</strong> {fullName}</p>
        <p><strong>Gender:</strong> {gender}</p>
        <p><strong>Phone Number:</strong> {phoneNumber}</p>
        <p><strong>Segment:</strong> {segment}</p>
        <p><strong>Segment Description:</strong> {segmentDescription}</p>
      </div>
    </div>
  );
}
