"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import config from "@/config/general";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const [activeIndex, setActiveIndex] = useState(0);
  const principles = config.contents.principles;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const index = Math.min(
      Math.floor(latest * principles.length),
      principles.length - 1
    );
    if (index >= 0) setActiveIndex(index);
  });

  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${principles.length * 85}vh` }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto px-4">
          {/* Progress indicator */}
          <div className="flex items-center gap-4 mb-10">
            <span className="text-sm font-mono text-activeButton tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")}/
              {String(principles.length).padStart(2, "0")}
            </span>
            <div className="flex-1 h-px bg-gray-200 overflow-hidden">
              <motion.div
                className="h-full bg-black w-full origin-left"
                animate={{
                  scaleX: (activeIndex + 1) / principles.length,
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              />
            </div>
          </div>

          {/* Principle content — stacked via CSS grid */}
          <div
            className="relative grid"
            style={{ gridTemplateRows: "1fr", minHeight: "260px" }}
          >
            {principles.map((item, i) => (
              <motion.div
                key={item.id}
                className="col-start-1 row-start-1"
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  y: i === activeIndex ? 0 : i > activeIndex ? 30 : -30,
                  filter: i === activeIndex ? "blur(0px)" : "blur(4px)",
                }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                style={{
                  pointerEvents: i === activeIndex ? "auto" : "none",
                }}
              >
                <span className="text-[5rem] sm:text-[7rem] font-bold text-gray-100 leading-none block select-none">
                  {item.number}
                </span>
                <h3 className="text-2xl sm:text-3xl font-semibold text-black mb-4 -mt-4">
                  {item.title}
                </h3>
                <p className="text-base sm:text-lg font-light text-activeButton leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Navigation dots */}
          <div className="flex gap-2 mt-10">
            {principles.map((_, i) => (
              <motion.div
                key={i}
                className="h-2 rounded-full"
                animate={{
                  backgroundColor: i === activeIndex ? "#000" : "#e5e7eb",
                  width: i === activeIndex ? 24 : 8,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
