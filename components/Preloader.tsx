'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const Preloader = () => {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + 1
      })
    }, 15)

    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    initial: { opacity: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        when: "afterChildren",
      },
    },
  }

  const circleVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 1.2,
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn",
      },
    },
  }

  if (!loading) return null

  return (
    <AnimatePresence>
      <motion.div
        key="preloader"
        variants={containerVariants}
        initial="initial"
        exit="exit"
        className="fixed inset-0 bg-background flex items-center justify-center z-50"
      >
        <div className="relative">
          <motion.div
            variants={circleVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="relative w-48 h-48"
          >
            {/* Circular progress */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-muted opacity-20"
              />
              <motion.circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: progress / 100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{
                  rotate: -90,
                  transformOrigin: "center",
                }}
              />
            </svg>

 

            {/* Center content */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-2">MUN</h1>
                <p className="text-xl font-semibold text-primary">{progress}%</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default Preloader

