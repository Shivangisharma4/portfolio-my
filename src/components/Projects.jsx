import { motion } from "framer-motion";

const projects = [
  {
    title: "Kathana AI",
    description: "A writer-focused AI system that helps with generating, editing, and maintaining consistency in stories.",
    link: "https://huggingface.co/spaces/Shivangi/kathana-ai", 
  },
  {
    title: "Stargazers",
    description: "A chill and organizing website for star and galaxy lovers, featuring Pomodoro timers and a planetary orbit to-do list.",
    link: "#", 
  },
  {
    title: "Pinvibe Quiz",
    description: "A fun quiz app with an interactive UI to challenge users with interesting questions.",
    link: "#", 
  },
  {
    title: "April Fools Fortune",
    description: "A lighthearted app that tells you your fortune with an April Fools twist.",
    link: "#", 
  },
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-container min-h-screen flex flex-col justify-center items-center px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="project-title text-4xl font-bold mb-6 text-white">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="mb-6">{project.description}</p>
            <a
              href={project.link}
              className="footer-link underline text-blue-300 hover:text-pink-300 transition"
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
