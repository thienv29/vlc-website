import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, CheckCircle, Clock, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function ProjectShowcase() {
  const { t } = useTranslation();
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const featuredProjects = [
    {
      id: 1,
      title: 'Nhà máy điện mặt trời 50MW',
      category: 'Năng lượng tái tạo',
      location: 'Ninh Thuận',
      year: '2023',
      status: 'completed',
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Solar', 'EPC', 'Green Energy'],
      description: 'Dự án điện mặt trời quy mô lớn với công nghệ tiên tiến nhất',
      impact: 'Giảm phát thải CO2 hàng năm 80,000 tấn'
    },
    {
      id: 2,
      title: 'Nhà máy sản xuất linh kiện điện tử',
      category: 'Công nghiệp công nghệ cao',
      location: 'Bắc Ninh',
      year: '2023',
      status: 'completed',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Clean Room', 'High Tech', 'Precision'],
      description: 'Nhà máy đạt tiêu chuẩn ISO Class 5 với công nghệ sản xuất hiện đại',
      impact: 'Tạo việc làm cho 500 kỹ sư công nghệ cao'
    },
    {
      id: 3,
      title: 'Hệ thống xử lý nước thải KCN',
      category: 'Môi trường xanh',
      location: 'Đồng Nai',
      year: '2024',
      status: 'under-construction',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Green Tech', 'Sustainability', 'Innovation'],
      description: 'Hệ thống xử lý nước thải tiên tiến với công nghệ AI',
      impact: 'Xử lý 100,000m³ nước thải/ngày'
    },
    {
      id: 4,
      title: 'Trạm biến áp 220kV',
      category: 'Hạ tầng năng lượng',
      location: 'Đà Nẵng',
      year: '2022',
      status: 'completed',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Power Grid', 'Infrastructure', 'Reliability'],
      description: 'Trạm biến áp hiện đại đảm bảo an ninh năng lượng khu vực',
      impact: 'Cung cấp điện ổn định cho 200,000 hộ dân'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6 animate-fadeIn">
            <Star className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-medium text-sm">Dự án tiêu biểu</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slideInUp">
            Những thành tựu <span className="text-primary-600">xuất sắc</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp delay-100 leading-relaxed">
            Khám phá các dự án EPC hàng đầu mà chúng tôi đã thực hiện, mang lại giá trị bền vững cho cộng đồng và môi trường
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-slideInUp border border-gray-100"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image Section */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm ${
                    project.status === 'completed'
                      ? 'bg-green-500/90 text-white'
                      : 'bg-orange-500/90 text-white'
                  }`}>
                    {project.status === 'completed' ? (
                      <CheckCircle size={12} />
                    ) : (
                      <Clock size={12} />
                    )}
                    <span>{project.status === 'completed' ? 'Hoàn thành' : 'Đang thi công'}</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-primary-600/90 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="text-center text-white">
                    <div className="text-2xl font-bold mb-2">{project.impact}</div>
                    <div className="text-sm opacity-90">Tác động của dự án</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Project Info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary-500" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary-500" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium border border-primary-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-700 border border-gray-200 hover:border-primary-200 rounded-lg py-2 px-4 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                  <span>Xem chi tiết dự án</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center animate-fadeIn delay-500">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Khám phá thêm 500+ dự án thành công</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Từ năng lượng tái tạo đến công nghiệp công nghệ cao, chúng tôi đã đồng hành cùng hàng trăm doanh nghiệp Việt Nam
            </p>
            <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg">
              Xem tất cả dự án
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
