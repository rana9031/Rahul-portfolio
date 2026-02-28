import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 88 },
        { name: 'HTML/CSS', level: 90 },
        { name: 'Tailwind CSS', level: 85 }
      ]
    },
    {
      title: 'Backend & Python',
      skills: [
        { name: 'Python', level: 92 },
        { name: 'Django', level: 88 },
        { name: 'Flask', level: 85 },
        { name: 'Node.js', level: 80 }
      ]
    },
    {
      title: 'Database & Tools',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Git', level: 88 },
        { name: 'VS Code', level: 92 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 text-sm sm:text-base px-4">
            Technologies and tools I work with
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIndex * 0.2 }}
                className="bg-white dark:bg-gray-900 p-4 sm:p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-primary">{category.title}</h3>
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1 sm:mb-2">
                        <span className="font-medium text-sm sm:text-base">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 sm:h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: catIndex * 0.2 + index * 0.1 }}
                          className="bg-gradient-to-r from-primary to-secondary h-1.5 sm:h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
