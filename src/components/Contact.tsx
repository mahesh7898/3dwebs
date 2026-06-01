"use client";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { useState } from "react";
import { submitContact } from "@/actions/contact";

export default function Contact() {
  const [formState, setFormState] = useState("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");
    const formData = new FormData(e.currentTarget);
    const result = await submitContact(formData);
    
    if (result.success) {
      setFormState("success");
    } else {
      setFormState("idle");
      alert("Something went wrong. Please try again.");
    }
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
            <p className="text-gray-400">Fill out the form below and we will help bring your project to life.</p>
            <span className="inline-block mt-3 text-xs bg-electric-blue/10 text-electric-blue border border-electric-blue/20 rounded-full px-3 py-1 font-medium font-mono">
              ✓ We typically respond within 24 hours.
            </span>
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
              <h3 className="text-2xl font-bold text-white mb-2">Inquiry Submitted</h3>
              <p className="text-gray-400">Our design team has received your details and will contact you via email shortly.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Name</label>
                  <input name="name" required type="text" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-electric-blue focus:bg-white/[0.05] transition-all" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Company</label>
                  <input name="company" required type="text" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-electric-blue focus:bg-white/[0.05] transition-all" placeholder="Your Brand / Company" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Email Address</label>
                  <input name="email" required type="email" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-electric-blue focus:bg-white/[0.05] transition-all" placeholder="john@example.com" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Project Type</label>
                  <select name="type" required defaultValue="" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-electric-blue focus:bg-white/[0.05] transition-all cursor-pointer">
                    <option value="" disabled className="text-gray-500">Select project type</option>
                    <option value="business" className="bg-deep-space text-white">Business Website</option>
                    <option value="portfolio" className="bg-deep-space text-white">Portfolio Website</option>
                    <option value="ecommerce" className="bg-deep-space text-white">Ecommerce Store</option>
                    <option value="saas" className="bg-deep-space text-white">SaaS Application</option>
                    <option value="ai" className="bg-deep-space text-white">AI Solution</option>
                    <option value="other" className="bg-deep-space text-white">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Estimated Budget</label>
                  <select name="budget" required defaultValue="" className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-electric-blue focus:bg-white/[0.05] transition-all cursor-pointer">
                    <option value="" disabled className="text-gray-500">Select budget range</option>
                    <option value="under-10k" className="bg-deep-space text-white">Under ₹10k</option>
                    <option value="10k-25k" className="bg-deep-space text-white">₹10k – ₹25k</option>
                    <option value="25k-50k" className="bg-deep-space text-white">₹25k – ₹50k</option>
                    <option value="50k+" className="bg-deep-space text-white">₹50k+</option>
                  </select>
                </div>
              </div>
 
              <div className="flex flex-col gap-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400">Project Details</label>
                <textarea name="details" required rows={4} className="bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-electric-blue focus:bg-white/[0.05] transition-all resize-none" placeholder="Tell us about your business goals and key requirements..."></textarea>
              </div>
 
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button disabled={formState === "submitting"} className="group relative flex-1 py-4 bg-white text-black rounded-xl font-bold overflow-hidden flex items-center justify-center gap-2 transition-transform active:scale-[0.98]">
                  <div className="absolute inset-0 bg-gradient-to-r from-electric-blue to-neon-purple opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  {formState === "submitting" ? "Sending..." : "Submit Inquiry"}
                  {formState === "idle" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
                
                <a 
                  href="https://wa.me/918799062644" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center gap-2 border border-emerald-500/30 hover:border-emerald-500 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 transition-all font-bold px-6 py-4 rounded-xl active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
