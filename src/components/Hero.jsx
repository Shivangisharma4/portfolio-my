import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';
import { Typewriter } from 'react-simple-typewriter';
import backgroundImage from '../assets/gradient.gif'


const Hero = () => {
  return (
    <motion.section
      id="home"
      className="pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center bg-black text-white min-h-screen font-mono"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="w-full max-w-4xl mx-auto px-4">

<motion.div
  className="flex flex-col items-center gap-4 mb-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
      Hi, I’m Shivangi
    </h1>
    <img
      src={profileImg}
      alt="Shivangi"
      className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-pink-500 shadow-md"
    />
  </div>

  {<motion.div
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: '150%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '2rem',
    padding: '2rem',
    borderWidth: '2px',
    borderColor: '#2a2a2a'
  }}
  className="mt-4 mb-16 px-10 py-10 w-full sm:w-[600px] h-[200px] shadow-2xl text-white text-xl sm:text-2xl font-semibold flex items-center justify-center text-center"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.6 }}
>
    <Typewriter
       words={["CS undergrad", "developer", "blogger", "shitposter", "reader"]}
       loop={0}
       cursor
       cursorStyle="_"
       typeSpeed={70}
       deleteSpeed={50}
       delaySpeed={1000}
      />
  </motion.div>
  }
      </motion.div>
        <motion.p
          className="text-base sm:text-lg leading-relaxed text-white px-2 sm:px-0 mt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          dangerouslySetInnerHTML={{
            __html: `I’m someone who enjoys making beautiful, meaningful and fun things—whether it’s through code or words.<br />
              I take parts of my life as a game where every skill I learn makes me a better player.`
          }}
        />

        
        <motion.div
          className="mt-20 text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-6 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-300">
            {[
              "HTML", "CSS", "JavaScript", "React",
              "Tailwind CSS", "Node.js", "Express", "MongoDB",
              "Python", "Git & GitHub", "Framer Motion", "Firebase"
            ].map((tech) => (
              <div
                key={tech}
                className="bg-[#1f1f1f] px-4 py-2 rounded-lg text-center shadow-md border border-gray-700 hover:bg-[#2a2a2a] transition"
              >
                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <h2 className="text-xl font-semibold mb-10 text-center">Education</h2>
          <div className="relative border-l-2 border-pink-500 pl-10 ml-4">
            <div className="mb-14 relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-pink-400 border-4 border-black"></div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold">High School - passed out(2023)</h3>
                <p className="text-sm text-gray-300">Completed 12th grade from orion international school.</p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-[18px] top-1 w-4 h-4 rounded-full bg-purple-400 border-4 border-black"></div>
              <div className="ml-4 text-left">
                <h3 className="text-lg font-bold">B.Tech - current(2023-2027)</h3>
                <p className="text-sm text-gray-300">Currently at RGPV university pursuing engineering in computer science.</p>
              </div>
            </div>
          </div>
        </motion.div>
 
{/* Experience Section */}
<motion.div
  className="mt-20"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1 }}
>
  <h2 className="text-xl font-semibold mb-10 text-center">Works</h2>
  <div className="space-y-8 max-w-3xl mx-auto text-left text-gray-300">
    
    {/* GeeksforGeeks */}
    <div>
      <h3 className="text-lg font-bold text-white">Technical Content Writer – GeeksforGeeks</h3>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Authored multiple articles on Data Structures, Algorithms, and Web Development topics.</li>
      </ul>
    </div>

    {/* GirlScript Summer of Code */}
    <div>
      <h3 className="text-lg font-bold text-white">Open Source Contributor – GirlScript Summer of Code (GSSoC)</h3>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Contributed to diverse open-source projects focusing on React, JavaScript, and documentation improvements.</li>
      </ul>
    </div>

    {/* Campus Internship */}
    <div>
      <h3 className="text-lg font-bold text-white">Frontend Developer Intern – on campus internship cell</h3>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Worked on internal dashboard tools using React and Tailwind CSS.</li>
        <li>Implemented dynamic UI components and improved UX flows.</li>
        <li>Collaborated in Agile sprints and presented features to stakeholders.</li>
      </ul>
    </div>

      </div>
         </motion.div> 


        {/* Support Me */}
        <motion.div
          className="mt-20 text-center max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-xl font-semibold mb-4">Support Me</h2>
          <p className="text-base text-gray-300 mb-4">
            If you appreciate what I do, consider sharing my work, giving feedback, or even buying me a coffee. Every little bit helps and means a lot 💖
          </p>
          <a
  href="https://buymeacoffee.com/wouffle"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-6 py-2 border border-white text-white rounded-md hover:bg-pink-500 hover:text-black transition"
>
  ☕ Buy Me a Coffee
</a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
