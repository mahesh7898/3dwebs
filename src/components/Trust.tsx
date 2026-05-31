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
    { label: "Projects Delivered", value: 150, suffix: "+" },
    { label: "Client Satisfaction", value: 99, suffix: "%" },
    { label: "Years of Experience", value: 10, suffix: "+" },
    { label: "Awards Won", value: 25, suffix: "+" },
  ];

  const logos = ["Vercel", "Stripe", "Linear", "Framer", "Apple", "Github"];

  return (
    <section className="py-24 relative z-10 bg-deep-space border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-gray-500 uppercase tracking-widest text-sm mb-12 font-medium">
          Trusted by Industry Leaders
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 mb-24 opacity-60">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-2xl font-bold tracking-tight text-white/80"
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
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                <Counter to={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm md:text-base text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
