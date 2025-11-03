import { ArrowRight, Play } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const stats = [
    { number: '500+', label: t('hero.stats.projects') },
    { number: '20+', label: t('hero.stats.experience') },
    { number: '98%', label: t('hero.stats.satisfaction') },
    { number: '1000+', label: t('hero.stats.experts') },
  ];

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-500">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-800/90 via-transparent to-transparent" />
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
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
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
