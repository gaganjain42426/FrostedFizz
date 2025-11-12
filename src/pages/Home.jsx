import { Link } from 'react-router-dom'
import AuroraShader from '../components/AuroraShader'

export default function Home() {
  return (
    <main className="flex-grow preserve-3d">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white dark:from-navy dark:via-background-dark dark:to-navy py-24 md:py-40 isolate">
        {/* Aurora Shader Background */}
        <div className="absolute inset-0 z-0">
          <AuroraShader 
            colorStops={["#FF6AA6", "#66D6FF", "#FF9ECC"]}
            amplitude={2.0}
            blend={0.7}
            speed={0.5}
          />
        </div>
        
        {/* Floating Icons - Hidden on mobile for cleaner look */}
        <div className="hidden sm:block absolute inset-0 z-10 opacity-80 dark:opacity-60">
          <span className="material-symbols-outlined absolute top-[10%] left-[5%] text-4xl md:text-5xl text-primary animate-float-1 icon-shadow" style={{ fontSize: '60px' }}>icecream</span>
          <span className="material-symbols-outlined absolute top-[20%] right-[10%] text-5xl md:text-6xl text-secondary animate-float-2 icon-shadow" style={{ fontSize: '72px' }}>local_bar</span>
          <span className="material-symbols-outlined absolute bottom-[15%] left-[20%] text-3xl md:text-4xl text-accent animate-float-3 icon-shadow" style={{ fontSize: '48px' }}>cake</span>
          <span className="material-symbols-outlined absolute bottom-[25%] right-[25%] text-4xl md:text-5xl text-primary/80 animate-float-4 icon-shadow" style={{ fontSize: '64px' }}>cookie</span>
          <span className="material-symbols-outlined absolute top-[60%] left-[15%] text-5xl md:text-6xl text-secondary/80 animate-float-2 icon-shadow" style={{ fontSize: '68px' }}>liquor</span>
          <span className="material-symbols-outlined absolute top-[50%] right-[30%] text-3xl md:text-4xl text-accent/90 animate-float-1 icon-shadow" style={{ fontSize: '44px' }}>cake</span>
        </div>
        
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-4 sm:gap-6 text-center items-center">
            <h1 className="text-navy dark:text-white text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black leading-tight tracking-tighter max-w-4xl animate-text-pop">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Cool Desserts,</span> Chill Vibes, Event Ready.
            </h1>
            <h2 className="font-body text-navy/80 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl animate-text-pop [animation-delay:200ms]">
              The perfect dessert & beverage partner for your events, bringing sweet delights and refreshing sips to every occasion.
            </h2>
            <Link 
              to="/inquiry"
              className="flex min-w-[84px] w-full sm:w-auto max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 sm:h-14 px-6 sm:px-8 mt-4 sm:mt-6 bg-primary text-navy text-base sm:text-lg font-bold leading-normal tracking-[0.015em] hover:bg-accent transition-all duration-300 ease-in-out shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105 sm:hover:scale-110"
            >
              <span className="truncate">Book Us for Your Event</span>
            </Link>
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
