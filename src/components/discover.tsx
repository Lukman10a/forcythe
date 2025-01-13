import Image from "next/image";
import React, { useState } from "react";
import Typewriter from "./ui/animated/typewriter";

export default function Discover() {
  const [activeCompany, setActiveCompany] = useState("Starks Associate");

  const companies = [
    {
      name: "Starks Associate",
      text: "Starks",
      logo: "assets/svg/stark.svg",
      description:
        "Partnering with Forcythe was like finding a hidden gem. Their genuine interest in our success was palpable, and the continuous support post-launch has been a testament to their commitment. They’ve become more than a service provider; they’re a trusted ally.",
      title: "John, Management",
    },
    {
      name: "ExecutivePros",
      logo: "/assets/svg/executive.svg",
      description:
        "The team understood the assignment and delivered very well. One of the things that stood them out was how they took our concepts and turned it into visually appealing designs that caught the eyes of our clients and made increased web engagements. Kudos!",
      title: "Testimony, Co-founder",
    },
    {
      name: "Stac AI",
      logo: "assets/svg/stacai.svg",
      description:
        "Forcythe is seriously amazing when it comes to coming up with new ideas. They took our rough ideas and turned them into something incredible online. Their team’s commitment to our vision was evident every step of the way.",
      title: "Edwin, Former CTO",
    },
    {
      name: "Iwaria",
      logo: "/assets/svg/iwaria.svg",
      description:
        "The moment we engaged Forcythe, it was clear they were in a league of their own. Their strategic approach to our project not only enhanced our online platform but also enriched our brand’s story, captivating our audience like never before.",
      title: "Iwaria, Founder",
    },
    {
      name: "Beaupreneur",
      logo: "/assets/svg/beaupreneur.svg",
      description:
        "I’m beyond impressed with the dedication Forcythe showed. They didn’t just deliver-they educated us, involving us in the creative process. The result? A website that truly feels like ours and speaks directly to our customers’ hearts.",
      title: "Christiana, Founder",
    },
  ];

  return (
    <div className="bg-[#080414] p-20 sm:p-4">
      <h1 className="text-center text-5xl sm:text-3xl text-white mb-10">
        <Typewriter
          text=" Discover the transformative stories of startups that scaled new heights with us"
          delay={100}
        />
      </h1>

      {/* Navigation Bar */}
      <div className="flex justify-center items-center mb-10">
        <div className="w-full border-[1px] border-[#06438C] text-white rounded-full grid grid-cols-5 min-w-[750px] sm:min-w-[360px]">
          {companies.map((company, index) => (
            <div
              key={company.name}
              onClick={() => setActiveCompany(company.name)}
              className={`w-full p-[1.1rem] cursor-pointer text-center transition-all duration-300 flex justify-center items-center ${
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
              {company.text && (
                <span className="sm:text-[10px]">{company.text}</span>
              )}
              {!company.logo && !company.text && <span>{company.name}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Selected Company Details */}
      <div className="">
        {companies.map(
          (company) =>
            company.name === activeCompany && (
              <div
                key={company.name}
                className="bg-[#102444] grid grid-cols-2 text-white p-10 sm:p-4 rounded-lg mx-auto max-w-lg h-[450px]"
              >
                <div className="">
                  <h2 className="text-2xl sm:text-base font-bold mb-4 ">
                    {company.name}
                  </h2>

                  <p className="mb-6 sm:text-sm">
                    <Typewriter text={company.description} delay={10} />
                  </p>
                  <p className="self-end">{company.title}</p>
                </div>
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
