"use client";

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="sparkle-bg" />
      <Navbar />
      <main className="flex flex-col items-center justify-center h-[850px] px-4 text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 4, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className="relative"
        >
          <span className="text-[2.8rem] md:text-[4rem] font-bold animate-bounce z-10 mt-0">
            Ready to take the challenge? 🚀
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-10"
        >
          <Link href="/challenges">
            <div
              className="text-3xl px-6 py-6 font-serif shadow-lg ring-2 rounded-2xl ring-primary/50 hover:scale-105 transition-transform font-bold"            
            >
              CLICK HERE TO GET STARTED !  😈
            </div>
          </Link>
        </motion.div>
        
      </main>
    </>
  );
}
