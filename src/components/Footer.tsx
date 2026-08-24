"use client";

import { ArrowUp } from "lucide-react";
import { config } from "@/data/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="py-8 border-t border-white/5 bg-black">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col md:items-start items-center">
          <span className="text-white font-bold tracking-widest text-lg">
            {config.name.toUpperCase()}
          </span>
          <span className="text-gray-500 text-sm mt-1">
            AI & DATA SCIENCE • AI • FULL STACK
          </span>
        </div>

        <div className="text-gray-500 text-sm">
          © {currentYear} {config.name}
        </div>

        <button
          onClick={scrollToTop}
          className="w-10 h-10 glass rounded-full flex justify-center items-center text-gray-400 hover:text-white hover:border-white/30 transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
