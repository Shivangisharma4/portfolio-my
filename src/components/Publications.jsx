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
      <h2 className="text-3xl md:text-4xl font-bold text-text dark:text-text-dark mb-10">Publications</h2>

      <p className="text-muted dark:text-muted-dark text-lg text-center mb-8 max-w-2xl leading-relaxed">
        Three of my poems were selected in three different competitions by
        <a
          href="https://writerspocket.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary dark:text-primary-glow hover:underline mx-1 font-medium"
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
            className="glass-panel glass-panel-dark p-6 rounded-2xl group hover:border-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <h3 className="text-xl font-semibold text-text dark:text-text-dark mb-2 group-hover:text-primary transition-colors">
              {publication.title}
            </h3>
            {publication.description && (
              <p className="text-muted dark:text-muted-dark text-sm">{publication.description}</p>
            )}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Publications;
