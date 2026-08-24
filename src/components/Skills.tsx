"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/skills";

export default function Skills() {
  const categories = [
    { key: "aiMl", label: "AI / ML" },
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "database", label: "Database" },
    { key: "devops", label: "DevOps / Tools" },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white tracking-tight">
            TECH STACK
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <h3 className="text-accent text-sm font-bold tracking-widest uppercase mb-6 border-b border-white/10 pb-4">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skills[category.key as keyof typeof skills].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm text-gray-300 glass rounded-full hover:text-white hover:border-white/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
