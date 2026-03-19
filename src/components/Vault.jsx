import { motion } from "framer-motion";
import { MagicCard } from "./magicui/MagicCard";
import { Book, Code, PenTool, Link } from "lucide-react";

const vaultItems = [
  {
    title: "Clean Code",
    link: "https://www.goodreads.com/book/show/3735293-clean-code",
    type: "Book",
    icon: Book
  },
  {
    title: "The Mythical Man-Month",
    link: "https://www.goodreads.com/book/show/13629.The_Mythical_Man_Month",
    type: "Book",
    icon: Book
  },
  {
    title: "Software is Eating the World",
    link: "https://a16z.com/2011/08/20/why-software-is-eating-the-world/",
    type: "Blog",
    icon: PenTool
  },
  {
    title: "Human Benchmark",
    link: "https://humanbenchmark.com/",
    type: "Tool",
    icon: Code
  },
  {
    title: "Are You Locked In",
    link: "https://areyoulocked.in/",
    type: "Tool",
    icon: Code
  },
  {
    title: "Flight Dynamics",
    link: "https://stengel.mycpanel.princeton.edu/FlightDynamics.html",
    type: "Resource",
    icon: Link
  },
];

const Vault = () => {
  return (
    <motion.section
      id="vault"
      className="min-h-screen py-16 px-6 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-text dark:text-text-dark">The Vault</h2>

      <div className="grid grid-cols-1 gap-4 w-full max-w-2xl px-2">
        {vaultItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <MagicCard
              className="p-4 px-6 flex-row items-center justify-between shadow-sm hover:shadow-md transition-all duration-300"
              gradientColor="rgba(20, 184, 166, 0.15)"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-lg bg-secondary/10 text-secondary dark:text-secondary-glow">
                  <item.icon size={18} />
                </div>
                <div>
                  <h3 className="font-medium text-text dark:text-text-dark">{item.title}</h3>
                  <p className="text-xs text-muted dark:text-muted-dark uppercase tracking-wider font-semibold opacity-70">{item.type}</p>
                </div>
              </div>
              <span className="text-muted/40 group-hover:text-secondary group-hover:translate-x-1 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7" /></svg>
              </span>
            </MagicCard>
          </a>
        ))}
      </div>
    </motion.section>
  );
};

export default Vault;
