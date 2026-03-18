import { motion } from 'motion/react';
import { Store, ShoppingBag, Laptop } from 'lucide-react';

export function Order() {
  const orderOptions = [
    {
      icon: Store,
      title: 'Dine-In',
      description: 'Enjoy your meal in our cozy cafe atmosphere',
      color: 'from-orange-600 to-red-600',
    },
    {
      icon: ShoppingBag,
      title: 'Takeaway',
      description: 'Quick pickup service for your convenience',
      color: 'from-red-600 to-orange-600',
    },
    {
      icon: Laptop,
      title: 'Online Order',
      description: 'Order from the comfort of your home',
      color: 'from-orange-500 to-yellow-600',
    },
  ];

  return (
    <section id="order" className="py-20 bg-neutral-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            How to <span className="text-orange-500">Order</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Choose your preferred way to enjoy our delicious food
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {orderOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="bg-neutral-900 p-8 rounded-2xl text-center hover:scale-105 transition-all">
                <div className={`bg-gradient-to-br ${option.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">{option.title}</h3>
                <p className="text-neutral-400 mb-6">{option.description}</p>
                <a
                  href="tel:+918424928242"
                  className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all"
                >
                  Order Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
