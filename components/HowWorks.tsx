"use client";

import Image from "next/image";
import { Title } from "./Atoms";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const assets = [
  {
    id: 1,
    name: "ExchangeIT",
    logo: "/exchangeit_logo.png",
    description:
      "A simple solution to manage exchange and return requests for Shopify stores. Manage requests in one place, encourage exchanges, and save lost sales by offering different refund options.",
    website: "https://exchangeit.io",
    tag: "Acquired",
  },
  {
    id: 2,
    name: "GoGiftCards",
    logo: "/gogiftcards_logo.png",
    description:
      "Give your customers a delightful gifting experience. Makes it easy for customers to schedule and send gift cards on your Shopify store with personalized messages and seamless scheduling.",
    website: "https://gogiftcards.app",
    tag: "Acquired",
  },
  {
    id: 3,
    name: "Lury",
    logo: "/lury_logo.png",
    description:
      "Boost sales by letting customers make you an offer. Increase revenue by letting customers submit their best offers on select products with automated negotiation rules.",
    website: "https://www.lury.app",
    tag: "Acquired",
  },
  {
    id: 4,
    name: "ReelTok",
    logo: "/reeltok_logo.jpeg",
    description:
      "Turbocharge your Shopify store with shoppable videos. Transform your e-commerce experience with IG Reels and TikTok content, all set up in just 5 minutes.",
    website: "https://tryreeltok.com",
    tag: "Acquired",
  },
  {
    id: 5,
    name: "HeyDuo",
    logo: "/heyduo_logo.png",
    description:
      "A conversational productivity tool designed to help teams and individuals stay aligned through simple, structured check-ins.",
    website: "https://heyduo.com",
    tag: "Built",
  },
  {
    id: 6,
    name: "Quizilio",
    logo: "/quizilio_logo.png",
    description:
      "Turns course materials into short daily lessons delivered straight to WhatsApp. Students build real study habits — 5 minutes a day, no app to download.",
    website: "https://quizilio.com",
    tag: "Built",
  },
];

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [tappedIndex, setTappedIndex] = useState<number | null>(null);

  const isExpanded = (index: number) =>
    hoveredIndex === index || tappedIndex === index;

  return (
    <div className="mb-24">
      <Title label="Our Portfolio" />
      <div className="max-w-3xl mx-auto border-t border-gray-200">
        {assets.map((asset, index) => (
          <motion.div
            key={asset.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.07,
              ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number],
            }}
            className="border-b border-gray-200"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() =>
              setTappedIndex(tappedIndex === index ? null : index)
            }
          >
            <div className="flex items-center justify-between py-6 px-2 sm:px-4 cursor-pointer">
              <div className="flex items-center gap-4 sm:gap-5">
                <motion.div
                  animate={{
                    scale: isExpanded(index) ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <Image
                    src={asset.logo}
                    alt={`${asset.name} logo`}
                    width={44}
                    height={44}
                    className="rounded-lg object-contain"
                  />
                </motion.div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black">
                    {asset.name}
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    asset.tag === "Built"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-gray-100 text-gray-600 border border-gray-200"
                  }`}
                >
                  {asset.tag}
                </span>
                <motion.a
                  href={asset.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-gray-400 hover:text-black transition-colors"
                  animate={{
                    x: isExpanded(index) ? 3 : 0,
                    color: isExpanded(index) ? "#000" : "#9ca3af",
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  aria-label={`Visit ${asset.name}`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.833 14.167L14.167 5.833M14.167 5.833H5.833M14.167 5.833v8.334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {isExpanded(index) && (
                <motion.div
                  key="desc"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.3, ease: [0.25, 0.4, 0.25, 1] },
                    opacity: { duration: 0.25, delay: 0.05 },
                  }}
                  className="overflow-hidden"
                >
                  <p className="text-sm sm:text-base text-activeButton font-light leading-relaxed pb-5 pl-[60px] sm:pl-[69px] pr-4 max-w-lg">
                    {asset.description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
