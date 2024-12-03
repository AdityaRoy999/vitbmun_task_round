'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Send, User, AtSign } from 'lucide-react'

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    })
    setFormState({ name: '', email: '', message: '' })
  }

  const contactInfo = [
    { icon: Mail, text: 'info@vitbmun.com', label: 'Email' },
    { icon: Phone, text: '+1 (123) 456-7890', label: 'Phone' },
    { icon: MapPin, text: '123 University Ave, City', label: 'Address' },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-16 text-center tracking-tighter"
        >
          Contact Us
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="prose prose-lg">
              <h3 className="text-3xl font-bold tracking-tighter mb-4">Get in Touch</h3>
              <p className="text-muted-foreground">
                Have questions about VITB MUN? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{info.label}</h4>
                    <p className="text-muted-foreground">{info.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="backdrop-blur-sm bg-secondary/50">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Send Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="pl-10 bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="relative">
                      <AtSign className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="pl-10 bg-background/50"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-background/50"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

