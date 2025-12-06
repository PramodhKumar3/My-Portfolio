import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase, Code, School, ArrowDownCircle } from 'lucide-react';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { scroller } from 'react-scroll';

const Experience = () => {
  const { theme } = useContext(ThemeContext);

  const experiences = [
    {
      title: "Bachelor of Science in Computer Science",
      company: "Gayatri College of Science & Management",
      date: "2019 – 2022",
      description: "Graduated with 8.42 CGPA. Focused on C, MS-Office, OOPs and Java.",
      icon: <School />,
      iconStyle: { background: '#9C27B0', color: '#fff' }
    },
    {
      title: "Master of Computer Applications",
      company: "Gayatri Vidya Parishad College of Engineering (A)",
      date: "2022 – 2024",
      description: "Graduated with 8.70 CGPA. Focused on Python, Data Structures, OOPs, Networking, and Java Development.",
      icon: <School />,
      iconStyle: { background: '#9C27B0', color: '#fff' }
    },
    // {
    //   title: "Competitive Programming & Achievements",
    //   company: "LeetCode, GFG, CodeVita",
    //   date: "Ongoing",
    //   description: "Solved 10+ DSA problems. CodeVita Global Rank #70000 (R1), #134700 (R2). Ranked 1383 in ICET. Active on GitHub, LinkedIn & LeetCode.",
    //   icon: <Code />,
    //   iconStyle: { background: '#4CAF50', color: '#fff' }
    // },
    {
      title: "Digital Gold Wallet Microservices Project",
      company: "Personal Project",
      date: "Apr 2024",
      description: "Built Digital Gold Wallet with Spring Boot microservices, Eureka, API Gateway, Redis, and MySQL. Implemented modular services with authentication, caching, load balancing, and containerized deployment using Docker & Kubernetes.",
      icon: <Code />,
      iconStyle: { background: '#2196F3', color: '#fff' }
    },
    {
      title: "Software Associate",
      company: "Infosys",
      date: "Dec 2024 – April 2025",
      description: "Developed WanderLust, a Java Full Stack application with Angular for frontend and Spring Boot with MySQL for backend. Implemented user authentication, trip planning, reviews.",
      icon: <Briefcase />,
      iconStyle: { background: '#FF9800', color: '#fff' }
    },
    {
      title: "Software Engineer",
      company: "Capgemini",
      date: "April 2025 – Present",
      description: "Developed Digital Gold Wallet first as a monolith with Spring Boot, MySQL, Spring Security and Thymeleaf, then scaled it into microservices using Spring Boot, Eureka, API Gateway, Docker and Kubernetes for secure and modular architecture.",
      icon: <Briefcase />,
      iconStyle: { background: '#000000', color: '#fff' }
    }
  ];

  // ✅ Reusable scroll function
  const handleScrollToCertifications = () => {
    scroller.scrollTo("certifications", {
      duration: 800,
      smooth: "easeInOutQuart",
      offset: -50, // adjust if navbar overlaps
    });
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6">
      <div className="section-container">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Education</h2>
          <p className="section-subtitle">
            My professional journey, academic milestones, and Masters achievements.
          </p>
        </motion.div>

        {/* Timeline */}
        <VerticalTimeline lineColor={theme === 'dark' ? '#2d2d2d' : '#e5e5e5'}>
          {experiences.map((exp, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element"
              contentStyle={{
                background: theme === 'dark' ? '#1E1E1E' : '#fff',
                boxShadow: theme === 'dark'
                  ? '0 3px 10px rgba(0, 0, 0, 0.4)'
                  : '0 3px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px'
              }}
              contentArrowStyle={{
                borderRight: theme === 'dark'
                  ? '7px solid #1E1E1E'
                  : '7px solid #fff'
              }}
              date={exp.date}
              iconStyle={exp.iconStyle}
              icon={exp.icon}
            >
              <h3 className="vertical-timeline-element-title text-lg sm:text-xl font-bold">
                {exp.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-primary mt-1">
                {exp.company}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mt-3 text-sm sm:text-base">
                {exp.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>

        {/* ✅ Scroll Down Button */}
        <div className="flex flex-col items-center mt-12">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleScrollToCertifications}
            className="text-primary animate-bounce"
          >
            <ArrowDownCircle size={42} />
          </motion.button>
          <span className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Scroll Down
          </span>
        </div>
      </div>
    </section>
  );
};

export default Experience;
