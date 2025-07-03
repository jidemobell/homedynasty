'use client';

import { useState, useEffect } from 'react';

// Sample furniture data with enhanced details
const featuredProducts = [
  {
    id: 1,
    name: "Modern Minimalist Sofa",
    category: "Living Room",
    price: "$1,299",
    originalPrice: "$1,599",
    image: "/placeholder-sofa.jpg",
    description: "Sleek and comfortable 3-seater sofa perfect for modern living spaces with premium fabric upholstery.",
    features: ["Premium Fabric", "3-Seater", "Modern Design", "Comfortable Cushioning"],
    colors: ["Charcoal", "Beige", "Navy Blue"]
  },
  {
    id: 2,
    name: "Scandinavian Dining Table",
    category: "Dining Room",
    price: "$899",
    originalPrice: null,
    image: "/placeholder-table.jpg",
    description: "Beautiful solid oak dining table that seats 6 people comfortably with a timeless Scandinavian design.",
    features: ["Solid Oak Wood", "Seats 6", "Scandinavian Style", "Durable Finish"],
    colors: ["Natural Oak", "White Oak", "Dark Walnut"]
  },
  {
    id: 3,
    name: "Industrial Bookshelf",
    category: "Study",
    price: "$549",
    originalPrice: "$699",
    image: "/placeholder-bookshelf.jpg",
    description: "Sturdy metal and wood bookshelf with 5 spacious shelves, perfect for modern industrial interiors.",
    features: ["Metal Frame", "5 Shelves", "Industrial Style", "High Capacity"],
    colors: ["Black Metal", "Bronze", "Raw Steel"]
  },
  {
    id: 4,
    name: "Luxury King Bed Frame",
    category: "Bedroom",
    price: "$1,149",
    originalPrice: null,
    image: "/placeholder-bed.jpg",
    description: "Elegant upholstered bed frame with built-in nightstands and premium headboard design.",
    features: ["King Size", "Built-in Nightstands", "Upholstered", "Storage Space"],
    colors: ["Midnight Gray", "Cream", "Deep Navy"]
  },
  {
    id: 5,
    name: "Ergonomic Office Chair",
    category: "Office",
    price: "$649",
    originalPrice: "$799",
    image: "/placeholder-chair.jpg",
    description: "Premium ergonomic chair with lumbar support, adjustable height, and breathable mesh design.",
    features: ["Lumbar Support", "Height Adjustable", "Breathable Mesh", "360° Swivel"],
    colors: ["Black", "White", "Gray"]
  },
  {
    id: 6,
    name: "Mid-Century Coffee Table",
    category: "Living Room",
    price: "$449",
    originalPrice: null,
    image: "/placeholder-coffee-table.jpg",
    description: "Iconic mid-century design with solid walnut wood construction and elegant tapered legs.",
    features: ["Solid Walnut", "Mid-Century Design", "Tapered Legs", "Durable Build"],
    colors: ["Walnut", "Teak", "Cherry"]
  }
];

const FeaturedProducts = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 4000); // Reduced to 4 seconds for better UX

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]); // Added currentSlide dependency

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentProduct = featuredProducts[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our handpicked selection of premium furniture pieces that define modern living
          </p>
        </div>

        {/* Main Slider */}
        <div 
          className="relative bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-500"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid lg:grid-cols-2 min-h-[600px] transition-all duration-700 ease-in-out">
            {/* Image Section */}
            <div className="relative bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center overflow-hidden">
              {/* Full-size image placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <div className="text-gray-500 text-center">
                  <svg className="w-24 h-24 mx-auto mb-4 opacity-60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM5 4h14v8l-4-4-4 4-2-2-4 4V4z"/>
                  </svg>
                  <p className="text-lg font-medium opacity-80">{currentProduct.name}</p>
                  <p className="text-sm opacity-60">Premium Furniture Image</p>
                </div>
              </div>
              
              {/* Sale Badge - positioned on the image */}
              {currentProduct.originalPrice && (
                <div className="absolute top-6 right-6 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse z-10">
                  SALE
                </div>
              )}
              
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 flex flex-col justify-center animate-fade-in">
              <div className="space-y-6">
                {/* Category Badge */}
                <div className="inline-flex items-center">
                  <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                    {currentProduct.category}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                  {currentProduct.name}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed">
                  {currentProduct.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {currentProduct.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 text-amber-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Available Colors</h4>
                  <div className="flex space-x-3">
                    {currentProduct.colors.map((color, index) => (
                      <span key={index} className="text-xs px-3 py-1 bg-gray-100 text-gray-700 rounded-full font-medium">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-4">
                  <span className="text-4xl font-bold text-gray-900">{currentProduct.price}</span>
                  {currentProduct.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{currentProduct.originalPrice}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-4 pt-4">
                  <button className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors transform hover:scale-105 duration-200">
                    View Details
                  </button>
                  <button className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-md transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-3 rounded-full transition-all duration-300 overflow-hidden ${
                index === currentSlide 
                  ? 'bg-amber-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400 w-3'
              }`}
            >
              {/* Progress bar for current slide */}
              {index === currentSlide && isAutoPlaying && (
                <div 
                  className="absolute top-0 left-0 h-full bg-amber-600 rounded-full"
                  style={{
                    animation: 'slide-progress 4s linear infinite'
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Auto-play indicator */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium transition-colors ${
              isAutoPlaying 
                ? 'bg-green-100 text-green-700' 
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {isAutoPlaying ? (
              <>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Auto-playing</span>
              </>
            ) : (
              <>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Paused</span>
              </>
            )}
          </button>
        </div>

        {/* Product Counter */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-500 font-medium">
            {currentSlide + 1} of {featuredProducts.length}
          </span>
        </div>

        {/* View All Products Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-md">
            Explore Full Collection
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
