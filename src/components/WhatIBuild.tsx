"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "AI Systems",
    description: "Building intelligent applications using machine learning and AI models.",
    number: "01"
  },
  {
    title: "Computer Vision",
    description: "Real-time vision systems using cameras, object detection and face recognition.",
    number: "02"
  },
  {
    title: "Full Stack Applications",
    description: "Building complete applications with modern frontend and backend technologies.",
    number: "03"
  },
  {
    title: "Automation",
    description: "Creating workflows that reduce repetitive work and improve productivity.",
    number: "04"
  }
];

export default function WhatIBuild() {
  return (
    <section className="py-24 bg-secondary-bg/50 border-y border-white/5 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-white tracking-tight">
            WHAT I BUILD
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass p-8 rounded-2xl relative overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:border-accent/50"
              >
                <div className="absolute -right-4 -top-4 text-8xl font-bold text-white/[0.03] group-hover:text-white/[0.05] transition-colors pointer-events-none">
                  {card.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 relative z-10">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed relative z-10">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
