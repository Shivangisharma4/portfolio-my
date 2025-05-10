import { motion } from 'framer-motion';
import profilePic from '../assets/profile.jpeg'; // Adjust the path as needed

const Hero = () => {
  return (
    <motion.section
      className="hero text-white py-40 px-6 bg-gradient-to-r from-blue-800 via-purple-800 to-pink-800"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Top row: Name and Image */}
      <div className="flex items-center justify-center flex-wrap gap-6 mb-10">
        <motion.h1
          className="text-4xl font-bold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hi, I'm Shivangi!
        </motion.h1>
        <motion.img
          src={profilePic}
          alt="Shivangi"
          className="w-20 h-20 rounded-full object-cover shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </div>

      {/* Content below */}
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          className="text-lg md:text-xl mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          I'm a passionate developer with a love for building innovative solutions. I enjoy learning new technologies and applying them to real-world projects.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Currently diving deep into AI, cloud computing, and always exploring new trends. I love writing blogs on topics that spark curiosity and reflection.
        </motion.p>
        <motion.p
          className="text-lg md:text-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          Outside of tech, I’m into reading, writing, and exploring what it means to live a life filled with meaning and adventure. Always ready for what’s next!
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
