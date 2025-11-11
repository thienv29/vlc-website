import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/logowebsite.png"
                alt="VLC Group Logo"
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.aboutUs')}</h4>
            <ul className="space-y-3">
              {[
                { path: '/about', label: t('footer.about') },
                { path: '/services', label: t('footer.services') },
                { path: '/projects', label: t('footer.projects') },
                { path: '/sustainability', label: t('footer.sustainability') },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.support')}</h4>
            <ul className="space-y-3">
              {[
                { path: '/news', label: t('footer.news') },
                { path: '/careers', label: t('footer.careers') },
                { path: '/contact', label: t('footer.contact') },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-primary-400 transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary-400 transition-colors text-sm">
                  {t('footer.terms')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">{t('footer.contact')}</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300 text-sm">
                  {t('footer.address')}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-primary-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">{t('footer.phone')}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-primary-400 flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">{t('footer.email')}</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-sm">{t('footer.newsletter')}</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('footer.emailPlaceholder')}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-primary-400"
                />
                <button className="px-4 py-2 bg-primary-600 rounded-lg hover:bg-primary-500 transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>{t('footer.copyright')}</p>
            <p>{t('footer.design')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
