import { Github } from "lucide-react";

export default function Experience(){
    return(
        <div>
                      <section>
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-2 border-b border-gray-600 pb-2">
              Experience
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project 1 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                {/* <div className=" bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    To-Do App
                  </h3>
                </div> */}
                <div className="p-6">
                  <h4 className="flex  justify-center underline underline-offset-2 mb-4 text-lg font-bold text-gray-200">
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
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 2 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                {/* <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    Next.js Chat App Frontend
                  </h3>
                </div> */}
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
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 3 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                {/* <div className=" bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
                  <h3 className="text-xl font-semibold text-blue-400 text-center">
                    Chat App Backend
                  </h3>
                </div> */}
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
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>

              {/* Project 4 */}
              <div className="group relative bg-white/5 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/20 transition-transform duration-300 transform hover:scale-105">
                <div className=" bg-gradient-to-r from-gray-700 via-gray-800 to-black flex justify-center items-center p-4">
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
                    <Github size={16} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
    )
}