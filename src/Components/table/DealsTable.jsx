import React from "react";

function DealsTable({ deals, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white rounded-lg shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">Deal Name</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Stage</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
          {deals.map((deal) => (
            <tr key={deal.id} className="border-b">
              <td className="p-3">{deal.dealName}</td>
              <td className="p-3">{deal.client}</td>
              <td className="p-3">₹{deal.amount}</td>
              <td className="p-3">{deal.stage}</td>
              <td className="p-3">{deal.status}</td>

              <td className="p-3 flex gap-2">
                <button
                  onClick={() => onEdit(deal)}
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() => onDelete(deal.id)}
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

export default DealsTable;