function CustomerTable({ customers, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3">Name</th>
            <th className="p-3">Company</th>
            <th className="p-3">Email</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="border-b">
              <td className="p-3">{customer.name}</td>
              <td className="p-3">{customer.company}</td>
              <td className="p-3">{customer.email}</td>
              <td className="p-3">{customer.phone}</td>

              <td className="p-3 flex gap-2">
                <button
                  onClick={() => onEdit(customer)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(customer.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerTable;