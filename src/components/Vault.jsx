import { motion } from "framer-motion";

const vaultItems = [
  {
    title: "Clean Code by Robert C. Martin",
    link: "https://www.goodreads.com/book/show/3735293-clean-code",
    type: "book",
  },
  {
    title: "The Mythical Man-Month",
    link: "https://www.goodreads.com/book/show/13629.The_Mythical_Man_Month",
    type: "book",
  },
  {
    title: "Why Software Is Eating the World",
    link: "https://a16z.com/2011/08/20/why-software-is-eating-the-world/",
    type: "blog",
  },
  {
    title: "Human Benchmark",
    link: "https://humanbenchmark.com/",
    type: "tool",
  },
  {
    title: "Are You Locked In",
    link: "https://areyoulocked.in/",
    type: "tool",
  },
  {
    title: "Flight Dynamics Book",
    link: "https://stengel.mycpanel.princeton.edu/FlightDynamics.html",
    type: "book",
  },
];

const Vault = () => {
  return (
    <motion.section
      id="vault"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-16"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">Vault</h2>

      <ul className="space-y-4 text-lg sm:text-xl max-w-2xl w-full">
        {vaultItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-blue-400 hover:underline transition-colors duration-300"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Vault;
