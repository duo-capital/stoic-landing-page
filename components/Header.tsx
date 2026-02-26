"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import config from "@/config/general";

const Header = () => {
  return (
    <motion.header
      className="flex-col sm:flex-row flex justify-between items-start"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Image
        src={"/stoic_logo.png"}
        width={180}
        height={60}
        alt={config.title}
      />
      <nav>
        <ul className="flex sm:mt-0 mt-4 items-center lg:gap-7 gap-3 font-medium text-base sm:text-lg">
          <li className="text-black">
            <Link href={config.socials.linkedin} passHref legacyBehavior>
              <a
                className="px-5 py-2 rounded"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
