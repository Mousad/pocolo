import { Shield, Truck, Award } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'دفع آمن',
    description: 'طرق دفع متعددة وآمنة',
  },
  {
    icon: Truck,
    title: 'توصيل سريع',
    description: 'توصيل سريع لباب بيتك',
  },
  {
    icon: Award,
    title: 'جودة عالية',
    description: 'مكونات طازجة ومختارة',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-11 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-secondary"
            >
              <div className="bg-primary/10 p-4 rounded-full mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {feature.title}
              </h3>
             
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
