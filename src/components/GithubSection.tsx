"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { config } from "@/data/config";

export default function GithubSection() {
  // Generate placeholder contribution data
  const weeks = Array.from({ length: 52 });
  const days = Array.from({ length: 7 });

  const getContributionColor = (weekIndex: number, dayIndex: number) => {
    // Deterministic pseudo-random based on week and day index to fix hydration mismatch
    const seed = weekIndex * 13 + dayIndex * 7;
    const pseudoRandom = Math.abs((Math.sin(seed) * 10000) - Math.floor(Math.sin(seed) * 10000));
    
    if (pseudoRandom > 0.8) return "bg-accent";
    if (pseudoRandom > 0.6) return "bg-accent/70";
    if (pseudoRandom > 0.4) return "bg-accent/40";
    if (pseudoRandom > 0.2) return "bg-accent/20";
    return "bg-white/5";
  };

  return (
    <section id="github" className="py-24 bg-secondary-bg/50 border-y border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight uppercase flex items-center gap-3">
              <FaGithub className="text-accent" size={32} />
              CODE / GITHUB
            </h2>
            <p className="text-gray-400 text-lg italic">
              "Building, experimenting and learning through code."
            </p>
          </div>
          
          <a
            href={config.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-accent font-medium group transition-colors"
          >
            Visit GitHub 
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>

        {/* Placeholder GitHub Graph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass p-8 rounded-2xl overflow-x-auto"
        >
          <div className="min-w-[800px]">
            <div className="flex gap-1">
              {weeks.map((_, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-1">
                  {days.map((_, dayIndex) => (
                    <motion.div
                      key={`${weekIndex}-${dayIndex}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.2, 
                        delay: (weekIndex * 0.01) + (dayIndex * 0.01) 
                      }}
                      className={`w-3 h-3 rounded-[2px] ${getContributionColor(weekIndex, dayIndex)}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 text-sm text-gray-500">
              <span>Less</span>
              <div className="flex gap-1 items-center mx-2">
                <div className="w-3 h-3 rounded-[2px] bg-white/5" />
                <div className="w-3 h-3 rounded-[2px] bg-accent/20" />
                <div className="w-3 h-3 rounded-[2px] bg-accent/40" />
                <div className="w-3 h-3 rounded-[2px] bg-accent/70" />
                <div className="w-3 h-3 rounded-[2px] bg-accent" />
              </div>
              <span>More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
