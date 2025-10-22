import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { portfolioData } from '../mock';

const Contact = () => {
  const { personal, social } = portfolioData;
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personal.email, href: `mailto:${personal.email}` },
    { icon: Phone, label: 'Phone', value: personal.phone, href: `tel:${personal.phone}` },
    { icon: MapPin, label: 'Location', value: personal.location, href: null }
  ];

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#00d9ff] font-mono text-sm tracking-wider mb-4 block">GET IN TOUCH</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-[#00d9ff] mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="md:col-span-1 space-y-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="bg-[#1a1a1a] border-gray-800 p-6 hover:border-[#00d9ff] transition-all">
                  <div className="flex items-start">
                    <div className="bg-[#00d9ff]/10 p-3 rounded-lg mr-4">
                      <Icon className="text-[#00d9ff]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.label}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-gray-400 hover:text-[#00d9ff] transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              );
            })}

            {/* Social Links */}
            <Card className="bg-[#1a1a1a] border-gray-800 p-6">
              <h3 className="text-white font-semibold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a2a] p-3 rounded-lg text-gray-400 hover:bg-[#00d9ff] hover:text-black transition-all"
                >
                  <Github size={20} />
                </a>
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a2a] p-3 rounded-lg text-gray-400 hover:bg-[#00d9ff] hover:text-black transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2a2a2a] p-3 rounded-lg text-gray-400 hover:bg-[#00d9ff] hover:text-black transition-all"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <Card className="bg-[#1a1a1a] border-gray-800 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-white font-semibold mb-2 block">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-500 focus:border-[#00d9ff]"
                    />
                  </div>
                  <div>
                    <label className="text-white font-semibold mb-2 block">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-500 focus:border-[#00d9ff]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-white font-semibold mb-2 block">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-500 focus:border-[#00d9ff]"
                  />
                </div>

                <div>
                  <label className="text-white font-semibold mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className="bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-500 focus:border-[#00d9ff] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#00d9ff] hover:bg-[#00b8dd] text-black font-semibold py-6 transition-all hover:scale-[1.02]"
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
