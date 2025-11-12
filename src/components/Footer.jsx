import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:gap-6 sm:flex-row">
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <img src="/logo.png" alt="Frosted Fizz Logo" className="h-5 w-5 sm:h-6 sm:w-6 object-contain" />
            <p className="text-xs sm:text-sm text-text-muted-light dark:text-text-muted-dark text-center">
              © 2024 Frosted Fizz. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-4 sm:gap-6 order-1 sm:order-2">
            <Link to="/" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/services" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link to="/gallery" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">Gallery</Link>
            <Link to="/inquiry" className="text-xs sm:text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4 order-3">
            <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl sm:text-2xl">mail</span>
            </a>
            <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl sm:text-2xl">call</span>
            </a>
            <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-xl sm:text-2xl">location_on</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
