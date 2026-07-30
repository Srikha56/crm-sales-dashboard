import {
  LayoutDashboard,
  Users,
  UserPlus,
  Briefcase,
  CheckSquare,
  BarChart3,
  Settings,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Customers", path: "/customers", icon: Users },
  { name: "Leads", path: "/leads", icon: UserPlus },
  { name: "Deals", path: "/deals", icon: Briefcase },
  { name: "Tasks", path: "/tasks", icon: CheckSquare },
  { name: "Reports", path: "/reports", icon: BarChart3 },
  { name: "Settings", path: "/settings", icon: Settings },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white">
      <div className="p-6 text-2xl font-bold border-b border-slate-700">
        SalesFlow
      </div>

      <nav className="mt-6 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;