// Mock data for Developer Portfolio

export const portfolioData = {
  // Personal Information
  personal: {
    name: "Alex Rivera",
    title: "Full Stack Developer",
    tagline: "Building scalable web applications with modern technologies",
    bio: "Passionate software engineer with 5+ years of experience in full-stack development. Specialized in building high-performance web applications using React, Node.js, and cloud technologies. I love solving complex problems and creating elegant solutions.",
    email: "alex.rivera@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    resume: "#"
  },

  // Social Links
  social: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    portfolio: "https://yourwebsite.com"
  },

  // Skills
  skills: [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Vue.js"] },
    { category: "Backend", items: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL", "MongoDB"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD", "GitHub Actions", "Terraform"] },
    { category: "Tools", items: ["Git", "VS Code", "Figma", "Postman", "Jest", "Webpack"] }
  ],

  // Experience
  experience: [
    {
      id: 1,
      company: "Tech Innovations Inc.",
      position: "Senior Full Stack Developer",
      period: "2021 - Present",
      location: "San Francisco, CA",
      description: "Leading development of enterprise-level web applications. Architecting scalable microservices and mentoring junior developers.",
      achievements: [
        "Reduced application load time by 60% through optimization",
        "Led team of 5 developers on a major platform migration",
        "Implemented CI/CD pipeline reducing deployment time by 75%"
      ]
    },
    {
      id: 2,
      company: "Digital Solutions Co.",
      position: "Full Stack Developer",
      period: "2019 - 2021",
      location: "Austin, TX",
      description: "Developed and maintained multiple client-facing applications using React and Node.js.",
      achievements: [
        "Built 10+ responsive web applications from scratch",
        "Improved API response time by 40%",
        "Introduced automated testing practices"
      ]
    },
    {
      id: 3,
      company: "StartUp Labs",
      position: "Junior Developer",
      period: "2018 - 2019",
      location: "Remote",
      description: "Contributed to various web development projects and gained experience in modern web technologies.",
      achievements: [
        "Developed reusable React components library",
        "Collaborated with design team on UI/UX improvements",
        "Participated in code reviews and agile ceremonies"
      ]
    }
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management System",
      description: "Real-time collaborative task management application with drag-and-drop functionality and team workspaces.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "WebSocket", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "AI-powered content generation tool using OpenAI API with custom templates and content optimization.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
      technologies: ["React", "Python", "FastAPI", "OpenAI", "Redis"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with data visualization and customizable widgets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      technologies: ["Vue.js", "D3.js", "Node.js", "InfluxDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 5,
      title: "Social Media API",
      description: "RESTful API for social media application with authentication, posts, comments, and likes.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
      technologies: ["Express", "MongoDB", "JWT", "Redis", "Docker"],
      github: "https://github.com",
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: "DevOps Automation Tools",
      description: "Collection of automation scripts and tools for deployment and monitoring.",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&h=500&fit=crop",
      technologies: ["Python", "Bash", "Terraform", "Ansible", "Kubernetes"],
      github: "https://github.com",
      demo: null,
      featured: false
    }
  ]
};
