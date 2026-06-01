"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, Code2, Rocket, Layers, BrainCircuit } from "lucide-react";

export default function Founder() {
  const stats = [
    { value: "5+", label: "YEARS CODING", icon: <Code2 className="w-5 h-5 mb-2 text-electric-blue" /> },
    { value: "50+", label: "PROJECTS DELIVERED", icon: <Layers className="w-5 h-5 mb-2 text-electric-blue" /> },
    { value: "15+", label: "TECH STACK", icon: <BrainCircuit className="w-5 h-5 mb-2 text-electric-blue" /> },
    { value: "3", label: "STARTUPS FOUNDED", icon: <Rocket className="w-5 h-5 mb-2 text-electric-blue" /> },
  ];

  const technologies = [
    "Python", "TensorFlow", "PyTorch", "TypeScript", "React", "Next.js", 
    "Node.js", "AWS", "Docker", "PostgreSQL", "MongoDB", "GraphQL", 
    "Rust", "Go", "Kubernetes", "Redis"
  ];

  return (
    <section id="founder" className="py-32 relative bg-[#030303] border-t border-white/5">
      <div className="absolute top-0 right-0 w-full max-w-2xl h-[400px] bg-electric-blue/5 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-electric-blue font-mono text-sm tracking-widest uppercase mb-4"
          >
            About The Founder
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-white"
          >
            Mahesh Shimpi
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 font-medium mb-8 leading-relaxed text-balance"
          >
            A passionate AI/ML engineer and entrepreneur focused on building intelligent systems that solve real-world problems at scale.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 md:p-12 mb-12 text-gray-400 leading-relaxed text-lg text-center"
        >
          <p className="mb-6">
            I'm an AI/ML student and full-stack developer with a deep passion for building products that leverage cutting-edge technology. My journey started with curiosity about how machines learn, and evolved into building production-grade AI systems.
          </p>
          <p>
            Currently, I'm focused on developing AI-powered SaaS platforms, exploring deep learning architectures, and launching startups that bridge the gap between research and real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors"
          >
            <GraduationCap className="w-8 h-8 text-electric-blue mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Education</h3>
            <p className="text-white font-medium">B.Tech in Computer Science (AI/ML)</p>
            <p className="text-gray-500 text-sm mt-1">Majoring in Artificial Intelligence & Machine Learning</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 flex flex-col items-center text-center hover:bg-white/[0.04] transition-colors"
          >
            <Award className="w-8 h-8 text-electric-blue mb-4" />
            <h3 className="text-white font-bold text-lg mb-2">Certifications</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AWS Certified <br/>
              TensorFlow Developer <br/>
              Deep Learning Specialization
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col items-center justify-center text-center"
            >
              {stat.icon}
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-white font-bold text-lg mb-6">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-gray-300 text-sm font-medium hover:border-electric-blue/50 hover:text-white transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
