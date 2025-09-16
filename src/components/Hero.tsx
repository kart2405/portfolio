import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Image from 'next/image'

const pythonCode = `def about_me():
    passion = "technology & creative problem-solving"
    favorite_things = [
        "building websites for fun",
        "solving real-world problems",
        "learning new tech",
        "collaborating with creative minds"
    ]
    motto = "Code is poetry, and every bug is a puzzle waiting to be solved."
    return (
        f"Hi, I'm Karthik! My love for {passion} keeps me curious and creative.\\n"
        f"I thrive on {', '.join(favorite_things)}.\\n"
        f"{motto}"
    )`

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-blue-950 dark:via-purple-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: About Me Code Block */}
          <div className="flex flex-col justify-center h-full">
            <motion.pre
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="w-full max-w-xl mx-auto md:mx-0 rounded-2xl overflow-x-auto p-6 text-left bg-[#181c24] dark:bg-[#181c24] text-gray-100 font-mono text-base md:text-lg shadow-xl border border-gray-800"
              style={{
                fontFamily: 'Fira Mono, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
                lineHeight: 1.7,
              }}
            >
              <code>
                <span className="text-[#c678dd]">def</span> <span className="text-[#61afef]">about_me</span><span className="text-white">():</span>{'\n'}
                <span className="pl-4 text-[#e5c07b]">passion</span> <span className="text-white">=</span> <span className="text-[#98c379]">"technology & creative problem-solving"</span>{'\n'}
                <span className="pl-4 text-[#e5c07b]">favorite_things</span> <span className="text-white">= [</span>{'\n'}
                <span className="pl-8 text-[#98c379]">"building websites for fun",</span>{'\n'}
                <span className="pl-8 text-[#98c379]">"solving real-world problems",</span>{'\n'}
                <span className="pl-8 text-[#98c379]">"learning new tech",</span>{'\n'}
                <span className="pl-8 text-[#98c379]">"collaborating with creative minds"</span>{'\n'}
                <span className="pl-4 text-white">]</span>{'\n'}
                <span className="pl-4 text-[#e5c07b]">motto</span> <span className="text-white">=</span> <span className="text-[#98c379]">"continuous improvement is better than delayed perfection"</span>{'\n'}
                <span className="pl-4 text-[#c678dd]">return</span> <span className="text-white">(</span>{'\n'}
                <span className="pl-8 text-[#56b6c2]">f</span><span className="text-[#98c379]">"Hi, I'm Karthik! My love for {'{'}passion{'}'} keeps me curious and creative.\\n"</span>{'\n'}
                <span className="pl-8 text-[#56b6c2]">f</span><span className="text-[#98c379]">"I thrive on {'{'}', '.join(favorite_things){'}'}.\\n"</span>{'\n'}
                <span className="pl-8 text-[#56b6c2]">f</span><span className="text-[#98c379]">"{'{'}motto{'}'}"</span>{'\n'}
                <span className="pl-4 text-white">)</span>
              </code>
            </motion.pre>
          </div>

          {/* Right: Profile, Name, Title, Social, CTA */}
          <div className="flex flex-col items-center md:items-center text-center h-full justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="mb-8 relative flex items-center justify-center"
            >
              <span className="absolute w-[270px] h-[270px] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 z-0" />
              <Image
                src="/profile.jpeg"
                alt="Profile photo of Karthik Konyala"
                width={260}
                height={260}
                className="rounded-full object-cover border-8 border-white dark:border-gray-800 shadow-2xl relative z-10"
                priority
              />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-extrabold mb-2 text-gray-900 dark:text-white"
            >
              Karthik Konyala
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-blue-700 dark:text-blue-400 mb-8 font-semibold"
            >
              Software Engineer
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center space-x-6 mb-10"
            >
              <a
                href="https://github.com/kart2405"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/karthik-konyala-a21aa51b4"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                href="mailto:konyalakarthik24@gmail.com"
                className="p-4 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors text-2xl text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
                aria-label="Email"
              >
                <FiMail />
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="btn px-8 py-4 text-lg font-semibold"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-4 text-lg font-semibold border-2 border-blue-700 dark:border-blue-400 text-blue-700 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors"
              >
                View Projects
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Subtle background accents */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-80 h-80 bg-blue-200/30 dark:bg-blue-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200/30 dark:bg-purple-900/20 rounded-full blur-3xl" />
      </div>
    </section>
  )
}

export default Hero 