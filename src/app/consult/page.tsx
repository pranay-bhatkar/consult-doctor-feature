"use client";

import DoctorCard from "@/components/DoctorCard";
import { motion } from "framer-motion";
import { useState } from "react";

const doctors = [
  {
    id: 1,
    name: "Dr. Aarti Mehra",
    specialization: "Dermatologist",
    experience: "12 years",
    image: "/doctor/image-1.jpg",
  },
  {
    id: 2,
    name: "Dr. Rajiv Kumar",
    specialization: "Cardiologist",
    experience: "18 years",
    image: "/doctor/image-2.jpg",
  },
  // Add more if needed
];

export default function DoctorListPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter((doc) => {
    const query = searchTerm.toLowerCase();
    return (
      doc.name.toLowerCase().includes(query) ||
      doc.specialization.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-2">
          Find a Specialist
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          Browse top-rated doctors across multiple specialties.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="relative max-w-4xl mx-auto mb-8"
      >
        <input
          type="text"
          placeholder="Search by name or specialization..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl font-bold"
          >
            &times;
          </button>
        )}
      </motion.div>

      {/* Doctor Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doc) => (
            <motion.div
              key={doc.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <DoctorCard doctor={doc} />
            </motion.div>
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">
            No doctors found.
          </div>
        )}
      </motion.div>
    </div>
  );
}
