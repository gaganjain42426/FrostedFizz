import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path
  
  const closeMobileMenu = () => setMobileMenuOpen(false)
  
  return (
    <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between whitespace-nowrap px-8 py-4">
          <Link to="/" className="flex items-center gap-3 text-navy dark:text-white" onClick={closeMobileMenu}>
            <img 
              src="/logo.png" 
              alt="Frosted Fizz Logo" 
              className="h-10 w-auto object-contain"
            />
            <h2 className="text-xl font-bold">Frosted Fizz</h2>
          </Link>
          
          <div className="hidden md:flex items-center gap-10">
            <Link 
              to="/" 
              className={`text-base font-medium leading-normal transition-colors ${
                isActive('/') 
                  ? 'text-primary dark:text-accent font-semibold' 
                  : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/menu" 
              className={`text-base font-medium leading-normal transition-colors ${
                isActive('/menu') 
                  ? 'text-primary dark:text-accent font-semibold' 
                  : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Menu
            </Link>
            <Link 
              to="/services" 
              className={`text-base font-medium leading-normal transition-colors ${
                isActive('/services') 
                  ? 'text-primary dark:text-accent font-semibold' 
                  : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Events
            </Link>
            <Link 
              to="/gallery" 
              className={`text-base font-medium leading-normal transition-colors ${
                isActive('/gallery') 
                  ? 'text-primary dark:text-accent font-semibold' 
                  : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`text-base font-medium leading-normal transition-colors ${
                isActive('/about') 
                  ? 'text-primary dark:text-accent font-semibold' 
                  : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              About Us
            </Link>
            <Link 
              to="/inquiry" 
              className={`text-base font-medium leading-normal transition-colors ${
                isActive('/inquiry') 
                  ? 'text-primary dark:text-accent font-semibold' 
                  : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex justify-end">
            <Link 
              to="/book-now"
              className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-7 bg-primary text-white text-base font-semibold leading-normal hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/40"
            >
              <span className="truncate">Get a Quote</span>
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
          <div className="md:hidden bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg">
            <nav className="flex flex-col px-6 py-4 gap-3">
              <Link 
                to="/" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/') 
                    ? 'bg-primary/20 text-primary font-bold' 
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
                    ? 'bg-primary/20 text-primary font-bold' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                Menu
              </Link>
              <Link 
                to="/services" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/services') 
                    ? 'bg-primary/20 text-primary font-bold' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                Events
              </Link>
              <Link 
                to="/gallery" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/gallery') 
                    ? 'bg-primary/20 text-primary font-bold' 
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
                    ? 'bg-primary/20 text-primary font-bold' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/inquiry" 
                onClick={closeMobileMenu}
                className={`text-base font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive('/inquiry') 
                    ? 'bg-primary/20 text-primary font-bold' 
                    : 'text-navy dark:text-gray-300 hover:bg-primary/10'
                }`}
              >
                Contact
              </Link>
              <Link 
                to="/book-now"
                onClick={closeMobileMenu}
                className="bg-primary text-white text-base font-semibold py-3 px-6 rounded-full hover:bg-primary/90 transition-colors text-center mt-2"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
