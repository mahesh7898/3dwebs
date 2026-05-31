"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section id="contact" className="py-32 relative bg-deep-space border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-neon-purple/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto glass-card p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/10 blur-[100px] rounded-full pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Let's Build Something <span className="text-gradient">Extraordinary</span></h2>
            <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
          </motion.div>

          {formState === "success" ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/50">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
              <p className="text-gray-400">We look forward to speaking with you.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Name</label>
                  <input required type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Company</label>
                  <input required type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="Quantum Inc." />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Email</label>
                  <input required type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-medium text-gray-400">Budget</label>
                  <select required defaultValue="" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors appearance-none cursor-pointer">
                    <option value="" disabled className="text-gray-500">Select budget range</option>
                    <option value="10k" className="bg-deep-space">$10k - $25k</option>
                    <option value="25k" className="bg-deep-space">$25k - $50k</option>
                    <option value="50k" className="bg-deep-space">$50k - $100k</option>
                    <option value="100k+" className="bg-deep-space">$100k+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-400">Project Details</label>
                <textarea required rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-electric-blue transition-colors resize-none" placeholder="Tell us about your goals..."></textarea>
              </div>

              <button disabled={formState === "submitting"} className="group relative w-full py-4 mt-4 bg-white text-black rounded-xl font-bold overflow-hidden flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
                <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></div>
                {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
                {formState === "idle" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
