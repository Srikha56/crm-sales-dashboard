import { useState, useEffect } from "react";

const CustomerForm = ({
  fetchCustomers,
  editingCustomer,
  setEditingCustomer,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (editingCustomer) {
      setFormData(editingCustomer);
    }
  }, [editingCustomer]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingCustomer) {
      await fetch(`https://crm-sales-dashboard-backend.onrender.com/customers/${editingCustomer.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          id: editingCustomer.id,
        }),
      });

      setEditingCustomer(null);
    } else {
      await fetch("https://crm-sales-dashboard-backend.onrender.com/customers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    }

    fetchCustomers();

    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
    });
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
          placeholder="Customer Name"
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

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          className="border rounded-lg p-2"
        />

      </div>

      <button
        className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        {editingCustomer ? "Update Customer" : "Save Customer"}
      </button>
    </form>
  );
};

export default CustomerForm;