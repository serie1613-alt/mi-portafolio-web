import React from 'react';
import { Code, Rocket, Users, Award } from 'lucide-react';
import { Card } from './ui/card';
import { portfolioData } from '../mock';

const About = () => {
  const { personal } = portfolioData;

  const highlights = [
    { icon: Code, title: '5+ Years', description: 'Development Experience' },
    { icon: Rocket, title: '50+ Projects', description: 'Successfully Delivered' },
    { icon: Users, title: '20+ Clients', description: 'Happy Customers' },
    { icon: Award, title: 'Best Practices', description: 'Clean Code Advocate' }
  ];

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d9ff] font-mono text-sm tracking-wider mb-4 block">GET TO KNOW ME</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-[#00d9ff] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="rounded-lg w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute inset-0 border-4 border-[#00d9ff] rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>

          {/* Right - Bio */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              {personal.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {personal.bio}
            </p>

            {/* Quick Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <span className="text-[#00d9ff] font-semibold w-32">Email:</span>
                <span className="text-gray-300">{personal.email}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#00d9ff] font-semibold w-32">Phone:</span>
                <span className="text-gray-300">{personal.phone}</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#00d9ff] font-semibold w-32">Location:</span>
                <span className="text-gray-300">{personal.location}</span>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="bg-[#1a1a1a] border-gray-800 p-4 hover:border-[#00d9ff] transition-all hover:transform hover:scale-105">
                    <Icon className="text-[#00d9ff] mb-2" size={32} />
                    <div className="text-white font-bold text-xl mb-1">{item.title}</div>
                    <div className="text-gray-400 text-sm">{item.description}</div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
