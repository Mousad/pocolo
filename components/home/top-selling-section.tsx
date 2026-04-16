import { getTopSellingProducts } from '@/lib/data'
import { ProductCard } from '@/components/product-card'

export function TopSellingSection() {
  const topProducts = getTopSellingProducts()

  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          الأكثر طلبا
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {topProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
