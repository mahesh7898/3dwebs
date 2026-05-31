"use client";
import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Cpu, Smartphone, Zap, Headset, Search } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "Rapid prototyping and agile development cycles." },
  { icon: ShieldCheck, title: "Premium Quality", desc: "Bug-free, enterprise-level code architecture." },
  { icon: Cpu, title: "Modern Tech", desc: "Built with the latest highly performant frameworks." },
  { icon: Search, title: "SEO Optimized", desc: "Engineered to rank and dominate search results." },
  { icon: Smartphone, title: "Mobile-First", desc: "Flawless responsive design across all devices." },
  { icon: Rocket, title: "Performance", desc: "95+ Lighthouse scores guaranteed." },
  { icon: Headset, title: "Dedicated Support", desc: "24/7 technical support and maintenance." }
];

export default function Features() {
  return (
    <section className="py-32 relative bg-deep-space border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Why Choose <span className="text-white">3dwebs</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl hover:bg-white/[0.05] transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4 text-electric-blue">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
