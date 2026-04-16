import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-secondary overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1551024601-bec78aea704b?w=1920&h=1080&fit=crop"
          alt="خلفية حلويات"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              عيش لحظة الحلا
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              حلويات طازجة… تجربة ما بتنساها
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              >
                <Link href="/category">اطلب الآن</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
              >
                <Link href="/category">تصفح المنيو</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
     

        </div>
      </div>
    </section>
  )
}