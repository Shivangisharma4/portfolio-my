import { motion } from 'framer-motion';
import { publications } from './data';

const Publications = () => {
  return (
    <motion.section
      id="publications"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-10">Publications</h2>

      <div className="flex flex-col gap-5 items-center w-full max-w-screen-xl">
        {/* Regular paragraph with space between 'Writers Pocket' and the rest of the text */}
        <p className="text-white text-lg mb-8">
          Three of my poems were selected in three different competitions by 
          <a href="https://writerspocket.com/" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 mx-2">
            Writers Pocket
          </a>
          and got published in three different book collections. Check out the publications below :D
        </p>

        {publications.map((publication, index) => (
          <motion.a
            key={index}
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-xl py-5 px-6 border border-white hover:border-pink-500 hover:text-pink-400 transition-all duration-300 w-full md:w-2/3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontSize: '18px' }}
          >
            {publication.title}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Publications;
