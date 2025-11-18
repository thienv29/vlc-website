import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

// Navigation item interface
interface NavItem {
  path: string;
  label: string;
  submenu?: NavItem[];
}

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedItems, setMobileExpandedItems] = useState<Set<string>>(new Set());
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dynamic navigation structure
  const navItems: NavItem[] = [
    // { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    {
      path: '/services',
      label: t('nav.services'),
      submenu: [
        { path: '/services/19', label: 'Dịch vụ EPC toàn diện' },
        { path: '/services/20', label: 'Dịch vụ bảo trì và vận hành' },
        { path: '/services/21', label: 'Tư vấn môi trường' },
        { path: '/services/22', label: 'Sản phẩm và công nghệ tiên tiến' }
      ]
    },
    { path: '/products', label: t('nav.products') },
    { path: '/projects', label: t('nav.projects') },
    { path: '/sustainability', label: t('nav.sustainability') },
    {
      path: '/news',
      label: t('nav.news'),
      submenu: [
        { path: '/news/c/internal', label: t('nav.newsSubmenu.internal') },
        { path: '/news/c/market', label: t('nav.newsSubmenu.market') },
        { path: '/news/c/community', label: t('nav.newsSubmenu.community') }
      ]
    },
    { path: '/careers', label: t('nav.careers') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const shouldHaveSolidBg = !isHomePage || isScrolled;

  const handleMouseEnter = (dropdownKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(dropdownKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // Slightly longer delay for stability
  };

  const toggleMobileItem = (path: string) => {
    const newExpanded = new Set(mobileExpandedItems);
    if (newExpanded.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setMobileExpandedItems(newExpanded);
  };

  // Recursive function to render submenu items
  const renderSubmenu = (items: NavItem[], level: number = 1, parentPath: string = ''): JSX.Element => {
    return (
      <div className={`space-y-1 ${level > 1 ? 'ml-4' : ''}`}>
        {items.map((item) => (
          <div key={item.path}>
            {item.submenu && item.submenu.length > 0 ? (
              <div>
                <button
                  onClick={() => toggleMobileItem(item.path)}
                  className="flex items-center justify-between w-full text-left py-2 px-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded"
                >
                  <span className="text-sm font-medium">{item.label}</span>
                  <ChevronRight
                    size={14}
                    className={`transition-transform ${mobileExpandedItems.has(item.path) ? 'rotate-90' : ''}`}
                  />
                </button>
                {mobileExpandedItems.has(item.path) && (
                  <div className="mt-1">
                    {renderSubmenu(item.submenu, level + 1, item.path)}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block text-sm py-2 px-3 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded ${
                  location.pathname === item.path ? 'text-primary-600 bg-primary-50' : ''
                }`}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Recursive function to render desktop dropdown
  const renderDesktopDropdown = (items: NavItem[], level: number = 1): JSX.Element => {
    const widthClass = level === 1 ? 'w-64' : 'w-56';
    const positionClass = level === 1 ? 'left-0 top-full' : 'left-full top-0';

    return (
      <div className={`absolute ${positionClass} mt-2 ${widthClass} bg-white shadow-lg rounded-md border border-gray-200  z-50`}>
        {items.map((item) => (
          <div key={item.path} className="relative group">
            {item.submenu && item.submenu.length > 0 ? (
              <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-50">
                <span className="text-sm font-medium text-gray-900">{item.label}</span>
                <ChevronRight size={12} className="text-gray-400" />
                <div className="absolute left-full top-0 ml-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {renderDesktopDropdown(item.submenu, level + 1)}
                </div>
              </div>
            ) : (
              <Link
                to={item.path}
                className={`block text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-4 py-2 ${
                  location.pathname === item.path ? 'text-primary-600 bg-primary-50' : ''
                }`}
                onClick={() => setActiveDropdown(null)}
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldHaveSolidBg ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          to="/"
          className="cursor-pointer"
        >
          <img
            src="/logowebsite.png"
            alt="VLC Group Logo"
            className="h-16 w-auto object-contain"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              if (item.submenu && item.submenu.length > 0) {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.path)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      to={item.path}
                      className={`text-sm font-medium transition-colors relative group flex items-center gap-1 ${
                        location.pathname.startsWith(item.path)
                          ? shouldHaveSolidBg
                            ? 'text-primary-600'
                            : 'text-white'
                          : shouldHaveSolidBg
                          ? 'text-gray-700 hover:text-primary-600'
                          : 'text-gray-200 hover:text-white'
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${
                          activeDropdown === item.path ? 'rotate-180' : ''
                        }`}
                      />
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 transform transition-transform ${
                          location.pathname.startsWith(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </Link>

                    {activeDropdown === item.path && item.submenu && (
                      <div
                        className="absolute top-full left-0 z-50"
                        onMouseEnter={() => handleMouseEnter(item.path)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {renderDesktopDropdown(item.submenu)}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors relative group ${
                    location.pathname === item.path
                      ? shouldHaveSolidBg
                        ? 'text-primary-600'
                        : 'text-white'
                      : shouldHaveSolidBg
                      ? 'text-gray-700 hover:text-primary-600'
                      : 'text-gray-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 transform transition-transform ${
                      location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              );
            })}
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
            {navItems.map((item) => {
              if (item.submenu && item.submenu.length > 0) {
                return (
                  <div key={item.path} className="border-b border-gray-100">
                    <Link
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-3 text-sm font-medium ${
                        location.pathname === item.path ? 'text-primary-600' : 'text-gray-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                    <div className="mb-2">
                      {renderSubmenu(item.submenu)}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left py-3 text-sm font-medium border-b border-gray-100 ${
                    location.pathname === item.path ? 'text-primary-600' : 'text-gray-700'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
