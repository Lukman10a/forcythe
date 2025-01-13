import Image from "next/image";
import React, { useState } from "react";

export default function Discover() {
  const [activeCompany, setActiveCompany] = useState("stac.ai");

  const companies = [
    { name: "Starks", text: "Starks", logo: "assets/svg/stark.svg" },
    {
      name: "ExecutivePros",
      logo: "/assets/svg/executive.svg",
    },
    { name: "stac.ai", logo: "assets/svg/stacai.svg" },
    { name: "Iwaria", logo: "/assets/svg/iwaria.svg" },
    { name: "Beaupreneur", logo: "/assets/svg/beaupreneur.svg" },
  ];

  return (
    <div className="bg-[#080414] p-20 sm:p-10">
      <h1 className="text-center text-5xl sm:text-3xl text-white mb-10">
        Discover the transformative stories of startups that scaled new heights
        with us
      </h1>

      {/* Navigation Bar */}
      <div className="flex justify-center items-center mb-10">
        <div className="w-full border-[1px] border-[#06438C] text-white rounded-full grid grid-cols-5 min-w-[750px] sm:min-w-[350px] ">
          {companies.map((company, index) => (
            <div
              key={company.name}
              onClick={() => setActiveCompany(company.name)}
              className={`w-full  p-[1.1rem] cursor-pointer text-center transition-all duration-300 flex justify-center items-center ${
                activeCompany === company.name
                  ? "bg-[#103256] font-semibold"
                  : ""
              } ${
                index === 0
                  ? "rounded-l-full" // Apply left rounded for the first item
                  : index === companies.length - 1
                  ? "rounded-r-full" // Apply right rounded for the last item
                  : "rounded-none" // No border radius for middle items
              }`}
            >
              {/* Content rendering logic */}
              {company.logo && (
                <Image
                  src={company.logo}
                  alt={company.name}
                  className="h-6 w-auto mr-2"
                  width={100}
                  height={100}
                />
              )}
              {company.text && <span>{company.text}</span>}
              {!company.logo && !company.text && <span>{company.name}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Company Details */}
      <div className="text-center">
        {companies.map(
          (company) =>
            company.name === activeCompany && (
              <div
                key={company.name}
                className="bg-[#102444] text-white p-10 rounded-lg mx-auto max-w-lg"
              >
                <h2 className="text-2xl font-bold mb-4">{company.name}</h2>
                <p className="mb-6">
                  The team understood the assignment and delivered very well.
                </p>
                <Image
                  src={company.logo || "/placeholder-logo.svg"}
                  alt={`${company.name} logo`}
                  className="mx-auto"
                  width={100}
                  height={100}
                />
              </div>
            )
        )}
      </div>
    </div>
  );
}
