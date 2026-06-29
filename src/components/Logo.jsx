import { motion } from "framer-motion";

const Logo = ({ className = "w-12 h-12", isPageTransition = false }) => {
  return (
    <div className="relative group">
      <motion.div
        animate={
          isPageTransition
            ? {}
            : {
                scale: [1, 1.05, 1],
              }
        }
        transition={
          isPageTransition
            ? {}
            : {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }
        }
      >
        <svg className={className} viewBox="0 0 120 100">
          {/* Background */}
          <rect
            x="12"
            y="12"
            width="96"
            height="76"
            rx="16"
            fill="url(#bgGradient)"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />

          <defs>
            <radialGradient id="bgGradient">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.15)" />
              <stop offset="100%" stopColor="rgba(236, 72, 153, 0.05)" />
            </radialGradient>

            <linearGradient id="rGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#D946EF" />
              <stop offset="100%" stopColor="#A855F7" />
            </linearGradient>

            <linearGradient id="hGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F43F5E" />
              <stop offset="50%" stopColor="#EC4899" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>

          {/* R with rounded corners and gradient - shifted left */}
          <g fill="url(#rGrad)">
            {[
              [15, 15], // Moved from 20 to 15
              [15, 25],
              [15, 35],
              [15, 45],
              [15, 55],
              [15, 65],
              [25, 15], // Moved from 30 to 25
              [35, 15], // Moved from 40 to 35
              [45, 15], // Moved from 50 to 45
              [55, 25], // Moved from 60 to 55
              [55, 35], // Moved from 60 to 55
              [35, 35], // Moved from 40 to 35
              [45, 35], // Moved from 50 to 45
              [25, 45], // Moved from 30 to 25
              [35, 55], // Moved from 40 to 35
              [45, 65], // Moved from 50 to 45
            ].map(([x, y], i) => (
              <motion.rect
                key={`r-${i}`}
                x={x}
                y={y}
                width="8"
                height="8"
                rx="2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: isPageTransition ? i * 0.03 + 0.1 : i * 0.01,
                  duration: isPageTransition ? 0.4 : 0.3,
                  ease: "backOut",
                }}
              />
            ))}
          </g>

          {/* H with rounded corners and gradient - shifted right with more space */}
          <g fill="url(#hGrad)">
            {[
              [75, 15], // Moved from 72 to 75
              [75, 25],
              [75, 35],
              [75, 45],
              [75, 55],
              [75, 65],
              [85, 45], // Moved from 82 to 85
              [95, 15], // Moved from 92 to 95
              [95, 25],
              [95, 35],
              [95, 45],
              [95, 55],
              [95, 65],
            ].map(([x, y], i) => (
              <motion.rect
                key={`h-${i}`}
                x={x}
                y={y}
                width="8"
                height="8"
                rx="2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: isPageTransition ? i * 0.03 + 0.35 : i * 0.01 + 0.2,
                  duration: isPageTransition ? 0.4 : 0.3,
                  ease: "backOut",
                }}
              />
            ))}
          </g>

          {/* Animated corner accents - adjusted positions */}
          <motion.circle
            cx="15"
            cy="15"
            r="1.5"
            fill="#A855F7"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.circle
            cx="95"
            cy="15"
            r="1.5"
            fill="#F43F5E"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </svg>
      </motion.div>

      {/* Hover glow effect */}
      <div className="absolute inset-0 blur-xl bg-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default Logo;
