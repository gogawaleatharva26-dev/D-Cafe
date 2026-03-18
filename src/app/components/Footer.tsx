import { Phone, MapPin, Clock, Facebook, Instagram, Mail } from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Menu', href: '#menu' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-neutral-950 border-t border-neutral-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              D Cafe <span className="text-orange-500">&</span> Chinese
            </h3>
            <p className="text-neutral-400 mb-4">
              Your favorite local cafe serving delicious Chinese food, burgers, 
              snacks, and beverages at affordable prices.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="bg-neutral-800 hover:bg-orange-600 p-2 rounded-full transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a
                href="#"
                className="bg-neutral-800 hover:bg-orange-600 p-2 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a
                href="mailto:info@dcafechinese.com"
                className="bg-neutral-800 hover:bg-orange-600 p-2 rounded-full transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-neutral-400">
                <Phone className="w-5 h-5 text-orange-500 mt-0.5" />
                <a href="tel:+918424928242" className="hover:text-orange-500 transition-colors">
                  +91 84249 28242
                </a>
              </li>
              <li className="flex items-start gap-2 text-neutral-400">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5" />
                <span>
                  Shop No. 10, Mangalmurti CHS<br />
                  New Sector 11, Khanda Colony<br />
                  Panvel, Maharashtra 410218
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-white">Opening Hours</h4>
            <div className="flex items-start gap-2 text-neutral-400">
              <Clock className="w-5 h-5 text-orange-500 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Monday – Sunday</p>
                <p>10:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
          <p className="text-neutral-400">
            © {new Date().getFullYear()} D Cafe & Chinese. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
