'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from '../lib/useTranslation'

export default function Gallery() {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
      alt: 'Gran Jonquera - Centre commercial',
      title: 'Gran Jonquera'
    },
    {
      src: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
      alt: 'La Tramontana - Boutiques',
      title: 'La Tramontana'
    },
    {
      src: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800',
      alt: 'Rayon alcools et vins',
      title: 'Vins & Spiritueux'
    },
    {
      src: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=800',
      alt: 'Parfumerie et cosmétiques',
      title: 'Parfums & Cosmétiques'
    },
    {
      src: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800',
      alt: 'Produits alimentaires',
      title: 'Alimentation'
    },
    {
      src: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=800',
      alt: 'Shopping et boutiques',
      title: 'Shopping'
    },
  ]

  return (
    <section className="py-24 px-4 bg-brand-dark relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-red font-semibold tracking-widest uppercase text-sm mb-3"
          >
            {t('gallery.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl text-white"
          >
            {t('gallery.title')}
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="relative aspect-square rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(img)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-bold text-sm">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative max-w-4xl w-full aspect-video"
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white bg-brand-red hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center font-bold"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
