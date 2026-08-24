"use client";

import { motion } from "framer-motion";
import { education } from "@/data/education";

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white tracking-tight">
            EDUCATION
          </h2>

          <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline node */}
                <div className="absolute -left-[5px] top-1 w-[10px] h-[10px] rounded-full bg-accent shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="absolute -left-[1px] top-3 w-[2px] bg-gradient-to-b from-accent to-transparent h-full -z-10"
                />
                
                <h4 className="text-accent text-sm font-bold tracking-widest uppercase mb-2">
                  {item.year}
                </h4>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {item.degree}
                </h3>
                <p className="text-gray-400 text-lg">
                  {item.institution}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
