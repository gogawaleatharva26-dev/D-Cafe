import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      text: 'Best food quality best service.',
      author: 'Happy Customer',
      rating: 5,
    },
    {
      text: 'Delicious food in affordable price.',
      author: 'Satisfied Customer',
      rating: 5,
    },
    {
      text: 'The burger surprised me, food taste is too yummy.',
      author: 'Food Lover',
      rating: 5,
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Customer <span className="text-orange-500">Reviews</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          
          {/* Overall Rating */}
          <div className="inline-flex items-center gap-4 bg-neutral-800 px-8 py-4 rounded-full">
            <div className="flex items-center gap-2">
              <Star className="w-8 h-8 fill-orange-500 text-orange-500" />
              <span className="text-4xl font-bold text-white">5.0</span>
            </div>
            <div className="text-left">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="text-neutral-400">Based on 28 Google Reviews</p>
            </div>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 p-8 rounded-2xl relative hover:bg-neutral-750 transition-all hover:scale-105"
            >
              <Quote className="w-12 h-12 text-orange-500/20 absolute top-4 right-4" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                ))}
              </div>

              <p className="text-lg text-white mb-6 italic">"{review.text}"</p>
              
              <p className="text-neutral-400">— {review.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
