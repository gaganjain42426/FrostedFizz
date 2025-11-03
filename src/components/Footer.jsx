import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-auto flex justify-center border-t border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark">
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="size-5 text-primary">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_6_319_footer)">
                  <path d="M8.57829 8.57829C5.52816 11.6284 3.451 15.5145 2.60947 19.7452C1.76794 23.9758 2.19984 28.361 3.85056 32.3462C5.50128 36.3314 8.29667 39.7376 11.8832 42.134C15.4698 44.5305 19.6865 45.8096 24 45.8096C28.3135 45.8096 32.5302 44.5305 36.1168 42.134C39.7033 39.7375 42.4987 36.3314 44.1494 32.3462C45.8002 28.361 46.2321 23.9758 45.3905 19.7452C44.549 15.5145 42.4718 11.6284 39.4217 8.57829L24 24L8.57829 8.57829Z"></path>
                </g>
                <defs>
                  <clipPath id="clip0_6_319_footer">
                    <rect fill="white" height="48" width="48"></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
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
