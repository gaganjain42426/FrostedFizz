import { Link } from 'react-router-dom'
import AuroraShader from '../components/AuroraShader'

export default function Home() {
  return (
    <main className="flex-grow preserve-3d">
      {/* Hero Section - Modern Ice Cream Landing Page Style */}
      <div className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50 dark:from-navy dark:via-background-dark dark:to-navy/80 min-h-[90vh] flex items-center">
        {/* Aurora Shader Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <AuroraShader 
            colorStops={["#FF6AA6", "#66D6FF", "#FF9ECC"]}
            amplitude={2.0}
            blend={0.7}
            speed={0.5}
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {/* Large decorative circles */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-float-2"></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float-3"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-navy/80 backdrop-blur-sm rounded-full border border-primary/20 shadow-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-navy dark:text-white">Premium Event Catering</span>
              </div>
              
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-navy dark:text-white">
                Sweet Treats<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
                  Unforgettable
                </span><br />
                Moments
              </h1>
              
              {/* Subtitle */}
              <p className="text-base sm:text-lg md:text-xl text-navy/70 dark:text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Transform your events with our signature soft serves, artisan beverages, and delicious treats. Perfect for weddings, parties & corporate events.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/inquiry"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-navy text-lg font-bold rounded-2xl hover:bg-accent transition-all duration-300 shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
                >
                  <span>Book Your Event</span>
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
                <Link 
                  to="/menu"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 dark:bg-navy/80 backdrop-blur-sm text-navy dark:text-white text-lg font-semibold rounded-2xl hover:bg-white dark:hover:bg-navy transition-all duration-300 border border-navy/10 dark:border-white/10 hover:border-primary/30"
                >
                  <span>View Menu</span>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-6 sm:gap-8 justify-center lg:justify-start pt-4">
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-primary">100+</div>
                  <div className="text-sm text-navy/60 dark:text-gray-400">Events</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-secondary">1500+</div>
                  <div className="text-sm text-navy/60 dark:text-gray-400">Happy Guests</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black text-accent">5★</div>
                  <div className="text-sm text-navy/60 dark:text-gray-400">Rating</div>
                </div>
              </div>
            </div>
            
            {/* Right Content - Hero Image/Visual */}
            <div className="relative">
              {/* Main circular background */}
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                {/* Animated circle background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full animate-float-1"></div>
                <div className="absolute inset-8 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full animate-float-2"></div>
                
                {/* Product showcase icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    {/* Center large icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-52 sm:h-52 bg-white dark:bg-navy rounded-full flex items-center justify-center shadow-2xl">
                      <span className="material-symbols-outlined text-primary animate-float-3" style={{ fontSize: '120px' }}>icecream</span>
                    </div>
                    
                    {/* Orbiting icons */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-navy rounded-full flex items-center justify-center shadow-lg animate-float-1">
                      <span className="material-symbols-outlined text-secondary" style={{ fontSize: '48px' }}>local_bar</span>
                    </div>
                    
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 bg-white dark:bg-navy rounded-full flex items-center justify-center shadow-lg animate-float-2">
                      <span className="material-symbols-outlined text-accent" style={{ fontSize: '48px' }}>cake</span>
                    </div>
                    
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-18 h-18 sm:w-20 sm:h-20 bg-white dark:bg-navy rounded-full flex items-center justify-center shadow-lg animate-float-4">
                      <span className="material-symbols-outlined text-primary" style={{ fontSize: '40px' }}>cookie</span>
                    </div>
                    
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 w-18 h-18 sm:w-20 sm:h-20 bg-white dark:bg-navy rounded-full flex items-center justify-center shadow-lg animate-float-3">
                      <span className="material-symbols-outlined text-secondary" style={{ fontSize: '40px' }}>bakery_dining</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Section */}
      <section className="bg-background-light dark:bg-background-dark py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white">What We Offer</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-navy/70 dark:text-gray-300 max-w-2xl mx-auto font-body">
              A delightful selection of treats guaranteed to make your event unforgettable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Link to="/menu#soft-serve" className="group block">
              <div className="bg-white dark:bg-navy/30 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center flex flex-col items-center border border-gray-200/50 dark:border-white/10">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary text-5xl">icecream</span>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Soft Serve Ice Cream</h3>
                <p className="font-body text-navy/70 dark:text-gray-400">
                  Creamy, dreamy, and swirled to perfection. Our soft serves are a classic favorite for all ages.
                </p>
              </div>
            </Link>

            <Link to="/menu#milkshakes" className="group block">
              <div className="bg-white dark:bg-navy/30 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center flex flex-col items-center border border-gray-200/50 dark:border-white/10">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-secondary/10 mb-6 group-hover:bg-secondary/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-secondary text-5xl">local_bar</span>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Milkshakes</h3>
                <p className="font-body text-navy/70 dark:text-gray-400">
                  Thick, luscious, and blended with premium ingredients. Sip on pure happiness with our variety of flavors.
                </p>
              </div>
            </Link>

            <Link to="/menu#waffles" className="group block">
              <div className="bg-white dark:bg-navy/30 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-8 text-center flex flex-col items-center border border-gray-200/50 dark:border-white/10">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-accent/20 mb-6 group-hover:bg-accent/30 transition-colors duration-300">
                  <span className="material-symbols-outlined text-accent text-5xl">bakery_dining</span>
                </div>
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Waffles</h3>
                <p className="font-body text-navy/70 dark:text-gray-400">
                  Crispy on the outside, fluffy on the inside. Served hot with your favorite toppings and sauces.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-background-light dark:bg-background-dark py-12 sm:py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div className="flex flex-col items-center gap-3 rounded-xl p-6 bg-white dark:bg-navy/30 border border-gray-200/50 dark:border-white/10">
              <div className="text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>celebration</span>
              </div>
              <p className="text-navy dark:text-gray-300 text-base font-medium leading-normal">Events Catered</p>
              <p className="text-navy dark:text-white text-3xl font-bold leading-tight">100+</p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-xl p-6 bg-white dark:bg-navy/30 border border-gray-200/50 dark:border-white/10">
              <div className="text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>groups</span>
              </div>
              <p className="text-navy dark:text-gray-300 text-base font-medium leading-normal">Happy Guests Served</p>
              <p className="text-navy dark:text-white text-3xl font-bold leading-tight">1500+</p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-xl p-6 bg-white dark:bg-navy/30 border border-gray-200/50 dark:border-white/10">
              <div className="text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>health_and_safety</span>
              </div>
              <p className="text-navy dark:text-gray-300 text-base font-medium leading-normal">Hygiene Rating</p>
              <p className="text-navy dark:text-white text-3xl font-bold leading-tight">5-Star</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-navy/50 dark:to-primary/20 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3 sm:mb-4">
            Ready to Add Sweetness to Your Event?
          </h2>
          <p className="text-base sm:text-lg text-navy/70 dark:text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring the perfect dessert experience to your special day.
          </p>
          <Link 
            to="/inquiry"
            className="inline-flex w-full sm:w-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 sm:h-14 px-6 sm:px-8 bg-primary text-navy text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span className="truncate">Get a Quote</span>
          </Link>
        </div>
      </section>
    </main>
  )
}
