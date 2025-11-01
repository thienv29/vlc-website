import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = currentPage === 'home';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Trang chủ' },
    { id: 'about', label: 'Giới thiệu' },
    { id: 'services', label: 'Dịch vụ' },
    { id: 'projects', label: 'Dự án' },
    { id: 'sustainability', label: 'Phát triển bền vững' },
    { id: 'news', label: 'Tin tức' },
    { id: 'careers', label: 'Tuyển dụng' },
    { id: 'contact', label: 'Liên hệ' },
  ];

  const shouldHaveSolidBg = !isHomePage || isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldHaveSolidBg ? 'bg-white shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate('home')}
        >
          <div className="w-12 h-12 bg-gradient-to-br from-[#1E2A78] to-[#3CB371] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">VLC</span>
          </div>
          <div>
            <h1 className={`font-bold text-xl ${shouldHaveSolidBg ? 'text-[#1E2A78]' : 'text-white'}`}>
              VLC GROUP
            </h1>
            <p className={`text-xs ${shouldHaveSolidBg ? 'text-gray-600' : 'text-gray-200'}`}>
              Building Sustainable Future
            </p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm font-medium transition-colors relative group ${
                currentPage === item.id
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
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}
              />
            </button>
          ))}
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={shouldHaveSolidBg ? 'text-gray-700' : 'text-white'} size={28} />
          ) : (
            <Menu className={shouldHaveSolidBg ? 'text-gray-700' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-xl">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-3 text-sm font-medium border-b border-gray-100 ${
                  currentPage === item.id ? 'text-[#3CB371]' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
