'use client'

import { useState, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { products, categories } from '@/lib/data'

const PRODUCTS_PER_PAGE = 8

export default function CategoryPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('cat')
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam)
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE)

  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products
    return products.filter(p => p.category === selectedCategory)
  }, [selectedCategory])

  const visibleProducts = filteredProducts.slice(0, visibleCount)
  const hasMore = visibleCount < filteredProducts.length

  const handleShowMore = () => {
    setVisibleCount(prev => prev + PRODUCTS_PER_PAGE)
  }

  const handleCategoryChange = (slug: string | null) => {
    setSelectedCategory(slug)
    setVisibleCount(PRODUCTS_PER_PAGE)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">المنيو</h1>
            <p className="text-muted-foreground text-lg">
              اكتشف تشكيلتنا الواسعة من الحلويات والمشروبات
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Button
              variant={selectedCategory === null ? 'default' : 'outline'}
              onClick={() => handleCategoryChange(null)}
              className={selectedCategory === null ? 'bg-primary text-primary-foreground' : ''}
            >
              الكل
            </Button>
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.slug ? 'default' : 'outline'}
                onClick={() => handleCategoryChange(cat.slug)}
                className={selectedCategory === cat.slug ? 'bg-primary text-primary-foreground' : ''}
              >
                {cat.name}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {visibleProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">لا توجد منتجات في هذا القسم</p>
            </div>
          )}

          {/* Show More Button */}
          {hasMore && (
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                onClick={handleShowMore}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                عرض المزيد
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
