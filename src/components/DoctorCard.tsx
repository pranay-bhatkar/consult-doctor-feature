"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function DoctorCard({ doctor }: { doctor: any }) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200 h-full flex flex-col justify-between"
    >
      <div>
        <div className="relative w-full h-48 sm:h-60 md:h-72 lg:h-80 xl:h-70">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover rounded-lg border border-gray-300 "
          />
        </div>

        <h2 className="text-lg sm:text-xl font-bold text-blue-800">
          {doctor.name}
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          {doctor.specialization}
        </p>
        <p className="text-sm text-gray-400">{doctor.experience}</p>
      </div>

      <Link href={`/consult/${doctor.id}`} className="block mt-4">
        <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
          View Profile
        </button>
      </Link>
    </motion.div>
  );
}
