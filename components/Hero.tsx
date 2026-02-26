"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import config from "@/config/general";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.2 + i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="flex items-center justify-center relative">
      <motion.div
        className="w-full max-w-2xl xl:my-40 mt-40 mb-16 flex flex-col gap-6 items-center text-center"
        style={{ y, opacity }}
      >
        <motion.p
          className="text-sm font-medium uppercase tracking-widest text-activeButton"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          {config.contents.markOfTitle}
        </motion.p>
        <motion.h1
          className="font-semibold text-4xl sm:text-5xl text-black"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          {config.contents.title}
        </motion.h1>
        <motion.p
          className="font-light text-lg sm:text-xl text-activeButton max-w-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          {config.contents.description}
        </motion.p>
        <motion.a
          href="mailto:tech@stoic.so"
          className="bg-black text-white px-8 py-3 rounded-lg font-medium text-lg hover:bg-gray-800 transition-colors w-fit mt-2"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={3}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Contact Us
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
