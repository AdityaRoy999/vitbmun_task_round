'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Moon, Sun } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/#about' },
    { name: 'Events', path: '/events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Learn More', path: '/learn-more' },
    { name: 'Join Us', path: '/join-us' },
  ]

  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 },
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    setIsOpen(false)

    if (path.startsWith('/#')) {
      const element = document.querySelector(path.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = path
    }
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 bg-background/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            VITB MUN
          </motion.span>
        </Link>
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
            >
              <Link 
                href={item.path} 
                className="text-sm tracking-wider hover:text-primary transition-colors"
                onClick={(e) => handleClick(e, item.path)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          {mounted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="rounded-full w-10 h-10"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </motion.div>
          )}
        </nav>
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-background absolute top-full left-0 w-full overflow-hidden"
          >
            {menuItems.map((item) => (
              <motion.div key={item.name} variants={menuVariants}>
                <Link
                  href={item.path}
                  className="block px-4 py-2 hover:bg-accent"
                  onClick={(e) => handleClick(e, item.path)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {mounted && (
              <motion.div variants={menuVariants} className="px-4 py-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                  className="rounded-full w-10 h-10"
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Header

