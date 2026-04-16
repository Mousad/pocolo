import { MapPin } from 'lucide-react'

export function MapSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          موقعنا
        </h2>

        <div className="max-w-4xl mx-auto">
          
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-border">
            
            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps?q=Khartoum,Sudan&output=embed"
              className="absolute inset-0 w-full h-full"
              loading="lazy"
            />

            {/* Optional overlay info */}
            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm p-3 rounded-xl border border-border">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    الخرطوم، السودان
                  </p>
                  <p className="text-xs text-muted-foreground">
                    موقع المتجر
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}