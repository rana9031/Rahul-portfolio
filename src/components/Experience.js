import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiBook } from 'react-icons/fi';

const Experience = () => {
  const education = [
    {
      title: 'Master of Computer Applications (MCA)',
      organization: 'University',
      period: '2025 - 2027',
      description: 'Pursuing advanced studies in Computer Applications with focus on software development, data structures, and modern programming paradigms.'
    },
    {
      title: 'Bachelor of Computer Applications (BCA)',
      organization: 'University',
      period: '2022 - 2025',
      description: 'Completed undergraduate degree in Computer Applications. Gained strong foundation in programming, web development, and database management.'
    }
  ];

  const experience = [
    {
      title: 'Fresher - Python Developer',
      organization: 'Seeking Opportunities',
      period: '2025',
      description: 'Passionate fresher with strong foundation in Python, Django, Flask, and web development. Eager to contribute to innovative projects and grow as a developer.'
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base px-4">
            My academic background and professional journey
          </p>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Experience Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <FiBriefcase className="text-3xl text-primary" />
                <h3 className="text-2xl sm:text-3xl font-bold">Experience</h3>
              </div>
              
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-primary"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-primary font-semibold bg-primary/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-primary font-medium mb-2 text-sm sm:text-base">{item.organization}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <FiBook className="text-3xl text-secondary" />
                <h3 className="text-2xl sm:text-3xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-secondary"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs sm:text-sm text-secondary font-semibold bg-secondary/10 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-secondary font-medium mb-2 text-sm sm:text-base">{item.organization}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
