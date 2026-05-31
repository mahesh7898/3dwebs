"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const projects = [
  {
    title: "Quantum Finance",
    category: "SaaS Application",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Nova E-Commerce",
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Aura AI",
    category: "AI Integration",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    color: "from-emerald-400 to-cyan-500"
  },
  {
    title: "Apex Logistics",
    category: "Enterprise System",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    color: "from-orange-400 to-red-500"
  }
];

export default function Portfolio() {
  return (
    <section id="work" className="py-32 relative bg-[#030303] border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
            >
              Selected <span className="text-gradient">Works</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-400 max-w-xl"
            >
              A showcase of our finest digital experiences. Built for scale, designed for conversion.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors flex items-center gap-2"
          >
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group cursor-pointer ${i % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-white/5">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500 z-10 mix-blend-overlay`} />
                
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-45 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>
              
              <div>
                <p className="text-sm text-electric-blue font-medium mb-2 tracking-wider uppercase">{project.category}</p>
                <h3 className="text-3xl font-bold text-white group-hover:text-gray-300 transition-colors">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
