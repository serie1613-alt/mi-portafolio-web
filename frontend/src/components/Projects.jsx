import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const filteredProjects = filter === 'all' 
    ? projects 
    : filter === 'featured' 
      ? projects.filter(p => p.featured) 
      : projects;

  return (
    <section id="projects" className="py-20 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d9ff] font-mono text-sm tracking-wider mb-4 block">PORTFOLIO</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-[#00d9ff] mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={() => setFilter('all')}
              variant="outline"
              className={`transition-all ${
                filter === 'all'
                  ? 'bg-[#00d9ff] text-black border-[#00d9ff] hover:bg-[#00b8dd]'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-[#00d9ff] hover:text-white'
              }`}
            >
              All Projects
            </Button>
            <Button
              onClick={() => setFilter('featured')}
              variant="outline"
              className={`transition-all ${
                filter === 'featured'
                  ? 'bg-[#00d9ff] text-black border-[#00d9ff] hover:bg-[#00b8dd]'
                  : 'bg-transparent text-gray-400 border-gray-700 hover:border-[#00d9ff] hover:text-white'
              }`}
            >
              Featured Only
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-[#1a1a1a] border-gray-800 overflow-hidden hover:border-[#00d9ff] transition-all hover:transform hover:translate-y-[-8px] group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-[#00d9ff] text-black px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
                {/* Overlay with Links */}
                <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#00d9ff] text-black p-3 rounded-full hover:scale-110 transition-transform"
                      onClick={(e) => e.preventDefault()}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black p-3 rounded-full hover:scale-110 transition-transform"
                    onClick={(e) => e.preventDefault()}
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d9ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-[#2a2a2a] text-gray-300 border-gray-700 text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
