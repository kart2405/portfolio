import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Graduate Assistant',
    company: 'Texas Tech University',
    period: 'Dec 2024 – May 2025',
    description: [
      'Designed, administered, and published surveys on the Qualtrics platform, ensuring accurate implementation with a strong emphasis on user experience and design clarity.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'IESoft Technologies',
    period: 'July 2022 – July 2023',
    description: [
      'Resolved bugs and implemented UI improvements, enhancing application stability and user experience.',
      'Enhanced API data integration and transitioned to backend development using NodeJS, resulting in increased functionality and improved code quality.',
    ],
  },
  {
    title: 'Web Developer',
    company: 'Mantix Digital Solutions',
    period: 'May 2022 – July 2022',
    description: [
      'Developed a Django web app for file uploads and image processing.',
      'Configured views, URL patterns, and media directories; used Python Notebook for file processing and display.',
    ],
  },
  {
    title: 'Residential Tutor',
    company: 'Texas Tech University',
    period: 'Aug 2023 – Dec 2023',
    description: [
      'Guided and mentored students in residential life, promoting academic excellence and community engagement.',
    ],
  },
  {
    title: 'Vice President, Student Development Council',
    company: 'IIIT Sri City',
    period: 'Aug 2022 – June 2023',
    description: [
      'Led initiatives to enhance student growth, coordinated campus-wide events, and represented student interests in institutional planning.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-dark/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading">Experience</h2>
          <p className="subheading max-w-3xl mx-auto">
            My professional journey and leadership roles
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="bg-white dark:bg-dark/50 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <div className="text-primary mb-4">
                  {exp.company} • {exp.period}
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 