import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'C++', proficiency: 88, icon: '🔷' },
    { name: 'C', proficiency: 85, icon: '©️' },
    { name: 'Java', proficiency: 87, icon: '☕' },
    { name: 'Python', proficiency: 91, icon: '🐍' },
    { name: 'JavaScript', proficiency: 89, icon: 'JS' },
    { name: 'TypeScript', proficiency: 86, icon: 'TS' },
    { name: 'React.js', proficiency: 92, icon: '⚛️' },
    { name: 'Next.js', proficiency: 90, icon: 'N' },
    { name: 'Node.js', proficiency: 88, icon: '🟢' },
    { name: 'Express.js', proficiency: 89, icon: 'E' },
    { name: 'Tailwind CSS', proficiency: 94, icon: '🌊' },
    { name: 'MongoDB', proficiency: 87, icon: '🍃' },
    { name: 'PostgreSQL', proficiency: 85, icon: '🐘' },
    { name: 'AWS', proficiency: 83, icon: '☁️' },
    { name: 'Docker', proficiency: 86, icon: '🐳' },
  ];

  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="min-h-screen  py-16 px-4 overflow-hidden" id='skills'>
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          My <span className="text-cyan-400">Skills</span>
        </h1>
        <div className="w-24 h-1 bg-cyan-400 mx-auto rounded-full"></div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-scroll {
          animation: scroll 8s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="relative">
        <div className="flex animate-scroll">
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-36 h-fit mx-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <div className="text-center">
                <div className="text-6xl mb-4 flex items-center justify-center h-15">
                  {skill.icon.length <= 2 ? (
                    <div className="bg-slate-700 w-20 h-20 rounded-xl flex items-center justify-center text-2xl font-bold text-white border-2 border-slate-600">
                      {skill.icon}
                    </div>
                  ) : (
                    <span>{skill.icon}</span>
                  )}
                </div>
                
                {/* <div className="text-5xl font-bold text-white mb-2">
                  {skill.proficiency}%
                </div> */}
                
                <div className="text-lg text-purple-300 font-medium mb-4">
                  {skill.name}
                </div>
                
                {/* <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;