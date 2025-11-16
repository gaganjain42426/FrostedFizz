import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ 
  title = "Frosted Fizz - Ice Cream & Dessert Catering for Events in Jaipur",
  description = "Premium ice cream, soft serve, waffles, milkshakes, and cold beverages for weddings, birthdays, and corporate events. Book your event catering today!",
  keywords = "ice cream catering Jaipur, dessert catering, event catering, soft serve, milkshakes, waffles",
  image = "https://frostedfizz.com/logo.png",
  url = "https://frostedfizz.com"
}) => {
  const location = useLocation();
  const fullUrl = `${url}${location.pathname}`;

  useEffect(() => {
    // Update page title
    document.title = title;

    // Update meta tags
    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    
    // Update Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:image', image);
    updateMetaTag('property', 'og:url', fullUrl);
    
    // Update Twitter tags
    updateMetaTag('property', 'twitter:title', title);
    updateMetaTag('property', 'twitter:description', description);
    updateMetaTag('property', 'twitter:image', image);
    updateMetaTag('property', 'twitter:url', fullUrl);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', fullUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', fullUrl);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, image, fullUrl]);

  return null;
};

const updateMetaTag = (attribute, key, content) => {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

export default SEO;
