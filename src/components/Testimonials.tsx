"use client";
import { motion } from "framer-motion";
import { MessageSquareCode, Zap, Sparkles, HeartHandshake } from "lucide-react";

const expectationCards = [
  {
    icon: MessageSquareCode,
    title: "Transparent Communication",
    desc: "We keep you fully informed at every single stage of development. You will have direct communication with our core creators without middle-men, ensuring your vision is perfectly translated."
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    desc: "Time is money. We build using modern next-gen stacks (like Next.js & React) allowing us to execute rapid development sprints and deliver fully-optimized releases weeks ahead of schedule."
  },
  {
    icon: Sparkles,
    title: "Modern Design Standards",
    desc: "We design websites that feel premium, interactive, and alive. Subtle micro-interactions, custom 3D assets, glassmorphic UI, and smooth layouts make your brand look like an industry leader."
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Support",
    desc: "A launch is just the beginning. We provide continuous support, performance audits, and maintenance cycles to ensure your digital presence is secure, reliable, and up to date."
  }
];

export default function Testimonials() {
  return (
    <section id="expectations" className="py-32 relative bg-deep-space overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="container mx-auto px-6 mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            What Clients <span className="text-gradient">Can Expect</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We hold ourselves to the highest technical and design standards to ensure your digital transformation is frictionless.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {expectationCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-white/5 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-electric-blue/5 to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-electric-blue/20 transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
                  {card.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
