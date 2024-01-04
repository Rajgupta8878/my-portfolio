import { Socials } from "@/constants";
import React from "react";
import Image from "next/image";
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import the appropriate icons


const Navbar = () => {
  return (
    <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
      <div className="flex flex-row gap-3 items-center">
        <div className="relative">
          {/* 
          <Image
            src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className="w-full h-full object-contain rounded-full"
          />
          */}
        </div>
        <h1 className="text-white text-[25px] font-semibold">
          RAJ{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
            {" "}
            GUPTA{" "}
          </span>
        </h1>
      </div>

      <div className="flex flex-row gap-5 mb-2">
        {Socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer">
              <Icon size={32} round />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
