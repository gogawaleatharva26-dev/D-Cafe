import { motion } from 'motion/react';
import { UtensilsCrossed, Coffee, Soup, Sandwich, Pizza } from 'lucide-react';

export function Menu() {
  const menuItems = [
    {
      icon: Soup,
      name: 'Chinese Food',
      description: 'Authentic Chinese dishes including noodles, fried rice, manchurian, and more',
      image: 'https://images.unsplash.com/photo-1755742319537-449f661a3190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluZXNlJTIwZm9vZCUyMHJlc3RhdXJhbnQlMjBkaXNoZXN8ZW58MXx8fHwxNzczNzE1Njk1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-red-600 to-orange-600',
    },
    {
      icon: Sandwich,
      name: 'Burgers',
      description: 'Juicy burgers with fresh ingredients that will surprise your taste buds',
      image: 'https://images.unsplash.com/photo-1675071676919-82bc10274d56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXIlMjBjYWZlJTIwZm9vZHxlbnwxfHx8fDE3NzM3MTU2OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-orange-600 to-yellow-600',
    },
    {
      icon: Pizza,
      name: 'Snacks',
      description: 'Quick bites and delicious snacks perfect for any time of the day',
      image: 'https://images.unsplash.com/photo-1600682514562-408847492662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwZm9vZCUyMHNuYWNrc3xlbnwxfHx8fDE3NzM3MTU2OTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-yellow-600 to-orange-500',
    },
    {
      icon: UtensilsCrossed,
      name: 'Fast Food',
      description: 'Quick and tasty fast food options for those on the go',
      image: 'https://images.unsplash.com/photo-1653724618366-abd0bde22c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHN0cmVldCUyMGZvb2R8ZW58MXx8fHwxNzczNjc4OTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: Coffee,
      name: 'Beverages',
      description: 'Refreshing drinks, coffee, tea, and specialty beverages',
      image: 'https://images.unsplash.com/photo-1622971119687-649777b91b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXZlcmFnZXMlMjBjYWZlJTIwZHJpbmtzfGVufDF8fHx8MTc3MzcxNTY5Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      color: 'from-amber-600 to-orange-600',
    },
  ];

  return (
    <section id="menu" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Our <span className="text-orange-500">Menu</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Explore our diverse menu featuring Chinese specialties, burgers, snacks, and more
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-neutral-900 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-orange-500/20 transition-all"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-40 z-10`} />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/20 backdrop-blur-sm p-3 rounded-full">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-white">{item.name}</h3>
                <p className="text-neutral-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
