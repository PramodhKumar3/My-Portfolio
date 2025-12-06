import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, User, Brain, Linkedin, ArrowDown } from 'lucide-react';
import { Link } from 'react-scroll';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 relative">
      <div className="section-container px-4 sm:px-6">
        {/* Section Title & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-xl sm:text-2xl md:text-3xl">About Me</h2>
          <p className="section-subtitle text-sm sm:text-base">
            Get to know me better, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          {/* About Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-sm md:max-w-md">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800">
                <img 
                  src="/Main_Pic.png" 
                  alt="Pramodh Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 w-16 h-16 sm:w-20 sm:h-20 bg-primary/10 rounded-2xl -z-10 hidden sm:block"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 sm:w-20 sm:h-20 bg-accent/10 rounded-2xl -z-10 hidden sm:block"></div>

              <div className="absolute -top-4 -right-4 bg-white dark:bg-dark-card shadow-lg rounded-full p-2 sm:p-3 hidden sm:block">
                <GraduationCap className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-dark-card shadow-lg rounded-full p-2 sm:p-3 hidden sm:block">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-accent" />
              </div>
            </div>
          </motion.div>

          {/* About content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Name */}
            <div className="flex items-center space-x-3 mb-4">
              <User className="h-6 w-6 text-primary" />
              <h3 className="text-xl sm:text-2xl font-bold">Tamminaina Pramodh Kumar</h3>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="card p-4">
                <h4 className="font-semibold mb-1">Role</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Software Engineer at Capgemini</p>
              </div>

              <div className="card p-4">
                <h4 className="font-semibold mb-1">College</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Gayatri Vidya Parishad College of Engineering</p>
              </div>

              <div className="card p-4">
                <h4 className="font-semibold mb-1">Personality</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Curious, Logical thinker, Quick learner, Problem-solver</p>
              </div>

              <div className="card p-4">
                <h4 className="font-semibold mb-1">Interests</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Backend Development, Microservices, System Design, API Development, Traveling, Photography</p>
              </div>
            </div>

            {/* Goals & Philosophy */}
            <div className="mt-6">
              <div className="flex items-center space-x-3 mb-3">
                <Brain className="h-6 w-6 text-accent" />
                <h3 className="text-lg sm:text-xl font-bold">Goal</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                To work in a top-tier product-based company and contribute to building scalable, efficient, and reliable systems.
              </p>

              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">
                I enjoy solving complex backend challenges, designing robust microservices, and ensuring APIs are clean, secure, and production-ready. With a strong foundation in system design, I focus on writing maintainable code and optimizing system performance.
              </p>

              <a 
                href="https://www.linkedin.com/in/tamminaina-pramodh-kumar-6433a4242" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center text-sm sm:text-base"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                View My LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down to Skills */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Link
          to="skills"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="flex flex-col items-center cursor-pointer group"
        >
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 group-hover:text-accent transition-colors duration-300">
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="h-6 w-6 text-accent" />
          </motion.div>
        </Link>
      </div>
    </section>
  );
};

export default About;