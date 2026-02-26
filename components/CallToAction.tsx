"use client";

import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <motion.div
      className="flex flex-col items-center gap-4 mb-24 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <h2 className="text-2xl font-semibold text-black">
        Want a new home for your product?
      </h2>
      <p className="text-lg font-light text-activeButton max-w-md">
        We&apos;re always looking for well-built software in small, focused
        niches. Get in touch.
      </p>
      <motion.a
        href="mailto:tech@stoic.so"
        className="bg-black text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors w-fit mt-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        Contact Us
      </motion.a>
    </motion.div>
  );
};

export default CallToAction;
