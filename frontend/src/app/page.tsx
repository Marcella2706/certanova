"use client";

import Navbar from "@/components/layout/Navbar";
import { Button } from "@/components/ui/button";
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
            <Button
              className="text-2xl px-6 py-8 bg-primary font-serif"
            >
              CLICK HERE TO GET STARTED !  😈
            </Button>
          </Link>
        </motion.div>
        
      </main>
    </>
  );
}
