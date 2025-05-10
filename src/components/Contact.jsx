import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5pk5glr',
      'template_tqvhxzg',
      form.current,
      'ZY3AyCvLPYo7aq0Ik'
    )
    .then(
      () => {
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  };

  return (
    <motion.section
      id="contact"
      className="py-32 px-6 bg-black text-white flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 className="text-3xl font-semibold text-pink-400 mb-6">
        Contact Me
      </motion.h2>

      <motion.p className="text-lg text-center max-w-xl mb-10">
        Have an idea, collaboration, or just want to say hi? Drop me a message.
      </motion.p>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-lg bg-white bg-opacity-5 p-6 rounded-2xl border border-white border-opacity-10 shadow-md backdrop-blur-sm space-y-4"
      >
        <input
          type="text"
          name="from_name"
          autoComplete="name"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-transparent border border-white border-opacity-20 focus:outline-none focus:ring-1 focus:ring-pink-400 placeholder-white placeholder-opacity-60 text-white"
          required
        />
        <input
          type="email"
          name="from_email"
          autoComplete="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-transparent border border-white border-opacity-20 focus:outline-none focus:ring-1 focus:ring-pink-400 placeholder-white placeholder-opacity-60 text-white"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-md bg-transparent border border-white border-opacity-20 focus:outline-none focus:ring-1 focus:ring-pink-400 placeholder-white placeholder-opacity-60 text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-md bg-pink-500 hover:bg-pink-600 transition text-white font-medium"
        >
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
