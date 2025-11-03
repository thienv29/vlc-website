import { useTranslation } from 'react-i18next';
import { Award, Shield, Trophy, Star, CheckCircle, Users, Building2, Globe } from 'lucide-react';

export default function Partners() {
  const { t } = useTranslation();

  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Hệ thống quản lý chất lượng',
      icon: Shield,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      name: 'ISO 14001:2015',
      description: 'Hệ thống quản lý môi trường',
      icon: Globe,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      name: 'OHSAS 18001',
      description: 'An toàn và sức khỏe nghề nghiệp',
      icon: CheckCircle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      name: 'Top 10 EPC Việt Nam',
      description: 'Doanh nghiệp EPC hàng đầu',
      icon: Trophy,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    }
  ];

  const partners = [
    { name: 'Vingroup', logo: 'https://via.placeholder.com/120x60/1E40AF/FFFFFF?text=Vingroup', category: 'Tập đoàn' },
    { name: 'FPT', logo: 'https://via.placeholder.com/120x60/DC2626/FFFFFF?text=FPT', category: 'Công nghệ' },
    { name: 'PetroVietnam', logo: 'https://via.placeholder.com/120x60/059669/FFFFFF?text=PetroVN', category: 'Năng lượng' },
    { name: 'EVN', logo: 'https://via.placeholder.com/120x60/7C3AED/FFFFFF?text=EVN', category: 'Điện lực' },
    { name: 'Viettel', logo: 'https://via.placeholder.com/120x60/EA580C/FFFFFF?text=Viettel', category: 'Viễn thông' },
    { name: 'Masan Group', logo: 'https://via.placeholder.com/120x60/0891B2/FFFFFF?text=Masan', category: 'Tập đoàn' },
  ];

  const stats = [
    { number: '200+', label: 'Đối tác chiến lược', icon: Building2 },
    { number: '15+', label: 'Năm kinh nghiệm', icon: Award },
    { number: '500+', label: 'Dự án thành công', icon: CheckCircle },
    { number: '98%', label: 'Độ hài lòng KH', icon: Star }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Trust Signals Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6 animate-fadeIn">
            <Shield className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-medium text-sm">Chứng nhận & Đối tác</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slideInUp">
            Uy tín được <span className="text-primary-600">chứng minh</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp delay-100 leading-relaxed">
            Với hơn 20 năm kinh nghiệm và các chứng nhận quốc tế, chúng tôi tự hào là đối tác tin cậy của hàng trăm doanh nghiệp Việt Nam
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 ${cert.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <cert.icon className={`w-8 h-8 ${cert.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                {cert.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {cert.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-600 font-medium">Đã chứng nhận</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 mb-20 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Con số nói lên tất cả</h3>
              <p className="text-primary-100 max-w-2xl mx-auto">
                Những thành tựu mà chúng tôi đã đạt được trong suốt 20 năm phát triển
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex justify-center mb-3">
                    <stat.icon className="w-8 h-8 text-primary-300" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-100 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Partners Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Đối tác chiến lược</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Chúng tôi hợp tác với các tập đoàn hàng đầu Việt Nam để mang đến giải pháp toàn diện và chất lượng cao
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white hover:bg-gray-50 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-gray-100 animate-slideInUp"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[3/2] flex items-center justify-center mb-3">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-1">{partner.category}</div>
                <div className="text-sm font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                  {partner.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <span className="text-green-800 font-medium text-sm">Được tin tưởng bởi 200+ doanh nghiệp Việt Nam</span>
          </div>
        </div>
      </div>
    </section>
  );
}
