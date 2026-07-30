import Card from "../components/common/Card";
import RevenueChart from "../components/charts/RevenueChart";
import RecentCustomers from "../components/table/RecentCustomers";
import LeadsChart from "../components/charts/LeadsChart";
import SalesChart from "../components/charts/SalesChart";
import RecentActivities from "../components/table/RecentActivities";
function Dashboard() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-800">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <Card
          title="Customers"
          value="1,245"
          change="+12.5%"
          color="text-green-600"
        />

        <Card
          title="Revenue"
          value="₹8.2L"
          change="+8.4%"
          color="text-green-600"
        />

        <Card
          title="Deals"
          value="82"
          change="-2.1%"
          color="text-red-500"
        />

        <Card
          title="Tasks"
          value="18"
          change="+4.8%"
          color="text-green-600"
        />
      </div>
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6"></div>
<RevenueChart />
   <LeadsChart />

<SalesChart/>
</div>
<div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

     <RecentActivities />
    </div>
    </div>
  );
}

export default Dashboard;