'use client'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Globe } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  }

  const cards = [
    { title: 'Diplomacy', description: 'Master the art of international relations and negotiation through hands-on experience in Model UN conferences.', icon: Briefcase },
    { title: 'Leadership', description: 'Develop crucial leadership skills by representing nations and managing global challenges.', icon: Users },
    { title: 'Impact', description: 'Make a real difference by engaging with pressing global issues and crafting innovative solutions.', icon: Globe },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={itemVariants}
          className="text-6xl font-bold mb-16 text-center tracking-tighter"
        >
          About Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cards.map((card, index) => (
            <motion.div key={card.title} variants={itemVariants}>
              <Card className="border-none bg-secondary/50 backdrop-blur-sm hover:bg-secondary/70 transition-colors duration-300 overflow-hidden">
                <CardHeader className="relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -mr-12 -mt-12" />
                  <CardTitle className="text-3xl font-bold tracking-tighter relative z-10">
                    {card.title}
                  </CardTitle>
                  <card.icon className="w-12 h-12 text-primary mb-4" />
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About

