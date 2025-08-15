import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Portfolio from '@/components/Portfolio';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HomeDynastyFurniture - Premium Furniture Contracting Services',
  description: 'Professional furniture contracting and interior design services. Custom furniture solutions for commercial and residential projects.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-50">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
