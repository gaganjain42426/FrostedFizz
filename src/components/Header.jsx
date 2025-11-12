import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path
  
  const closeMobileMenu = () => setMobileMenuOpen(false)
  
  return (
    <header className="sticky top-0 z-50 bg-white/10 dark:bg-navy/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-white/20 dark:border-white/20 px-4 sm:px-6 py-3 sm:py-4">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 text-navy dark:text-white" onClick={closeMobileMenu}>
            <img src="/logo.png" alt="Frosted Fizz Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <h2 className="text-lg sm:text-xl font-bold">Frosted Fizz</h2>
          </Link>
          
          <div className="hidden md:flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-8">
              <Link 
                to="/" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/') 
                    ? 'text-primary' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/menu') 
                    ? 'text-primary' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                Our Menu
              </Link>
              <Link 
                to="/services" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/services') 
                    ? 'text-primary' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/gallery') 
                    ? 'text-primary' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/about') 
                    ? 'text-primary' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                About Us
              </Link>
            </div>
            <Link 
              to="/inquiry"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-navy text-sm font-bold leading-normal tracking-[0.015em] hover:bg-accent transition-colors"
            >
              <span className="truncate">Contact</span>
            </Link>
          </div>
          
          <button 
            className="md:hidden text-navy dark:text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-navy/95 backdrop-blur-lg border-b border-white/20">
            <nav className="flex flex-col px-4 py-4 gap-3">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/menu') 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                Our Menu
              </Link>
              <Link 
                to="/services" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/services') 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                Services
              </Link>
              <Link 
                to="/gallery" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/gallery') 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/about') 
                    ? 'bg-primary/20 text-primary' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/inquiry"
                onClick={closeMobileMenu}
                className="bg-primary text-navy text-base font-bold py-3 px-4 rounded-lg hover:bg-accent transition-colors text-center mt-2"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
