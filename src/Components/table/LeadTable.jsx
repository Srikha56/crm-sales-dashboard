import { Pencil, Trash2 } from "lucide-react";

const LeadTable = ({leads,setEditingLead,onDelete}) => {


  return (
    <div className="bg-white rounded-xl shadow p-5 overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th className="py-3">Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {leads.map((lead) => (
            <tr key={lead.id} className="border-b hover:bg-gray-50">
              <td className="py-3">{lead.name}</td>
              <td>{lead.company}</td>
              <td>{lead.email}</td>
              <td
     className={`px-3 py-1 rounded-full text-xs font-semibold
    ${
      lead.status === "New"
        ? "bg-blue-100 text-blue-700"
        : lead.status === "Contacted"
        ? "bg-yellow-100 text-yellow-700"
        : lead.status === "Qualified"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
>
  {lead.status}

</td>
              <td>
  <div className="flex items-center gap-3">
    <button
      onClick={() => setEditingLead(lead)}
      className="text-blue-600 hover:text-blue-800"
      title="Edit"
    >
      <Pencil size={18} />
    </button>

    <button
     onClick={()=> onDelete(lead.id)}
     
     className="text-red-600 hover:text-red-800"
      title="Delete"
    >
      <Trash2 size={18} />
    </button>
  </div>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadTable;