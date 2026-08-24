"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { studyAutomation } from "@/data/education"; // it is exported from education.ts as requested in previous file

const workflow = [
  "LEARN",
  "UNDERSTAND",
  "PRACTICE",
  "AUTOMATE",
  "ANALYZE",
  "IMPROVE",
];

export default function StudyAutomation() {
  return (
    <section id="study-automation" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight uppercase">
            Automation In Studying
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto italic">
            "Using technology to make learning more organized, efficient and interactive."
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Interactive Workflow */}
          <div className="flex flex-col items-center justify-center">
            {workflow.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.15 }}
                  className={`px-8 py-4 rounded-xl border font-bold tracking-widest ${
                    index === 3 
                      ? "bg-accent/10 border-accent text-accent shadow-[0_0_20px_rgba(59,130,246,0.3)]" 
                      : "glass text-white"
                  }`}
                >
                  {step}
                </motion.div>
                
                {index < workflow.length - 1 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: 40, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className="w-px bg-gradient-to-b from-white/30 to-white/10 my-2 flex items-end justify-center"
                  >
                    <ArrowDown size={14} className="text-white/30 translate-y-3" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="sm:col-span-2 mb-6">
              <h3 className="text-xl text-white font-medium mb-2">How I approach smarter learning and productivity.</h3>
              <p className="text-gray-400">A personal philosophy and technical approach to accelerating growth.</p>
            </div>
            
            {studyAutomation.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-6 rounded-2xl hover:bg-white/5 transition-colors border-t border-white/10"
              >
                <h4 className="text-white font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
