export default function Menu() {
  return (
    <main className="flex-grow">
      {/* Header Section */}
      <section className="py-16 md:py-24 text-center bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-shadow-blue dark:text-shadow-pink text-navy dark:text-white">
            Our Delicious Offerings
          </h1>
          <p className="mt-4 font-body text-lg md:text-xl text-navy/80 dark:text-gray-300 max-w-2xl mx-auto">
            A delightful selection of treats guaranteed to make your event unforgettable.
          </p>
        </div>
      </section>

      <div className="space-y-24 md:space-y-32 py-12 overflow-hidden">
        {/* Soft Serve Section */}
        <section id="soft-serve" className="relative">
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 -skew-y-3"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-blue dark:text-shadow-pink text-navy dark:text-white">
                  Soft Serve
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:mx-0">
                  Creamy, dreamy, and swirled to perfection. A classic favorite for all ages, available in a variety of delightful flavors.
                </p>
              </div>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30" style={{ clipPath: 'ellipse(80% 65% at 50% 50%)' }}></div>
                <img 
                  alt="Soft Serve" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="/Softy.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Milkshake Section */}
        <section id="milkshakes" className="relative">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 flex items-center justify-center order-last lg:order-first">
                <div className="absolute inset-0 bg-secondary/20 dark:bg-secondary/30" style={{ clipPath: 'ellipse(75% 70% at 50% 50%)' }}></div>
                <img 
                  alt="Milkshake" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="/Milkshake.png"
                />
              </div>
              <div className="text-center lg:text-right">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-pink dark:text-shadow-blue text-navy dark:text-white">
                  Milkshake
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:ml-auto lg:mr-0">
                  Thick, luscious, and blended with premium ingredients. Sip on pure happiness with our wide range of custom shakes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Waffle Section */}
        <section id="waffles" className="relative">
          <div className="absolute inset-0 bg-accent/10 dark:bg-accent/20 skew-y-3"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-blue dark:text-shadow-pink text-navy dark:text-white">
                  Waffle
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:mx-0">
                  Crispy on the outside, fluffy on the inside. Our waffles are a perfect canvas for your favorite sweet toppings.
                </p>
              </div>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/20 dark:bg-accent/30" style={{ clipPath: 'ellipse(80% 65% at 50% 50%)' }}></div>
                <img 
                  alt="Waffle" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="/Waffle.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ice Gola Section */}
        <section id="ice-gola" className="relative">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 flex items-center justify-center order-last lg:order-first">
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30" style={{ clipPath: 'ellipse(75% 70% at 50% 50%)' }}></div>
                <img 
                  alt="Ice Gola" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="/icegola.png"
                />
              </div>
              <div className="text-center lg:text-right">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-pink dark:text-shadow-blue text-navy dark:text-white">
                  Ice Gola
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:ml-auto lg:mr-0">
                  Refreshing shaved ice with colorful flavored syrups. A perfect cool treat for hot days and celebrations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brownie Section */}
        <section id="brownie" className="relative">
          <div className="absolute inset-0 bg-secondary/10 dark:bg-secondary/20 -skew-y-3"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-blue dark:text-shadow-pink text-navy dark:text-white">
                  Brownie With IceCream
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:mx-0">
                  Warm, fudgy brownie topped with cold ice cream. The perfect combination of hot and cold indulgence.
                </p>
              </div>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-secondary/20 dark:bg-secondary/30" style={{ clipPath: 'ellipse(80% 65% at 50% 50%)' }}></div>
                <img 
                  alt="Brownie With IceCream" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="/brownie.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Sugarcane Juice Section */}
        <section id="sugarcane" className="relative">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 flex items-center justify-center order-last lg:order-first">
                <div className="absolute inset-0 bg-accent/20 dark:bg-accent/30" style={{ clipPath: 'ellipse(75% 70% at 50% 50%)' }}></div>
                <img 
                  alt="Sugarcane Juice" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="/sugarcane juice.png"
                />
              </div>
              <div className="text-center lg:text-right">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-pink dark:text-shadow-blue text-navy dark:text-white">
                  Sugarcane Juice
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:ml-auto lg:mr-0">
                  Fresh, natural, and incredibly refreshing. Extracted on the spot for maximum freshness and taste.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Cold Coffee Section */}
        <section id="cold-coffee" className="relative">
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 skew-y-3"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-blue dark:text-shadow-pink text-navy dark:text-white">
                  Cold Coffee
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:mx-0">
                  Smooth, chilled coffee with a creamy finish. Perfect for coffee lovers who want their fix on a warm day.
                </p>
              </div>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30" style={{ clipPath: 'ellipse(80% 65% at 50% 50%)' }}></div>
                <img 
                  alt="Cold Coffee" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="/coldcoffee.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Hot Coffee Section */}
        <section id="hot-coffee" className="relative">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 flex items-center justify-center order-last lg:order-first">
                <div className="absolute inset-0 bg-secondary/20 dark:bg-secondary/30" style={{ clipPath: 'ellipse(75% 70% at 50% 50%)' }}></div>
                <img 
                  alt="Hot Coffee" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="/Hotcoffee.png"
                />
              </div>
              <div className="text-center lg:text-right">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-pink dark:text-shadow-blue text-navy dark:text-white">
                  Hot Coffee
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:ml-auto lg:mr-0">
                  Aromatic, rich, and perfectly brewed. Start your day or energize your event with our premium hot coffee.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="h-16"></div>
      </div>
    </main>
  )
}
