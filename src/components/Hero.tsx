import { ArrowRight, Play, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

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
          className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-30' : 'opacity-0'}`}
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src="https://player.vimeo.com/external/370467937.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6ab7cb8ba3&profile_id=165" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-500"></div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/70 to-primary-600/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/95 via-transparent to-transparent"></div>
      </div>

      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="mb-6 inline-block animate-fadeIn">
          <span className="px-4 py-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full text-primary-500 text-sm font-medium">
            {t('hero.badge')}
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-slideInUp">
          {t('hero.title')}
          <br />
          <span className="text-primary-400">{t('hero.subtitle')}</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-slideInUp delay-100">
          {t('hero.description')}
        </p>

        {/* Address Information */}
        <div className="mb-8 animate-slideInUp delay-150">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/15 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
                <MapPin className="w-5 h-5 text-primary-300" />
                {t('hero.officeLocations')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="group bg-white/20 backdrop-blur-lg border border-white/25 rounded-2xl p-6 hover:bg-white/30 hover:border-white/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-white text-base mb-2 group-hover:text-primary-200 transition-colors">
                      {t('hero.branches.north')}
                    </div>
                    <div className="text-white/90 text-sm leading-relaxed font-medium">
                      {t('hero.addresses.north')}
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white/20 backdrop-blur-lg border border-white/25 rounded-2xl p-6 hover:bg-white/30 hover:border-white/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-white text-base mb-2 group-hover:text-primary-200 transition-colors">
                      {t('hero.branches.central')}
                    </div>
                    <div className="text-white/90 text-sm leading-relaxed font-medium">
                      {t('hero.addresses.central')}
                    </div>
                  </div>
                </div>
                
                <div className="group bg-white/20 backdrop-blur-lg border border-white/25 rounded-2xl p-6 hover:bg-white/30 hover:border-white/40 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="inline-flex p-3 bg-white/20 rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-white text-base mb-2 group-hover:text-primary-200 transition-colors">
                      {t('hero.branches.west')}
                    </div>
                    <div className="text-white/90 text-sm leading-relaxed font-medium">
                      {t('hero.addresses.west')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideInUp delay-200">
          <button className="group px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold text-base hover:bg-primary-600 transition-all flex items-center gap-2 shadow-lg shadow-primary-500/30 transform hover:-translate-y-1">
            {t('hero.exploreServices')}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
          <button className="group px-6 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg font-semibold text-base hover:bg-white/20 transition-all flex items-center gap-2 transform hover:-translate-y-1">
            <Play size={18} />
            {t('hero.watchIntro')}
          </button>
        </div>

        {/* CTA Button - Learn More About VLC */}
        <div className="mt-10 animate-fadeIn delay-300">
          <a 
            href="/about"
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md text-white border-2 border-primary-400/50 rounded-lg font-semibold text-base hover:bg-primary-500/20 hover:border-primary-400 transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
          >
            {t('hero.learnMore')}
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-2 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
