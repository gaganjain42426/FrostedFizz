import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const location = useLocation()
  
  const isActive = (path) => location.pathname === path
  
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200/50 dark:border-white/10 px-6 py-4">
          <Link to="/" className="flex items-center gap-3 text-navy dark:text-white">
            <div className="text-primary">
              <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>
                icecream
              </span>
            </div>
            <h2 className="text-xl font-bold">Frosted Fizz</h2>
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
          
          <button className="md:hidden text-navy dark:text-white">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </header>
  )
}
