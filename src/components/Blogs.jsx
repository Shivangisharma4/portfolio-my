import { motion } from "framer-motion";
import { MagicCard } from "./magicui/MagicCard";

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
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-text dark:text-text-dark">Writing</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {blogs.map((blog, index) => (
          <a
            key={index}
            href={blog.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full group"
          >
            <MagicCard
              className="p-8 justify-center flex-col shadow-2xl hover:shadow-primary/10 transition-shadow duration-300"
              gradientColor="rgba(99, 102, 241, 0.2)"
            >
              <h3 className="text-xl font-semibold text-text dark:text-text-dark group-hover:text-primary transition-colors mb-2">
                {blog.title}
              </h3>
              <p className="text-muted dark:text-muted-dark group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-medium text-sm">
                Read Article <span className="text-lg">→</span>
              </p>
            </MagicCard>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default Blogs;
