import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background-light dark:bg-background-dark pt-16 pb-24 md:pt-24 md:pb-32 isolate">
        {/* Floating Icons */}
        <div className="absolute inset-0 z-10 opacity-60 dark:opacity-40">
          <span className="material-symbols-outlined absolute top-[10%] left-[5%] text-5xl text-primary animate-float-1 icon-shadow" style={{ fontSize: '60px' }}>icecream</span>
          <span className="material-symbols-outlined absolute top-[20%] right-[10%] text-6xl text-secondary animate-float-2 icon-shadow" style={{ fontSize: '72px' }}>local_bar</span>
          <span className="material-symbols-outlined absolute bottom-[15%] left-[20%] text-4xl text-accent animate-float-3 icon-shadow" style={{ fontSize: '48px' }}>cake</span>
          <span className="material-symbols-outlined absolute bottom-[25%] right-[25%] text-5xl text-primary/80 animate-float-4 icon-shadow" style={{ fontSize: '64px' }}>cookie</span>
          <span className="material-symbols-outlined absolute top-[60%] left-[15%] text-6xl text-secondary/80 animate-float-2 icon-shadow" style={{ fontSize: '68px' }}>liquor</span>
          <span className="material-symbols-outlined absolute top-[50%] right-[30%] text-4xl text-accent/90 animate-float-1 icon-shadow" style={{ fontSize: '44px' }}>cake</span>
        </div>


        <div className="max-w-7xl mx-auto px-6 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-7xl font-black text-navy dark:text-white tracking-tighter leading-tight hero-title-shadow">
                Cool Desserts,<br/>Chill Vibes,<br/>Event Ready.
              </h1>
              <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:mx-0">
                The perfect dessert & beverage partner for your events, bringing sweet delights and refreshing sips to every occasion.
              </p>
              <Link 
                to="/book-now"
                className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 mt-10 bg-primary text-navy text-lg font-bold leading-normal tracking-wider hover:bg-accent transition-all duration-300 ease-in-out shadow-lg shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 hover:scale-105"
              >
                <span className="truncate">Book Us for Your Event</span>
              </Link>
            </div>

            {/* Right Content - Hero Images */}
            <div className="relative h-80 lg:h-auto lg:aspect-[1/1] flex items-center justify-center">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl"></div>
              <img 
                alt="Ice cream dessert presentation for events" 
                className="relative z-10 w-[70%] max-w-sm lg:max-w-none lg:w-full h-auto object-cover rounded-3xl rotate-6 transition-transform duration-300 hover:rotate-2 hover:scale-105 shadow-2xl" 
                src="/main.png"
              />
              <img 
                alt="Milkshake" 
                className="absolute z-20 w-32 h-32 object-cover rounded-2xl shadow-xl -bottom-8 -left-4 lg:bottom-4 lg:-left-12 rotate-[-15deg] transition-transform duration-300 hover:rotate-[-5deg] hover:scale-110" 
                src="/side1.png"
              />
              <img 
                alt="Indian Dessert Falooda" 
                className="absolute z-20 w-32 h-32 object-cover rounded-2xl shadow-xl -top-8 -right-4 lg:top-4 lg:-right-12 rotate-[10deg] transition-transform duration-300 hover:rotate-[0deg] hover:scale-110" 
                src="/side2.png"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="bg-white dark:bg-navy/20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white">What We Offer</h2>
            <p className="mt-4 text-lg text-navy/70 dark:text-gray-300 max-w-2xl mx-auto font-body">
              A delightful selection of treats guaranteed to make your event unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/menu#soft-serve" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary">
              <div className="overflow-hidden">
                <img 
                  alt="Soft Serve Ice Cream" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/Softy.png"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Soft Serve Ice Cream</h3>
                <p className="font-body text-navy/70 dark:text-gray-400">
                  Creamy, dreamy, and swirled to perfection. A classic favorite for all ages.
                </p>
              </div>
            </Link>

            <Link to="/menu#milkshakes" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-secondary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-secondary">
              <div className="overflow-hidden">
                <img 
                  alt="Milkshakes" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/Milkshake.png"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Milkshakes</h3>
                <p className="font-body text-navy/70 dark:text-gray-400">
                  Thick, luscious, and blended with premium ingredients. Sip on pure happiness.
                </p>
              </div>
            </Link>

            <Link to="/menu#waffles" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-accent/40 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-accent">
              <div className="overflow-hidden">
                <img 
                  alt="Waffles" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/Waffle.png"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-navy dark:text-white mb-2">Waffles</h3>
                <p className="font-body text-navy/70 dark:text-gray-400">
                  Crispy on the outside, fluffy on the inside. Served with your favorite toppings.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="bg-background-light dark:bg-background-dark py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center gap-3 rounded-2xl p-8 bg-white dark:bg-navy/40 shadow-lg border border-gray-200/50 dark:border-white/10">
              <div className="text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>celebration</span>
              </div>
              <p className="text-navy/70 dark:text-gray-300 text-base font-medium">Events Catered</p>
              <p className="text-navy dark:text-white text-4xl font-bold">100+</p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-2xl p-8 bg-white dark:bg-navy/40 shadow-lg border border-gray-200/50 dark:border-white/10">
              <div className="text-secondary">
                <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>groups</span>
              </div>
              <p className="text-navy/70 dark:text-gray-300 text-base font-medium">Happy Guests Served</p>
              <p className="text-navy dark:text-white text-4xl font-bold">1500+</p>
            </div>

            <div className="flex flex-col items-center gap-3 rounded-2xl p-8 bg-white dark:bg-navy/40 shadow-lg border border-gray-200/50 dark:border-white/10">
              <div className="text-accent">
                <span className="material-symbols-outlined" style={{ fontSize: '48px' }}>health_and_safety</span>
              </div>
              <p className="text-navy/70 dark:text-gray-300 text-base font-medium">Hygiene Rating</p>
              <p className="text-navy dark:text-white text-4xl font-bold">5-Star</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
