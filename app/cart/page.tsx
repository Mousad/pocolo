'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { useCart } from '@/context/cart-context'

export default function CartPage() {
  const { items, updateQuantity, removeItem, totalPrice } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center space-y-6">
            <div className="bg-secondary p-6 rounded-full inline-block">
              <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">سلة التسوق فارغة</h1>
              <p className="text-muted-foreground">لم تقم بإضافة أي منتجات حتى الآن</p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/category">تصفح المنيو</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-foreground mb-8">سلة التسوق</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map(item => (
                <div
                  key={item.id}
                  className="flex gap-4 bg-card rounded-xl p-4 border border-border"
                >
                  {/* Product Image */}
                  <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">{item.name}</h3>
                    {item.size && (
                      <p className="text-sm text-muted-foreground">الحجم: {item.size}</p>
                    )}
                    {item.extras && item.extras.length > 0 && (
                      <p className="text-sm text-muted-foreground">
                        الإضافات: {item.extras.join('، ')}
                      </p>
                    )}
                    <p className="text-accent font-bold mt-1">{item.price} ج</p>
                  </div>

                  {/* Quantity & Remove */}
                  <div className="flex flex-col items-end justify-between">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-destructive hover:text-destructive/80 p-1"
                      aria-label="إزالة المنتج"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 rounded border border-border hover:bg-secondary"
                        aria-label="تقليل الكمية"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 rounded border border-border hover:bg-secondary"
                        aria-label="زيادة الكمية"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">ملخص الطلب</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>عدد المنتجات</span>
                    <span>{items.reduce((sum, item) => sum + item.quantity, 0)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>التوصيل</span>
                    <span>20%</span>
                  </div>
                  <div className="border-t border-border pt-4 flex justify-between text-lg font-bold text-foreground">
                    <span>المجموع</span>
                    <span className="text-accent">{totalPrice} ج</span>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/checkout">إكمال الطلب</Link>
                </Button>

                <Link
                  href="/category"
                  className="block text-center text-muted-foreground hover:text-primary mt-4"
                >
                  متابعة التسوق
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
