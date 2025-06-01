"use client";
import config from "@/config/general";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="mb-15">
      <div className="bg-grayBackground rounded-md">
        <div className="w-11/12 xl:w-[1050px] mx-auto flex flex-col justify-center items-center gap-6 py-16">
          <div className="flex flex-col gap-2 items-center text-center">
            <Image
              src={"/stoic_logo.png"}
              width={180}
              height={60}
              alt={config.title}
            />
            <p className="max-w-[300px] text-activeButton">{config.description}</p>
          </div>
        </div>
        <div className="w-11/12 xl:w-[1050px] mx-auto pb-16 text-center">
          © {currentYear} Stoic Labs LLC
        </div>
      </div>
    </div>
  );
};

export default Footer;
