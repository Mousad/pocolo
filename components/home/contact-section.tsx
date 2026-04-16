import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const contactLinks = [
  {
    icon: faInstagram,
   
    href: 'https://instagram.com',
    color: 'bg-gradient-to-br from-purple-500 to-pink-500',
  },
  {
    icon: faFacebook,
   
    href: 'https://facebook.com',
    color: 'bg-blue-600',
  },
  {
    icon: faWhatsapp,
    
    href: 'https://wa.me/966500000000',
    color: 'bg-green-500',
  },
  {
    icon: faPhone,
    
    href: 'tel:+966500000000',
    color: 'bg-primary',
  },
]

export function ContactSection() {
  return (
    <section className="py-10 bg-secondary">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-foreground mb-10">
          تواصل معنا
        </h2>

        <div className="flex flex-wrap justify-center gap-6">
          {contactLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-4 py-2 bg-background rounded-xl shadow-sm hover:shadow-md transition-all border border-border"
            >
              <div className={`${link.color} p-2 rounded-full text-white`}>
                <FontAwesomeIcon icon={link.icon} className="text-lg" />
              </div>

              <span className="font-medium text-foreground">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}