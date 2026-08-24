import { useState, useEffect } from 'react';
import { Menu, X, Phone, Calculator, Landmark } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { COMPANY_INFO } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top when path changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  }, [location.pathname]);

  const handleCtaClick = () => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById('survey-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#survey-form-section');
      setTimeout(() => {
        const element = document.getElementById('survey-form-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
  };

  const navLinks = [
    { name: 'Beranda', path: '/' },
    { name: 'Tentang Kami', path: '/tentang-kami' },
    { name: 'Layanan', path: '/layanan' },
    { name: 'Portofolio', path: '/portofolio' },
    { name: 'Proses Kerja', path: '/proses-kerja' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/'
          ? 'bg-[#16233A] shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            id="navbar-logo-container"
            className="flex items-center cursor-pointer"
          >
            <Link to="/">
              <img 
                src="https://res.cloudinary.com/di6ziqvtp/image/upload/w_1200,q_auto,f_auto/v1787484701/1da9798d-993b-4621-8a34-f809eca3a92b.png" 
                alt="Sah Rijal Konstruksi Logo" 
                className="h-10 md:h-12 w-auto object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-[#9A721D]'
                    : 'text-white hover:text-[#9A721D]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center">
            <button
              id="nav-cta-whatsapp"
              onClick={handleCtaClick}
              className="bg-[#C89A2B] hover:bg-opacity-90 text-[#16233A] font-medium text-sm px-5 py-2.5 rounded-md flex items-center space-x-2 transition-all duration-200 cursor-pointer"
            >
              <Phone className="h-4 w-4" />
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-1 cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div id="mobile-drawer" className="lg:hidden bg-[#16233A] border-t border-gray-800 px-4 pt-2 pb-6 space-y-3 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block w-full text-left py-2 text-base font-medium border-b border-gray-800 ${
                location.pathname === link.path
                  ? 'text-[#9A721D]'
                  : 'text-white hover:text-[#9A721D]'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button
            id="mobile-nav-cta-whatsapp"
            onClick={handleCtaClick}
            className="w-full text-center bg-[#C89A2B]  text-[#16233A] py-3 rounded-md font-medium flex items-center justify-center space-x-2 shadow-md hover:bg-opacity-95 cursor-pointer mt-4"
          >
            <Phone className="h-5 w-5" />
            <span>Formulir Survey</span>
          </button>
        </div>
      )}
    </nav>
  );
}
