import { useState } from "react";

const InputField = ({ placeholder, value, onChange, className = "" }) => (
  <input
    type="text"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-150 ${className}`}
  />
);

const SectionLabel = ({ children }) => (
  <p className="text-sm font-semibold text-gray-700 mb-3">{children}</p>
);

export default function User() {
  const [form, setForm] = useState({
    fullName: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    street: "",
    suite: "",
    city: "",
    zip: "",
    company: "",
  });

  const handle = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSave = () => {
    console.log("Saved:", form);
    alert("User saved!");
  };

  const handleCancel = () => {
    setForm({
      fullName: "", username: "", email: "", phone: "",
      website: "", street: "", suite: "", city: "",
      zip: "", company: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-xl">
        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Create User</h1>

        {/* Basic Information */}
        <div className="mb-6">
          <SectionLabel>Basic Information</SectionLabel>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <InputField placeholder="Full Name" value={form.fullName} onChange={handle("fullName")} />
            <InputField placeholder="Username" value={form.username} onChange={handle("username")} />
          </div>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <InputField placeholder="Email Address" value={form.email} onChange={handle("email")} />
            <InputField placeholder="Phone Number" value={form.phone} onChange={handle("phone")} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <InputField placeholder="Website" value={form.website} onChange={handle("website")} />
          </div>
        </div>

        {/* Address */}
        <div className="mb-6">
          <SectionLabel>Address</SectionLabel>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <InputField placeholder="Street" value={form.street} onChange={handle("street")} />
            <InputField placeholder="Suite / Apartment" value={form.suite} onChange={handle("suite")} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <InputField placeholder="City" value={form.city} onChange={handle("city")} />
            <InputField placeholder="Zip Code" value={form.zip} onChange={handle("zip")} />
          </div>
        </div>

        {/* Company */}
        <div className="mb-8">
          <SectionLabel>Company</SectionLabel>
          <InputField placeholder="Company Name" value={form.company} onChange={handle("company")} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleSave}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save User
          </button>
          <button
            onClick={handleCancel}
            className="px-6 py-2.5 text-gray-600 hover:text-gray-900 text-sm font-medium rounded-lg border border-gray-200 hover:border-gray-300 bg-white transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
