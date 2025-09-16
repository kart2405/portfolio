import { motion } from 'framer-motion'
import { FiCode, FiServer, FiDatabase, FiLayout, FiUser, FiBook, FiAward, FiMapPin } from 'react-icons/fi'

const skills = [
  {
    icon: <FiCode className="w-6 h-6" />,
    title: 'Frontend Development',
    description: 'ReactJS, AngularJS, JavaScript, TypeScript, HTML, CSS, Bootstrap',
    proficiency: 85,
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: <FiServer className="w-6 h-6" />,
    title: 'Backend Development',
    description: 'Node.js, Express.js, FastAPI, Django, Python, Java, Go, REST, GraphQL',
    proficiency: 90,
    color: 'from-green-500 to-green-600',
  },
  {
    icon: <FiDatabase className="w-6 h-6" />,
    title: 'Databases & DevOps',
    description: 'PostgreSQL, MongoDB, MySQL, Redis, Docker, Git, CI/CD, AWS S3',
    proficiency: 80,
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: <FiLayout className="w-6 h-6" />,
    title: 'AI & Machine Learning',
    description: 'PyTorch, TensorFlow, scikit-learn, OpenCV, NumPy, Pandas',
    proficiency: 75,
    color: 'from-orange-500 to-orange-600',
  },
]

const education = [
  {
    degree: 'Master of Science in Computer and Information Sciences',
    school: 'Texas Tech University',
    location: 'Lubbock, Texas',
    duration: 'Aug 2023 -- May 2025',
    gpa: '3.8',
    type: 'Master\'s',
    color: 'from-blue-500 to-blue-600',
  },
  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'Indian Institute of Information Technology, Sri City',
    location: 'Sri City, India',
    duration: 'Aug 2019 -- May 2023',
    gpa: '3.7',
    type: 'Bachelor\'s',
    color: 'from-green-500 to-green-600',
  },
]

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Education Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 bg-gradient-to-r ${edu.color} rounded-lg text-white mr-4`}>
                    <FiBook className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{edu.school}</p>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <FiMapPin className="w-4 h-4 mr-2 text-blue-500" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <FiAward className="w-4 h-4 mr-2 text-green-500" />
                  <span>{edu.duration}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold mr-2">GPA:</span>
                  <span>{edu.gpa}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mr-4`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{skill.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{skill.proficiency}% Proficiency</p>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Skill Level</span>
                  <span className="text-xs font-semibold text-gray-900 dark:text-white">{skill.proficiency}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </div>
              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2">
                {skill.description.split(', ').slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${skill.color} text-white`}
                  >
                    {tech}
                  </span>
                ))}
                {skill.description.split(', ').length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400">
                    +{skill.description.split(', ').length - 3} more
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About 