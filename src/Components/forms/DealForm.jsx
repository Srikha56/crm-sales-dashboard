import { useState, useEffect } from "react";

const DealForm = ({ fetchDeals, editingDeal, setEditingDeal }) => {
  const [formData, setFormData] = useState({
    dealName: "",
    client: "",
    amount: "",
    stage: "Prospecting",
    status:"Open",
  });

  useEffect(() => {  
    if (editingDeal) {
      setFormData({
        ...editingDeal,
        status:editingDeal.status ||"Open",
      });
    }
  }, [editingDeal]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingDeal) {
        await fetch(`http://localhost:3000/deals/${editingDeal.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            id: editingDeal.id,
          }),
        });

        setEditingDeal(null);
      } else {
        await fetch("http://localhost:3000/deals", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
      }

      fetchDeals();

      setFormData({
        dealName: "",
        client: "",
        amount: "",
        stage: "Prospecting",
        status:"Open",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <input
          type="text"
          name="dealName"
          placeholder="Deal Name"
          value={formData.dealName}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <input
          type="text"
          name="client"
          placeholder="Client Name"
          value={formData.client}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={formData.amount}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

        <select
          name="stage"
          value={formData.stage}
          onChange={handleChange}
          className="border rounded-lg p-2"
        >
        
          <option>Prospecting</option>
          <option>Negotiation</option>
          <option>Won</option>
          <option>Lost</option>
        </select>

          <select 
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border rounded-lg p-2">
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        {editingDeal ? "Update Deal" : "Save Deal"}
      </button>
    </form>
  );
};

export default DealForm;