import { useState } from "react";
import { User, Users } from "lucide-react";

export default function RolePopup({ onConfirm, onClose }) {
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role) onConfirm(role);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Choose Your Role</h2>
          <p className="text-sm text-gray-500 mt-1">
            Select your role to continue using SmartGlass
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setRole("Student")}
              className={`flex flex-col items-center border rounded-lg p-4 transition hover:bg-indigo-50 ${
                role === "Student" ? "border-indigo-600 bg-indigo-100" : "border-gray-200"
              }`}
            >
              <User className="h-6 w-6 mb-2 text-indigo-600" />
              <span className="font-semibold text-sm">Student</span>
            </button>

            <button
              type="button"
              onClick={() => setRole("Educator")}
              className={`flex flex-col items-center border rounded-lg p-4 transition hover:bg-indigo-50 ${
                role === "Educator" ? "border-indigo-600 bg-indigo-100" : "border-gray-200"
              }`}
            >
              <Users className="h-6 w-6 mb-2 text-indigo-600" />
              <span className="font-semibold text-sm">Educator</span>
            </button>
          </div>

          <button
            type="submit"
            disabled={!role}
            className={`w-full py-3 mt-4 rounded-lg font-semibold text-white transition ${
              role
                ? "bg-indigo-600 hover:bg-indigo-700"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Confirm Role
          </button>
        </form>
      </div>
    </div>
  );
}
