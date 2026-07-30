import { useState } from "react";

const Settings = () => {
  const [settings, setSettings] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+91 9876543210",
    company: "CRM Solutions",
    companyEmail: "contact@crm.com",
    address: "Chennai, Tamil Nadu",
    emailNotifications: true,
    leadAlerts: true,
    taskReminders: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings Updated Successfully!");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Settings</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow p-6 space-y-8"
      >
        {/* Profile */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Profile Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={settings.name}
              onChange={handleChange}
              placeholder="Name"
              className="border rounded-lg p-3"
            />

            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleChange}
              placeholder="Email"
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              name="phone"
              value={settings.phone}
              onChange={handleChange}
              placeholder="Phone"
              className="border rounded-lg p-3"
            />
          </div>
        </div>

        {/* Company */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Company Information
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              name="company"
              value={settings.company}
              onChange={handleChange}
              placeholder="Company Name"
              className="border rounded-lg p-3"
            />

            <input
              type="email"
              name="companyEmail"
              value={settings.companyEmail}
              onChange={handleChange}
              placeholder="Company Email"
              className="border rounded-lg p-3"
            />

            <input
              type="text"
              name="address"
              value={settings.address}
              onChange={handleChange}
              placeholder="Address"
              className="border rounded-lg p-3 md:col-span-2"
            />
          </div>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Notifications
          </h2>

          <div className="space-y-3">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
              />
              Email Notifications
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="leadAlerts"
                checked={settings.leadAlerts}
                onChange={handleChange}
              />
              Lead Alerts
            </label>

            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                name="taskReminders"
                checked={settings.taskReminders}
                onChange={handleChange}
              />
              Task Reminders
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;