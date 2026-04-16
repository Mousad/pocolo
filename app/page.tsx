import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { CategoriesSection } from '@/components/home/categories-section'
import { TopSellingSection } from '@/components/home/top-selling-section'
import { BannerSection } from '@/components/home/banner-section'
import { FeaturesSection } from '@/components/home/features-section'
import { AboutPreviewSection } from '@/components/home/about-preview-section'
import { GallerySection } from '@/components/home/gallery-section'
import { FeaturedProductsSection } from '@/components/home/featured-products-section'
import { MapSection } from '@/components/home/map-section'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CategoriesSection />
        <TopSellingSection />
        <BannerSection />
        <FeaturesSection />
        <AboutPreviewSection />
        <GallerySection />
        <FeaturedProductsSection />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
