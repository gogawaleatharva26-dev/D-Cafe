import { Phone, MapPin, Clock, Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/90 via-neutral-900/90 to-red-950/90 z-10" />
        <img
          src="https://images.unsplash.com/photo-1755742319537-449f661a3190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHJlc3RhdXJhbnQlMjBkaXNoZXN8ZW58MXx8fHwxNzczNzE1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="D Cafe & Chinese"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            D Cafe & Chinese
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-orange-100">
            Authentic Chinese Food • Burgers • Snacks • Beverages
          </p>

          {/* Rating & Status */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <Star className="w-5 h-5 fill-orange-500 text-orange-500" />
              <span className="text-white font-semibold">5.0</span>
              <span className="text-orange-100">| 28 Google Reviews</span>
            </div>
            <div className="flex items-center gap-2 bg-green-600/90 backdrop-blur-sm px-6 py-3 rounded-full">
              <Clock className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Open Now</span>
              <span className="text-green-100">• Closes at 11 PM</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#order"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              Order Now
            </a>
            <a
              href="tel:+918424928242"
              className="bg-white hover:bg-orange-50 text-orange-600 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Shop+No.+10+Mangalmurti+CHS+New+Sector+11+Khanda+Colony+Panvel+Maharashtra+410218"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Get Directions
            </a>
            <a
              href="#menu"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 border-2 border-white/30"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
