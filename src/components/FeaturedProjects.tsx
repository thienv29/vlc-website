import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Calendar, MapPin, Award, ChevronLeft, ChevronRight } from 'lucide-react';

export default function FeaturedProjects() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProjects = [
    {
      id: 1,
      title: 'Nhà máy Xử lý nước thải Nhơn Trạch 6A',
      category: 'EPC - Xử lý nước',
      location: 'Đồng Nai, Việt Nam',
      year: '2024',
      description: 'Dự án EPC quy mô lớn với công nghệ tiên tiến, công suất xử lý 120.000 m³/ngày',
      image: '/nhon-trach-6a-120.jpg',
      status: 'Đang triển khai',
      highlights: [
        'Công nghệ MBBR tiên tiến',
        'Tuân thủ QCVN 14:2008/BTNMT',
        'Thời gian thi công 18 tháng'
      ],
      investment: '450 tỷ VND'
    },
    {
      id: 2,
      title: 'Hệ thống điện mặt trời EVN SPC',
      category: 'EPC - Năng lượng tái tạo',
      location: 'Bình Thuận, Việt Nam',
      year: '2023',
      description: 'Dự án điện mặt trời quy mô 50MW với hệ thống lưu trữ năng lượng tiên tiến',
      image: '/tk-landing-page-web-2.jpg',
      status: 'Hoàn thành',
      highlights: [
        'Công suất 50MW',
        'Hệ thống BESS 25MWh',
        'Giảm 45.000 tấn CO2/năm'
      ],
      investment: '1.200 tỷ VND'
    },
    {
      id: 3,
      title: 'Nhà máy Xử lý chất thải rắn Cần Thơ',
      category: 'EPC - Môi trường',
      location: 'Cần Thơ, Việt Nam',
      year: '2023',
      description: 'Nhà máy xử lý rác thải đô thị công nghệ đốt có thu hồi năng lượng',
      image: '/nuoc-thai-dau-ra-1.jpg',
      status: 'Vận hành',
      highlights: [
        'Công suất 1.500 tấn/ngày',
        'Phát điện 25MW',
        'Công nghệ Grate Furnace'
      ],
      investment: '2.800 tỷ VND'
    },
    {
      id: 4,
      title: 'Vận hành & Bảo trì hệ thống công nghiệp',
      category: 'Công nghệ & Tự động hóa',
      location: 'Toàn quốc',
      year: '2024',
      description: 'Dịch vụ vận hành 24/7 và bảo trì định kỳ cho các hệ thống công nghiệp',
      image: '/vanhanhbaotri.jpg',
      status: 'Triển khai',
      highlights: [
        'Vận hành 24/7',
        'Bảo trì định kỳ',
        'Theo dõi hiệu suất'
      ],
      investment: '180 tỷ VND'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Dự án tiêu biểu
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Dự án nổi bật & Mới nhất
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Những dự án EPC chất lượng cao, ứng dụng công nghệ tiên tiến và tạo giá trị bền vững
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Project Showcase */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative h-96 md:h-[500px]">
              <img
                src={featuredProjects[currentSlide].image}
                alt={featuredProjects[currentSlide].title}
                className="w-full h-full object-cover transition-transform duration-500"
                onError={(e) => {
                  e.currentTarget.src = `https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=${encodeURIComponent(featuredProjects[currentSlide].title)}`;
                }}
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <div className="max-w-4xl">
                  {/* Category & Status */}
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-500 text-white rounded-full text-sm font-medium">
                      {featuredProjects[currentSlide].category}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      featuredProjects[currentSlide].status === 'Hoàn thành' 
                        ? 'bg-green-500/20 text-green-300 border border-green-400/30'
                        : featuredProjects[currentSlide].status === 'Đang triển khai'
                        ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-400/30'
                        : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                    }`}>
                      {featuredProjects[currentSlide].status}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    {featuredProjects[currentSlide].title}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-3xl">
                    {featuredProjects[currentSlide].description}
                  </p>

                  {/* Project Info */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary-400" />
                      <span className="text-gray-300">{featuredProjects[currentSlide].location}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary-400" />
                      <span className="text-gray-300">{featuredProjects[currentSlide].year}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-primary-400" />
                      <span className="text-gray-300">{featuredProjects[currentSlide].investment}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {featuredProjects[currentSlide].highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full text-sm"
                      >
                        ✓ {highlight}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-3 px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105">
                    Xem chi tiết dự án
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-white w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Project Grid Preview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {featuredProjects.map((project, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`relative group rounded-xl overflow-hidden transition-all ${
                index === currentSlide 
                  ? 'ring-2 ring-primary-500 scale-105' 
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
            >
              <div className="aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/400x250/3B82F6/FFFFFF?text=${encodeURIComponent(project.title.substring(0, 20))}`;
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <h4 className="text-white text-sm font-medium truncate">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-xs">
                  {project.year} • {project.category}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
