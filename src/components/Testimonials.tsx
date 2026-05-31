"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah Jenkins", role: "CEO, Quantum", text: "3dwebs completely transformed our digital presence. The 3D website they built helped us raise our Series B." },
  { name: "David Chen", role: "Founder, Nova", text: "Worth every penny. The attention to detail, the performance, and the sheer visual quality is unmatched." },
  { name: "Emily Rodriguez", role: "CMO, Aura", text: "They don't just write code, they engineer experiences. Our conversion rate increased by 210% after launch." },
  { name: "Michael Chang", role: "VP Product, Apex", text: "The most professional agency I've ever worked with. Delivered our complex SaaS frontend ahead of schedule." },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative bg-deep-space overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Client <span className="text-gradient">Testimonials</span>
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex animate-[marquee_25s_linear_infinite] group-hover:[animation-play-state:paused] space-x-6 px-6 w-max">
          {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="w-[350px] md:w-[450px] flex-shrink-0 glass p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-yellow-400 mb-4 gap-1">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
              </div>
              <p className="text-gray-300 text-lg mb-6 line-clamp-3">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-white">{t.name}</h4>
                <p className="text-sm text-electric-blue">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
