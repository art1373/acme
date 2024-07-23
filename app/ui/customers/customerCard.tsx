import Image from "next/image";

export default function CustomerCard({ customer }: { customer: any }) {
  return (
    <div key={customer.id} className="mb-2 w-full rounded-md bg-white p-4">
      <div className="flex items-center justify-between border-b pb-4">
        <div>
          <div className="mb-2 flex items-center">
            <div className="flex items-center gap-3">
              <Image
                src={customer.image_url}
                className="rounded-full"
                alt={`${customer.name}'s profile picture`}
                width={28}
                height={28}
              />
              <p>{customer.name}</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">{customer.email}</p>
        </div>
      </div>
    </div>
  );
}
