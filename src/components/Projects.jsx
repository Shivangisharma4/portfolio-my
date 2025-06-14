import { motion } from "framer-motion";

const projects = [
  {
    title: "Kathana AI",
    description:
      "A writer‑focused AI system for generating, editing and keeping stories consistent. Built with Python and React. (work in progress)",
    links: { repo:"", demo:""  },
  },
  {
    title: "Stargazers",
    description:
      "Chill website for star & galaxy lovers, with Pomodoro timers and an orbit-themed to‑do list.",
    links: { repo: "https://github.com/Shivangisharma4/StarGazers" ,demo: "https://star-gazers-neon.vercel.app/" },
  },
  {
    title: "Pinvibe Quiz",
    description:
      "Interactive quiz app with unique questions and a fun UI.",
    links: { repo: "https://github.com/Shivangisharma4/pinvibe-Quiz", demo: "https://pinvibe-quiz.vercel.app/" },
  },
  {
    title: "April Fools Fortune",
    description:
      "Lighthearted fortune teller app with an April Fools twist.",
    links: { repo: "https://github.com/Shivangisharma4/April-Fool-s-Fortune-teller", demo: "https://fortune-teller-olive.vercel.app/" },
  },
  {
    title: "Whack-A-Mole",
    description: "Fun cognitive game built with plain JavaScript.",
    links: { repo: "https://github.com/Shivangisharma4/Whack-A-Mole" },
  },
];

const Projects = () => (
  <motion.section
    id="projects"
    className="pt-20 pb-28 px-6 bg-light-mode-bg dark:bg-dark-mode-bg min-h-screen"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold text-center mb-14">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
      {projects.map((p, i) => (
        <motion.div
          key={i}
          className="relative rounded-xl overflow-hidden border border-neutral-400/20 bg-[#111111] hover:shadow-lg transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i }}
        >
          {/* Card Content */}
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-sm text-neutral-300">{p.description}</p>
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity"
            whileHover={{ opacity: 1 }}
          >
            {p.links.repo && (
              <a
                href={p.links.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-neutral-800 px-4 py-2 rounded-full mb-2 hover:bg-neutral-700"
              >
                GitHub
              </a>
            )}
            {p.links.demo && (
              <a
                href={p.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-gradient-to-r from-slate-600 px-4 py-2 rounded-full hover:from-pink-400"
              >
                Live Demo
              </a>
            )}
          </motion.div>
        </motion.div>
      ))}    </div>
  </motion.section>
);

export default Projects;
