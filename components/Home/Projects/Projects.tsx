"use client";

import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";

interface Project {
  id: string;
  name: string;
  img: string;
  description: string;
  skills: string;
  liveLink: string;
  githubLink: string;
}

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
      id: "1",
      name: "MegaHive",
      img: "/images/p1.png",
      description:
        "A full stack Ecommerce platform similar to flipkart with product listenings and cart functionality",
      skills: "Node.js, Express.js, React.js, MongoDB",
      liveLink: "https://megahive.com",
      githubLink: "https://github.com/vivekkumar012/MegaHive",
    },
    {
      id: "2",
      name: "Gourmet",
      img: "/images/p8.png",
      description:
        "A Food Management Application for all menus listenings and cart functionality for orders.",
      skills: "MERN Stack, Socket.io, AWS S3",
      liveLink: "https://social-demo.com",
      githubLink: "https://github.com/vivekkumar012/Gourmet",
    },
    {
      id: "3",
      name: "Coursify",
      img: "/images/p2.png",
      description:
        "An online learning platform with course management System with admin and user Dashboard",
      skills: "Node.js, Express.js, React.js, MongoDB",
      liveLink: "https://coursify-theta.vercel.app/",
      githubLink: "https://github.com/vivekkumar012/Coursify.git",
    },
    {
      id: "4",
      name: "Agripact",
      img: "/images/p3.png",
      description:
        "A marketplace connecting farmers directly with consumers for fresh produce delivery",
      skills: "Node.js, Express.js, React.js, MongoDB",
      liveLink: "https://agripact-mu.vercel.app/",
      githubLink: "https://github.com/vivekkumar012/AGRIPACT.git",
    },
    {
      id: "5",
      name: "Apna Video Call",
      img: "/images/p4.png",
      description:
        "A WebRTC based Video calling Application same as Zoom Application.",
      skills: "Node.js, Express.js, React.js, MongoDB, WebRTC",
      liveLink: "https://apnacollegefronted.onrender.com/",
      githubLink: "https://github.com/vivekkumar012/Apna-Video-Call.git",
    },
    {
      id: "6",
      name: "WanderLust",
      img: "/images/p1.jpg",
      description:
        "A full stack travel booking platform with real-time availability, user authentication, and review system",
      skills: "Node.js, Express.js, Ejs, BootStrap",
      liveLink: "https://wanderlust-1-ilfi.onrender.com/listings",
      githubLink: "https://github.com/vivekkumar012/Wanderlust.git",
    },
    {
      id: "7",
      name: "Task Manager Pro",
      img: "/images/p6.png",
      description:
        "Collaborative task management tool with real-time updates and team features",
      skills: "React.js, Firebase, Tailwind CSS",
      liveLink: "https://taskmanager-demo.com",
      githubLink: "https://github.com/vivekkumar012/",
    },
    {
      id: "8",
      name: "Weather Dashboard",
      img: "/images/p7.png",
      description:
        "Real-time weather tracking application with forecasts and location-based alerts",
      skills: "React.js, OpenWeather API, Chart.js",
      liveLink: "https://weather-demo.com",
      githubLink: "https://github.com/vivekkumar012/",
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 " id="works">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Recent Projects
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            A small selection of projects I&apos;ve worked on
          </p>
        </div>

        {/* Projects Grid - Medium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-40 overflow-hidden bg-slate-700">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x300/6366f1/ffffff?text=${project.name}`;
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors line-clamp-1">
                  {project.name}
                </h3>

                <p className="text-gray-300 text-xs mb-3 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.skills
                    .split(", ")
                    .slice(0, 2)
                    .map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  {project.skills.split(", ").length > 2 && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-slate-700 text-gray-400 rounded-full">
                      +{project.skills.split(", ").length - 2}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors duration-200 text-xs"
                  >
                    <ExternalLink size={14} />
                    <span>Live</span>
                  </a>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-md transition-colors duration-200 text-xs"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {projects.length > 4 && (
          <div className="text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50 hover:scale-105"
            >
              <span>
                {showAll
                  ? "Show Less"
                  : `Show More Projects (${projects.length - 4}+)`}
              </span>
              <ChevronDown
                size={20}
                className={`transform transition-transform duration-300 ${
                  showAll ? "rotate-180" : ""
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
