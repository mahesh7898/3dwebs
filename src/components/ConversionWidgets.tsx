"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function ConversionWidgets() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 600px
      if (window.scrollY > 600) {
        setShowStickyCta(true);
      } else {
        setShowStickyCta(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky "Start Project" CTA */}
      <AnimatePresence>
        {showStickyCta && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 hidden sm:block"
          >
            <a
              href="#contact"
              className="glass px-6 py-3.5 rounded-full text-white font-semibold text-sm flex items-center gap-2 border border-white/20 shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-electric-blue/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 group"
            >
              Start Project
              <ArrowRight className="w-4 h-4 text-electric-blue group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <motion.a
          href="https://wa.me/918799062644"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:bg-emerald-600 transition-all duration-300 relative group"
          title="Chat with us"
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping group-hover:animate-none pointer-events-none" />
          
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M12.012 2C6.48 2 2 6.48 2 12.012c0 1.77.462 3.498 1.344 5.022L2 22l5.13-1.344c1.47.8 3.12 1.22 4.88 1.22 5.53 0 10.01-4.48 10.01-10.01C22 6.48 17.54 2 12.01 2zm0 1.638c4.63 0 8.37 3.746 8.37 8.374 0 4.63-3.74 8.37-8.37 8.37-1.57 0-3.1-.44-4.43-1.27l-.32-.2-3.08.8.82-2.98-.22-.35A8.31 8.31 0 0 1 3.63 12c0-4.63 3.74-8.37 8.38-8.37zm-3.66 3.1c-.2 0-.53.07-.8.37-.27.3-.96 1.02-.96 2.47 0 1.45 1.05 2.84 1.2 3.04.14.2 2.02 3.2 4.96 4.38.7.28 1.24.45 1.66.58.7.2 1.35.18 1.86.1.57-.08 1.74-.7 1.99-1.38.25-.68.25-1.26.17-1.38-.08-.12-.27-.2-.57-.35-.3-.15-1.74-.86-2.01-.96-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.34.22-.64.07a8.1 8.1 0 0 1-2.42-1.5 8.9 8.9 0 0 1-1.68-2.08c-.18-.3-.02-.46.13-.6.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.25-.6-.53-.52-.72-.53-.19 0-.4 0-.6 0z"/>
          </svg>
        </motion.a>
      </div>
    </>
  );
}
