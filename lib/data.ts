export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: string
  description: string
  isTopSelling?: boolean
  isFeatured?: boolean
}

export interface Category {
  id: string
  name: string
  slug: string
  image: string
}

export const categories: Category[] = [
  {
    id: '1',
    name: 'حلويات',
    slug: 'desserts',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop',
  },
  {
    id: '2',
    name: 'مشروبات',
    slug: 'drinks',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=400&fit=crop',
  },
  {
    id: '3',
    name: 'آيس كريم',
    slug: 'ice-cream',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&h=400&fit=crop',
  },
  {
    id: '4',
    name: 'وجبات خفيفة',
    slug: 'snacks',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=400&fit=crop',
  },
]

export const products: Product[] = [
  // Desserts
  {
    id: '1',
    name: 'كيكة الشوكولاتة الفاخرة',
    price: 45,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop',
    category: 'desserts',
    description: 'طعم غني ومكونات مختارة بعناية لتجربة فريدة',
    isTopSelling: true,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'تشيز كيك التوت',
    price: 38,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop',
    category: 'desserts',
    description: 'تشيز كيك كريمي مع صوص التوت الطازج',
    isTopSelling: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'كنافة بالقشطة',
    price: 35,
    image: 'https://images.unsplash.com/photo-1579888944880-d98341245702?w=400&h=400&fit=crop',
    category: 'desserts',
    description: 'كنافة مقرمشة محشوة بالقشطة الطازجة',
    isTopSelling: true,
  },
  {
    id: '4',
    name: 'بسبوسة بالقطر',
    price: 25,
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&h=400&fit=crop',
    category: 'desserts',
    description: 'بسبوسة طرية مع قطر السكر',
    isFeatured: true,
  },
  {
    id: '5',
    name: 'تيراميسو إيطالي',
    price: 42,
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop',
    category: 'desserts',
    description: 'طبقات من الكريمة والقهوة والبسكويت',
    isTopSelling: true,
    isFeatured: true,
  },
  {
    id: '6',
    name: 'براونيز بالجوز',
    price: 28,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop',
    category: 'desserts',
    description: 'براونيز غنية بالشوكولاتة والجوز المحمص',
  },
  // Drinks
  {
    id: '7',
    name: 'موكا مثلجة',
    price: 22,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop',
    category: 'drinks',
    description: 'قهوة موكا باردة مع الكريمة',
    isTopSelling: true,
  },
  {
    id: '8',
    name: 'سموذي الفراولة',
    price: 18,
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=400&fit=crop',
    category: 'drinks',
    description: 'سموذي طازج بالفراولة والحليب',
    isFeatured: true,
  },
  {
    id: '9',
    name: 'شوكولاتة ساخنة',
    price: 20,
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=400&h=400&fit=crop',
    category: 'drinks',
    description: 'شوكولاتة ساخنة غنية مع المارشميلو',
  },
  {
    id: '10',
    name: 'عصير المانجو',
    price: 16,
    image: 'https://images.unsplash.com/photo-1546173159-315724a31696?w=400&h=400&fit=crop',
    category: 'drinks',
    description: 'عصير مانجو طبيعي طازج',
  },
  // Ice Cream
  {
    id: '11',
    name: 'آيس كريم الفانيليا',
    price: 15,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=400&h=400&fit=crop',
    category: 'ice-cream',
    description: 'آيس كريم فانيليا كريمي',
    isFeatured: true,
  },
  {
    id: '12',
    name: 'صندي الكراميل',
    price: 24,
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=400&fit=crop',
    category: 'ice-cream',
    description: 'آيس كريم مع صوص الكراميل والمكسرات',
    isTopSelling: true,
  },
  {
    id: '13',
    name: 'آيس كريم الفستق',
    price: 18,
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&h=400&fit=crop',
    category: 'ice-cream',
    description: 'آيس كريم فستق طبيعي',
  },
  {
    id: '14',
    name: 'ميلك شيك أوريو',
    price: 22,
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=400&h=400&fit=crop',
    category: 'ice-cream',
    description: 'ميلك شيك كريمي مع بسكويت أوريو',
  },
  // Snacks
  {
    id: '15',
    name: 'كرواسون بالشوكولاتة',
    price: 12,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop',
    category: 'snacks',
    description: 'كرواسون طازج محشو بالشوكولاتة',
    isFeatured: true,
  },
  {
    id: '16',
    name: 'دونات السكر',
    price: 8,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=400&fit=crop',
    category: 'snacks',
    description: 'دونات طرية مغطاة بالسكر',
  },
  {
    id: '17',
    name: 'مافن التوت الأزرق',
    price: 10,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&h=400&fit=crop',
    category: 'snacks',
    description: 'مافن طازج مع التوت الأزرق',
  },
  {
    id: '18',
    name: 'كوكيز الشوكولاتة',
    price: 6,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop',
    category: 'snacks',
    description: 'كوكيز طرية مع رقائق الشوكولاتة',
  },
]

export const galleryImages = [
  'https://i.pinimg.com/1200x/34/a6/64/34a6644ab8f031d9007ba635bfe15664.jpg',
  'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559620192-032c4bc4674e?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=400&fit=crop',
  'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?w=600&h=400&fit=crop',
]

export function getTopSellingProducts() {
  return products.filter(p => p.isTopSelling).slice(0, 5)
}

export function getFeaturedProducts() {
  return products.filter(p => p.isFeatured).slice(0, 6)
}

export function getProductsByCategory(category: string) {
  return products.filter(p => p.category === category)
}

export function getProductById(id: string) {
  return products.find(p => p.id === id)
}

export function getRelatedProducts(productId: string, category: string) {
  return products.filter(p => p.category === category && p.id !== productId).slice(0, 4)
}
