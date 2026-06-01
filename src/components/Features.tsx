"use client";
import { motion } from "framer-motion";
import { Zap, MessageSquare, Smartphone, Search, Cpu, Paintbrush, Layers, ShieldCheck } from "lucide-react";

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "We deliver rapid milestones and high-fidelity iterations without sacrificing quality." },
  { icon: MessageSquare, title: "Clear Communication", desc: "Enjoy direct access to creators with transparent, scheduled updates at every step." },
  { icon: Smartphone, title: "Mobile Optimized", desc: "Flawless user experiences that look and function perfectly across all devices and screen sizes." },
  { icon: Search, title: "SEO Ready", desc: "Engineered from the ground up to rank in search results and attract organic business traffic." },
  { icon: Cpu, title: "Modern Technology", desc: "Built using cutting-edge frameworks like React & Next.js for maximum performance and security." },
  { icon: Paintbrush, title: "Custom Design", desc: "Tailored to your specific brand identity, avoiding generic templates or standard layouts." },
  { icon: Layers, title: "Scalable Architecture", desc: "A robust code foundation prepared to handle growing user traffic and future feature rollouts." },
  { icon: ShieldCheck, title: "Ongoing Support", desc: "Continuous maintenance and dedicated troubleshooting post-launch so your site remains secure." }
];

export default function Features() {
  return (
    <section id="why-choose-us" className="py-32 relative bg-deep-space border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Why Choose <span className="text-gradient">3dwebs</span>
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
                whileHover={{ y: -6, borderColor: "rgba(59, 130, 246, 0.3)", backgroundColor: "rgba(255, 255, 255, 0.04)" }}
                className="bg-white/[0.02] border border-white/5 p-6 rounded-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-electric-blue/10 flex items-center justify-center mb-4 text-electric-blue">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
