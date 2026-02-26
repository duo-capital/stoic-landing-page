"use client";

import { motion } from "framer-motion";

interface TitleProps {
  label: string;
}

const Title: React.FC<TitleProps> = ({ label }) => {
  return (
    <motion.div
      className="w-fit mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <h2 className="text-[1.1rem] xl:text-2xl font-semibold uppercase">
        {label}
      </h2>
    </motion.div>
  );
};

export default Title;
