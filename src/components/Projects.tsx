import { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, ExternalLink, Github, ArrowDown } from 'lucide-react';
import { scroller } from 'react-scroll';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink: string;
  demoLink?: string;
}

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Digital Gold Wallet Microservices Backend',
      description:
        'A scalable digital wallet backend system using microservices, Spring Boot, Spring Security, and MySQL. Features include authentication, inventory, order, and product management.',
      image: 'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg',
      techStack: ['Java', 'Spring Boot', 'MySQL', 'Eureka', 'Microservices', 'Docker', 'Kubernetes', 'API-Gateway'],
      githubLink: 'https://github.com/PramodhKumar3/Digital-Gold-Wallet',
    },
    {
      id: 2,
      title: 'WanderLust',
      description:
        'A Java Full Stack travel booking application with Angular for the frontend and Spring Boot with MySQL for the backend. Features include user authentication, trip planning, and reviews, providing a complete travel experience platform.',
      image: 'https://images.pexels.com/photos/3184430/pexels-photo-3184430.jpeg',
      techStack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST APIs'],
      githubLink: 'https://github.com/PramodhKumar3/WanderLust',
    },
    {
      id: 3,
      title: 'Blockchain-Based Organ Donation Management',
      description:
        'A blockchain-powered system that ensures transparency and security in organ donation management. It provides donor-recipient matching, immutable transaction records, and prevents data tampering in the healthcare system.',
      image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg',
      techStack: ['Blockchain', 'Ethereum', 'Solidity', 'Smart Contracts', 'HTML', 'CSS'],
      githubLink: 'https://github.com/PramodhKumar3/blockchain-based-management-for-organ-donation',
    },
    // {
    // id: 4,
    // title: 'Gold Wallet Application',
    // description:
    //   'A digital wallet application that allows users to securely manage gold transactions. Built with Spring Boot microservices, Spring Security for authentication, MySQL for storage, and containerized using Docker and Kubernetes with service discovery and API Gateway for scalability.',
    // image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg',
    // techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL', 'Eureka', 'Docker', 'Kubernetes', 'API-Gateway'],
    // githubLink: 'https://github.com/PramodhKumar3/Gold-Wallet-Web-Application',
    // },
    // {
    // id: 5,
    // title: 'Gold Wallet with Spring Security',
    // description:
    //   'A secure digital wallet for managing gold transactions. Integrated Spring Security for authentication and authorization, ensuring robust access control and data protection. Backend powered by Spring Boot and MySQL.',
    // image: 'https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg',
    // techStack: ['Java', 'Spring Boot', 'Spring Security', 'MySQL'],
    // githubLink: 'https://github.com/PramodhKumar3/Gold-Wallet-with-Spring-Security',
    // },
  ];

  // Function to scroll smoothly to Experience section
  const scrollToExperience = () => {
    scroller.scrollTo('experience', {
      smooth: true,
      duration: 600,
      offset: -50,
    });
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A showcase of my backend development projects and systems.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card overflow-hidden group relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-60 sm:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

                {/* Tech stack overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={`${project.id}-${tech}`}
                      className="text-xs px-2 py-1 rounded-full bg-primary/80 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5 mr-1" />
                    <span>Code</span>
                  </a>

                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-1" />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Left border hover effect */}
              <motion.div
                className="absolute top-0 left-0 w-1 bg-primary h-0 group-hover:h-full transition-all duration-300"
                animate={{ height: hoveredProject === project.id ? '100%' : '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* GitHub More Projects */}
        <div className="flex justify-center mt-16">
          <a
            href="https://github.com/PramodhKumar3"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Code className="mr-2 h-5 w-5" />
            View More Projects
          </a>
        </div>

        {/* Scroll Down to Experience */}
        <div className="flex flex-col items-center mt-12">
          <span className="text-gray-600 dark:text-gray-400 text-sm mb-2">Scroll Down</span>
          <button
            onClick={scrollToExperience}
            className="animate-bounce text-primary hover:text-primary/70"
          >
            <ArrowDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
