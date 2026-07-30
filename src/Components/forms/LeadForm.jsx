import { useState ,useEffect } from "react";

const LeadForm = ({fetchLeads,editingLead,setEditingLead}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    status: "New",
  });
  useEffect(() => {
  if (editingLead) {
    setFormData({
      name: editingLead.name,
      company: editingLead.company,
      email: editingLead.email,
      status: editingLead.status,
    });
  }
}, [editingLead]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editingLead) {
      // Update existing lead
      await fetch(`http://localhost:3000/leads/${editingLead.id}`, {
        method: "PUT", // அல்லது PATCH
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          id: editingLead.id,
        }),
      });

      setEditingLead(null);
    } else {
      // Create new lead
      await fetch("http://localhost:3000/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    }

    await fetchLeads();

    setFormData({
      name: "",
      company: "",
      email: "",
      status: "New",
    });
  } catch (error) {
    console.error(error);
  }
};
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow rounded-xl p-6 mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Lead Name"
          value={formData.name}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <button
  type="submit"
  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
>
  {editingLead ? "Update Lead" : "Save Lead"}
</button>
 </div>
   </form>

)};

export default LeadForm;