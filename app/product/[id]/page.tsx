'use client'

import { useState, use } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Minus, Plus, ShoppingCart, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { ProductCard } from '@/components/product-card'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'
import { getProductById, getRelatedProducts } from '@/lib/data'

const sizes = [
  { id: 'small', name: 'صغير', priceModifier: 0 },
  { id: 'medium', name: 'وسط', priceModifier: 5 },
  { id: 'large', name: 'كبير', priceModifier: 10 },
]

const extras = [
  { id: 'cream', name: 'كريمة إضافية', price: 3 },
  { id: 'chocolate', name: 'صوص شوكولاتة', price: 4 },
  { id: 'nuts', name: 'مكسرات', price: 5 },
]

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = getProductById(id)
  
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [selectedExtras, setSelectedExtras] = useState<string[]>([])
  const [quantity, setQuantity] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const relatedProducts = getRelatedProducts(product.id, product.category)

  // Calculate total price
  const extrasPrice = selectedExtras.reduce((sum, extraId) => {
    const extra = extras.find(e => e.id === extraId)
    return sum + (extra?.price || 0)
  }, 0)
  const totalPrice = (product.price + selectedSize.priceModifier + extrasPrice) * quantity

  const handleToggleExtra = (extraId: string) => {
    setSelectedExtras(prev => 
      prev.includes(extraId) 
        ? prev.filter(id => id !== extraId)
        : [...prev, extraId]
    )
  }

  const handleAddToCart = () => {
    addItem({
      id: `${product.id}-${selectedSize.id}-${selectedExtras.join('-')}`,
      name: `${product.name} (${selectedSize.name})`,
      price: product.price + selectedSize.priceModifier + extrasPrice,
      image: product.image,
      size: selectedSize.name,
      extras: selectedExtras.map(id => extras.find(e => e.id === id)?.name || ''),
    }, quantity)
  }

  // Mock multiple images
  const productImages = [product.image, product.image, product.image]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link href="/" className="hover:text-primary">الرئيسية</Link>
            <ArrowRight className="h-4 w-4 rotate-180" />
            <Link href="/category" className="hover:text-primary">المنيو</Link>
            <ArrowRight className="h-4 w-4 rotate-180" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary">
                <Image
                  src={productImages[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex gap-4">
                {productImages.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square w-20 rounded-xl overflow-hidden border-2 transition-colors ${
                      activeImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                <p className="text-2xl font-bold text-accent">{product.price} ج</p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">الحجم</h3>
                <div className="flex flex-wrap gap-3">
                  {sizes.map(size => (
                    <button
                      key={size.id}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedSize.id === size.id
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {size.name}
                      {size.priceModifier > 0 && (
                        <span className="text-sm mr-1">(+{size.priceModifier} ج)</span>
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Extras Selection */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">إضافات</h3>
                <div className="flex flex-wrap gap-3">
                  {extras.map(extra => (
                    <button
                      key={extra.id}
                      onClick={() => handleToggleExtra(extra.id)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedExtras.includes(extra.id)
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-border hover:border-primary'
                      }`}
                    >
                      {extra.name}
                      <span className="text-sm mr-1">(+{extra.price} ج)</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <h3 className="font-semibold text-foreground">الكمية</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                    aria-label="تقليل الكمية"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors"
                    aria-label="زيادة الكمية"
                  >
                    <Plus className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Total & Add to Cart */}
              <div className="pt-6 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-lg text-muted-foreground">المجموع</span>
                  <span className="text-2xl font-bold text-accent">{totalPrice} ج</span>
                </div>
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
                >
                  <ShoppingCart className="ml-2 h-5 w-5" />
                  أضف  
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">منتجات مشابهة</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {relatedProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  )
}
