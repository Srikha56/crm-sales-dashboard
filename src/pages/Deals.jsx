import { useEffect, useState } from "react";
import DealForm from "../Components/forms/DealForm";
import DealsTable from "../Components/table/DealsTable";

const Deals = () => {
  const [deals, setDeals] = useState([]);
  const [editingDeal, setEditingDeal] = useState(null);

  const fetchDeals = async () => {
    try {
      const res = await fetch("https://crm-sales-dashboard-backend.onrender.com/deals");
      const data = await res.json();
      setDeals(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchDeals();
  }, []);

 const handleEdit =(deals)=>{
  setEditingDeal(deals);
 };

  const handleDeleteDeal = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this deal?"
    );

    if (!confirmDelete) return;

    await fetch(`https://crm-sales-dashboard-backend.onrender.com/deals/${id}`, {
      method: "DELETE",
    });

    fetchDeals();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Deals Management</h1>
          <p className="text-gray-500">
            Track and manage all your deals.
          </p>
        </div>
      </div>

      <DealForm
        fetchDeals={fetchDeals}
        editingDeal={editingDeal}
        setEditingDeal={setEditingDeal}
      />

      

      <div className="mt-6">
       <DealsTable
  deals={deals}
  onEdit={handleEdit}
  onDelete={handleDeleteDeal}
/>
      </div>
    </div>
  );
};

export default Deals;