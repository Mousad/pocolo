import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function AboutPreviewSection() {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvfibUDoVQc5bKf5BYevkRiIFryMNORrY5eA&s"
              alt="من نحن"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-center md:text-right">
            <h2 className="text-3xl font-bold text-foreground">
              من نحن
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              نصنع تجربة حلا مختلفة تجمع بين الجودة والطعم والتفاصيل. نحرص على اختيار أفضل المكونات لنقدم لك حلويات طازجة بطعم لا يُنسى.
            </p>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/about">اعرف أكثر</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
