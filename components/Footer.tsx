'use client'
import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
  ]

  const contactInfo = [
    { icon: Mail, text: 'info@vitbmun.com' },
    { icon: Phone, text: '+1 (123) 456-7890' },
    { icon: MapPin, text: '123 University Ave, City, State 12345' },
  ]

  return (
    <footer className="bg-background py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h3 className="text-3xl font-bold tracking-tighter">VITB MUN</h3>
            <p className="text-muted-foreground max-w-xs">Empowering future global leaders through diplomacy and international relations.</p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Events', 'Gallery', 'Contact'].map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <ul className="space-y-2">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center space-x-2 text-muted-foreground">
                  <info.icon className="h-5 w-5 text-primary" />
                  <span>{info.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 pt-8 border-t border-border text-center"
        >
          <p className="text-muted-foreground">&copy; 2023 VITB MUN Club. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

