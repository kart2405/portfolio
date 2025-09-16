import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiServer, FiCloud, FiShare2 } from 'react-icons/fi'

const projects = [
  {
    title: 'Identity & Access Management (IAM) System',
    description: 'A comprehensive security solution that redefines how organizations manage user access. Built with modern authentication protocols and role-based access control, this system ensures enterprise-grade security while maintaining simplicity.',
    icon: <FiDatabase className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    status: 'Active',
    technologies: ['FastAPI', 'PostgreSQL', 'Docker', 'SQLAlchemy', 'JWT', 'RBAC'],
    github: 'https://github.com/kart2405/IAM-Identity-Access-Management-System',
    live: '#',
  },
  {
    title: 'API Gateway with Rate Limiting, JWT & RBAC',
    description: 'Production-grade Go API Gateway supporting REST/gRPC, JWT auth, RBAC, and circuit breakers; sustained 1K+ RPS at <30ms p95 with Redis token-bucket rate limiting and CI/CD automation.',
    icon: <FiServer className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    status: 'Completed',
    technologies: ['Go', 'gRPC', 'Redis', 'PostgreSQL', 'Docker', 'JWT', 'RBAC', 'AWS', 'Terraform', 'Ansible', 'GitHub Actions'],
    github: 'https://github.com/kart2405/API_Gateway',
    live: '#',
  },
  {
    title: 'Wobble',
    description: 'A dynamic social platform that brings people together through shared experiences. Features real-time interactions, intelligent content curation, and seamless media sharing capabilities that create meaningful connections.',
    icon: <FiCode className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    status: 'Completed',
    technologies: ['ReactJS', 'NodeJS', 'PostgreSQL', 'AWS S3', 'Redis', 'JWT'],
    github: 'https://github.com/kart2405/wobble-PG-',
    live: '#',
  },
  {
    title: 'GYMBRO',
    description: 'A fitness companion that transforms your workout journey. Combines personalized training plans, progress tracking, and community features to help users achieve their fitness goals with motivation and accountability.',
    icon: <FiServer className="w-8 h-8" />,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    status: 'Completed',
    technologies: ['FastAPI', 'PostgreSQL', 'Docker', 'SQLAlchemy', 'JWT'],
    github: 'https://github.com/kart2405/gymbro',
    live: '#',
  },
  {
    title: 'Rocket Share',
    description: 'A revolutionary file sharing platform that makes collaboration effortless. Features anonymous sharing, secure file management, and real-time progress tracking to streamline how teams work together.',
    icon: <FiShare2 className="w-8 h-8" />,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    status: 'Completed',
    technologies: ['NodeJS', 'Express.js', 'MySQL', 'Bootstrap', 'Mail System'],
    github: 'https://github.com/kart2405/rocket--share',
    live: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="heading">Projects</h2>
          <p className="subheading max-w-3xl mx-auto">
            {/* A collection of projects that showcase my journey in solving complex problems and building innovative solutions */}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700">
                {/* Header with Icon */}
                <div className={`${project.bgColor} p-6 relative overflow-hidden`}>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} text-white shadow-lg`}>
                      {project.icon}
                    </div>
                    <div className="flex space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors bg-white/50 dark:bg-gray-800/50 rounded-lg"
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors bg-white/50 dark:bg-gray-800/50 rounded-lg"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-br ${project.color} rounded-full transform translate-x-16 -translate-y-16`}></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 opacity-10">
                    <div className={`w-full h-full bg-gradient-to-tr ${project.color} rounded-full transform -translate-x-8 translate-y-8`}></div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${project.color} text-white shadow-sm`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                      >
                        <FiGithub className="w-4 h-4" />
                        <span className="text-sm font-medium">GitHub</span>
                      </a>
                      {project.live !== '#' && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 rounded-lg transition-colors text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300"
                        >
                          <FiExternalLink className="w-4 h-4" />
                          <span className="text-sm font-medium">Live Demo</span>
                        </a>
                      )}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} text-white`}>
                      {project.status}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 