"use client"

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

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
  const projects: Project[] = [
    {
      id: '1',
      name: "WanderLust",
      img: "/images/p1.jpg",
      description: "A full stack travel booking platform with real-time availability, user authentication, and review system",
      skills: "Node.js, Express.js, React.js, MongoDB",
      liveLink: "https://wanderlust-demo.com",
      githubLink: "https://github.com/yourusername/wanderlust"
    },
    {
      id: '2',
      name: "Coursify",
      img: "/images/p2.png",
      description: "An online learning platform with course management System with admin and user Dashboard",
      skills: "Node.js, Express.js, React.js, MongoDB",
      liveLink: "https://coursify-theta.vercel.app/",
      githubLink: "https://github.com/vivekkumar012/Coursify.git"
    },
    {
      id: '3',
      name: "Agripact",
      img: "/images/p3.png",
      description: "A marketplace connecting farmers directly with consumers for fresh produce delivery",
      skills: "Node.js, Express.js, React.js, MongoDB",
      liveLink: "https://agripact-mu.vercel.app/",
      githubLink: "https://github.com/vivekkumar012/AGRIPACT.git"
    },
    {
      id: '4',
      name: "Apna Video Call",
      img: "/images/p4.png",
      description: "A WebRTC based Video calling Application same as Zoom Application.",
      skills: "Node.js, Express.js, React.js, MongoDB, WebRTC",
      liveLink: "https://apnacollegefronted.onrender.com/",
      githubLink: "https://github.com/vivekkumar012/Apna-Video-Call.git"
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" id='works'>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Recent Projects
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A small selection of projects I've worked on
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-slate-700">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
                <img
                  src={project.img}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://via.placeholder.com/600x400/6366f1/ffffff?text=${project.name}`;
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.split(', ').map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    <Github size={18} />
                    <span className="text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;