"use client";
import { motion } from "framer-motion";

const ResumeAnimation = () => {
  return (
    <div className="relative w-64 h-52 bg-white rounded-lg shadow-md p-6 mt-8">
      {/* Main content - static version that will always display properly */}
      <div className="space-y-3">
        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
        <div className="h-3 w-full bg-gray-200 rounded"></div>
        <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
        <div className="h-3 w-4/6 bg-gray-200 rounded"></div>
      </div>

      <div className="absolute bottom-4 right-6 text-sm text-gray-400">
        Application Submitted
      </div>

      {/* Simple fade-in/fade-out animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-red-500 text-lg font-medium"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 0, 0.9, 0],
          y: [0, 0, 0, 10],
        }}
        transition={{
          duration: 4,
          times: [0, 0.6, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      >
        No Response
      </motion.div>
    </div>
  );
};

export default ResumeAnimation;
