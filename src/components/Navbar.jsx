import React from "react";
import { motion } from "framer-motion";

const TABS = [
  { label: "About", value: "about" },
  { label: "Blogs", value: "blogs" },
  { label: "Projects", value: "projects" },
  { label: "Publications", value: "publications" },
  { label: "Contact", value: "contact" },
  { label: "Vault", value: "vault"}
];

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-800/70 backdrop-blur-md py-4 px-6">
      <ul className="flex justify-center gap-6 text-white font-medium">
        {TABS.map(({ label, value }) => (
          <motion.li
            key={value}
            onClick={() => onTabChange(value)}
            className={`cursor-pointer capitalize ${
              activeTab === value
                ? "text-pink-400 underline"
                : "hover:text-pink-300"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {label}
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
