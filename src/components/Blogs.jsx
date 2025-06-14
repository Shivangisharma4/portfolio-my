import { motion } from "framer-motion";

const blogs = [
  {
    title: "Database Management System (DBMS) — I",
    link: "https://medium.com/@Shivangi444/database-management-system-dbms-i-7adf4f1dc3ea",
  },
  {
    title: "Finite Automata — I",
    link: "https://medium.com/@Shivangi444/finite-automata-i-be19fec63706",
  },
  {
    title: "Cognitive Dissonance — A Psychological Theory",
    link: "https://medium.com/@Shivangi444/cognitive-dissonance-a-psychological-theory-9811b5f825b7",
  },
  {
    title: "GeeksForGeeks Articles",
    link: "https://www.geeksforgeeks.org/user/shivangi444/contributions/",
  },
];

const Blogs = () => {
  return (
    <motion.section
      id="blogs"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">My Blogs</h2>

      <ul className="space-y-4 text-lg sm:text-xl">
        {blogs.map((blog, index) => (
          <li key={index}>
            <a
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-pink-400 hover:underline transition-colors duration-300"
            >
              {blog.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Blogs;
