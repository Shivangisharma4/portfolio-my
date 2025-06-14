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

      <p className="text-neutral-300 text-lg text-center mb-8 max-w-2xl">
        Three of my poems were selected in three different competitions by 
        <a
          href="https://writerspocket.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:text-pink-500 underline mx-1"
        >
          Writers Pocket
        </a>
        and got published in three different book collections. Check out the publications below :D
      </p>

      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {publications.map((publication, index) => (
          <motion.a
            key={index}
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 border border-neutral-700 rounded-xl hover:border-pink-400 transition-all duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-400 transition">
              {publication.title}
            </h3>
            {publication.description && (
              <p className="text-neutral-400 text-sm">{publication.description}</p>
            )}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Publications;
