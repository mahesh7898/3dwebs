"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$10,000+",
    desc: "For startups ready to make a serious impact.",
    features: ["Custom Landing Page", "3D Hero Section", "Responsive Design", "Basic SEO Setup", "Contact Form Integration", "1 Month Support"],
    popular: false
  },
  {
    name: "Business",
    price: "$25,000+",
    desc: "Comprehensive web platforms for growing brands.",
    features: ["Full Custom Website", "Advanced 3D & Animations", "CMS Integration", "Performance Optimization", "Advanced Technical SEO", "3 Months Support"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$100,000+",
    desc: "Complex architectures and full-scale SaaS applications.",
    features: ["Custom Web Application", "AI Integration", "Complex Backend / Database", "Enterprise Security", "Priority 24/7 SLA", "Dedicated Team"],
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
            Investment <span className="text-gradient">Plans</span>
          </motion.h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Premium solutions for brands that demand excellence. No compromises.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative glass-card p-8 flex flex-col ${plan.popular ? 'border-electric-blue/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] md:-translate-y-4' : ''}`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-electric-blue to-neon-purple text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{plan.desc}</p>
              
              <div className="text-4xl font-extrabold text-white mb-8">{plan.price}</div>
              
              <ul className="flex flex-col gap-4 mb-10 flex-grow">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-electric-blue shrink-0" />
                    <span className="text-sm">{f}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-full font-bold transition-all ${plan.popular ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
