import LeadTable from "../Components/table/LeadTable";
import LeadForm from "../Components/forms/LeadForm";
import { useEffect,useState } from "react";
const Leads = () => {
  const [leads, setLeads] = useState([]);
  const [editingLead,setEditingLead]=useState(null);
  const[searchTerm,setSearchTerm]= useState("");
  const[statusFilter,setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const fetchLeads = async () => {
    const res = await fetch("http://localhost:3000/leads");
    const data = await res.json();
    setLeads(data);
  };

  const filteredLeads = leads.filter((lead) => {
  const matchesStatus =
    statusFilter === "All" || lead.status === statusFilter;

  return matchesStatus;
});

const leadsPerPage = 5;
const indexOfLastLead = currentPage * leadsPerPage;
const indexOfFirstLead = indexOfLastLead - leadsPerPage;

const currentLeads = filteredLeads.slice(
  indexOfFirstLead,
  indexOfLastLead
);

const totalPages = Math.ceil(filteredLeads.length / leadsPerPage);

useEffect(() => {
  fetchLeads();
}, []);

const handleDeleteLead = async (id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this lead?"
  );

  if (!confirmDelete) return;

  await fetch(`http://localhost:3000/leads/${id}`, {
    method: "DELETE",
  });

  fetchLeads();
};
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Leads Management</h1>
          <p className="text-gray-500">
            Track and manage all your sales leads.
          </p>
        
       <select
  value={statusFilter}
  onChange={(e) => setStatusFilter(e.target.value)}
  className="border rounded-lg px-4 py-2 mb-4"
>           
          <option>All</option>
          <option>New</option>
          <option>Contacted</option>
          <option>Qualified</option>
          <option>Proposal</option>
        </select>
      </div>
</div>
      <LeadForm fetchLeads={fetchLeads}
           editingLead={editingLead}
           setEditingLead={setEditingLead}
          
           />

      <div className="mt-6">
        <LeadTable leads={currentLeads}
        setEditingLead={setEditingLead}
         onDelete ={handleDeleteLead}
        />
      </div>
      
<div className="flex justify-end items-center gap-2 mt-4">
  <button
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(currentPage - 1)}
    className="px-3 py-1 border rounded disabled:opacity-50"
  >
    Previous
  </button>

  <span>
    {currentPage} / {totalPages}
  </span>

  <button
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(currentPage + 1)}
    className="px-3 py-1 border rounded disabled:opacity-50"
  >
    Next
  </button>
</div>
    </div>

    
  );
};

export default Leads