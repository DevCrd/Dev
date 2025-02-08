"use client"
import { useState } from "react"
import Image, { type StaticImageData } from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface ImageData {
  src: string | StaticImageData
  alt: string
}

interface ImageGalleryProps {
  images: ImageData[]
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <Image
              src={images[selectedImage].src || "/profile.jpg"}
              alt={images[selectedImage].alt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex gap-4 justify-center">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative w-20 h-20 rounded-lg overflow-hidden transition-all ${
              selectedImage === index ? "ring-2 ring-blue-500 scale-110" : "opacity-70 hover:opacity-100"
            }`}
          >
            <Image src={image.src || "/profile.jpg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}

