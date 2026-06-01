"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ from = 0, to, duration = 2, suffix = "" }: { from?: number, to: number, duration?: number, suffix?: string }) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (inView) {
      let startTime: number;
      let animationFrame: number;

      const updateCounter = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * (to - from) + from));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(updateCounter);
        }
      };

      animationFrame = requestAnimationFrame(updateCounter);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView, from, to, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}

export default function Trust() {
  const stats = [
    { label: "Custom Built", value: "100%", isNumber: true, numVal: 100, suffix: "%" },
    { label: "Modern Tech Stack", value: "Modern", isNumber: false },
    { label: "Performance Optimized", value: "99+", isNumber: true, numVal: 99, suffix: "+" },
    { label: "Mobile First", value: "Mobile First", isNumber: false },
  ];

  const logos = [
    "React",
    "Next.js",
    "Three.js",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "AWS",
    "Framer Motion"
  ];

  return (
    <section className="py-24 relative z-10 bg-deep-space border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-12 font-medium">
          BUILT WITH MODERN TECHNOLOGIES
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-24 opacity-60">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="text-lg md:text-xl font-bold tracking-tight text-white/80 font-mono hover:text-white transition-colors"
            >
              {logo}
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl md:text-5xl font-extrabold text-white mb-2 font-mono">
                {stat.isNumber ? (
                  <Counter to={stat.numVal!} suffix={stat.suffix} />
                ) : (
                  <span className="text-gradient">{stat.value}</span>
                )}
              </div>
              <div className="text-xs md:text-sm text-gray-400 font-medium tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
