import { Phone, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function FloatingButtons() {
  return (
    <>
      {/* Floating Call Button */}
      <motion.a
        href="tel:+918424928242"
        className="fixed bottom-6 right-6 z-50 bg-orange-600 hover:bg-orange-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ rotate: 15 }}
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
      </motion.a>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918424928242"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ rotate: -15 }}
        aria-label="WhatsApp Order"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.a>
    </>
  );
}
