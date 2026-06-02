"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter Package",
    price: "₹14,999",
    desc: "Perfect for startups and small businesses aiming for a fast, clean launch.",
    features: [
      "1–4 Pages",
      "Premium Design",
      "Basic 3D Hero",
      "Mobile Responsive",
      "Contact Form",
      "WhatsApp Integration",
      "Basic SEO",
      "Free Hosting + Domain"
    ],
    popular: false
  },
  {
    name: "Growth Package",
    price: "₹24,999",
    desc: "The sweet spot for growing brands that need custom interactive experiences.",
    features: [
      "5–10 Pages",
      "Advanced UI/UX",
      "Interactive 3D Elements",
      "SEO Optimization",
      "Blog/CMS",
      "Analytics Setup",
      "Performance Optimization",
      "Free Hosting + Domain"
    ],
    popular: true
  },
  {
    name: "Pro Package",
    price: "₹49,999+",
    desc: "For enterprises ready to scale with full custom architectures & AI integration.",
    features: [
      "Unlimited Pages",
      "Custom Features",
      "AI Chatbot Integration",
      "Database Integration",
      "Advanced Animations",
      "Custom Dashboard",
      "Priority Support",
      "Free Hosting + Domain"
    ],
    popular: false
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 relative bg-deep-space border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Website <span className="text-gradient">Packages</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Flexible solutions for businesses of all sizes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative glass-card p-8 flex flex-col justify-between ${plan.popular ? 'border-electric-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] md:-translate-y-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-electric-blue to-neon-purple text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{plan.desc}</p>
                
                <div className="text-4xl font-extrabold text-white mb-8 font-mono">{plan.price}</div>
                
                <ul className="flex flex-col gap-4 mb-10">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-3 text-gray-300">
                      <Check className="w-5 h-5 text-electric-blue shrink-0" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <a href="#contact" className={`w-full py-4 rounded-full font-bold text-center block transition-all ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
