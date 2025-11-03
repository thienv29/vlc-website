import { useState, useEffect } from 'react';
import { Building2, Wrench, Leaf, ShoppingBag, ArrowRight, ChevronDown, CheckCircle, Star, Award, Users, TrendingUp, Shield, Zap, Globe, Clock, Target } from 'lucide-react';
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
    const [activeService, setActiveService] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);

    const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const stats = [
      { icon: Users, value: '1000+', label: 'Khách hàng tin cậy', color: 'text-blue-600' },
      { icon: Award, value: '25+', label: 'Giải thưởng ngành', color: 'text-green-600' },
      { icon: TrendingUp, value: '98%', label: 'Tỷ lệ hài lòng', color: 'text-purple-600' },
      { icon: Shield, value: 'ISO 9001', label: 'Chứng nhận chất lượng', color: 'text-orange-600' }
    ];

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Enhanced Banner Section */}
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700" />
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-transparent animate-pulse" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-green-500/10 to-transparent rounded-full blur-3xl animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-medium">EPC & SUSTAINABILITY LEADER</span>
            </div>

            {/* Main Title */}
            <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Giải pháp tổng thể
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                EPC & Dịch vụ
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Tiên phong trong các giải pháp kỹ thuật toàn diện, từ thiết kế đến vận hành, mang đến giá trị vượt trội cho doanh nghiệp Việt Nam
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button
                onClick={() => scrollToSection('services-overview')}
                className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <Target className="w-6 h-6" />
                Khám phá dịch vụ
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('stats-section')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20"
              >
                <TrendingUp className="w-6 h-6" />
                Xem thành tựu
              </button>
            </div>

            {/* Stats Preview */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-all transform hover:scale-105">
                  <stat.icon className={`w-8 h-8 mx-auto mb-2 ${stat.color}`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-blue-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button
              onClick={() => scrollToSection('services-overview')}
              className="animate-bounce text-white/70 hover:text-white transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <section id="stats-section" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-green-50 opacity-50" />
          <div className="relative max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Thành tựu & Số liệu nổi bật
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hơn 20 năm kinh nghiệm và sự tin tưởng từ hàng nghìn khách hàng trên toàn quốc
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Users, value: '1000+', label: 'Khách hàng tin cậy', desc: 'Doanh nghiệp đã hợp tác', color: 'from-blue-500 to-blue-600' },
                { icon: Award, value: '25+', label: 'Giải thưởng ngành', desc: 'Sự công nhận chất lượng', color: 'from-green-500 to-green-600' },
                { icon: TrendingUp, value: '98%', label: 'Tỷ lệ hài lòng', desc: 'Khách hàng đánh giá 5 sao', color: 'from-purple-500 to-purple-600' },
                { icon: Shield, value: '15+', label: 'Chứng nhận quốc tế', desc: 'ISO & các tiêu chuẩn', color: 'from-orange-500 to-orange-600' }
              ].map((stat, index) => (
                <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Additional Stats Row */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Globe, value: '20+', label: 'Năm kinh nghiệm', desc: 'Trong lĩnh vực EPC' },
                { icon: Clock, value: '24/7', label: 'Hỗ trợ kỹ thuật', desc: 'Dịch vụ khẩn cấp' },
                { icon: Target, value: '500+', label: 'Dự án hoàn thành', desc: 'Giải pháp toàn diện' }
              ].map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200 hover:border-gray-300 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <stat.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm font-medium text-gray-800">{stat.label}</div>
                      <div className="text-xs text-gray-600">{stat.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 1: Service Overview Cards */}
        <section id="services-overview" className="py-20 bg-gradient-to-br from-gray-50 to-white animate-fadeIn">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-slideInUp">
                {t('services.overview.title')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-slideInUp delay-100">
                {t('services.overview.subtitle')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group relative bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 hover:rotate-1 animate-slideInUp overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                  onClick={() => scrollToSection(`service-${service.id}`)}
                >
                  {/* Background Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />

                  <div className="relative z-10">
                    {/* Service Icon with Enhanced Design */}
                    <div className="relative mb-8">
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-6"
                        style={{
                          background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                          border: `2px solid ${service.color}30`
                        }}
                      >
                        <service.icon size={36} style={{ color: service.color }} className="drop-shadow-sm" />
                      </div>
                      {/* Decorative Ring */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-dashed border-gray-200 group-hover:border-primary-300 group-hover:scale-110 transition-all duration-500" />
                    </div>

                    {/* Service Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-800 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Service Description */}
                    <p className="text-gray-600 mb-8 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>

                    {/* Service Features Preview */}
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {service.items.slice(0, 2).map((item: string, i: number) => (
                          <span
                            key={i}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full group-hover:bg-primary-100 group-hover:text-primary-800 transition-all duration-300"
                          >
                            <CheckCircle size={12} />
                            {item.length > 25 ? `${item.substring(0, 25)}...` : item}
                          </span>
                        ))}
                        {service.items.length > 2 && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-primary-100 to-primary-50 text-primary-700 text-xs font-medium rounded-full">
                            +{service.items.length - 2} nữa
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center justify-between">
                      <button className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        <span>{t('services.learnMore')}</span>
                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </button>

                      {/* Service Badge */}
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span>Chuyên nghiệp</span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-300 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Khách hàng nói gì về chúng tôi
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những đánh giá chân thực từ đối tác và khách hàng đã tin tưởng lựa chọn dịch vụ của VLC Group
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Nguyễn Văn Minh",
                  position: "Giám đốc kỹ thuật",
                  company: "Công ty TNHH Cơ điện Việt Nam",
                  content: "VLC Group đã hoàn thành dự án EPC nhà máy điện gió 50MW với chất lượng vượt trội. Đội ngũ chuyên nghiệp, tiến độ đúng hẹn và hỗ trợ kỹ thuật 24/7.",
                  rating: 5,
                  avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
                },
                {
                  name: "Trần Thị Lan",
                  position: "Phó Tổng Giám đốc",
                  company: "Tập đoàn Xây dựng Quốc tế",
                  content: "Dịch vụ bảo trì và vận hành của VLC Group giúp chúng tôi tối ưu hóa hiệu suất hệ thống. Tiết kiệm 30% chi phí vận hành hàng năm.",
                  rating: 5,
                  avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
                },
                {
                  name: "Lê Hoàng Anh",
                  position: "Trưởng phòng Môi trường",
                  company: "Công ty Cổ phần Đầu tư Bền vững",
                  content: "Quy trình tư vấn môi trường chuyên nghiệp, giúp doanh nghiệp chúng tôi hoàn thiện hồ sơ pháp lý nhanh chóng và tuân thủ đầy đủ các quy định.",
                  rating: 5,
                  avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover shadow-md"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.position}</div>
                      <div className="text-xs text-primary-600 font-medium">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-primary-200">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">98%</div>
                  <div className="text-sm text-gray-600">Khách hàng quay lại</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">4.9/5</div>
                  <div className="text-sm text-gray-600">Đánh giá trung bình</div>
                </div>
                <div className="w-px h-12 bg-gray-200" />
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Hỗ trợ kỹ thuật</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Detailed Service Information */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-6">
            {services.map((service, index) => (
              <div key={index} id={`service-${service.id}`} className="mb-20 animate-fadeIn">
                <ServiceDetailSection service={service} />
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Floating Elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-bounce" style={{ animationDuration: '4s' }} />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />

          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
                <Target className="w-5 h-5 text-yellow-400" />
                <span className="font-medium">Bắt đầu dự án của bạn ngay hôm nay</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Sẵn sàng biến ý tưởng
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  thành hiện thực?
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
                Hãy liên hệ với đội ngũ chuyên gia của chúng tôi để nhận tư vấn miễn phí và báo giá chi tiết cho dự án của bạn
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 hover:shadow-2xl shadow-lg">
                  <Target className="w-6 h-6" />
                  Yêu cầu tư vấn miễn phí
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border border-white/20">
                  <Clock className="w-6 h-6" />
                  Lên lịch gặp mặt
                </button>
              </div>

              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Hotline 24/7</h3>
                  <p className="text-blue-100">1900 XXX XXX</p>
                  <p className="text-sm text-blue-200 mt-1">Hỗ trợ kỹ thuật khẩn cấp</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="text-blue-100">info@vlcgroup.vn</p>
                  <p className="text-sm text-blue-200 mt-1">Phản hồi trong 24h</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Văn phòng</h3>
                  <p className="text-blue-100">Tầng 10, Tòa nhà ABC</p>
                  <p className="text-sm text-blue-200 mt-1">Hà Nội, Việt Nam</p>
                </div>
              </div>

              {/* Trust Message */}
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-blue-100 text-sm">
                  ✓ Tư vấn miễn phí • ✓ Báo giá chi tiết • ✓ Hỗ trợ 24/7 • ✓ Bảo hành dài hạn
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <section className="py-24 bg-primary-50 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider animate-slideInUp">
            {t('services.section')}
          </span>
          <h2 className="text-4xl font-bold text-primary-800 mt-4 mb-6 animate-slideInUp delay-100">
            {t('services.sectionTitle')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
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
    <div className="grid lg:grid-cols-2 gap-12 items-start animate-fadeIn">
      <div>
        <div className="flex items-center gap-4 mb-8 animate-slideInUp">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
            style={{ backgroundColor: service.bgColor }}
          >
            <service.icon size={32} style={{ color: service.color }} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <div className="space-y-8">
          <div className="animate-slideInUp delay-100">
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

          <div className="animate-slideInUp delay-200">
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

          <div className="animate-slideInUp delay-300">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Gói dịch vụ EPC</h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.detailedContent.packages?.map((item: string, i: number) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-gray-900 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6 animate-slideInUp delay-400">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="bg-primary-50 rounded-2xl p-6 shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Chứng nhận & Chứng chỉ</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
                <span className="text-primary-600 font-bold">ISO</span>
              </div>
              <span className="text-sm text-gray-700">ISO 9001:2015</span>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
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
    <div className="grid lg:grid-cols-2 gap-12 items-start animate-fadeIn">
      <div>
        <div className="flex items-center gap-4 mb-8 animate-slideInUp">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
            style={{ backgroundColor: service.bgColor }}
          >
            <service.icon size={32} style={{ color: service.color }} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <div className="space-y-8">
          <div className="animate-slideInUp delay-100">
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

          <div className="animate-slideInUp delay-200">
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

      <div className="space-y-6 animate-slideInUp delay-300">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="bg-gray-50 rounded-2xl p-6 shadow-md">
          <h4 className="text-lg font-semibold text-gray-900 mb-4">Dự án tiêu biểu</h4>
          <div className="space-y-4">
            {service.detailedContent.projects?.map((project: string, i: number) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center shadow-sm">
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
    <div className="grid lg:grid-cols-2 gap-12 items-start animate-fadeIn">
      <div>
        <div className="flex items-center gap-4 mb-8 animate-slideInUp">
          <div
            className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
            style={{ backgroundColor: service.bgColor }}
          >
            <service.icon size={32} style={{ color: service.color }} />
          </div>
          <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
        </div>

        <div className="space-y-8">
          <div className="animate-slideInUp delay-100">
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

          <div className="animate-slideInUp delay-200">
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

      <div className="space-y-6 animate-slideInUp delay-300">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="bg-green-50 rounded-2xl p-6 shadow-md">
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
      <div className="flex items-center gap-4 mb-8 animate-slideInUp">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
          style={{ backgroundColor: service.bgColor }}
        >
          <service.icon size={32} style={{ color: service.color }} />
        </div>
        <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
      </div>

      <div className="mb-8 animate-slideInUp delay-100">
        <p className="text-lg text-gray-600 leading-relaxed">
          Danh mục sản phẩm và công nghệ tiên tiến mà chúng tôi cung cấp cho các dự án EPC và công nghiệp.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.detailedContent.products?.map((product: any, i: number) => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all animate-slideInUp" style={{ animationDelay: `${i * 100 + 200}ms` }}>
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4 shadow-sm">
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
    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg animate-fadeIn">
      {service.id === 'epc' && renderEPCContent()}
      {service.id === 'maintenance' && renderMaintenanceContent()}
      {service.id === 'environment' && renderEnvironmentContent()}
      {service.id === 'products' && renderProductsContent()}
    </div>
  );
}
