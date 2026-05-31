"use client";
import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Discovery", desc: "Understanding your vision, market, and core objectives." },
  { num: "02", title: "Strategy", desc: "Defining the architecture, tech stack, and user journeys." },
  { num: "03", title: "Design", desc: "Creating world-class, conversion-optimized interfaces." },
  { num: "04", title: "Development", desc: "Writing clean, scalable code with cutting-edge tech." },
  { num: "05", title: "Testing", desc: "Rigorous QA to ensure flawless performance on all devices." },
  { num: "06", title: "Launch", desc: "Deploying the product to the world seamlessly." },
  { num: "07", title: "Support", desc: "Ongoing maintenance, analytics, and iterations." }
];

export default function Process() {
  return (
    <section id="process" className="py-32 relative bg-deep-space overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Development <span className="text-gradient">Process</span>
          </motion.h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/10 md:-translate-x-1/2">
            <motion.div 
              className="absolute top-0 w-full bg-gradient-to-b from-electric-blue via-neon-purple to-cyan-glow"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex flex-col gap-12 md:gap-24">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={step.num} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}>
                  
                  {/* Content */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}
                  >
                    <div className="text-sm font-bold text-electric-blue mb-2 tracking-widest">PHASE {step.num}</div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </motion.div>

                  {/* Dot */}
                  <div className="absolute left-[16px] md:left-1/2 w-6 h-6 rounded-full bg-deep-space border-4 border-neon-purple md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(139,92,246,0.5)]"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
