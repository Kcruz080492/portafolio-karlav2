import { motion } from 'framer-motion';
import { FiCode, FiBookOpen, FiUsers } from 'react-icons/fi';

const About = () => {
  const highlights = [
    {
      icon: <FiBookOpen className="w-6 h-6" />,
      title: 'Educadora',
      description: 'Docente universitaria especializada en desarrollo de software'
    },
    {
      icon: <FiCode className="w-6 h-6" />,
      title: 'Desarrolladora',
      description: 'Experiencia en JavaScript, C#, PHP y tecnologías web modernas'
    },
    {
      icon: <FiUsers className="w-6 h-6" />,
      title: 'Mentora',
      description: 'Formando a la próxima generación de desarrolladores'
    }
  ];

  return (
    <section id="about" className="section-container bg-white dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Sobre mi</h2>
              
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8 text-center">
            Soy docente universitaria en el área de desarrollo de software, con experiencia en la enseñanza de lenguajes como JavaScript, C# y PHP. Mi mayor motivación es inspirar a mis estudiantes a aprender creando, integrando metodologías activas y herramientas digitales en cada clase.
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-12 text-center">
            Me apasiona el diseño de interfaces centradas en el usuario, el aprendizaje constante y la creación de soluciones tecnológicas con impacto educativo. Actualmente busco seguir creciendo como desarrolladora frontend y educadora en entornos digitales.
          </p>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-primary-100 dark:border-gray-600 text-center shadow-md">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-600 text-gray-900 dark:text-white rounded-lg mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default About;