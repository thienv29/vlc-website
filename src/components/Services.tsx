import { useState } from 'react';
import { Building2, Wrench, Leaf, ShoppingBag, ArrowRight, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ServicesProps {
  fullPage?: boolean;
}

export default function Services({ fullPage = false }: ServicesProps) {
  const { t } = useTranslation();

  const services = [
    {
      id: 'epc',
      icon: Building2,
      title: t('services.services.epc.title'),
      description: t('services.services.epc.description'),
      color: '#2563EB', // Industrial blue
      bgColor: '#EFF6FF', // Light blue background
      items: t('services.services.epc.items', { returnObjects: true }) as string[],
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      detailedContent: {
        process: t('services.services.epc.process', { returnObjects: true }) as string[],
        standards: t('services.services.epc.standards', { returnObjects: true }) as string[],
        packages: t('services.services.epc.packages', { returnObjects: true }) as string[],
      }
    },
    {
      id: 'maintenance',
      icon: Wrench,
      title: t('services.services.maintenance.title'),
      description: t('services.services.maintenance.description'),
      color: '#1E40AF', // Darker blue
      bgColor: '#EEF2FF', // Light blue background
      items: t('services.services.maintenance.items', { returnObjects: true }) as string[],
      image: 'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=800',
      detailedContent: {
        operations: t('services.services.maintenance.operations', { returnObjects: true }) as string[],
        maintenance: t('services.services.maintenance.maintenance', { returnObjects: true }) as string[],
        projects: t('services.services.maintenance.projects', { returnObjects: true }) as string[],
      }
    },
    {
      id: 'environment',
      icon: Leaf,
      title: t('services.services.environment.title'),
      description: t('services.services.environment.description'),
      color: '#1E40AF', // Darker blue
      bgColor: '#EEF2FF', // Light blue background
      items: t('services.services.environment.items', { returnObjects: true }) as string[],
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
      detailedContent: {
        consulting: t('services.services.environment.consulting', { returnObjects: true }) as string[],
        process: t('services.services.environment.process', { returnObjects: true }) as string[],
      }
    },
    {
      id: 'products',
      icon: ShoppingBag,
      title: t('services.services.products.title'),
      description: t('services.services.products.description'),
      color: '#2563EB', // Industrial blue
      bgColor: '#EFF6FF', // Light blue background
      items: t('services.services.products.items', { returnObjects: true }) as string[],
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      detailedContent: {
        products: t('services.services.products.products', { returnObjects: true }) as any[],
      }
    },
  ];

  if (fullPage) {
    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <div className="pt-32 pb-20 bg-gray-50">
        {/* Banner Section */}
        <div className="relative h-96 bg-gradient-to-r from-primary-800 to-primary-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/50" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1200)'
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {t('services.banner.title')}
              </h1>
              <button
                onClick={() => scrollToSection('services-overview')}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                {t('services.banner.cta')}
                <ChevronDown size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Section 1: Service Overview Cards */}
        <section id="services-overview" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t('services.overview.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('services.overview.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: service.bgColor }}
                  >
                    <service.icon size={32} style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <button
                    onClick={() => scrollToSection(`service-${service.id}`)}
                    className="text-primary-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all"
                  >
                    {t('services.learnMore')}
                    <ArrowRight size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Service Information */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            {services.map((service, index) => (
              <div key={index} id={`service-${service.id}`} className="mb-20">
                <ServiceDetailSection service={service} />
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  return (
    <section className="py-24 bg-primary-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            {t('services.section')}
          </span>
          <h2 className="text-4xl font-bold text-primary-800 mt-4 mb-6">
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
              <h3 className="text-xl font-bold text-primary-800 mb-4">{service.title}</h3>
              <ul className="space-y-2 mb-6">
                {service.items.slice(0, 3).map((item: string, i: number) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-primary-600 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="text-primary-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
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

function ServiceDetailSection({ service }: any) {
  const { t } = useTranslation();

  const renderEPCContent = () => (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: service.bgColor }}
          >
            <service.icon size={32} style={{ color: service.color }} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Quy trình EPC</h4>
            <ul className="space-y-3">
              {service.detailedContent.process?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-semibold">{i + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Tiêu chuẩn chất lượng</h4>
            <ul className="space-y-3">
              {service.detailedContent.standards?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Gói dịch vụ EPC</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.detailedContent.packages?.map((item: string, i: number) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4">
                  <span className="text-gray-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="bg-primary-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Chứng nhận & Chứng chỉ</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-primary-600 font-bold">ISO</span>
              </div>
              <span className="text-sm text-gray-700">ISO 9001:2015</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <span className="text-green-600 font-bold">EPC</span>
              </div>
              <span className="text-sm text-gray-700">EPC Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMaintenanceContent = () => (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: service.bgColor }}
          >
            <service.icon size={32} style={{ color: service.color }} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Quy trình vận hành</h4>
            <ul className="space-y-3">
              {service.detailedContent.operations?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-semibold">{i + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Dịch vụ bảo trì</h4>
            <ul className="space-y-3">
              {service.detailedContent.maintenance?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-orange-600 text-sm">🔧</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="bg-gray-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Dự án tiêu biểu</h4>
          <div className="space-y-4">
            {service.detailedContent.projects?.map((project: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 text-sm font-semibold">{i + 1}</span>
                </div>
                <span className="text-gray-700">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderEnvironmentContent = () => (
    <div className="grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <div className="flex items-center gap-4 mb-8">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: service.bgColor }}
          >
            <service.icon size={32} style={{ color: service.color }} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <div className="space-y-8">
          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Dịch vụ tư vấn</h4>
            <ul className="space-y-3">
              {service.detailedContent.consulting?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-green-600 text-sm">🌱</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Quy trình hỗ trợ</h4>
            <ul className="space-y-3">
              {service.detailedContent.process?.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-primary-600 text-sm font-semibold">{i + 1}</span>
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover"
          />
        </div>
        <div className="bg-green-50 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Infographic quy trình</h4>
          <div className="text-center text-gray-600">
            <p>Quy trình tư vấn môi trường từ A đến Z</p>
            <p className="text-sm mt-2">Hỗ trợ doanh nghiệp hoàn thiện hồ sơ pháp lý</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProductsContent = () => (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: service.bgColor }}
        >
          <service.icon size={32} style={{ color: service.color }} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
      </div>

      <div className="mb-8">
        <p className="text-lg text-gray-600 leading-relaxed">
          Danh mục sản phẩm và công nghệ tiên tiến mà chúng tôi cung cấp cho các dự án EPC và công nghiệp.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.detailedContent.products?.map((product: any, i: number) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <span className="text-primary-600 text-lg">📦</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h4>
            <p className="text-gray-600 text-sm mb-4">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-primary-600 font-medium">{product.category}</span>
              <button className="text-primary-600 hover:text-primary-800 text-sm font-medium">
                Chi tiết →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
      {service.id === 'epc' && renderEPCContent()}
      {service.id === 'maintenance' && renderMaintenanceContent()}
      {service.id === 'environment' && renderEnvironmentContent()}
      {service.id === 'products' && renderProductsContent()}
    </div>
  );
}
