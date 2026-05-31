"use client";
import { motion } from "framer-motion";
import Scene from "./3d/Scene";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      <Scene />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
            We Build Websites <br /> That <span className="text-gradient">Grow Businesses</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-3xl mx-auto">
            High-end web development, immersive 3D experiences, and AI integrations for premium brands.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link href="#contact" className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-lg overflow-hidden w-full sm:w-auto text-center flex items-center justify-center gap-2">
            <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></div>
            Start Your Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="#work" className="px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/5 transition-colors w-full sm:w-auto text-center">
            View Our Work
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm tracking-widest text-gray-500 uppercase">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
      </motion.div>
    </section>
  );
}
