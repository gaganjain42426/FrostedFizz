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
            <a href="#" className="text-navy/70 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </a>
            <a href="#" className="text-navy/70 dark:text-gray-300 hover:text-secondary dark:hover:text-secondary transition-colors">
              <span className="material-symbols-outlined text-2xl">call</span>
            </a>
            <a href="#" className="text-navy/70 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-colors">
              <span className="material-symbols-outlined text-2xl">location_on</span>
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
