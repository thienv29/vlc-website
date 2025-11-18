import { ArrowRight, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-28 md:pt-32 pb-16" style={{ backgroundImage: 'url(/nhon-trach-6a-120.jpg)' }}>
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-20' : 'opacity-0'}`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="https://player.vimeo.com/external/370467937.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6ab7cb8ba3&profile_id=165" type="video/mp4" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-500"></div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-primary-600/70"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 inline-block animate-fadeIn">
          <span className="px-6 py-3 bg-primary-500/25 backdrop-blur-sm border border-primary-400/40 rounded-full text-primary-300 text-sm font-semibold shadow-lg">
            {t('hero.badge')}
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight animate-slideInUp">
          {t('hero.title')}
          <br />
          <span className="text-primary-300 block md:inline">{t('hero.subtitle')}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-4xl mx-auto leading-relaxed animate-slideInUp delay-200 font-light">
          {t('hero.description')}
        </p>

        {/* Office Locations with subtle frame */}
        <div className="mb-12 animate-slideInUp delay-300">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/20 backdrop-blur-sm border border-white/25 rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <div className="text-center group px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-white/10 hover:shadow-md">
                  <div className="font-semibold text-white text-sm group-hover:text-primary-200 transition-colors">{t('hero.branches.north')}</div>
                  <div className="text-white/80 text-xs mt-1 font-medium group-hover:text-white transition-colors">{t('hero.addresses.north')}</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/40 group-hover:bg-white/60"></div>
                <div className="text-center group px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-white/10 hover:shadow-md">
                  <div className="font-semibold text-white text-sm group-hover:text-primary-200 transition-colors">{t('hero.branches.central')}</div>
                  <div className="text-white/80 text-xs mt-1 font-medium group-hover:text-white transition-colors">{t('hero.addresses.central')}</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-white/40 group-hover:bg-white/60"></div>
                <div className="text-center group px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer hover:bg-white/10 hover:shadow-md">
                  <div className="font-semibold text-white text-sm group-hover:text-primary-200 transition-colors">{t('hero.branches.west')}</div>
                  <div className="text-white/80 text-xs mt-1 font-medium group-hover:text-white transition-colors">{t('hero.addresses.west')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slideInUp delay-400">
          <Link
            to="/services"
            className="group px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold text-lg transition-all flex items-center gap-3 shadow-lg shadow-primary-500/40 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-500/60"
          >
            {t('hero.exploreServices')}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>

          <Link
            to="/about"
            className="group px-8 py-4 bg-white/15 backdrop-blur-md text-white border-2 border-white/30 hover:bg-white/25 hover:border-white/50 rounded-lg font-semibold text-lg transition-all flex items-center gap-3 transform hover:-translate-y-1 shadow-lg"
          >
            {t('hero.learnMore')}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/60 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
