import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center border-t border-gray-200/50 dark:border-white/10 bg-white dark:bg-navy/40">
      <div className="w-full max-w-6xl px-6 py-10 md:py-12">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/logo.png" 
              alt="Frosted Fizz Logo" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-extrabold text-navy dark:text-white">Frosted Fizz</span>
          </div>
          
          {/* Navigation Links */}
          <div className="flex items-center gap-6 md:gap-8 flex-wrap justify-center">
            <Link to="/" className="text-sm md:text-base font-medium text-navy dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Home</Link>
            <Link to="/menu" className="text-sm md:text-base font-medium text-navy dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Menu</Link>
            <Link to="/gallery" className="text-sm md:text-base font-medium text-navy dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Gallery</Link>
            <Link to="/about" className="text-sm md:text-base font-medium text-navy dark:text-white hover:text-primary dark:hover:text-primary transition-colors">About</Link>
            <Link to="/inquiry" className="text-sm md:text-base font-medium text-navy dark:text-white hover:text-primary dark:hover:text-primary transition-colors">Contact</Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="mailto:frostedfizzzz@gmail.com" className="text-navy/70 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </a>
            <a href="tel:+918003225164" className="text-navy/70 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-2xl">call</span>
            </a>
            <a href="https://www.instagram.com/frosted.fizz?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-navy/70 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.793 2.013 10.147 2 12.315 2zm0 1.802a33.62 33.62 0 00-3.516.055c-1.042.042-1.68.204-2.228.412a2.893 2.893 0 00-1.048.747 2.893 2.893 0 00-.747 1.048c-.208.548-.37 1.186-.412 2.228-.043 1.004-.055 1.32-.055 3.565s.012 2.56.055 3.565c.042 1.042.204 1.68.412 2.228a2.893 2.893 0 00.747 1.048 2.893 2.893 0 001.048.747c.548.208 1.186.37 2.228.412 1.004.043 1.32.055 3.565.055s2.56-.012 3.565-.055c1.042-.042 1.68-.204 2.228-.412a2.893 2.893 0 001.048-.747 2.893 2.893 0 00.747-1.048c.208-.548.37-1.186.412-2.228.043-1.004.055-1.32.055-3.565s-.012-2.56-.055-3.565c-.042-1.042-.204-1.68-.412-2.228a2.893 2.893 0 00-.747-1.048 2.893 2.893 0 00-1.048-.747c-.548-.208-1.186-.37-2.228-.412a33.62 33.62 0 00-3.565-.055zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-gray-200/50 dark:border-white/10 w-full">
            <p className="text-xs md:text-sm text-navy/70 dark:text-gray-300">
              © 2024 Frosted Fizz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
