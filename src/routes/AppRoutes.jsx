import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Dashboard from "../pages/Dashboard";
import Customers from "../pages/Customers";
import Leads from "../pages/Leads";
import Deals from "../pages/Deals";
import Tasks from "../pages/Tasks";
import Reports from "../pages/Reports";
import Settings from "../pages/Settings";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route element={<MainLayout />}>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/customers" element={<Customers />} />

          <Route path="/leads" element={<Leads />} />

          <Route path="/deals" element={<Deals />} />

          <Route path="/tasks" element={<Tasks />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;