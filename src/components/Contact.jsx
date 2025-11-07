import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="w-6 h-6" />,
      label: 'Email',
      value: 'kcruz080492@gmail.com',
      link: 'mailto:kcruz080492@gmail.com'
    },
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: 'GitHub',
      value: 'Kcruz080492',
      link: 'https://github.com/Kcruz080492'
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Karla Cruz',
      link: 'https://www.linkedin.com/in/karla-cruz-42b471243/'
    }
  ];

  return (
    <section id="contact" className="section-container bg-white dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Contacto</h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
          ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.
        </p>

        <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-primary-100 dark:border-gray-600"            >
              <div className="w-14 h-14 bg-primary-600 text-white rounded-full flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center break-all">
                {item.value}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
export default Education;