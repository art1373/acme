import { fetchCustomerById, fetchCustomers } from "@/app/lib/data";
import { notFound } from "next/navigation";
import CustomerCard from "@/app/ui/customers/customerCard";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";

export default async function Page({ params }: { params: { id: string } }) {
  const customer = await fetchCustomerById(params.id);
  if (!customer) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Customers", href: "/dashboard/customers" },
          {
            label: "Edit Invoice",
            href: `/dashboard/customers/${params.id}`,
            active: true,
          },
        ]}
      />

      <CustomerCard customer={customer} />
    </main>
  );
}
