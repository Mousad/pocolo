'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CheckCircle } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/context/cart-context'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, totalPrice, clearCart } = useCart()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    instructions: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsLoading(false)
    setIsSubmitted(true)
    clearCart()
  }

  // Redirect if cart is empty and not submitted
  if (items.length === 0 && !isSubmitted) {
    router.push('/cart')
    return null
  }

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center py-16">
          <div className="text-center space-y-6 max-w-md mx-auto px-4">
            <div className="bg-green-100 p-6 rounded-full inline-block">
              <CheckCircle className="h-16 w-16 text-green-600" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-foreground">تم استلام طلبك بنجاح!</h1>
              <p className="text-muted-foreground">
                سنتواصل معك قريبا لتأكيد الطلب والتوصيل
              </p>
            </div>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/">العودة للرئيسية</Link>
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
          <h1 className="text-3xl font-bold text-foreground mb-8">إتمام الطلب</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-6 border border-border space-y-6">
                <h2 className="text-xl font-bold text-foreground">معلومات التوصيل</h2>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="block font-medium text-foreground">
                      الاسم الكامل <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      placeholder="أدخل اسمك الكامل"
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium text-foreground">
                      رقم الهاتف <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="249xxxxxxxx"
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="address" className="block font-medium text-foreground">
                      العنوان <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="الشارع، الحي، رقم المبنى"
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="city" className="block font-medium text-foreground">
                      المدينة / المنطقة <span className="text-destructive">*</span>
                    </label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="الخرطوم"
                      className="text-right"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="instructions" className="block font-medium text-foreground">
                      تعليمات التوصيل (اختياري)
                    </label>
                    <textarea
                      id="instructions"
                      name="instructions"
                      value={formData.instructions}
                      onChange={handleChange}
                      rows={3}
                      placeholder="أي ملاحظات خاصة بالتوصيل..."
                      className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-right placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-lg"
                >
                  {isLoading ? 'جاري التأكيد...' : 'تأكيد الطلب'}
                </Button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-secondary rounded-xl p-6 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-6">ملخص الطلب</h2>

                {/* Products List */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {items.map(item => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground text-sm truncate">{item.name}</p>
                        <p className="text-muted-foreground text-sm">x{item.quantity}</p>
                      </div>
                      <p className="text-accent font-semibold text-sm">{item.price * item.quantity} ر.س</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>المجموع الفرعي</span>
                    <span>{totalPrice} ر.س</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>التوصيل</span>
                    <span>مجاني</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold text-foreground pt-2 border-t border-border">
                    <span>المجموع</span>
                    <span className="text-accent">{totalPrice} ر.س</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
