import Image from 'next/image'

export function BannerSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920&h=600&fit=crop"
          alt="خلفية"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <p className="text-2xl md:text-4xl font-bold text-primary-foreground leading-relaxed text-balance">
          أكتر من مجرد حلويات… دي تجربة كاملة
        </p>
      </div>
    </section>
  )
}
