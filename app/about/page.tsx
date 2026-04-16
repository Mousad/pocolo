import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, Heart, Clock } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'

const stats = [
  { icon: Award, value: '+5', label: 'سنوات خبرة' },
  { icon: Users, value: '+10K', label: 'عميل سعيد' },
  { icon: Heart, value: '+50', label: 'وصفة مميزة' },
  { icon: Clock, value: '24/7', label: 'خدمة التوصيل' },
]

const values = [
  {
    title: 'الجودة',
    description: 'نختار أفضل المكونات الطازجة لضمان جودة لا مثيل لها في كل منتج.',
  },
  {
    title: 'الإبداع',
    description: 'نبتكر وصفات جديدة باستمرار لنقدم لك تجربة حلويات فريدة ومميزة.',
  },
  {
    title: 'الخدمة',
    description: 'نحرص على تقديم أفضل خدمة عملاء وتوصيل سريع لضمان رضاك التام.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 bg-secondary overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1517433670267-30f41c4a6e96?w=1920&h=800&fit=crop"
              alt="خلفية"
              fill
              className="object-cover opacity-10"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              قصتنا
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نصنع تجربة حلا مختلفة تجمع بين الجودة والطعم والتفاصيل
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=800&h=800&fit=crop"
                  alt="فريق العمل"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">من نحن</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    بدأت قصة بوكو لوكو من شغف حقيقي بفن الحلويات. منذ أكثر من خمس سنوات، قررنا أن نقدم شيئا مختلفا - حلويات تجمع بين النكهات الأصيلة والإبداع العصري.
                  </p>
                  <p>
                    اليوم، أصبحنا وجهة مفضلة لمحبي الحلويات الفاخرة. نفخر بأننا نستخدم أجود المكونات الطبيعية ونحرص على تقديم كل منتج بأعلى معايير الجودة.
                  </p>
                  <p>
                    مهمتنا بسيطة: نريد أن نجعل كل لقمة تجربة لا تنسى، ونسعى دائما لتجاوز توقعات عملائنا الكرام.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary-foreground/10 p-4 rounded-full inline-block mb-4">
                    <stat.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              قيمنا
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-secondary rounded-2xl p-8 text-center"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              جرب تجربة بوكو لوكو اليوم
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              اكتشف مجموعتنا الواسعة من الحلويات والمشروبات واستمتع بتوصيل سريع لباب بيتك
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8">
              <Link href="/category">تصفح المنيو</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
