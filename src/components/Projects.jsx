import { motion } from "framer-motion";

const projects = [
  {
    title: "Kathana AI",
    description:
      "A writer-focused AI system that helps with generating, editing, and maintaining consistency in stories. Its still in process of making with python+React",
  },
  {
    title: "Stargazers",
    description:
      "A chill and organizing website for star and galaxy lovers, featuring Pomodoro timers and a planetary orbit to-do list.",
    link: "https://star-gazers-neon.vercel.app/",
  },
  {
    title: "Pinvibe Quiz",
    description:
      "A fun quiz app with an interactive UI to challenge users with interesting questions.",
    link: "https://pinvibe-quiz.vercel.app/",
  },
  {
    title: "April Fools Fortune",
    description:
      "A lighthearted app that tells you your fortune with an April Fools twist.",
    link: "https://fortune-teller-olive.vercel.app/",
  },
  {
    title: "Whack-A-Mole",
    description:
      "A fun cognitive game made with Javascript",
    link: "https://github.com/Shivangisharma4/Whack-A-Mole",
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl font-bold mb-10 text-white">Projects</h2>

      <div className="flex flex-col gap-5 items-center w-full max-w-screen-xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="text-white rounded-xl py-5 px-6 border border-white hover:border-pink-500 transition-all duration-300 w-full md:w-2/3"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.link}
              className="underline text-blue-300 hover:text-pink-300 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
