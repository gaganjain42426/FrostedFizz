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
        {/* Soft Serve Ice Cream Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/20 -skew-y-3"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-blue dark:text-shadow-pink text-navy dark:text-white">
                  Soft Serve Ice Cream
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:mx-0">
                  Creamy, dreamy, and swirled to perfection. A classic favorite for all ages, available in a variety of delightful flavors.
                </p>
                <a className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 mt-8 bg-primary text-navy text-base font-bold tracking-wider hover:bg-accent transition-all duration-300 ease-in-out shadow-lg shadow-primary/40 hover:scale-105" href="#soft-serve">
                  <span className="truncate">See Flavors</span>
                </a>
              </div>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 dark:bg-primary/30" style={{ clipPath: 'ellipse(80% 65% at 50% 50%)' }}></div>
                <img 
                  alt="Soft Serve Ice Cream" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMFMkNLNIeQ7hJVRcVrqFf8O2oeRcLHZrDwwxyMrR3SUOsnKQ2yZSO6vH67i3iK46vORDrrY3vzs0hWmMcyIp_miaMbm4rLWxGPpA8JiCnvaIDVCR5inuZ-BRT4ll0Pv4_PkYKLEALLNtMIhbCXxA6wgjsXN0D93Yi2OvDGPsEW-re9Yp3ukmSu4XgIIEHSgNyTaWbfDuI9d9qyGV5SEfj94m3kM7QAvojCqMD2d0LAERfmeOqScHb6EpPf7XOwPRzeVXD358F5Q"
                />
                <span className="material-symbols-outlined absolute text-3xl text-accent top-10 left-10 rotate-12">star</span>
                <span className="material-symbols-outlined absolute text-2xl text-secondary bottom-16 right-5 -rotate-12">auto_awesome</span>
              </div>
            </div>
          </div>
        </section>

        {/* Milkshakes Section */}
        <section className="relative">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 flex items-center justify-center order-last lg:order-first">
                <div className="absolute inset-0 bg-secondary/20 dark:bg-secondary/30" style={{ clipPath: 'ellipse(75% 70% at 50% 50%)' }}></div>
                <img 
                  alt="Milkshakes" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIPWXXeFzRPWPBmwuGM_03TVYO8iEn3OlrZfjjVf44MdqwYBz9MY4FfvwvKmF60RIxT3UHOHYS8c4DMaU7QoUMxToGpNd-UEfHAg7iHUtwcxUaZEbB8pY1Zu_5RlCIzsybi90l9PFWsOv1Idxo1k0LxLWS1AwVGJjcAYBIuYRuYXlHT9-Fe_3LjRkOranJUseWuUQqtMurhc33IUal5TYR5oNOGuUfD-0QcjInTxcHm9G4Z7jkLuLYkdKVsPaI-D2izVC-i2e8Fg"
                />
                <span className="material-symbols-outlined absolute text-4xl text-primary top-12 right-12 rotate-12">favorite</span>
              </div>
              <div className="text-center lg:text-right">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-pink dark:text-shadow-blue text-navy dark:text-white">
                  Milkshakes
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:ml-auto lg:mr-0">
                  Thick, luscious, and blended with premium ingredients. Sip on pure happiness with our wide range of custom shakes.
                </p>
                <a className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 mt-8 bg-secondary text-navy text-base font-bold tracking-wider hover:bg-blue-300 transition-all duration-300 ease-in-out shadow-lg shadow-secondary/40 hover:scale-105" href="#milkshakes">
                  <span className="truncate">Explore Shakes</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Waffles Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-accent/10 dark:bg-accent/20 skew-y-3"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10 py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight text-shadow-blue dark:text-shadow-pink text-navy dark:text-white">
                  Waffles
                </h2>
                <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-lg mt-6 mx-auto lg:mx-0">
                  Crispy on the outside, fluffy on the inside. Our waffles are a perfect canvas for your favorite sweet toppings.
                </p>
                <a className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 mt-8 bg-accent text-navy text-base font-bold tracking-wider hover:bg-pink-200 transition-all duration-300 ease-in-out shadow-lg shadow-accent/40 hover:scale-105" href="#waffles">
                  <span className="truncate">View Toppings</span>
                </a>
              </div>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-accent/20 dark:bg-accent/30" style={{ clipPath: 'ellipse(80% 65% at 50% 50%)' }}></div>
                <img 
                  alt="Waffles" 
                  className="relative z-10 w-80 h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWgQkNZAqs1pNAifBQyhC22glD7Wsu49ihoiXtu10tHcmagE4p7XegtXMFlCe5h5Qw9jns30Zri6Zh_mRpXiYLswvHp5OHeyqj-dcuN57gN4jX1_-c_HhL75DMU6cTZwa7Q4iJ2DV-9tePv8-Ue3bfQEht80jbHTI-vQaJ2qSnI4bZ7Jhtx--Wj201iSVMxMEsvjyajUMKNz45IlIFGY727iGI4Mo6_TTd9nm3-GB_cUf-umu71x8uQFZdxYzvaSBU19nlekjnA"
                />
                <span className="material-symbols-outlined absolute text-3xl text-secondary bottom-10 left-10 -rotate-12">ac_unit</span>
              </div>
            </div>
          </div>
        </section>

        <div className="h-16"></div>
      </div>
    </main>
  )
}
