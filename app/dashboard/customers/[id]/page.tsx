import { fetchCustomerById, fetchCustomers } from "@/app/lib/data";
import { notFound } from "next/navigation";
import CustomerCard from "@/app/ui/customers/customerCard";

export default async function Page({ params }: { params: { id: string } }) {
  const d = await fetchCustomerById(params.id);
  if (!d) {
    notFound();
  }

  console.log({ d });

  return <CustomerCard customer={d} />;
}
