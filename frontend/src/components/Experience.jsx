import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d9ff] font-mono text-sm tracking-wider mb-4 block">MY JOURNEY</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-[#00d9ff] mx-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-800"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={job.id} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#00d9ff] rounded-full border-4 border-[#0a0a0a] z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="bg-[#1a1a1a] border-gray-800 p-6 hover:border-[#00d9ff] transition-all hover:transform hover:scale-[1.02]">
                    {/* Company & Position */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{job.position}</h3>
                      <div className="flex items-center text-[#00d9ff] text-lg font-semibold mb-3">
                        <Briefcase size={18} className="mr-2" />
                        {job.company}
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <Calendar size={16} className="mr-2" />
                          {job.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={16} className="mr-2" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className="text-gray-400 flex items-start">
                            <span className="text-[#00d9ff] mr-2 mt-1">▹</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
