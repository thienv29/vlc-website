import { ArrowRight, Play, Award, Users, TrendingUp, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { t } = useTranslation();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const stats = [
    { number: 500, suffix: '+', label: t('hero.stats.projects'), icon: TrendingUp, color: 'text-accent-500' },
    { number: 20, suffix: '+', label: t('hero.stats.experience'), icon: Award, color: 'text-primary-400' },
    { number: 98, suffix: '%', label: t('hero.stats.satisfaction'), icon: Star, color: 'text-secondary-400' },
    { number: 1000, suffix: '+', label: t('hero.stats.experts'), icon: Users, color: 'text-accent-600' },
  ];

  // Animated counter hook
  const useAnimatedCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [end, duration]);

    return count;
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/nhon-trach-6a-120.jpg)' }}>
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

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slideInUp">
          {t('hero.title')}
          <br />
          <span className="text-primary-400">{t('hero.subtitle')}</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed animate-slideInUp delay-100">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideInUp delay-200">
          <button className="group px-8 py-4 bg-primary-500 text-white rounded-lg font-semibold text-lg hover:bg-primary-600 transition-all flex items-center gap-2 shadow-lg shadow-primary-500/30 transform hover:-translate-y-1">
            {t('hero.exploreServices')}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all flex items-center gap-2 transform hover:-translate-y-1">
            <Play size={20} />
            {t('hero.watchIntro')}
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fadeIn delay-300">
          {stats.map((stat, index) => {
            const animatedCount = useAnimatedCounter(stat.number, 2500 + index * 200);
            return (
              <div key={index} className="group text-center transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center mb-3">
                  <stat.icon className={`w-8 h-8 ${stat.color} mr-2`} />
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {animatedCount}{stat.suffix}
                  </div>
                </div>
                <div className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                <div className="w-12 h-1 bg-primary-400 mx-auto mt-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
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
