import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Software Engineer',
    company: 'SecureAI',
    period: 'Sept 2024 – Present',
    description: [
      'Delivered GenAI security platform reducing data exposure by 90% and enabling secure AI adoption across enterprises.',
      'Built role-based access control and document sanitization pipelines with PII/PHI redaction to streamline compliance reviews.',
      'Deployed containerized services on GCP Cloud Run using Docker and CI/CD pipelines for reliable and efficient releases.',
    ],
  },
  {
    title: 'Graduate Assistant',
    company: 'Texas Tech University',
    period: 'Dec 2024 – Jan 2025',
    description: [
      'Designed and maintained real-time data systems using Spring Boot, Apache Kafka, and MySQL, enabling reliable streaming analytics and reduced data latency for academic projects.',
      'Developed and optimized GraphQL and REST APIs integrated with ReactJS frontends, improving accessibility and reducing over-fetching.',
      'Containerized research applications with Docker and mentored undergraduate students on debugging, deployment, and data pipeline design.',
    ],
  },
  {
    title: 'Software Developer',
    company: 'IESoftek Technologies',
    period: 'Feb 2023 – July 2023',
    description: [
      'Optimized backend services in Node.js and Express.js using MongoDB/Mongoose and PostgreSQL; achieved a 25% reduction in errors and 18% faster API responses.',
      'Built and deployed AngularJS frontend modules integrated with REST APIs and secured via RBAC with JWT/OAuth2, reducing unauthorized access issues by 30%.',
      'Launched appointment scheduling for 1,000+ practitioners combining optimized MongoDB queries, Express middleware, and Redis caching.',
      'Automated deployments with Docker, AWS EC2/S3, and GitHub Actions; delivered zero-downtime weekly releases and improved media-heavy response times by 20%.',
      'Integrated Grafana, Prometheus, and structured logging for proactive monitoring, reducing downtime incidents.',
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