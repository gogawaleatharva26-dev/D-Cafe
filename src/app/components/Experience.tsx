import { motion } from 'motion/react';
import { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Community',
    subtitle: 'A Place to Belong',
    description: 'Join our warm, welcoming community of food lovers and coffee enthusiasts in the heart of Panvel.',
    image: 'https://images.unsplash.com/photo-1759753972050-839775c071e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwY29tbXVuaXR5JTIwcGVvcGxlJTIwZnJpZW5kcyUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzM3MTY1NDd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Coffee Culture',
    subtitle: 'The Art of Brewing',
    description: 'We celebrate the craft of specialty coffee — from carefully sourced beans to every perfectly pulled shot.',
    image: 'https://images.unsplash.com/photo-1719581228567-4d928454c793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBjdWx0dXJlJTIwYXJ0aXNhbiUyMHJvYXN0aW5nJTIwYmVhbnN8ZW58MXx8fHwxNzczNzE2NTQ4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Events',
    subtitle: 'Memorable Evenings',
    description: 'From live music nights to themed evenings, we create experiences that go beyond a great meal.',
    image: 'https://images.unsplash.com/photo-1666034882457-d2f5eb7d7e37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwbXVzaWMlMjBsaXZlJTIwZXZlbnQlMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NzM3MTY1Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Workshops',
    subtitle: 'Learn & Connect',
    description: 'Hands-on brewing workshops and culinary sessions where you discover the magic behind every cup.',
    image: 'https://images.unsplash.com/photo-1771159978458-3df74f41a918?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiYXJpc3RhJTIwcHJlcGFyaW5nJTIwZXNwcmVzc298ZW58MXx8fHwxNzczNzE2NTM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function Experience() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const amount = 340;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -amount : amount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="bg-[#1a0f00] py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="text-[#c8921a] tracking-[0.25em] uppercase text-xs font-semibold mb-3">
              The D Cafe Life
            </p>
            <h2
              className="text-white text-3xl md:text-5xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Beyond the Cup
            </h2>
          </div>
          {/* Scroll controls (desktop) */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#c8921a] hover:border-[#c8921a] transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#c8921a] hover:border-[#c8921a] transition-all duration-300"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Horizontal scroll container (full width) */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 px-6 md:px-10 scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex-shrink-0 w-72 md:w-80 rounded-3xl overflow-hidden"
            style={{ height: '440px' }}
          >
            <img
              src={exp.image}
              alt={exp.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0f00]/90 via-[#1a0f00]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-7">
              <p className="text-[#c8921a] text-xs tracking-[0.2em] uppercase font-semibold mb-2">
                {exp.subtitle}
              </p>
              <h3
                className="text-white text-2xl mb-3"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                {exp.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
        {/* Padding element at end */}
        <div className="flex-shrink-0 w-6 md:w-10" />
      </div>
    </section>
  );
}
