'use client';

import { useState } from 'react';
import Image from 'next/image';

// Photo credits (Unsplash): Hunter So, Austin Distel, Redd Francisco, Lotus Design N Print, Hanson Lu
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Executive Conference Center",
      category: "commercial",
      client: "Corporate Plaza Lagos",
      image: "/images/portfolio/hunter-so-0aDppK_puk0-unsplash.jpg",
      description: "Modern conference room furniture with custom tables and executive seating for professional meetings."
    },
    {
      id: 2,
      title: "Tech Office Workspace",
      category: "commercial",
      client: "Zenith Business Solutions",
      image: "/images/portfolio/austin-distel-wawEfYdpkag-unsplash.jpg",
      description: "Contemporary office workstations with ergonomic design and collaborative workspace solutions."
    },
    {
      id: 3,
      title: "Elegant Dining Room",
      category: "residential",
      client: "Private Residence Victoria Island",
      image: "/images/portfolio/redd-francisco-lIwHqW83FZk-unsplash.jpg",
      description: "Custom dining table and chairs set with sophisticated design for family gatherings."
    },
    {
      id: 4,
      title: "Luxury Master Bedroom",
      category: "residential",
      client: "Adunni Olumide",
      image: "/images/portfolio/lotus-design-n-print-8qNuR1lIv_k-unsplash.jpg",
      description: "Premium bedroom furniture with custom headboard and matching nightstands in minimalist style."
    },
    {
      id: 5,
      title: "Commercial Building Lobby",
      category: "commercial",
      client: "Lagos Grand Hotel",
      image: "/images/portfolio/hanson-lu-AaGLXf83oq4-unsplash.jpg",
      description: "Grand lobby furniture featuring reception area and lounge seating for business guests."
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'commercial', name: 'Commercial' },
    { id: 'residential', name: 'Residential' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-stone-800 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Explore our recent projects and see how we&apos;ve transformed spaces with 
            custom furniture solutions that combine functionality with exceptional design.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-2 shadow-sm border border-stone-200">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-md font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'text-stone-600 hover:text-amber-600 hover:bg-amber-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${
                    project.category === 'commercial' 
                      ? 'bg-blue-100 text-blue-800 bg-opacity-90' 
                      : 'bg-green-100 text-green-800 bg-opacity-90'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-amber-600 font-medium text-sm mb-3">
                  {project.client}
                </p>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Testimonials */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-stone-800 text-center mb-12">
            What Our Clients Say
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Adunni Olumide",
                company: "Lagos Grand Hotel",
                quote: "HomeDynastyFurniture transformed our lobby with stunning custom furniture. Their attention to detail is unmatched."
              },
              {
                name: "Emeka Okafor",
                company: "Zenith Business Solutions",
                quote: "Professional, reliable, and exceptional quality. They delivered our complete office solution on time and within budget."
              },
              {
                name: "Folake Adebayo",
                company: "Private Client",
                quote: "Our custom bedroom furniture exceeds all expectations. Beautiful craftsmanship and perfect functionality."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-stone-200">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-stone-600 mb-4 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="font-semibold text-stone-800">{testimonial.name}</div>
                <div className="text-sm text-stone-500">{testimonial.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
