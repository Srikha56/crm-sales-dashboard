import { useEffect, useState } from "react";
import CustomerForm from "../components/forms/CustomerForm";
import CustomerTable from "../components/table/CustomerTable";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [editingCustomer, setEditingCustomer] = useState(null);

  const fetchCustomers = async () => {
    const res = await fetch("http://localhost:3000/customers");
    const data = await res.json();
    setCustomers(data);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/customers/${id}`, {
      method: "DELETE",
    });

    fetchCustomers();
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Customers Management</h1>
      <p className="text-gray-500 mb-6">
        Manage all your customers.
      </p>

      <CustomerForm
        fetchCustomers={fetchCustomers}
        editingCustomer={editingCustomer}
        setEditingCustomer={setEditingCustomer}
      />

      <CustomerTable
        customers={customers}
        onEdit={setEditingCustomer}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default Customers