"use client";
import { motion } from "framer-motion";
import { Monitor, ShoppingBag, Cloud, Cpu, Settings, Layout, Zap, Wrench } from "lucide-react";
import React from "react";

const services = [
  { icon: Monitor, title: "Custom Website Development", desc: "Award-winning bespoke websites with immersive 3D experiences." },
  { icon: ShoppingBag, title: "E-Commerce Development", desc: "High-conversion online stores with premium architectures." },
  { icon: Cloud, title: "SaaS Development", desc: "Scalable web applications built on modern serverless stacks." },
  { icon: Cpu, title: "AI Integration", desc: "Intelligent automation and AI-driven features for your business." },
  { icon: Settings, title: "Automation Solutions", desc: "Streamlining workflows with custom software automation." },
  { icon: Layout, title: "UI/UX Design", desc: "World-class interface design focused on user conversion." },
  { icon: Zap, title: "Website Optimization", desc: "Lightning fast performance tuning and technical SEO." },
  { icon: Wrench, title: "Maintenance & Support", desc: "Enterprise-grade reliability and continuous improvements." },
];

export default function Services() {
  return (
    <section id="services" className="py-32 relative bg-deep-space">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto"
          >
            We don't just build websites. We engineer digital experiences that dominate your industry.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <TiltCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ service, index }: { service: typeof services[0], index: number }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass-card p-8 group relative overflow-hidden h-full flex flex-col cursor-pointer"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-electric-blue/20 transition-all duration-300 relative z-10">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all relative z-10">
        {service.title}
      </h3>
      
      <p className="text-gray-400 text-sm leading-relaxed relative z-10 flex-grow">
        {service.desc}
      </p>

      <div className="w-full h-[1px] bg-white/10 mt-6 relative z-10 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-electric-blue to-neon-purple -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
      </div>
    </motion.div>
  );
}
