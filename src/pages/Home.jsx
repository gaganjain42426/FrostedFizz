import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import InstagramFeed from '../components/InstagramFeed'

export default function Home() {
  return (
    <>
      <SEO 
        title="Frosted Fizz - Premium Ice Cream & Dessert Catering in Jaipur | Book Now"
        description="Frosted Fizz offers premium ice cream catering for weddings, birthdays, corporate events in Jaipur. Soft serve, waffles, milkshakes, cold coffee & more. Book your event today!"
        keywords="ice cream catering Jaipur, dessert catering, event catering, soft serve catering, milkshake catering, waffle catering, wedding catering, birthday party catering"
        url="https://frostedfizz.com"
      />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/menu#soft-serve" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary">
              <div className="overflow-hidden">
                <img 
                  alt="Soft Serve Ice Cream" 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/Softy.png"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Soft Serve</h3>
                <p className="font-body text-navy/70 dark:text-gray-400 text-sm">
                  Creamy, dreamy, and swirled to perfection.
                </p>
              </div>
            </Link>

            <Link to="/menu#milkshakes" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-secondary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-secondary">
              <div className="overflow-hidden">
                <img 
                  alt="Milkshakes" 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/Milkshake.png"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Milkshake</h3>
                <p className="font-body text-navy/70 dark:text-gray-400 text-sm">
                  Thick, luscious, and blended with premium ingredients.
                </p>
              </div>
            </Link>

            <Link to="/menu#waffles" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-accent/40 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-accent">
              <div className="overflow-hidden">
                <img 
                  alt="Waffles" 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/Waffle.png"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Waffle</h3>
                <p className="font-body text-navy/70 dark:text-gray-400 text-sm">
                  Crispy on the outside, fluffy on the inside.
                </p>
              </div>
            </Link>

            <Link to="/menu#ice-gola" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary">
              <div className="overflow-hidden">
                <img 
                  alt="Ice Gola" 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/icegola.png"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Ice Gola</h3>
                <p className="font-body text-navy/70 dark:text-gray-400 text-sm">
                  Refreshing shaved ice with colorful flavored syrups.
                </p>
              </div>
            </Link>

            <Link to="/menu#brownie" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-secondary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-secondary">
              <div className="overflow-hidden">
                <img 
                  alt="Brownie With Ice Cream" 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/brownie.png"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Brownie With IceCream</h3>
                <p className="font-body text-navy/70 dark:text-gray-400 text-sm">
                  Warm, fudgy brownie topped with cold ice cream.
                </p>
              </div>
            </Link>

            <Link to="/menu#sugarcane" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-accent/40 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-accent">
              <div className="overflow-hidden">
                <img 
                  alt="Sugarcane Juice" 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/sugarcane juice.png"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Sugarcane Juice</h3>
                <p className="font-body text-navy/70 dark:text-gray-400 text-sm">
                  Fresh, natural, and incredibly refreshing.
                </p>
              </div>
            </Link>

            <Link to="/menu#cold-coffee" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-primary">
              <div className="overflow-hidden">
                <img 
                  alt="Cold Coffee" 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/coldcoffee.png"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Cold Coffee</h3>
                <p className="font-body text-navy/70 dark:text-gray-400 text-sm">
                  Smooth, chilled coffee with a creamy finish.
                </p>
              </div>
            </Link>

            <Link to="/menu#hot-coffee" className="group block bg-white dark:bg-navy/40 rounded-3xl shadow-lg hover:shadow-secondary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-transparent hover:border-secondary">
              <div className="overflow-hidden">
                <img 
                  alt="Hot Coffee" 
                  className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="/Hotcoffee.png"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-navy dark:text-white mb-2">Hot Coffee</h3>
                <p className="font-body text-navy/70 dark:text-gray-400 text-sm">
                  Aromatic, rich, and perfectly brewed.
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

      {/* Trust Badges Section */}
      <section className="bg-white dark:bg-navy/20 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl">verified</span>
              </div>
              <p className="text-sm font-semibold text-navy dark:text-white">100% Hygienic</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-20 h-20 rounded-full bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-4xl">shield</span>
              </div>
              <p className="text-sm font-semibold text-navy dark:text-white">Licensed & Insured</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-accent text-4xl">star</span>
              </div>
              <p className="text-sm font-semibold text-navy dark:text-white">5-Star Rated</p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl">support_agent</span>
              </div>
              <p className="text-sm font-semibold text-navy dark:text-white">24/7 Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="bg-background-light dark:bg-background-dark py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white">Why Choose Frosted Fizz?</h2>
            <p className="mt-4 text-lg text-navy/70 dark:text-gray-300 max-w-2xl mx-auto font-body">
              Professional catering that makes a difference
            </p>
          </div>

          <div className="bg-white dark:bg-navy/40 rounded-3xl shadow-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 text-left font-bold text-lg">Features</th>
                    <th className="py-4 px-6 text-center font-bold text-lg">Frosted Fizz</th>
                    <th className="py-4 px-6 text-center font-bold text-lg">Traditional Catering</th>
                    <th className="py-4 px-6 text-center font-bold text-lg">DIY Desserts</th>
                  </tr>
                </thead>
                <tbody className="text-navy dark:text-gray-200">
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 px-6 font-medium">Professional Setup</td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-red-500">cancel</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy/20">
                    <td className="py-4 px-6 font-medium">Live Ice Cream Counter</td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-red-500">cancel</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-red-500">cancel</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 px-6 font-medium">Hygiene Certified</td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-yellow-500">help</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-red-500">cancel</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy/20">
                    <td className="py-4 px-6 font-medium">Customizable Menu</td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-yellow-500">help</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700">
                    <td className="py-4 px-6 font-medium">Staff Included</td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-red-500">cancel</span></td>
                  </tr>
                  <tr className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-navy/20">
                    <td className="py-4 px-6 font-medium">Cost-Effective</td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-red-500">cancel</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                  </tr>
                  <tr className="bg-gray-50 dark:bg-navy/20">
                    <td className="py-4 px-6 font-medium">Instagram-Worthy Setup</td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-green-500">check_circle</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-yellow-500">help</span></td>
                    <td className="py-4 px-6 text-center"><span className="material-symbols-outlined text-red-500">cancel</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white dark:bg-navy/20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy dark:text-white">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-navy/70 dark:text-gray-300 font-body">
              Everything you need to know about our catering services
            </p>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <details className="group bg-background-light dark:bg-navy/40 rounded-2xl shadow-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-navy dark:text-white text-lg hover:bg-primary/5 transition-colors">
                <span>How far in advance should I book?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-navy/80 dark:text-gray-300 font-body">
                <p>We recommend booking at least 2-3 weeks in advance for regular events and 1-2 months for weddings or large events (200+ guests). However, we can accommodate last-minute bookings based on availability.</p>
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group bg-background-light dark:bg-navy/40 rounded-2xl shadow-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-navy dark:text-white text-lg hover:bg-primary/5 transition-colors">
                <span>Do you provide staff for serving?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-navy/80 dark:text-gray-300 font-body">
                <p>Yes! All our packages include professional staff who will set up, serve, and clean up. Our team is trained in hygiene standards and customer service to ensure your guests have a great experience.</p>
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group bg-background-light dark:bg-navy/40 rounded-2xl shadow-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-navy dark:text-white text-lg hover:bg-primary/5 transition-colors">
                <span>Do you travel outside Jaipur?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-navy/80 dark:text-gray-300 font-body">
                <p>Yes, we cater to events across Rajasthan! We cover Jaipur and surrounding areas within 50 km at no extra charge. For events beyond that, there may be a nominal transportation fee. Contact us for details.</p>
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group bg-background-light dark:bg-navy/40 rounded-2xl shadow-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-navy dark:text-white text-lg hover:bg-primary/5 transition-colors">
                <span>Can you customize flavors and menu items?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-navy/80 dark:text-gray-300 font-body">
                <p>Absolutely! We love creating custom experiences. You can choose specific flavors for ice cream, milkshake varieties, topping options, and even themed presentations. Just let us know your preferences when booking.</p>
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group bg-background-light dark:bg-navy/40 rounded-2xl shadow-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-navy dark:text-white text-lg hover:bg-primary/5 transition-colors">
                <span>What equipment do you bring?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-navy/80 dark:text-gray-300 font-body">
                <p>We bring everything needed: ice cream machines, refrigeration units, serving counters, utensils, cups, napkins, and decorative setup. All you need to provide is electricity and a suitable space (covered area preferred).</p>
              </div>
            </details>

            {/* FAQ Item 6 */}
            <details className="group bg-background-light dark:bg-navy/40 rounded-2xl shadow-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-navy dark:text-white text-lg hover:bg-primary/5 transition-colors">
                <span>What is your cancellation policy?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-navy/80 dark:text-gray-300 font-body">
                <p>Cancellations made 7+ days before the event receive a full refund. Cancellations within 3-7 days receive 50% refund. Cancellations within 3 days are non-refundable. We understand emergencies happen, so please contact us to discuss your situation.</p>
              </div>
            </details>

            {/* FAQ Item 7 */}
            <details className="group bg-background-light dark:bg-navy/40 rounded-2xl shadow-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-navy dark:text-white text-lg hover:bg-primary/5 transition-colors">
                <span>Are your ingredients fresh and hygienic?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-navy/80 dark:text-gray-300 font-body">
                <p>Yes! We use only premium quality ingredients, sourced fresh daily. Our preparation follows strict hygiene standards, and all our staff is trained in food safety. We maintain temperature-controlled storage throughout the event.</p>
              </div>
            </details>

            {/* FAQ Item 8 */}
            <details className="group bg-background-light dark:bg-navy/40 rounded-2xl shadow-lg overflow-hidden">
              <summary className="flex justify-between items-center cursor-pointer p-6 font-semibold text-navy dark:text-white text-lg hover:bg-primary/5 transition-colors">
                <span>What are your payment terms?</span>
                <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-navy/80 dark:text-gray-300 font-body">
                <p>We require a 30% advance payment to confirm your booking, with the remaining 70% due on the event day. We accept all payment methods: cash, UPI (PhonePe, Google Pay, Paytm), bank transfer, and cards.</p>
              </div>
            </details>
          </div>

          <div className="mt-10 text-center">
            <p className="text-navy/70 dark:text-gray-300 font-body mb-4">Still have questions?</p>
            <Link 
              to="/book-now"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <InstagramFeed />
    </main>
    </>
  )
}
