"use client";
import { motion } from "framer-motion";

export default function Logo({ className = "", showTagline = true }: { className?: string, showTagline?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.03 }}
      className={`flex items-center justify-center cursor-pointer ${className}`}
    >
      <svg
        viewBox={showTagline ? "0 0 340 85" : "0 0 340 50"}
        className="w-auto h-full max-h-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        <motion.text
          x="170"
          y="42"
          textAnchor="middle"
          fill="url(#neonGradient)"
          fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
          fontWeight="900"
          fontSize="46"
          letterSpacing="8"
          initial={{ filter: "drop-shadow(0px 0px 4px rgba(6,182,212,0.5))" }}
          whileHover={{ filter: "drop-shadow(0px 0px 12px rgba(6,182,212,0.9))" }}
          transition={{ duration: 0.3 }}
        >
          3DWEBS
        </motion.text>

        {showTagline && (
          <text
            x="170"
            y="76"
            textAnchor="middle"
            fill="#9CA3AF"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
            fontWeight="600"
            fontSize="12"
            letterSpacing="6"
            opacity="0.8"
          >
            DESIGN BEYOND DIMENSIONS
          </text>
        )}
      </svg>
    </motion.div>
  );
}
