"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { config } from "@/data/config";

export default function Contact() {
  return (
    <section id="contact" className="py-32 relative">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto flex flex-col items-center"
        >
          <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 text-accent">
            <Mail size={32} />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            LET'S BUILD SOMETHING
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-12">
            Have an idea, project or collaboration in mind?
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${config.email}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2"
            >
              <Mail size={18} />
              Email
            </a>
            <a
              href={config.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <FaGithub size={18} />
              GitHub
            </a>
            <a
              href={config.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              <FaLinkedin size={18} />
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
