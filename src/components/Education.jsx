<<<<<<< HEAD
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Maestría en Docencia Universitaria',
      institution: 'Universidad de Oriente',
      type: 'Postgrado'
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: 'Ingeniería en Sistemas Informáticos',
      institution: 'Universidad de Oriente',
      type: 'Pregrado'
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Bootcamp Full Stack Jr. Developer',
      institution: 'Kodigo',
      type: 'Certificación'
    }
  ];

  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Educación y Certificaciones</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium whitespace-nowrap">
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

=======
import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Maestría en Docencia Universitaria',
      institution: 'Universidad de Oriente',
      type: 'Postgrado'
    },
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: 'Ingeniería en Sistemas Informáticos',
      institution: 'Universidad de Oriente',
      type: 'Pregrado'
    },
    {
      icon: <FiAward className="w-6 h-6" />,
      title: 'Bootcamp Full Stack Jr. Developer',
      institution: 'Kodigo',
      type: 'Certificación'
    }
  ];

  return (
    <section id="education" className="section-container bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Educación y Certificaciones</h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
            >
              <div className="shrink-0 w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium whitespace-nowrap">
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

>>>>>>> 0c78b10 (initial commit)
export default Education;