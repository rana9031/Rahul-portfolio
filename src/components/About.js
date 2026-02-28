import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiLayout } from 'react-icons/fi';

const About = () => {
  const skills = [
    'Python', 'Django', 'Flask', 'JavaScript', 'React', 'Node.js',
    'HTML', 'CSS', 'MongoDB', 'PostgreSQL', 'Git', 'Tailwind CSS'
  ];

  const features = [
    { icon: <FiCode />, title: 'Clean Code', desc: 'Writing maintainable and scalable code' },
    { icon: <FiLayout />, title: 'Responsive Design', desc: 'Mobile-first approach to development' },
    { icon: <FiDatabase />, title: 'Database Design', desc: 'Efficient data modeling and optimization' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
            I'm a passionate Python Developer with expertise in building modern web applications and data-driven solutions. 
            I love turning ideas into reality through code and creating seamless user experiences with cutting-edge technologies.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-4 sm:p-6 group"
              >
                <motion.div 
                  className="text-3xl sm:text-4xl text-primary mb-3 sm:mb-4 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">{feature.desc}</p>
              </motion.div>
            ))}
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 glass rounded-full text-xs sm:text-sm font-medium hover:shadow-lg hover:shadow-primary/20 transition-all cursor-pointer border border-primary/20"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
