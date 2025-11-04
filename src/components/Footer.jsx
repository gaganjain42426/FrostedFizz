import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Frosted Fizz Logo" className="h-6 w-6 object-contain" />
            <p className="text-sm text-text-muted-light dark:text-text-muted-dark">
              © 2024 Frosted Fizz. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link to="/services" className="text-sm font-medium hover:text-primary">Services</Link>
            <Link to="/gallery" className="text-sm font-medium hover:text-primary">Gallery</Link>
            <Link to="/inquiry" className="text-sm font-medium hover:text-primary">Contact</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
              <span className="material-symbols-outlined">mail</span>
            </a>
            <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
              <span className="material-symbols-outlined">call</span>
            </a>
            <a href="#" className="text-text-muted-light dark:text-text-muted-dark hover:text-primary transition-colors">
              <span className="material-symbols-outlined">location_on</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
