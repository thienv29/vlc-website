import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/sustainability', label: t('nav.sustainability') },
    { path: '/news', label: t('nav.news') },
    { path: '/careers', label: t('nav.careers') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const shouldHaveSolidBg = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldHaveSolidBg ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src="/logowebsite.png"
            alt="VLC Group Logo"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h1 className={`font-bold text-xl ${shouldHaveSolidBg ? 'text-[#0F5132]' : 'text-white'}`}>
              {t('header.companyName')}
            </h1>
            <p className={`text-xs ${shouldHaveSolidBg ? 'text-gray-600' : 'text-gray-200'}`}>
              {t('header.tagline')}
            </p>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors relative group ${
                  location.pathname === item.path
                    ? shouldHaveSolidBg
                      ? 'text-[#3CB371]'
                      : 'text-white'
                    : shouldHaveSolidBg
                    ? 'text-gray-700 hover:text-[#3CB371]'
                    : 'text-gray-200 hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#3CB371] transform transition-transform ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </Link>
            ))}
          </nav>
          <LanguageSwitcher hasSolidBackground={shouldHaveSolidBg} />
        </div>

        <div className="flex items-center gap-4 lg:hidden">
          <LanguageSwitcher hasSolidBackground={shouldHaveSolidBg} />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={shouldHaveSolidBg ? 'text-gray-700' : 'text-white'} size={28} />
            ) : (
              <Menu className={shouldHaveSolidBg ? 'text-gray-700' : 'text-white'} size={28} />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left py-3 text-sm font-medium border-b border-gray-100 ${
                  location.pathname === item.path ? 'text-[#3CB371]' : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
