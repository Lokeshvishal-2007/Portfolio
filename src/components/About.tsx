"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Eye, Code, Zap } from "lucide-react";
import { config } from "@/data/config";

const infoCards = [
  { icon: BrainCircuit, title: "AI & ML" },
  { icon: Eye, title: "Computer Vision" },
  { icon: Code, title: "Full Stack" },
  { icon: Zap, title: "Automation" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white tracking-tight">
            ABOUT ME
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-gray-400 text-lg leading-relaxed max-w-xl">
              <p>{config.about}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-white/10 transition-colors"
                  >
                    <Icon className="text-accent mb-3" size={32} />
                    <h3 className="text-white font-medium">{card.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
