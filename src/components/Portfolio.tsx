"use client";
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";

import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
  FaDiscord,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";
import { Github, Link, Linkedin, Mail } from "lucide-react";

const Portfolio = () => {
  const discordOAuthURL = "https://discord.gg/tcA8aTKq";
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 opacity-20 "
        style={{
          backgroundImage: `
            radial-gradient(at 40% 20%, hsla(28,100%,74%,1) 0, transparent 50%),
            radial-gradient(at 80% 0%, hsla(189,100%,56%,1) 0, transparent 50%),
            radial-gradient(at 0% 50%, hsla(355,100%,93%,1) 0, transparent 50%),
            radial-gradient(at 80% 50%, hsla(340,100%,76%,1) 0, transparent 50%),
            radial-gradient(at 0% 100%, hsla(22,100%,77%,1) 0, transparent 50%),
            radial-gradient(at 80% 100%, hsla(242,100%,70%,1) 0, transparent 50%),
            radial-gradient(at 0% 0%, hsla(343,100%,76%,1) 0, transparent 50%)
          `,
        }}
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
        <header className="pt-20 pb-10 px-4 md:px-8 max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden border-2">
              <Image
                src="/abinnewphoto.JPG"
                alt="Abin Antony"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-200 to-purple-500 text-transparent bg-clip-text mb-4">
              Abin Antony
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 flex items-center justify-center gap-2">
              <svg
                className="w-6 h-6 text-green-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="  gap-6 mb-10 pt-2 grid grid-cols-1 md:grid-cols-5 px-5">
            {/* href="https://github.com/AbinAntony8888" 
            href="https://stackoverflow.com/users/20703743/abin-antony"
             href="https://www.linkedin.com/in/abin-antony-a3b90a292/"
              href="mailto:abinantony8888@gmail.com?subject=Hello%20Abin&body=I%20would%20like%20to%20connect%20with%20you."
             */}
            <Button
              className="bg-gray-800 hover:bg-[#4752C4] text-white"
              onClick={() => (window.location.href = discordOAuthURL)}
            >
              <svg
                className="mr-2 h-5 w-5"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="discord"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                ></path>
              </svg>
              GitHub
            </Button>
            <Button
              className="bg-gray-800 hover:bg-[#4752C4] text-white"
              onClick={() => (window.location.href = discordOAuthURL)}
            >
              <svg
                className="mr-2 h-5 w-5"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="discord"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                ></path>
              </svg>
              Discord
            </Button>
            <Button
              className="bg-gray-800 hover:bg-[#4752C4] text-white"
              onClick={() => (window.location.href = discordOAuthURL)}
            >
              <svg
                className="mr-2 h-5 w-5"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="discord"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                ></path>
              </svg>
              Stack Overflow
            </Button>
            <Button
              className="bg-gray-800 hover:bg-[#4752C4] text-white"
              onClick={() => (window.location.href = discordOAuthURL)}
            >
              <svg
                className="mr-2 h-5 w-5"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="discord"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                ></path>
              </svg>
              LinkedIn
            </Button>
            <Button
              className="bg-gray-800 hover:bg-[#4752C4] text-white"
              onClick={() => (window.location.href = discordOAuthURL)}
            >
              <svg
                className="mr-2 h-5 w-5"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="discord"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path
                  fill="currentColor"
                  d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
                ></path>
              </svg>
              Email
            </Button>
           
           

           
          </div>
        </header>

        {/* Main Content */}
        <main className="px-4 md:px-8 max-w-6xl mx-auto pb-20">
          {/* Skills Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-gray-600 pb-2">
              Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "HTML",
                "CSS",
                "React",
                "TypeScript",
                "Next.js",
                "Tailwind CSS",
                "Node.js",
                "GitHub",
              ].map((skill) => (
                <div
                  key={skill}
                  className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                >
                  <span className="text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </section>
          {/* About Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-gray-600 pb-2">
              About Me
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Background
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Hi, I&apos;m Abin Antony, a passionate full-stack developer
                  with expertise in modern web technologies. I specialize in
                  building dynamic, responsive, and user-friendly applications.
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                <h3 className="text-xl font-semibold mb-4 text-blue-400">
                  Expertise
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  With a strong foundation in both front-end and back-end
                  technologies, I thrive on creating seamless digital
                  experiences that make a difference.
                </p>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
              <span className="w-8 h-1 bg-blue-500"></span>
              Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    To-Do App
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-2">
                    A Simple Task Management App
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A full-stack to-do app built with React, Node.js, and
                    Next.js. It supports task management features and
                    demonstrates CRUD operations.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Next.js
                    </span>
                  </div>
                  <a
                    href="https://github.com/AbinAntony8888/to-do-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    Next.js Chat App Frontend
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-2">
                    Real-Time Chat Interface
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A responsive and interactive chat application frontend built
                    with Next.js. This project demonstrates a modern UI/UX
                    design, seamless real-time messaging features, and
                    integration with WebSocket and RESTful APIs for smooth user
                    interactions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Next.js
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      WebSocket
                    </span>
                  </div>
                  <a
                    href="https://github.com/AbinAntony8888/nextjs-chat-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    Chat App Backend
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-2">
                    Real-Time Messaging System
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A backend project for a real-time chat application using
                    Node.js and WebSocket. It showcases robust API integration
                    and database handling.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Node.js
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      WebSocket
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      MongoDB
                    </span>
                  </div>
                  <a
                    href="https://github.com/AbinAntony8888/chatappBackendnode"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className="aspect-video bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    Portfolio Website
                  </h3>
                </div>
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-200 mb-2">
                    Personal Developer Portfolio
                  </h4>
                  <p className="text-gray-400 leading-relaxed mb-4">
                    A sleek and responsive portfolio website showcasing my
                    skills, projects, and professional experience. Built with
                    Next.js and styled with Tailwind CSS, it highlights dynamic
                    animations, modern design patterns, and mobile-first
                    responsiveness.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Next.js
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Tailwind CSS
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      React
                    </span>
                  </div>
                  <a
                    href="https://github.com/AbinAntony8888/PortfolioWebsite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded transition-colors duration-300"
                  >
                    <FaGithub size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-12 ">
            <button className="flex float-left gap-2 border-2 border-red-600 bg-blue-600 ml-6 px-6 py-2 rounded-md hover:bg-blue-900 duration-300 transform hover:scale-x-110 download-cv">
              <a
                href="/abinantony it cv resume (2).pdf"
                className="gap-2 flex items-center justify-center"
                download
              >
                Download CV
                <FaDownload className="text-orange-200" />
              </a>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
