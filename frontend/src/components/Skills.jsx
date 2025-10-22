import React from 'react';
import { Badge } from './ui/badge';
import { portfolioData } from '../mock';

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d9ff] font-mono text-sm tracking-wider mb-4 block">TECHNICAL EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-[#00d9ff] mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-[#00d9ff] transition-all hover:transform hover:translate-y-[-4px]"
            >
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <span className="w-2 h-2 bg-[#00d9ff] rounded-full mr-3"></span>
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    className="bg-[#2a2a2a] text-gray-300 hover:bg-[#00d9ff] hover:text-black border-gray-700 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
