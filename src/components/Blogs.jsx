import { motion } from "framer-motion";

const blogs = [
  {
    title: "Database Management System(DBMS) — I",
    link: "https://medium.com/@Shivangi444/database-management-system-dbms-i-7adf4f1dc3ea",
  },
  {
    title: "Finite Automata-I",
    link: "https://medium.com/@Shivangi444/finite-automata-i-be19fec63706",
  },
  {
    title: "Cognitive dissonance — A psychological Theory",
    link: "https://medium.com/@Shivangi444/cognitive-dissonance-a-psychological-theory-9811b5f825b7",
  },
  {
    title: "Geeks For Geeks - Articles",
    link: "https://www.geeksforgeeks.org/user/shivangi444/contributions/",
  },
];

const Blogs = () => {
  return (
    <motion.section
      id="blogs"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold text-white mb-10">My Blogs</h2>

      <div className="flex flex-col gap-5 items-center w-full max-w-screen-xl">
        {blogs.map((blog, index) => (
          <motion.a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white rounded-full py-3 px-6 border border-white hover:border-blue-400 hover:text-blue-300 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: '18px',
              width: 'fit-content',
            }}
          >
            {blog.title}
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;
