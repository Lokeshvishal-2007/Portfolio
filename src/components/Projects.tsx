"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary-bg/30 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white tracking-tight">
            FEATURED PROJECTS
          </h2>

          <div className="flex flex-col gap-24">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-12 items-center group`}
              >
                {/* Project Image Area */}
                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl glass aspect-[4/3] flex items-center justify-center">
                  <div className="absolute inset-0 bg-accent/5 mix-blend-overlay group-hover:bg-transparent transition-colors duration-500 z-10" />
                  
                  {/* Image Placeholder logic: we can use a subtle pattern since images might not exist yet */}
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1)_0,rgba(5,5,5,1)_100%)] z-0" />
                  <motion.div
                    className="relative z-0 w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url(${project.imageUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  >
                    {/* Fallback if image fails or is a placeholder */}
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/20 font-mono text-sm bg-black/40 backdrop-blur-sm">
                       <span className="text-4xl font-bold mb-2">{project.id}</span>
                       <span>{project.title} Preview</span>
                    </div>
                  </motion.div>
                </div>

                {/* Project Info */}
                <div className="w-full lg:w-1/2 flex flex-col items-start relative">
                  <div className="absolute -left-6 md:-left-12 -top-12 md:-top-16 text-[120px] font-bold text-white/[0.02] pointer-events-none">
                    {project.id}
                  </div>
                  
                  <h4 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">
                    {project.subtitle}
                  </h4>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    {project.title}
                  </h3>
                  
                  <div className="glass p-6 rounded-xl mb-6 relative z-10 w-full group-hover:-translate-y-1 transition-transform duration-500 group-hover:border-white/20">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8 relative z-10">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-accent-secondary bg-accent-secondary/10 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 relative z-10">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-accent transition-colors font-medium group/btn"
                    >
                      <ExternalLink size={18} />
                      View Project
                      <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
