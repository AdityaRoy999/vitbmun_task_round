'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const galleries = [
  { 
    id: 1, 
    title: 'Conference 2023', 
    images: [
      'https://picsum.photos/800/800?random=1',
      'https://picsum.photos/800/800?random=2',
      'https://picsum.photos/800/800?random=3',
      'https://picsum.photos/800/800?random=4'
    ]
  },
  { 
    id: 2, 
    title: 'Workshop Series', 
    images: [
      'https://picsum.photos/800/800?random=5',
      'https://picsum.photos/800/800?random=6',
      'https://picsum.photos/800/800?random=7',
      'https://picsum.photos/800/800?random=8'
    ]
  },
  { 
    id: 3, 
    title: 'International Day', 
    images: [
      'https://picsum.photos/800/800?random=9',
      'https://picsum.photos/800/800?random=10',
      'https://picsum.photos/800/800?random=11',
      'https://picsum.photos/800/800?random=12'
    ]
  },
]

const Gallery = () => {
  const [selectedGallery, setSelectedGallery] = useState<number | null>(null)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const { theme } = useTheme()

  return (
    <section id="gallery" ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8 }} 
          className="text-6xl font-bold mb-16 text-center tracking-tighter"
        >
          Gallery
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.8, delay: 0.2 }} 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {galleries.map((gallery, index) => (
            <motion.div 
              key={gallery.id} 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              onClick={() => setSelectedGallery(gallery.id)} 
              className="relative aspect-square overflow-hidden bg-secondary/50 backdrop-blur-sm cursor-pointer rounded-lg shadow-lg"
            >
              <Image 
                src={gallery.images[0]} 
                alt={`Gallery ${gallery.id}`} 
                layout="fill" 
                objectFit="cover" 
                className="transition-transform duration-300 hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 opacity-0 hover:opacity-100">
                <h3 className="text-white text-2xl font-bold">{gallery.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <AnimatePresence>
        {selectedGallery && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }} 
            className={`fixed inset-0 ${theme === 'dark' ? 'bg-black' : 'bg-white'} bg-opacity-90 flex items-center justify-center z-50`} 
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              exit={{ scale: 0.8, opacity: 0 }} 
              className={`${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg max-w-4xl w-full`} 
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className={`text-3xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                {galleries.find(g => g.id === selectedGallery)?.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {galleries.find(g => g.id === selectedGallery)?.images.map((src, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5, delay: index * 0.1 }} 
                    className="relative aspect-square"
                  >
                    <Image 
                      src={src} 
                      alt={`Gallery image ${index + 1}`} 
                      layout="fill" 
                      objectFit="cover" 
                      className="rounded-lg shadow-md" 
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery

