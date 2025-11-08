import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const Hero = () => {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-16 bg-primary-50 dark:bg-gray-900 overflow-x-hidden"
    >
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 lg:gap-12">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                Karla Cruz
              </h1>

              <h3 className="text-xl md:text-2xl font-semibold text-yellow-500 mb-6">
                Docente Universitaria & Desarrolladora de Software
              </h3>

              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Apasionada por la enseñanza y la tecnología, me especializo en el desarrollo de aplicaciones web modernas
                y en la formación de futuros profesionales en ingeniería de software.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <button onClick={scrollToProjects} className="btn-primary flex items-center gap-2">
                  Ver mis proyectos
                  <FiArrowDown className="w-5 h-5" />
                </button>
                <a href="#contact" className="btn-secondary">
                  Contactarme
                </a>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Kcruz080492"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                >
                  <FiGithub className="w-6 h-6" />
                </a>

                <a
                  href="https://www.linkedin.com/in/karla-cruz-42b471243/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>

                <a
                  href="mailto:kcruz080492@gmail.com"
                  aria-label="Email"
                  className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-primary-600 text-gray-700 dark:text-gray-300 hover:text-white dark:hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                >
                  <FiMail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

<motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="flex justify-center lg:justify-end"
>
 
  <div className="relative overflow-hidden">
    <div className="relative w-64 md:w-80 lg:w-[24rem] aspect-square">
      <div className="absolute inset-0 bg-primary-500 rounded-full blur-3xl opacity-20 pointer-events-none" />


      <img

        src={`https://res.cloudinary.com/dqstycwjr/image/upload/v1762534485/Karla_photo_ptlyec.png`}
        alt="Karla Cruz - Docente y Desarrolladora de Software"
        className="relative z-10 w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-800 shadow-2xl"
        width={768}
        height={768}
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />

      {/* Aro animado */}
      <div className="absolute inset-2 rounded-full border-4 border-primary-500 opacity-50 animate-spin-slow" />
    </div>
  </div>
</motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;