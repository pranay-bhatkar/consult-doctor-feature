"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  const specialties = [
    "Cardiology",
    "Dermatology",
    "Neurology",
    "Pediatrics",
    "Orthopedics",
    "Psychiatry",
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-4">
          Welcome to Consult a Doctor
        </h1>
        <p className="text-lg text-gray-600">
          Book appointments with verified doctors across multiple specialties.
        </p>
        <Link href="/consult">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg hover:bg-blue-700 transition"
          >
            Get Started
          </motion.button>
        </Link>
      </motion.div>

      {/* Specialties Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Popular Specialties
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
          {specialties.map((specialty, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-md rounded-lg p-4 border hover:border-blue-500 cursor-default"
            >
              {specialty}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="max-w-5xl mx-auto mb-16 px-4 cursor-default"
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          How It Works
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 text-center">
          {[
            { step: "Search", desc: "Find doctors by specialty and location." },
            {
              step: "Select",
              desc: "Choose from available slots that suit you.",
            },
            {
              step: "Book",
              desc: "Confirm and get instant appointment booking.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-md border hover:border-blue-400"
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold text-blue-600">
                {item.step}
              </h3>
              <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 py-12 px-6 rounded-xl text-center max-w-4xl mx-auto"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
          Ready to Consult?
        </h2>
        <p className="text-gray-700 mb-6">
          Get expert advice from top doctors today.
        </p>
        <Link href="/consult">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            Book Now
          </button>
        </Link>
      </motion.div>
    </div>
  );
}
