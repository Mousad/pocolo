'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { galleryImages } from '@/lib/data'
import { Button } from '@/components/ui/button'

export function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section className="py-9 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          معرض الصور
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src={galleryImages[currentIndex]}
              alt={`صورة المعرض ${currentIndex + 1}`}
              fill
              className="object-cover transition-opacity duration-500"
            />
          </div>
          
          {/* Navigation Buttons */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-lg"
            onClick={prevSlide}
            aria-label="الصورة السابقة"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background shadow-lg"
            onClick={nextSlide}
            aria-label="الصورة التالية"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-border'
                }`}
                aria-label={`انتقل للصورة ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
