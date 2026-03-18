import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    title: 'Events',
    subtitle: 'Music & Workshops',
    image: 'https://images.unsplash.com/photo-1666034882457-d2f5eb7d7e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwbXVzaWMlMjBsaXZlJTIwZXZlbnQlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzM3MTY1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    href: '#contact',
  },
  {
    title: 'Gifting',
    subtitle: 'Coffee & Merch',
    image: 'https://images.unsplash.com/photo-1764151618611-03e2ba824a04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBnaWZ0JTIwbWVyY2hhbmRpc2UlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzczNzE2NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    href: '#contact',
  },
  {
    title: 'Cafe Experience',
    subtitle: 'Ambience & Dining',
    image: 'https://images.unsplash.com/photo-1740416243879-ae401c7e014c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwY2FmZSUyMGludGVyaW9yJTIwYW1iaWVuY2UlMjBkaW5pbmd8ZW58MXx8fHwxNzczNzE2NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    href: '#contact',
  },
];

export function CategoryGrid() {
  return (
    <section className="bg-[#fdf8f0] px-6 md:px-10 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-[#c8921a] tracking-[0.25em] uppercase text-xs font-semibold mb-3">
            What We Offer
          </p>
          <h2
            className="text-[#1a0f00] text-3xl md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            More Than Just Food
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, index) => (
            <motion.a
              key={index}
              href={cat.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl aspect-[3/4] block cursor-pointer"
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f00]/85 via-[#1a0f00]/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-[#c8921a] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                  {cat.subtitle}
                </p>
                <div className="flex items-end justify-between">
                  <h3
                    className="text-white text-2xl md:text-3xl leading-tight"
                    style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
                  >
                    {cat.title}
                  </h3>
                  <div className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-[#c8921a] transition-colors duration-300 flex-shrink-0 ml-4">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
