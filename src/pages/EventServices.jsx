import { Link } from 'react-router-dom'

export default function EventServices() {
  return (
    <main className="flex-grow">
      {/* Header Section */}
      <section className="relative bg-background-light dark:bg-navy/10 pt-16 md:pt-24 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute top-20 right-[-10rem] w-80 h-80 bg-primary/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-black text-navy dark:text-white tracking-tighter leading-tight">
              Sweeten Your Events
            </h1>
            <p className="font-body text-navy/80 dark:text-gray-300 text-lg md:text-xl max-w-3xl mt-4 mx-auto">
              We bring the counter, staff, and vibes — fresh desserts live at your event.
            </p>
          </div>
        </div>
      </section>

      <div className="space-y-16 md:space-y-24 pb-24 md:pb-32">
        {/* Weddings Section */}
        <section className="relative overflow-hidden pt-12 md:pt-16">
          <div className="absolute top-0 left-0 w-full h-full -skew-y-3 bg-accent/20 dark:bg-accent/10 transform"></div>
          <div className="absolute top-1/4 -left-10 w-20 h-20 bg-secondary/50 rounded-full blur-lg"></div>
          <div className="absolute bottom-1/4 -right-12 w-24 h-24 bg-primary/50 rounded-2xl blur-lg rotate-45"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative order-2 md:order-1">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-6" style={{ textShadow: '-3px -3px 0 #FFF, 3px -3px 0 #FFF, -3px 3px 0 #FFF, 3px 3px 0 #FFF, 4px 4px 0 #66D6FF, 5px 5px 0 #66D6FF, 6px 6px 0 #66D6FF' }}>
                  Weddings
                </h2>
                <p className="font-body text-lg text-navy/80 dark:text-gray-300 mb-6">
                  Add a touch of sweetness to your special day. Our elegant dessert stations are a perfect match for wedding celebrations, delighting guests of all ages.
                </p>
                <Link to="/inquiry" className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wider hover:bg-primary/80 transition-colors shadow-lg">
                  <span className="truncate">Book for a Wedding</span>
                </Link>
              </div>
              <div className="relative order-1 md:order-2">
                <img 
                  alt="Wedding dessert catering setup" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover transform -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVGFWSCR7zaS2_l9XBM49k5t_KAL4RV8h44npEFAvOzvW6Q7dd72pXrPh8jKy0yJYoAVc6kEwT3aHATMvebLaNsrjLNl_vdNFGqPNyfYOxGmN2ymVf7BbqdhfPdPdxIHgkShWqARLFZgbQUIlKd98d4MKqiyXWRCfiZTYRSL-wPsdX_RMYD9B6RHNfOWO1K5tGRsvcnY9-V0XuhXkYBy68f6tqwllZnEqn3OripqDJnfCwRCGdqHXJuaN_q6ef8NHw70RfFjlWAg"
                />
                <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-48 h-48 md:w-64 md:h-64 z-20">
                  <img 
                    alt="Waffle dessert for weddings" 
                    className="w-full h-full object-cover rounded-full border-8 border-white dark:border-navy shadow-lg" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWgQkNZAqs1pNAifBQyhC22glD7Wsu49ihoiXtu10tHcmagE4p7XegtXMFlCe5h5Qw9jns30Zri6Zh_mRpXiYLswvHp5OHeyqj-dcuN57gN4jX1_-c_HhL75DMU6cTZwa7Q4iJ2DV-9tePv8-Ue3bfQEht80jbHTI-vQaJ2qSnI4bZ7Jhtx--Wj201iSVMxMEsvjyajUMKNz45IlIFGY727iGI4Mo6_TTd9nm3-GB_cUf-umu71x8uQFZdxYzvaSBU19nlekjnA"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Birthdays Section */}
        <section className="relative overflow-hidden pt-12 md:pt-16">
          <div className="absolute top-0 right-0 w-full h-full skew-y-3 bg-secondary/20 dark:bg-secondary/10 transform"></div>
          <div className="absolute top-1/2 -right-8 w-24 h-24 bg-primary/40 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -left-10 w-32 h-32 bg-accent/40 rounded-3xl blur-lg -rotate-12"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <img 
                  alt="Birthday party dessert catering" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMFMkNLNIeQ7hJVRcVrqFf8O2oeRcLHZrDwwxyMrR3SUOsnKQ2yZSO6vH67i3iK46vORDrrY3vzs0hWmMcyIp_miaMbm4rLWxGPpA8JiCnvaIDVCR5inuZ-BRT4ll0Pv4_PkYKLEALLNtMIhbCXxA6wgjsXN0D93Yi2OvDGPsEW-re9Yp3ukmSu4XgIIEHSgNyTaWbfDuI9d9qyGV5SEfj94m3kM7QAvojCqMD2d0LAERfmeOqScHb6EpPf7XOwPRzeVXD358F5Q"
                />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-4xl transform rotate-12">
                  <span className="material-symbols-outlined text-5xl">cake</span>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center text-white text-4xl transform -rotate-12">
                  <span className="material-symbols-outlined text-3xl">celebration</span>
                </div>
              </div>
              <div className="relative text-right md:text-left">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary mb-6" style={{ textShadow: '-3px -3px 0 #FFF, 3px -3px 0 #FFF, -3px 3px 0 #FFF, 3px 3px 0 #FFF, 4px 4px 0 #FF9ECC, 5px 5px 0 #FF9ECC, 6px 6px 0 #FF9ECC' }}>
                  Birthdays
                </h2>
                <p className="font-body text-lg text-navy/80 dark:text-gray-300 mb-6">
                  Make birthday wishes sweeter! Our fun and colorful dessert bars are a guaranteed hit, bringing smiles and delicious treats to the party.
                </p>
                <Link to="/inquiry" className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-secondary text-navy text-base font-bold leading-normal tracking-wider hover:bg-secondary/80 transition-colors shadow-lg">
                  <span className="truncate">Plan a Party</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Corporate Section */}
        <section className="relative overflow-hidden pt-12 md:pt-16">
          <div className="absolute top-0 left-0 w-full h-full -skew-y-3 bg-accent/20 dark:bg-accent/10 transform"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative order-2 md:order-1">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-primary mb-6" style={{ textShadow: '-3px -3px 0 #FFF, 3px -3px 0 #FFF, -3px 3px 0 #FFF, 3px 3px 0 #FFF, 4px 4px 0 #66D6FF, 5px 5px 0 #66D6FF, 6px 6px 0 #66D6FF' }}>
                  Corporate
                </h2>
                <p className="font-body text-lg text-navy/80 dark:text-gray-300 mb-6">
                  Impress your clients and reward your team. Our professional and playful catering adds a unique flavor to corporate functions, conferences, and celebrations.
                </p>
                <Link to="/inquiry" className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-wider hover:bg-primary/80 transition-colors shadow-lg">
                  <span className="truncate">Enquire for Corporate</span>
                </Link>
              </div>
              <div className="relative order-1 md:order-2">
                <div className="bg-navy/80 dark:bg-navy/50 p-4 rounded-3xl transform rotate-2">
                  <img 
                    alt="Corporate event dessert bar" 
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover transform -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVGFWSCR7zaS2_l9XBM49k5t_KAL4RV8h44npEFAvOzvW6Q7dd72pXrPh8jKy0yJYoAVc6kEwT3aHATMvebLaNsrjLNl_vdNFGqPNyfYOxGmN2ymVf7BbqdhfPdPdxIHgkShWqARLFZgbQUIlKd98d4MKqiyXWRCfiZTYRSL-wPsdX_RMYD9B6RHNfOWO1K5tGRsvcnY9-V0XuhXkYBy68f6tqwllZnEqn3OripqDJnfCwRCGdqHXJuaN_q6ef8NHw70RfFjlWAg"
                  />
                </div>
                <div className="absolute top-[-2rem] left-[-2rem] w-16 h-16 bg-secondary/80 rounded-full"></div>
                <div className="absolute bottom-[-2rem] right-[-2rem] w-24 h-24 border-8 border-dashed border-accent rounded-2xl rotate-12"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Any Occasion Section */}
        <section className="relative overflow-hidden pt-12 md:pt-16">
          <div className="absolute top-0 right-0 w-full h-full skew-y-3 bg-secondary/20 dark:bg-secondary/10 transform"></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative">
                <img 
                  alt="Catering for special occasions" 
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover transform rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-300" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFWgQkNZAqs1pNAifBQyhC22glD7Wsu49ihoiXtu10tHcmagE4p7XegtXMFlCe5h5Qw9jns30Zri6Zh_mRpXiYLswvHp5OHeyqj-dcuN57gN4jX1_-c_HhL75DMU6cTZwa7Q4iJ2DV-9tePv8-Ue3bfQEht80jbHTI-vQaJ2qSnI4bZ7Jhtx--Wj201iSVMxMEsvjyajUMKNz45IlIFGY727iGI4Mo6_TTd9nm3-GB_cUf-umu71x8uQFZdxYzvaSBU19nlekjnA"
                />
                <img 
                  alt="Ice cream for events" 
                  className="absolute w-1/2 -bottom-10 -left-10 rounded-2xl shadow-lg border-4 border-white dark:border-navy transform -rotate-12" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMFMkNLNIeQ7hJVRcVrqFf8O2oeRcLHZrDwwxyMrR3SUOsnKQ2yZSO6vH67i3iK46vORDrrY3vzs0hWmMcyIp_miaMbm4rLWxGPpA8JiCnvaIDVCR5inuZ-BRT4ll0Pv4_PkYKLEALLNtMIhbCXxA6wgjsXN0D93Yi2OvDGPsEW-re9Yp3ukmSu4XgIIEHSgNyTaWbfDuI9d9qyGV5SEfj94m3kM7QAvojCqMD2d0LAERfmeOqScHb6EpPf7XOwPRzeVXD358F5Q"
                />
              </div>
              <div className="relative text-right md:text-left">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-secondary mb-6" style={{ textShadow: '-3px -3px 0 #FFF, 3px -3px 0 #FFF, -3px 3px 0 #FFF, 3px 3px 0 #FFF, 4px 4px 0 #FF9ECC, 5px 5px 0 #FF9ECC, 6px 6px 0 #FF9ECC' }}>
                  Any Occasion
                </h2>
                <p className="font-body text-lg text-navy/80 dark:text-gray-300 mb-6">
                  Festivals, college fests, or just a fun get-together? We're here for it! Frosted Fizz brings the party to any event that needs a scoop of joy.
                </p>
                <Link to="/inquiry" className="inline-flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-secondary text-navy text-base font-bold leading-normal tracking-wider hover:bg-secondary/80 transition-colors shadow-lg">
                  <span className="truncate">Get in Touch</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
