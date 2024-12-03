'use client'
import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'

const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      className="fixed right-4 top-1/2 -translate-y-1/2 h-[200px] w-2 bg-secondary/20 rounded-full"
      style={{ opacity: isVisible ? 1 : 0 }}
    >
      <motion.div
        className="w-full bg-primary rounded-full"
        style={{ 
          scaleY: scrollYProgress,
          transformOrigin: 'top'
        }}
      />
    </motion.div>
  )
}

export default CustomScrollbar

