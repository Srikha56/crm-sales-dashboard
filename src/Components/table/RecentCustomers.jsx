function RecentCustomers() {
  const customers = [
    {
      id: 1,
      name: "John Smith",
      company: "Google",
      status: "Active",
    },
    {
      id: 2,
      name: "Emma Watson",
      company: "Microsoft",
      status: "Pending",
    },
    {
      id: 3,
      name: "David Lee",
      company: "Amazon",
      status: "Active",
    },
    {
      id: 4,
      name: "Sophia Brown",
      company: "Infosys",
      status: "Inactive",
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200">
      <h2 className="mb-4 text-xl font-semibold">
        Recent Customers
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3">Name</th>
            <th>Company</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="py-4">{customer.name}</td>

              <td>{customer.company}</td>

              <td>
                <span className="rounded-full bg-green-100 px-3 py-1 text-sm text-green-700">
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentCustomers;