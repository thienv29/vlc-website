import { useState } from 'react';
import { Building2, Wrench, Leaf, ShoppingBag, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServicesProps {
  fullPage?: boolean;
}

export default function Services({ fullPage = false }: ServicesProps) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      icon: Building2,
      title: t('services.services.epc.title'),
      color: '#1E2A78',
      items: t('services.services.epc.items', { returnObjects: true }) as string[],
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Wrench,
      title: t('services.services.maintenance.title'),
      color: '#3CB371',
      items: t('services.services.maintenance.items', { returnObjects: true }) as string[],
      image: 'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Leaf,
      title: t('services.services.environment.title'),
      color: '#3CB371',
      items: t('services.services.environment.items', { returnObjects: true }) as string[],
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: ShoppingBag,
      title: t('services.services.products.title'),
      color: '#1E2A78',
      items: t('services.services.products.items', { returnObjects: true }) as string[],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  if (fullPage) {
    return (
      <div className="pt-32 pb-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1E2A78] mb-4">{t('services.title')}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>
          <ServiceTabs services={services} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider">
            {t('services.section')}
          </span>
          <h2 className="text-4xl font-bold text-[#1E2A78] mt-4 mb-6">
            {t('services.sectionTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                style={{ backgroundColor: `${service.color}15` }}
              >
                <service.icon size={32} style={{ color: service.color }} />
              </div>
              <h3 className="text-xl font-bold text-[#1E2A78] mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.items.slice(0, 3).map((item: string, i: number) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-[#3CB371] mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-[#3CB371] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                {t('services.learnMore')}
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceTabs({ services, activeTab, setActiveTab }: any) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex flex-wrap gap-4 mb-12 justify-center">
        {services.map((service: any, index: number) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === index
                ? 'bg-[#3CB371] text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {service.title}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl p-12 shadow-xl">
        <div>
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
            style={{ backgroundColor: `${services[activeTab].color}15` }}>
            {(() => {
              const Icon = services[activeTab].icon;
              return <Icon size={40} style={{ color: services[activeTab].color }} />;
            })()}
          </div>
          <h3 className="text-3xl font-bold text-[#1E2A78] mb-6">{services[activeTab].title}</h3>
          <ul className="space-y-4 mb-8">
            {services[activeTab].items.map((item: string, i: number) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#3CB371]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ArrowRight size={14} className="text-[#3CB371]" />
                </div>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
          <button className="px-8 py-4 bg-[#3CB371] text-white rounded-lg font-semibold hover:bg-[#34a563] transition-all flex items-center gap-2">
            {t('services.requestQuote')}
            <ArrowRight size={20} />
          </button>
        </div>
        <div className="aspect-[4/3] rounded-2xl overflow-hidden">
          <img
            src={services[activeTab].image}
            alt={services[activeTab].title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
