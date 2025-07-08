"use client";

import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const doctors = [
  {
    id: "1",
    name: "Dr. Aarti Mehra",
    specialization: "Dermatologist",
    image: "/doctor/image-1.jpg",
    experience: "12 years",
    bio: "Specializes in skincare and cosmetic dermatology.",
    slots: ["10:00 AM", "11:30 AM", "2:00 PM"],
    location: "Apollo Clinic, Mumbai",
    fee: "₹800",
    rating: 4.7,
  },
  {
    id: "2",
    name: "Dr. Rajiv Kumar",
    specialization: "Cardiologist",
    image: "/doctor/image-2.jpg",
    experience: "18 years",
    bio: "Senior heart specialist with 5000+ surgeries.",
    slots: ["9:30 AM", "1:00 PM", "4:00 PM"],
    location: "Max Hospital, Delhi",
    fee: "₹1200",
    rating: 4.9,
  },
];

export default function DoctorProfilePage() {
  const { id } = useParams();
  const router = useRouter();
  const doctor = doctors.find((d) => d.id === id);
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (message) {
      const timeout = setTimeout(() => setMessage(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  useEffect(() => {
    if (error) {
      const timeout = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  if (!doctor) return <div className="p-6">Doctor not found</div>;

  const handleBooking = () => {
    if (!selected) {
      setError("Please select a time slot.");
      return;
    }
    setMessage("Appointment booked successfully!");
    setError("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-4xl mx-auto p-4 sm:p-6"
    >
      {/* Toast Messages */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 flex justify-between items-center bg-green-100 text-green-800 px-4 py-2 rounded"
          >
            <span>{message}</span>
            <button
              onClick={() => setMessage("")}
              className="text-xl font-bold"
            >
              &times;
            </button>
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-4 flex justify-between items-center bg-red-100 text-red-800 px-4 py-2 rounded"
          >
            <span>{error}</span>
            <button onClick={() => setError("")} className="text-xl font-bold">
              &times;
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 inline-flex items-center gap-2 px-4 py-2 text-blue-700 font-medium border border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow-md"
      >
        <span className="text-lg">←</span>
        Back to Doctor List
      </button>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={256}
            height={256}
            className="w-full max-w-xs md:w-64 h-64 object-cover rounded-xl border-2 border-gray-800"
          />
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 w-full"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-800">
            {doctor.name}
          </h1>
          <p className="text-gray-500">{doctor.specialization}</p>
          <p className="text-sm text-gray-400">{doctor.experience}</p>
          <p className="mt-2 text-yellow-500 font-medium">
            ⭐ {doctor.rating} / 5.0
          </p>
          <p className="mt-1 text-gray-600">
            <span className="font-medium">Clinic:</span> {doctor.location}
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Fee:</span> {doctor.fee}
          </p>
          <p className="mt-4 text-gray-700">{doctor.bio}</p>

          <h2 className="mt-6 font-semibold text-lg">Available Slots</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {doctor.slots.map((slot) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                key={slot}
                onClick={() => setSelected(slot)}
                className={`px-4 py-2 rounded border text-sm transition ${
                  selected === slot
                    ? "bg-blue-600 text-white"
                    : "hover:bg-blue-100"
                }`}
              >
                {slot}
              </motion.button>
            ))}
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={handleBooking}
            className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full sm:w-auto"
          >
            Book Appointment
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.97 }}
            className="mt-3 ml-0 sm:ml-4 text-sm text-blue-600 hover:underline"
            onClick={() => alert("Contact feature coming soon!")}
          >
            📞 Contact Doctor
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
}
