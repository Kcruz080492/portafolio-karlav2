import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaReact, 
  FaNode, 
  FaPhp, 
  FaGithub, 
  FaFigma 
} from 'react-icons/fa';
import { 
  SiJavascript, 
  SiTypescript, 
  SiTailwindcss,  
  SiMysql, 
  SiFirebase, 
  SiSupabase, 
  SiNetlify, 
  SiVercel,
  SiCanva
} from 'react-icons/si';

import { 
  TbBrandCSharp 
} from "react-icons/tb";

import { 
  BiServer 
} from "react-icons/bi";

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'HTML5', icon: <FaHtml5 className="w-8 h-8" />, color: 'text-orange-600' },
        { name: 'CSS3', icon: <FaCss3Alt className="w-8 h-8" />, color: 'text-blue-600' },
        { name: 'JavaScript', icon: <SiJavascript className="w-8 h-8" />, color: 'text-yellow-500' },
        { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, color: 'text-blue-500' },
        { name: 'React', icon: <FaReact className="w-8 h-8" />, color: 'text-cyan-500' },
        { name: 'Bootstrap', icon: <FaBootstrap className="w-8 h-8" />, color: 'text-purple-600' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, color: 'text-teal-500' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'PHP', icon: <FaPhp className="w-8 h-8" />, color: 'text-indigo-600' },
        { name: 'C#', icon: <TbBrandCSharp className="w-8 h-8" />, color: 'text-purple-700' },
        { name: 'Node.js', icon: <FaNode className="w-8 h-8" />, color: 'text-green-600' },
        { name: 'Firebase', icon: <SiFirebase className="w-8 h-8" />, color: 'text-yellow-600' },
        { name: 'Supabase', icon: <SiSupabase className="w-8 h-8" />, color: 'text-green-500' }
      ]
    },
    {
      title: 'Bases de Datos',
      skills: [
        { name: 'MySQL', icon: <SiMysql className="w-8 h-8" />, color: 'text-blue-700' },
        { name: 'SQL Server', icon: <BiServer className="w-8 h-8" />, color: 'text-red-600' }
      ]
    },
    {
      title: 'Herramientas',
      skills: [
        { name: 'GitHub', icon: <FaGithub className="w-8 h-8" />, color: 'text-gray-800 dark:text-gray-200' },
        { name: 'Figma', icon: <FaFigma className="w-8 h-8" />, color: 'text-purple-500' },
        { name: 'Canva', icon: <SiCanva className="w-8 h-8" />, color: 'text-cyan-600' },
        { name: 'Netlify', icon: <SiNetlify className="w-8 h-8" />, color: 'text-teal-600' },
        { name: 'Vercel', icon: <SiVercel className="w-8 h-8" />, color: 'text-gray-900 dark:text-white' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-container bg-gray-50 dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Habilidades y Tecnologías</h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <div className={`${skill.color} mb-3`}>
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Metodologías */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Metodologías
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Diseño centrado en el usuario (UCD)', 'ADDIE', 'Aprendizaje activo'].map((methodology, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 bg-primary-100 dark:bg-primary-900/30 text-gray-900 dark:text-white rounded-full font-medium"
              >
                {methodology}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
export default Skills;