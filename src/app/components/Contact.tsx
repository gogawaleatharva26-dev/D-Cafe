import { motion } from 'motion/react';
import { Phone, MapPin, Clock, Navigation, ShoppingBag } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6" />
          <p className="text-lg text-neutral-300 max-w-2xl mx-auto">
            Visit us, call us, or order online - we're here to serve you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Phone */}
            <div className="flex items-start gap-4 bg-neutral-800 p-6 rounded-2xl hover:bg-neutral-750 transition-all">
              <div className="bg-orange-600/20 p-3 rounded-full">
                <Phone className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                <a
                  href="tel:+918424928242"
                  className="text-neutral-300 hover:text-orange-500 transition-colors"
                >
                  +91 84249 28242
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 bg-neutral-800 p-6 rounded-2xl hover:bg-neutral-750 transition-all">
              <div className="bg-orange-600/20 p-3 rounded-full">
                <MapPin className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
                <p className="text-neutral-300">
                  Shop No. 10, Mangalmurti CHS<br />
                  New Sector 11<br />
                  Khanda Colony<br />
                  Panvel, Maharashtra 410218
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 bg-neutral-800 p-6 rounded-2xl hover:bg-neutral-750 transition-all">
              <div className="bg-orange-600/20 p-3 rounded-full">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Opening Hours</h3>
                <p className="text-neutral-300">
                  Monday – Sunday<br />
                  10:00 AM – 11:00 PM
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a
                href="tel:+918424928242"
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Shop+No.+10+Mangalmurti+CHS+New+Sector+11+Khanda+Colony+Panvel+Maharashtra+410218"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" />
                Directions
              </a>
              <a
                href="#order"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Order
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-full min-h-[400px] rounded-2xl overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.0!2d73.1!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAwJzAwLjAiTiA3M8KwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
              title="D Cafe & Chinese Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
