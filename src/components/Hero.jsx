import { motion } from 'framer-motion';
import profileImg from '../assets/profile.jpeg'; // adjust path if needed

const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero py-24 px-6 flex flex-col items-center justify-center text-center bg-black text-white overflow-hidden min-h-screen"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Container with max-width to prevent stretching */}
      <div className="w-full max-w-screen-sm mx-auto px-4">
        {/* Heading and Image Row */}
        <motion.div
          className="flex flex-col items-center gap-4 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="flex items-center gap-4 justify-center">
            <h1 className="text-2xl md:text-3xl font-semibold leading-tight break-words max-w-full py-4">
              Hi, I’m Shivangi
            </h1>
            <img
              src={profileImg}
              alt="Shivangi"
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-pink-500 shadow-md"
            />
          </div>
        </motion.div>

        {/* Description Paragraph */}
        <motion.p
  className="max-w-2xl text-base md:text-lg leading-relaxed mx-auto mt-8"
  initial={{ opacity: 0, y: 30 }} // Animation for sliding up
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.6, duration: 1 }}
  dangerouslySetInnerHTML={{
    __html: `I’m someone who enjoys making beautiful, meaningful and fun things—whether it’s through code or words.<br />
    I love building creative digital experiences, working on side projects that reflect curiosity, and writing blogs on topics that fascinate me.<br />
    I’m learning constantly, exploring what clicks, and chasing ideas that feel like mine.<br />
    I have a major interest in reading philosophy, psychology, and historical fiction with some novels thrown in.<br />
    I am also a sucker for being a polyglot before I die.<br />
    I take parts of my life as a game where every skill I learn makes me a better player.`
  }}
/>


{/* Tech Stack Section */}
<motion.div
  className="mt-16 text-center" // Increased margin-top to create more space between the paragraph and tech stack section
  initial={{ opacity: 0, y: 30 }} 
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.0, duration: 1 }}
>
  <h2 className="text-xl font-semibold text-white mb-4">My Tech Stack</h2> {/* "My Tech Stack" label */}
  {/* Tech Stack Navbar */}
  <motion.nav
    className="w-full max-w-4xl mx-auto bg-transparent rounded-full py-2 px-4 flex flex-wrap justify-center items-center gap-4 text-white text-sm sm:text-base font-medium shadow-md"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.3, duration: 0.8, type: 'spring' }}
  >
    {[
      { label: 'React.js' },
      { label: 'Node.js' },
      { label: 'Express.js' },
      { label: 'JavaScript' },
      { label: 'MongoDB' },
      { label: 'Tailwind CSS' },
      { label: 'Framer Motion' },
      { label: 'Git' },
    ].map(({ label }, index) => (
      <motion.li
        key={index}
        whileHover={{ scale: 1.05, color: '#F472B6' }}  // Hover effect on text color
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-3 py-1 rounded-full hover:text-pink-400 transition"
      >
        <span>{label}</span>
      </motion.li>
    ))}
  </motion.nav>
</motion.div>

      </div>
    </motion.section>
  );
};

export default Hero;
