import { Bell, Search } from "lucide-react";

function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h1>
        <p className="text-sm text-gray-500">
          Welcome back 👋
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-3 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-72 rounded-lg border border-gray-300 py-2 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        {/* Notification */}
        <button className="relative rounded-lg bg-slate-100 p-2 hover:bg-slate-200">
          <Bell size={20} />

          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
            S
          </div>

          <div>
            <p className="font-semibold text-slate-700">
              Srikha
            </p>

            <p className="text-xs text-gray-500">
              Sales Executive
            </p>
          </div>
        </div>

      </div>

    </header>
  );
}

export default Navbar;