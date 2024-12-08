"use client";
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

import React from "react";
import Image from "next/image";
// import {
//   FaGithub,
//   FaLinkedin,
//   FaStackOverflow,
//   FaDiscord,
//   FaEnvelope,
//   FaDownload,
// } from "react-icons/fa";
import Experience from "./Experience";
import Cv from "./Cv";
import About from "./About";
import Skills from "./Skills";
import SocialLinks from "./SocialLinks";

const Portfolio = () => {
 
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 opacity-20 "
        // style={{
        //   backgroundImage: `
        //     radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0, transparent 50%),
        //     radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0, transparent 50%),
        //     radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0, transparent 50%),
        //     radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0, transparent 50%),
        //     radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0, transparent 50%),
        //     radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0, transparent 50%),
        //     radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0, transparent 50%)
        //   `,
        // }}
      />

      {/* Dotted Overlay */}
      <div
        className="absolute inset-0 opacity-50 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 2px )",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative">
        {/* Header Section */}
        <header className="pt-10 pb-4 px-4 md:px-8 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-28 h-28 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-2">
              <Image
                src="/abinnewphoto.JPG"
                alt="Abin Antony"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-100 to-purple-100 text-transparent bg-clip-text mb-4">
              Abin Antony
            </h1>

            <p className="text-xl md:text-2xl text-gray-400 flex items-center justify-center gap-2">
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks/>
          
        </header>

        {/* Main Content */}
        <main className="px-4 md:px-8 max-w-6xl mx-auto pb-20">
          {/* Skills Section */}
          <Skills/>
          
          {/* About Section */}
         <About/>

          {/* Projects Section */}
          <Experience/>

          {/* CV */}
         <Cv/>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;

