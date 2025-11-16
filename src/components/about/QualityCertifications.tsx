import { useTranslation } from 'react-i18next';
import { Award, CheckCircle, Shield, Leaf } from 'lucide-react';

export default function QualityCertifications() {
  const { t } = useTranslation();

  const certifications = [
    {
      id: 'iso9001',
      name: 'ISO 9001:2015',
      title: 'Chứng nhận Hệ thống Quản lý Chất lượng',
      description: 'Đảm bảo quy trình quản lý chất lượng đạt tiêu chuẩn quốc tế, từ thiết kế đến bàn giao dự án',
      image: '/certifications/iso-9001-certificate.jpg',
      features: [
        'Quy trình kiểm soát chất lượng nghiêm ngặt',
        'Tiêu chuẩn hóa quy trình làm việc',
        'Cam kết hài lòng khách hàng 100%'
      ],
      color: 'from-blue-500 to-blue-600',
      icon: Shield
    },
    {
      id: 'iso14001',
      name: 'ISO 14001:2015', 
      title: 'Chứng nhận Hệ thống Quản lý Môi trường',
      description: 'Cam kết bảo vệ môi trường và phát triển bền vững trong mọi hoạt động kinh doanh',
      image: '/certifications/iso-14001-certificate.jpg',
      features: [
        'Giảm thiểu tác động môi trường',
        'Phát triển bền vững và xanh',
        'Quản lý tài nguyên hiệu quả'
      ],
      color: 'from-green-500 to-green-600',
      icon: Leaf
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Chứng nhận chất lượng
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('about.certifications.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('about.certifications.subtitle')}
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {certifications.map((cert, index) => (
            <div key={cert.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Certificate Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if image not found
                    e.currentTarget.src = `https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=${cert.name}`;
                  }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                {/* Certificate Badge */}
                <div className="absolute top-6 left-6">
                  <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-full text-sm font-semibold shadow-lg`}>
                    <cert.icon className="w-4 h-4" />
                    {cert.name}
                  </div>
                </div>
                {/* Quality Badge */}
                <div className="absolute bottom-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800">
                    ✓ Chứng nhận quốc tế
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Features List */}
                <div className="space-y-3">
                  <div className="text-sm font-semibold text-gray-700 mb-3">
                    Đặc điểm nổi bật:
                  </div>
                  {cert.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center flex-shrink-0`}>
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <button className={`w-full py-3 px-4 bg-gradient-to-r ${cert.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200`}>
                    Xem chi tiết chứng nhận
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Awards & Recognition */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry Awards & Recognition
            </h3>
            <p className="text-lg text-gray-600">
              Những ghi nhận từ các cơ quan nhà nước và tổ chức uy tín
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Award 1 - Top 10 EPC Vietnam 2024 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Colored border accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-green-500 rounded-t-2xl"></div>
                
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <Award className="w-8 h-8 text-yellow-900" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      Top 10 Doanh nghiệp EPC<br />Việt Nam
                    </h4>
                    
                    <div className="mb-3">
                      <span className="inline-block px-4 py-2 bg-green-100 text-green-800 text-sm font-semibold rounded-full">
                        2024
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      Bộ Công Thương
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-sm mt-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Ngành</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Award 2 - Green Enterprise 2023 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Colored border accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-500 rounded-t-2xl"></div>
                
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <Leaf className="w-8 h-8 text-green-600" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      Doanh nghiệp Xanh
                    </h4>
                    
                    <div className="mb-3">
                      <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                        2023
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      Bộ Tài nguyên & Môi trường
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-sm mt-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Môi trường</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Award 3 - Technology Innovation 4.0 2023 */}
            <div className="group">
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                {/* Colored border accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-purple-500 rounded-t-2xl"></div>
                
                <div className="flex flex-col items-center text-center h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg mb-4">
                    <Award className="w-8 h-8 text-yellow-900" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h4 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      Sáng tạo Công nghệ 4.0
                    </h4>
                    
                    <div className="mb-3">
                      <span className="inline-block px-4 py-2 bg-purple-100 text-purple-800 text-sm font-semibold rounded-full">
                        2023
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      Bộ Khoa học & Công nghệ
                    </p>
                    
                    <div className="flex items-center justify-center gap-2 text-sm mt-auto">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700 font-medium">Công nghệ</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Cam kết chất lượng và bền vững
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Với các chứng nhận quốc tế, VLC Group cam kết mang đến những giải pháp EPC chất lượng cao, 
              tuân thủ các tiêu chuẩn nghiêm ngặt về quản lý chất lượng và bảo vệ môi trường.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                <Shield className="w-4 h-4 text-blue-600" />
                Tiêu chuẩn quốc tế
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Quy trình kiểm định
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-gray-700 shadow-sm">
                <Award className="w-4 h-4 text-yellow-600" />
                Chứng nhận uy tín
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}