"use client";

import Image from "next/image";
import { Title } from "./Atoms";
import { useState } from "react";

const Portfolio = () => {
  const [activeAsset, setActiveAsset] = useState(0);

  const assets = [
    {
      id: 1,
      name: "ExchangeIT",
      logo: "/exchangeit_logo.png",
      description: "A simple solution to manage Exchange and Return requests for Shopify stores. Manage return and exchange requests in one place, encourage exchanges and save lost sales by offering different refund options.",
      website: "https://exchangeit.io",
      tag: "Shopify App"
    },
    {
      id: 2,
      name: "GoGiftCards",
      logo: "/gogiftcards_logo.png",
      description: "Give your customers a delightful gifting experience. GoGiftCards makes it easy for customers to schedule and send gift cards on your Shopify store with personalized messages and seamless scheduling.",
      website: "https://gogiftcards.app",
      tag: "Shopify App"
    },
    {
      id: 3,
      name: "Lury",
      logo: "/lury_logo.png",
      description: "Boost sales by letting customers make you an offer. Don't rely on blanket discounts, increase revenue by letting customers submit their best offers on select products with automated negotiation rules.",
      website: "https://www.lury.app",
      tag: "Shopify App"
    },
    {
      id: 4,
      name: "ReelTok",
      logo: "/reeltok_logo.jpeg",
      description: "Turbocharge your Shopify store with shoppable videos. Transform your e-commerce experience with IG Reels and TikTok content, all set up in just 5 minutes.",
      website: "https://tryreeltok.com",
      tag: "Shopify App"
    }
  ];

  return (
    <div className="mb-24">
      <Title label="Our Portfolio" />
      <div className="flex flex-col gap-8 justify-center max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {assets.map((asset, index) => {
            return (
              <div 
                key={asset.id} 
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow cursor-pointer relative"
                onClick={() => setActiveAsset(index)}
              >
                <span className="absolute top-4 right-4 bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                  {asset.tag}
                </span>
                <div className="flex items-center gap-4 mb-4 pr-20">
                  <Image
                    src={asset.logo}
                    alt={`${asset.name} logo`}
                    width={60}
                    height={60}
                    className="rounded-lg object-contain"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-xl text-black mb-1">{asset.name}</h3>
                    <a 
                      href={asset.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {asset.website}
                    </a>
                  </div>
                </div>
                {activeAsset === index && (
                  <p className="text-base text-gray-600 leading-relaxed">
                    {asset.description}
                  </p>
                )}
                {activeAsset !== index && (
                  <p className="text-sm text-gray-500">
                    Click to learn more...
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
