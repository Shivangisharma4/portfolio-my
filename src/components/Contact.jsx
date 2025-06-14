import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleMailTo = (e) => {
    e.preventDefault();

    const { from_name, from_email, message } = formData;

    const subject = encodeURIComponent(`Let's Connect - from ${from_name}`);
    const body = encodeURIComponent(`Hi Shivangi,\n\n${message}\n\nFrom: ${from_name}\nEmail: ${from_email}`);

    window.open(`https://outlook.live.com/mail/deeplink/compose?to=shivangi.yourgmail@gmail.com&subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <motion.section
      id="contact"
      className="py-32 px-6 bg-black text-white flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 className="text-3xl font-semibold text-gray-400 mb-6">
        Contact Me
      </motion.h2>

      <motion.p className="text-lg text-center max-w-xl mb-10">
        Have an idea, collaboration, or just want to say hi? Drop me a message.
      </motion.p>

      <motion.form
        onSubmit={handleMailTo}
        className="w-full max-w-lg bg-white bg-opacity-5 p-6 rounded-2xl border border-white border-opacity-10 shadow-md backdrop-blur-sm space-y-4"
      >
        <input
          type="text"
          name="from_name"
          value={formData.from_name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-transparent border border-white border-opacity-20 focus:outline-none focus:ring-1 focus:ring-pink-400 placeholder-white placeholder-opacity-60 text-white"
          required
        />
        <input
          type="email"
          name="from_email"
          value={formData.from_email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-transparent border border-white border-opacity-20 focus:outline-none focus:ring-1 focus:ring-pink-400 placeholder-white placeholder-opacity-60 text-white"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-md bg-transparent border border-white border-opacity-20 focus:outline-none focus:ring-1 focus:ring-pink-400 placeholder-white placeholder-opacity-60 text-white"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-md bg-slate-400 hover:bg-pink-500 transition text-gray-700 font-medium"
        >
          Send via mail
        </button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
