import React from 'react'
import { useEffect, useState } from "react";
const Reports = () => {

const [leads, setLeads] = useState([]);
const [deals, setDeals] = useState([]);

const fetchReportsData = async () => {
  try {
    const leadsRes = await fetch("http://localhost:3000/leads");
    const dealsRes = await fetch("http://localhost:3000/deals");

    const leadsData = await leadsRes.json();
    const dealsData = await dealsRes.json();

    setLeads(leadsData);
    setDeals(dealsData);

  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  fetchReportsData();
}, []);
const totalLeads = leads.length;

const totalDeals = deals.length;

const wonDeals = deals.filter(
  (deal) => deal.status === "Won"
).length;

const revenue = deals
  .filter((deal) => deal.status === "Won")
  .reduce(
    (total, deal) => total + Number(deal.amount),
    0
  );
  return(
    <div className="grid grid-cols-4 gap-4">

  <div className="bg-white p-5 rounded shadow">
    <h3>Total Leads</h3>
    <p className="text-2xl font-bold">{totalLeads}</p>
  </div>

  <div className="bg-white p-5 rounded shadow">
    <h3>Total Deals</h3>
    <p className="text-2xl font-bold">{totalDeals}</p>
  </div>

  <div className="bg-white p-5 rounded shadow">
    <h3>Won Deals</h3>
    <p className="text-2xl font-bold">{wonDeals}</p>
  </div>

  <div className="bg-white p-5 rounded shadow">
    <h3>Revenue</h3>
    <p className="text-2xl font-bold">
      ₹{revenue}
    </p>
  </div>

</div>
  )

}

export default Reports;
