export default function EventInquiry() {
  return (
    <main className="flex-grow relative bg-background-light dark:bg-background-dark overflow-hidden min-h-screen">
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl opacity-50 -translate-x-1/4 -translate-y-1/4"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl opacity-50 translate-x-1/4 translate-y-1/4"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2 text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-extrabold font-display text-navy dark:text-white tracking-tighter">
                Get in Touch!
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 max-w-md mx-auto lg:mx-0">
                We'd love to hear from you. Reach out to us for catering, questions, or just to say hello.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary text-2xl">location_on</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy dark:text-white">Visit Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">Sanganer, Jaipur, Rajasthan, India</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-accent text-2xl">call</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy dark:text-white">Call Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">+91 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-2xl">mail</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy dark:text-white">Email Us</h3>
                  <p className="text-gray-500 dark:text-gray-400">hello@frostedfizz.com</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h3 className="text-lg font-bold text-navy dark:text-white">Stay Connected</h3>
              <div className="flex gap-4 justify-center lg:justify-start">
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy hover:bg-primary text-gray-600 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy hover:bg-primary text-gray-600 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all" aria-label="Twitter">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-gray-100 dark:bg-navy hover:bg-primary text-gray-600 dark:text-gray-300 hover:text-white flex items-center justify-center transition-all" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.802a33.62 33.62 0 00-3.516.055c-1.042.042-1.68.204-2.228.412a2.893 2.893 0 00-1.048.747 2.893 2.893 0 00-.747 1.048c-.208.548-.37 1.186-.412 2.228-.043 1.004-.055 1.32-.055 3.565s.012 2.56.055 3.565c.042 1.042.204 1.68.412 2.228a2.893 2.893 0 00.747 1.048 2.893 2.893 0 001.048.747c.548.208 1.186.37 2.228.412 1.004.043 1.32.055 3.565.055s2.56-.012 3.565-.055c1.042-.042 1.68-.204 2.228-.412a2.893 2.893 0 001.048-.747 2.893 2.893 0 00.747-1.048c.208-.548.37-1.186.412-2.228.043-1.004.055-1.32.055-3.565s-.012-2.56-.055-3.565c-.042-1.042-.204-1.68-.412-2.228a2.893 2.893 0 00-.747-1.048 2.893 2.893 0 00-1.048-.747c-.548-.208-1.186-.37-2.228-.412a33.62 33.62 0 00-3.565-.055zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="relative w-full aspect-[4/5] min-h-[400px]">
            <div className="absolute inset-0 bg-secondary rounded-[3rem] transform -rotate-3"></div>
            <div className="absolute inset-0 bg-primary rounded-[3rem] transform rotate-3"></div>
            <div className="absolute inset-2 overflow-hidden rounded-[2.5rem] shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56987.49137350713!2d75.7872709!3d26.7939102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc9055c654339%3A0x6a05e55703f8e562!2sSanganer%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1689264128951!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Frosted Fizz Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
