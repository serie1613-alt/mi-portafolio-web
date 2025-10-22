import React from 'react';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { personal, social } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-white mb-4 font-mono">&lt;AR /&gt;</div>
            <p className="text-gray-400 mb-4">
              Building innovative web solutions with passion and precision.
            </p>
            <div className="flex space-x-4">
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00d9ff] transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#00d9ff] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="text-gray-400 hover:text-[#00d9ff] transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-[#00d9ff] transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{personal.email}</li>
              <li>{personal.phone}</li>
              <li>{personal.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} {personal.name}. Made with <Heart className="inline text-red-500" size={16} /> and lots of coffee.
          </p>
          <button
            onClick={scrollToTop}
            className="bg-[#00d9ff] text-black p-2 rounded-full hover:scale-110 transition-transform"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
