import { useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CategoryGrid } from './components/CategoryGrid';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { Gallery } from './components/Gallery';
import { Experience } from './components/Experience';
import { Order } from './components/Order';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950">
      <Navigation />
      <Hero />
      <About />
      <CategoryGrid />
      <Menu />
      <Reviews />
      <Gallery />
      <Experience />
      <Order />
      <Contact />
      <Footer />
      <FloatingButtons />
    </div>
  );
}