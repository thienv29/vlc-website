import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const location = useLocation();
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
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
    {
      path: '/projects',
      label: t('nav.projects'),
      hasSubmenu: true,
      submenu: [
        {
          label: t('nav.projectsSubmenu.group1'),
          path: '/projects/group1',
          submenuItems: [
            { path: '/projects/group1', label: t('nav.projectsSubmenu.group1Projects') }
          ]
        },
        {
          label: t('nav.projectsSubmenu.group2'),
          path: '/projects/group2',
          submenuItems: [
            { path: '/projects/group2', label: t('nav.projectsSubmenu.group2Projects') }
          ]
        }
      ]
    },
    { path: '/sustainability', label: t('nav.sustainability') },
    {
      path: '/news',
      label: t('nav.news'),
      hasSubmenu: true,
      submenu: [
        { path: '/news/internal', label: t('nav.newsSubmenu.internal') },
        { path: '/news/community', label: t('nav.newsSubmenu.community') }
      ]
    },
    { path: '/careers', label: t('nav.careers') },
    { path: '/contact', label: t('nav.contact') },
  ];

  const shouldHaveSolidBg = !isHomePage || isScrolled;

  const handleMouseEnter = (dropdownKey: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdownKey);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before closing
    setDropdownTimeout(timeout);
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
              if (item.hasSubmenu) {
                return (
                  <div
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.path)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
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
                    </button>

                    {activeDropdown === item.path && (
                      <div
                        className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-md border border-gray-200 py-2 z-50"
                        onMouseEnter={() => handleMouseEnter(item.path)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.submenu.map((submenuItem: any, index) => (
                          <div key={index} className="relative px-4 py-2 group">
                            {submenuItem.submenuItems ? (
                              <div className="flex items-center justify-between">
                                <div className="font-medium text-gray-900">{submenuItem.label}</div>
                                <ChevronDown size={12} className="text-gray-400 rotate-[-90deg]" />
                                <div className="absolute left-full top-0 ml-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                                  {submenuItem.submenuItems.map((subItem: any) => (
                                    <Link
                                      key={subItem.path}
                                      to={subItem.path}
                                      className={`block text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-3 py-2 ${
                                        location.pathname === subItem.path ? 'text-primary-600 bg-primary-50' : ''
                                      }`}
                                      onClick={() => setActiveDropdown(null)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                to={submenuItem.path}
                                className={`block text-sm text-gray-600 hover:text-primary-600 hover:bg-gray-50 px-2 py-1 rounded ${
                                  location.pathname === submenuItem.path ? 'text-primary-600 bg-primary-50' : ''
                                }`}
                                onClick={() => setActiveDropdown(null)}
                              >
                                {submenuItem.label}
                              </Link>
                            )}
                          </div>
                        ))}
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
              if (item.hasSubmenu) {
                return (
                  <div key={item.path} className="border-b border-gray-100">
                    <div className="py-3 text-sm font-medium text-gray-700">
                      {item.label}
                    </div>
                    <div className="ml-4 mb-2 space-y-1">
                      {item.submenu.map((submenuItem: any, index) => (
                        <div key={index}>
                          {submenuItem.submenuItems ? (
                            <div>
                              <div className="text-sm font-medium text-gray-900 py-1">{submenuItem.label}</div>
                              <div className="ml-4 space-y-1">
                                {submenuItem.submenuItems.map((subItem: any) => (
                                  <Link
                                    key={subItem.path}
                                    to={subItem.path}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`block text-sm py-2 pl-2 text-gray-600 hover:text-primary-600 ${
                                      location.pathname === subItem.path ? 'text-primary-600' : ''
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              to={submenuItem.path}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`block text-sm py-2 pl-2 text-gray-600 hover:text-primary-600 ${
                                location.pathname === submenuItem.path ? 'text-primary-600' : ''
                              }`}
                            >
                              {submenuItem.label}
                            </Link>
                          )}
                        </div>
                      ))}
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
