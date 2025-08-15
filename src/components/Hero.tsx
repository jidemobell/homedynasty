const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 via-transparent to-stone-900/30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Premium Furniture
              <span className="block text-amber-500">Contracting Services</span>
            </h1>
            
            <p className="text-xl text-stone-300 mb-8 leading-relaxed max-w-2xl">
              We specialize in custom furniture solutions for commercial and residential projects. 
              From concept to completion, we deliver exceptional craftsmanship that transforms spaces.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                View Our Work
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              
              <a
                href="tel:+1234567890"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-stone-300 text-stone-300 hover:border-amber-500 hover:text-amber-500 font-semibold rounded-lg transition-colors"
              >
                <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (123) 456-7890
              </a>
            </div>
            
            {/* Business Credentials */}
            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-stone-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">15+</div>
                <div className="text-sm text-stone-300 uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
                <div className="text-sm text-stone-300 uppercase tracking-wide">Licensed & Insured</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-100/20 to-stone-100/10 rounded-2xl"></div>
            <div className="relative h-full flex items-center justify-center p-8">
              <div className="text-center text-stone-400">
                <svg className="w-32 h-32 mx-auto mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-2m-12 0H3m2 0h2M9 7h6m-6 4h6m-6 4h6m-6 4h6" />
                </svg>
                <p className="text-lg font-medium opacity-80">Professional Showcase</p>
                <p className="text-sm opacity-60">Premium furniture contracting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 text-neutral-50" fill="currentColor" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
