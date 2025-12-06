import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import courseraML from '../assets/Supervised_Learning.jpg';


interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  link?: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      title: "Master Microservices with Spring Boot and Spring Cloud",
      issuer: "Udemy",
      date: "2025",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-6fba6377-0cce-4cf3-bc05-a96d2ce67c77.jpg",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-6fba6377-0cce-4cf3-bc05-a96d2ce67c77.pdf"
    },
    {
      id: 2,
      title: "Go Java Full Stack with Spring Boot and Angular",
      issuer: "Udemy",
      date: "2025",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-c52ea007-e869-4592-8efd-f7c4775eadf6.jpg",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-c52ea007-e869-4592-8efd-f7c4775eadf6.pdf"
    },
    {
      id: 3,
      title: "Basic Git and Github - essentials",
      issuer: "Udemy",
      date: "2025",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-8cccfc00-bff2-47a1-96da-e919c1be90bb.jpg",
      link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-8cccfc00-bff2-47a1-96da-e919c1be90bb.pdf"
    },
    {
      id: 4,
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Coursera",
      date: "2024",
      image: courseraML,
      link: "https://www.coursera.org/account/accomplishments/verify/LEAU8LDSJM2Y"
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-xl sm:text-2xl md:text-3xl">Certifications</h2>
          <p className="section-subtitle text-sm sm:text-base">
            Professional certifications and achievements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="card overflow-hidden"
            >
              <div className="relative h-40 sm:h-48 md:h-40">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute top-3 right-3 bg-primary text-white p-2 rounded-full">
                  <Award className="h-5 w-5" />
                </div>
              </div>

              <div className="p-4 sm:p-5">
                <h3 className="font-bold text-base sm:text-lg mb-1">{cert.title}</h3>
                <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{cert.date}</p>

                {cert.link && (
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
