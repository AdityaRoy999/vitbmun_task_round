'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from 'lucide-react'

const events = [
  { 
    title: 'Annual MUN Conference', 
    date: 'October 15-17, 2023', 
    image: '/event1.jpg',
    location: 'Main Auditorium',
    time: '9:00 AM - 5:00 PM'
  },
  { 
    title: 'Diplomatic Workshop', 
    date: 'November 5, 2023', 
    image: '/event2.jpg',
    location: 'Conference Room B',
    time: '2:00 PM - 4:00 PM'
  },
  { 
    title: 'International Relations Seminar', 
    date: 'December 10, 2023', 
    image: '/event3.jpg',
    location: 'Lecture Hall 1',
    time: '10:00 AM - 12:00 PM'
  },
]

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === events.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    )
  }

  return (
    <section id="events" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold mb-16 text-center tracking-tighter"
        >
          Upcoming Events
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Card className="overflow-hidden border-none bg-secondary/50 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img
                  src={events[currentIndex].image}
                  alt={events[currentIndex].title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{events[currentIndex].title}</h3>
                  <p className="text-sm">{events[currentIndex].date}</p>
                </div>
              </div>
              <div className="md:w-1/2 p-6">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold tracking-tighter">{events[currentIndex].title}</CardTitle>
                  <CardDescription className="text-xl text-primary">{events[currentIndex].date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-primary" />
                      <p>{events[currentIndex].date}</p>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-primary" />
                      <p>{events[currentIndex].location}</p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      <p>{events[currentIndex].time}</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">Join us for this exciting event where we'll explore the intricacies of international diplomacy and global affairs.</p>
                </CardContent>
                <CardFooter>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Register Now</Button>
                </CardFooter>
              </div>
            </div>
          </Card>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-background/50 backdrop-blur-sm"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-background/50 backdrop-blur-sm"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Events

