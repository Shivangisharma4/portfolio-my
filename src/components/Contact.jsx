import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
    id="contact"
      className="contact py-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container text-center">
        <motion.h2
          className="text-3xl font-bold text-pink-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <motion.form
          className="mt-8"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <input type="text" placeholder="Your Name" className="block w-full mb-4 p-3 border rounded" />
          <input type="email" placeholder="Your Email" className="block w-full mb-4 p-3 border rounded" />
          <textarea placeholder="Your Message" className="block w-full mb-4 p-3 border rounded"></textarea>
          <button className="cta-button w-full py-3">Submit</button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
