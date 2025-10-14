"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Animated Wave Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb]">
        {/* Wave Layer 1 */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <motion.path
            animate={{
              d: [
                "M0,400 C320,500 640,300 960,400 C1280,500 1440,350 1440,400 L1440,800 L0,800 Z",
                "M0,350 C320,450 640,250 960,350 C1280,450 1440,300 1440,350 L1440,800 L0,800 Z",
                "M0,400 C320,500 640,300 960,400 C1280,500 1440,350 1440,400 L1440,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="rgba(255,255,255,0.1)"
          />
        </svg>

        {/* Wave Layer 2 */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <motion.path
            animate={{
              d: [
                "M0,500 C360,600 720,400 1080,500 C1320,600 1440,450 1440,500 L1440,800 L0,800 Z",
                "M0,450 C360,550 720,350 1080,450 C1320,550 1440,400 1440,450 L1440,800 L0,800 Z",
                "M0,500 C360,600 720,400 1080,500 C1320,600 1440,450 1440,500 L1440,800 L0,800 Z",
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="rgba(255,255,255,0.05)"
          />
        </svg>

        {/* Top Wave Overlay */}
        <svg 
          className="absolute top-0 left-0 w-full h-1/2" 
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
        >
          <motion.path
            animate={{
              d: [
                "M0,100 C360,200 720,50 1080,100 C1320,150 1440,80 1440,100 L1440,0 L0,0 Z",
                "M0,80 C360,180 720,30 1080,80 C1320,130 1440,60 1440,80 L1440,0 L0,0 Z",
                "M0,100 C360,200 720,50 1080,100 C1320,150 1440,80 1440,100 L1440,0 L0,0 Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            fill="rgba(255,255,255,0.08)"
          />
        </svg>
      </div>

      {/* Floating Gradient Orbs - Responsive positioning */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute top-10 md:top-20 right-5 md:right-20 w-48 h-48 md:w-72 md:h-72 bg-white/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute bottom-10 md:bottom-20 left-5 md:left-20 w-64 h-64 md:w-96 md:h-96 bg-white/10 rounded-full blur-3xl"
      />

      {/* Additional Mobile-Optimized Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg bg-white/5 rounded-full blur-3xl"
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 drop-shadow-2xl leading-tight"
          >
            SAMARTHWAVE HOSPITALITY & SERVICES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-white/90 drop-shadow-lg"
          >
            Excellence in Integrated Facility Management Solutions
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-base sm:text-lg mb-8 md:mb-12 text-white/80 drop-shadow-lg px-4"
          >
            16+ Years of Industry Experience | Professional Team | Trusted Partner
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-2xl hover:scale-105 transition-all duration-300"
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
