import React from "react";
import {
  CiFacebook,
  CiTwitter,
  CiLinkedin,
  CiInstagram,
  CiYoutube,
} from "react-icons/ci";
import forcytheLogo from "../../public/assets/svg/forcytheLogo.svg";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="bg-[#081424] text-white grid grid-cols-3 sm:grid-cols-1 gap-8 justify-items-center p-20 sm:p-10">
      {/* Left Section */}
      <div className="space-y-4 w-full ">
        <form className="flex items-center border border-gray-300 rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Your Email Address"
            className="flex-grow px-3 py-2 bg-transparent text-white outline-none placeholder-gray-400"
          />
          <button
            type="submit"
            className="bg-white text-black px-12 py-3 rounded-tr-full font-semibold"
          >
            Subscribe
          </button>
        </form>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="notifications"
            className="w-5 h-5 text-[#06438C] border-gray-300 rounded"
          />
          <label htmlFor="notifications" className="text-sm">
            I agree to receive other notifications from Forcythe
          </label>
        </div>
      </div>

      {/* Center Section */}
      <div className="space-y-8  max-w-[300px]">
        <Image src={forcytheLogo} alt="logo" width={160} height={160} />
        <p className="text-gray-300 text-sm">
          We are the growth company for businesses looking to scale. We are
          dedicated to transforming businesses with bespoke digital solutions
          that drive growth.
        </p>
        <div className="flex gap-4 ">
          <CiFacebook className="w-6 h-6 cursor-pointer hover:text-[#06438C]" />
          <CiTwitter className="w-6 h-6 cursor-pointer hover:text-[#06438C]" />
          <CiLinkedin className="w-6 h-6 cursor-pointer hover:text-[#06438C]" />
          <CiInstagram className="w-6 h-6 cursor-pointer hover:text-[#06438C]" />
          <CiYoutube className="w-6 h-6 cursor-pointer hover:text-[#06438C]" />
        </div>
      </div>

      {/* Right Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Company</h3>
        <ul className="text-gray-300 space-y-2">
          {[
            "About",
            "Services",
            "Portfolio",
            "Studio",
            "Foundation",
            "Careers",
            "Blog",
          ].map((link, index) => (
            <li
              key={index}
              className="hover:text-white cursor-pointer transition duration-200"
            >
              {link}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
