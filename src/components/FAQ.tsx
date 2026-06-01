"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does a website take?",
    answer: "Typically, a Starter website takes 1–2 weeks, while a Growth website takes 2–4 weeks. Complex custom applications and Pro packages with extensive 3D/AI features may take 4–8 weeks depending on the scope."
  },
  {
    question: "Do you provide hosting?",
    answer: "Yes, we help set up production-grade serverless hosting (primarily Vercel or AWS) which is fully optimized for speed and security. We can also integrate it with your domain registrar of choice."
  },
  {
    question: "Can you redesign an existing website?",
    answer: "Absolutely. We specialize in taking slow, outdated websites and transforming them into fast, modern, and highly interactive platforms engineered to drive customer conversion."
  },
  {
    question: "Do you offer maintenance?",
    answer: "Yes, all our plans include a complimentary post-launch support period. Afterward, we offer flexible maintenance packages to handle regular content updates, security patches, performance audits, and backups."
  },
  {
    question: "Will my website be mobile friendly?",
    answer: "100%. Every single layout, 3D render, and interaction is designed mobile-first. Your website will render beautifully and operate smoothly on all screen sizes, from smartphones to large desktop screens."
  },
  {
    question: "Can you add AI features later?",
    answer: "Yes, we build our web architectures using modular patterns. This means we can launch your base website today and seamlessly integrate AI chatbots, dashboards, or database connections in a future update."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 relative bg-deep-space border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Frequently Asked <span className="text-gradient">Questions</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Have questions? We have answers. If you don't find what you are looking for, contact us below.</p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="glass-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-300"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between p-6 text-left text-white font-semibold text-lg hover:bg-white/[0.02] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180 text-electric-blue" : ""}`} 
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-6 pt-0 text-gray-400 text-sm md:text-base leading-relaxed border-t border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
