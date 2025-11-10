import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projectsData } from '../data/projectsData';

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-white dark:bg-gray-800">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Proyectos Destacados</h2>

        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Proyectos desarrollados durante el Bootcamp Full Stack Jr. Developer de Kodigo
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              {/* Project Image Placeholder 
              <div className="h-48 bg-primary-500 flex items-center justify-center">
                <span className="text-gray-900 dark:text-white text-4xl font-bold">
                  {project.title.charAt(0)}
                </span>
              </div>*/}

              {/* Project Image Placeholder */}
              <div className="h-48 bg-primary-500 flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>


              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 font-medium mb-3">
                  {project.role}
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/30 text-gray-600 dark:text-gray-300 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {/* Link a GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span className="text-sm font-medium">Código</span>
                  </a>

                  {/* Link a Demo (opcional) */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span className="text-sm font-medium">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;