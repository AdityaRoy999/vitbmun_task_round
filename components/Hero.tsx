'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "./ui/button"
import { useRef } from 'react'
import Link from 'next/link'

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 1.1, 1],
              opacity: [0, 0.5, 0.8, 0.5],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </motion.div>

      <motion.div 
        className="relative z-10 text-center max-w-4xl px-4"
        style={{ y, opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-bold mb-4 tracking-tighter"
        >
          VITB MUN
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center mb-8"
        >
          <div className="w-[2px] h-20 bg-primary mx-8" />
          <p className="text-xl md:text-2xl text-foreground/80 max-w-md">
            Empowering Future Global Leaders Through Diplomatic Excellence
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex gap-4 justify-center"
        >
          <Link href="/join-us">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Join Us
            </Button>
          </Link>
          <Link href="/learn-more">
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <svg 
          className="w-6 h-6 text-foreground animate-bounce" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  )
}

export default Hero

