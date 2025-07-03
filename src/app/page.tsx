import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'HomeDynasty',
  description: 'Transform your living space with premium furniture pieces that combine style, comfort, and quality craftsmanship.',
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </main>
  );
}
