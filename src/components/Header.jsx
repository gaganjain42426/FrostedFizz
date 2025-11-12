import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

export default function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const isActive = (path) => location.pathname === path
  
  const closeMobileMenu = () => setMobileMenuOpen(false)
  
  return (
    <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/50 dark:border-white/10 px-6 py-4">
          <Link to="/" className="flex items-center gap-3 text-navy dark:text-white" onClick={closeMobileMenu}>
            <div className="text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                icecream
              </span>
            </div>
            <h2 className="text-xl font-bold">Frosted Fizz</h2>
          </Link>
          
          <div className="hidden md:flex flex-1 justify-center gap-8">
            <div className="flex items-center gap-8">
              <Link 
                to="/" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/') 
                    ? 'text-primary dark:text-accent font-bold' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/menu" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/menu') 
                    ? 'text-primary dark:text-accent font-bold' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                Our Menu
              </Link>
              <Link 
                to="/gallery" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/gallery') 
                    ? 'text-primary dark:text-accent font-bold' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                Gallery
              </Link>
              <Link 
                to="/about" 
                className={`text-sm font-medium leading-normal transition-colors ${
                  isActive('/about') 
                    ? 'text-primary dark:text-accent font-bold' 
                    : 'text-navy dark:text-gray-300 hover:text-primary dark:hover:text-primary'
                }`}
              >
                About Us
              </Link>
            </div>
          </div>
          
          <div className="hidden md:flex justify-end">
            <Link 
              to="/inquiry"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-navy dark:bg-primary text-white dark:text-navy text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary dark:hover:bg-accent transition-colors"
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
          <div className="md:hidden bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-lg border-b border-gray-200/50 dark:border-white/10">
            <nav className="flex flex-col px-4 py-4 gap-3">
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
                Our Menu
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
                className="bg-navy dark:bg-primary text-white dark:text-navy text-base font-bold py-3 px-4 rounded-full hover:bg-primary dark:hover:bg-accent transition-colors text-center mt-2"
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
