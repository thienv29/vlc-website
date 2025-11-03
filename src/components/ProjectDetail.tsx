import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, CheckCircle, Clock, Building2, User, Wrench, Droplets } from 'lucide-react';
import PageWrapper from './PageWrapper';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock project data - in a real app, this would come from an API or props
  const project = {
    id: 1,
    title: 'HỒ SỰ CỐ CỤM CÔNG NGHIỆP NHỊ XUÂN',
    category: 'Khu Công Nghiệp',
    location: 'TP. HCM',
    year: '2021',
    status: 'under-construction',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Wastewater', 'Emergency Pond', 'Industrial'],
    details: {
      projectName: 'HỒ SỰ CỐ CỤM CÔNG NGHIỆP NHỊ XUÂN',
      capacity: '',
      investor: 'Lực lượng Thanh Niên Xung Phong TP.HCM',
      location: 'TP. HCM',
      scope: 'Xây lắp',
      treatmentType: 'Hồ Sự Cố'
    },
    description: 'Hồ sự cố là công trình quan trọng trong hệ thống xử lý nước thải của cụm công nghiệp Nhi Xuân, đảm bảo an toàn môi trường và xử lý kịp thời các sự cố về nước thải.',
    features: [
      'Thiết kế theo tiêu chuẩn quốc tế',
      'Công nghệ xử lý nước thải tiên tiến',
      'Đảm bảo an toàn môi trường',
      'Hiệu suất xử lý cao'
    ],
    gallery: [
      'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  };

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'completed':
        return {
          text: 'Đã hoàn thành',
          color: 'text-green-800',
          bgColor: 'bg-green-100',
          icon: CheckCircle
        };
      case 'under-construction':
        return {
          text: 'Đang thi công',
          color: 'text-orange-800',
          bgColor: 'bg-orange-100',
          icon: Clock
        };
      default:
        return {
          text: 'Đang lên kế hoạch',
          color: 'text-green-800',
          bgColor: 'bg-green-100',
          icon: Clock
        };
    }
  };

  const statusInfo = getStatusInfo(project.status);

  return (
    <PageWrapper>
      {/* Page Banner */}
      <div className="relative bg-gradient-to-r from-[#0F5132] to-[#3CB371] text-white py-20 mb-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md-text-5xl font-bold mb-6">Chi tiết dự án</h1>
          <p className="text-xl md-text-2xl text-gray-100 max-w-3xl mx-auto">
            {project.title}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate('/projects')}
          className="flex items-center gap-2 text-[#0F5132] hover:text-[#3CB371] transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Quay lại danh sách dự án</span>
        </button>

        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#0F5132] to-[#3CB371] text-white rounded-3xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-black/30" />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-12">
            <div>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${statusInfo.bgColor} ${statusInfo.color} mb-6`}>
                <statusInfo.icon size={16} />
                <span>{statusInfo.text}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="text-xl text-gray-100 mb-8 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-[#3CB371]" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#3CB371]" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#3CB371]/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Details Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#3CB371]/10 rounded-xl flex items-center justify-center">
                    <Building2 size={24} className="text-[#3CB371]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Tên công trình</p>
                    <p className="text-gray-900 font-semibold">{project.details.projectName}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#3CB371]/10 rounded-xl flex items-center justify-center">
                    <User size={24} className="text-[#3CB371]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Chủ đầu tư</p>
                    <p className="text-gray-900 font-semibold">{project.details.investor}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#3CB371]/10 rounded-xl flex items-center justify-center">
                    <MapPin size={24} className="text-[#3CB371]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Địa điểm thực hiện</p>
                    <p className="text-gray-900 font-semibold">{project.details.location}</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#3CB371]/10 rounded-xl flex items-center justify-center">
                    <Wrench size={24} className="text-[#3CB371]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Phạm vi công việc</p>
                    <p className="text-gray-900 font-semibold">{project.details.scope}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Wastewater Treatment Type */}
            <div className="bg-gradient-to-r from-[#3CB371]/5 to-[#0F5132]/5 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#3CB371]/10 rounded-2xl flex items-center justify-center">
                  <Droplets size={32} className="text-[#3CB371]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0F5132]">Loại hình xử lý nước thải</h3>
                  <p className="text-gray-600">Công nghệ và phương pháp xử lý</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <p className="text-lg font-semibold text-[#0F5132]">{project.details.treatmentType}</p>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0F5132] mb-6">Đặc điểm nổi bật</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                    <div className="w-8 h-8 rounded-full bg-[#3CB371]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle size={16} className="text-[#3CB371]" />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#0F5132] mb-6">Hình ảnh dự án</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.gallery.map((image, index) => (
                  <div key={index} className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tags */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-[#0F5132] mb-4">Thẻ dự án</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-4 py-2 bg-[#3CB371]/10 text-[#3CB371] rounded-full text-sm font-medium border border-[#3CB371]/20">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-br from-[#0F5132] to-[#1e5f3a] text-white rounded-2xl p-6">
              <h3 className="text-lg font-bold mb-4">Thông tin nhanh</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Danh mục</span>
                  <span className="font-semibold">{project.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Năm</span>
                  <span className="font-semibold">{project.year}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-200">Trạng thái</span>
                  <span className="font-semibold">{statusInfo.text}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0F5132] mb-4">Dự án liên quan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Khám phá các dự án tương tự trong danh mục của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                id: 2,
                title: 'Nhà máy sản xuất linh kiện điện tử',
                location: 'Bắc Ninh',
                year: '2023',
                status: 'completed',
                image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'packaging-paper'
              },
              {
                id: 4,
                title: 'Trạm biến áp 220kV',
                location: 'Đà Nẵng',
                year: '2022',
                status: 'completed',
                image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'industrial-park'
              },
              {
                id: 6,
                title: 'Nhà máy sản xuất thực phẩm',
                location: 'TP.HCM',
                year: '2024',
                status: 'under-construction',
                image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
                category: 'food-factory'
              }
            ].map((relatedProject) => (
              <div
                key={relatedProject.id}
                onClick={() => navigate(`/projects/${relatedProject.id}`)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                      relatedProject.status === 'completed'
                        ? 'bg-green-500 text-white'
                        : 'bg-orange-500 text-white'
                    }`}>
                      {relatedProject.status === 'completed' ? (
                        <CheckCircle size={12} />
                      ) : (
                        <Clock size={12} />
                      )}
                      <span>
                        {relatedProject.status === 'completed' ? 'Hoàn thành' : 'Đang thi công'}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#0F5132] group-hover:text-[#3CB371] transition-colors leading-tight mb-3">
                    {relatedProject.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-[#3CB371]" />
                      <span>{relatedProject.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#3CB371]" />
                      <span>{relatedProject.year}</span>
                    </div>
                  </div>
                  <div className="text-[#3CB371] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Xem chi tiết
                    <ArrowLeft size={16} className="rotate-180" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
