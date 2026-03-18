import { motion } from 'motion/react';
import { ChefHat, Heart, Star, Clock } from 'lucide-react';

export function About() {
  const features = [
    {
      icon: ChefHat,
      title: 'Authentic Taste',
      description: 'Traditional Chinese recipes with local flavors',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every dish prepared with care and quality ingredients',
    },
    {
      icon: Star,
      title: '5-Star Rated',
      description: 'Trusted by our customers with perfect ratings',
    },
    {
      icon: Clock,
      title: 'Quick Service',
      description: 'Fast preparation without compromising quality',
    },
  ];

  return (
    <section id="about" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            About <span className="text-orange-500">D Cafe & Chinese</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Welcome to D Cafe & Chinese, your favorite local cafe in Panvel serving 
            delicious Chinese food, burgers, snacks, and beverages. We pride ourselves 
            on offering authentic flavors at affordable prices, combined with exceptional 
            service that keeps our customers coming back for more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 p-8 rounded-2xl text-center hover:bg-neutral-750 transition-all hover:scale-105"
            >
              <div className="bg-orange-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-neutral-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
