import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, CheckCircle, Clock } from 'lucide-react';

interface ProjectsProps {
  fullPage?: boolean;
}

export default function Projects({ fullPage = false }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');

  const categories = [
    { id: 'all', label: 'Tất cả' },
    { id: 'industrial-park', label: 'Khu Công Nghiệp' },
    { id: 'textile-factory', label: 'Nhà máy Dệt - nhuộm' },
    { id: 'seafood-factory', label: 'Nhà máy Thủy sản' },
    { id: 'hospital', label: 'Bệnh viện' },
    { id: 'food-factory', label: 'Nhà máy Thực phẩm' },
    { id: 'pharma-factory', label: 'Nhà máy Dược phẩm' },
    { id: 'fish-meal-factory', label: 'Nhà máy Bột cá' },
    { id: 'hotel-restaurant', label: 'Khách sạn - Nhà hàng' },
    { id: 'wastewater-garbage', label: 'Nước thải rỉ rác' },
    { id: 'domestic-wastewater', label: 'Nước Thải Sinh Hoạt' },
    { id: 'packaging-paper', label: 'Nhà máy Bao bì - Giấy' },
    { id: 'highrise-commercial', label: 'Cao ốc - khu thương mại' },
    { id: 'other-industries', label: 'Ngành nghề khác' },
    { id: 'water-treatment', label: 'Xử Lý Nước Cấp' },
    { id: 'air-treatment', label: 'Xử Lý Khí Thải' },
  ];

  const years = [
    { id: 'all', label: 'Tất cả năm' },
    { id: '2024', label: '2024' },
    { id: '2023', label: '2023' },
    { id: '2022', label: '2022' },
    { id: '2021', label: '2021' },
    { id: '2020', label: '2020' },
  ];

  const statuses = [
    { id: 'all', label: 'Tất cả trạng thái' },
    { id: 'completed', label: 'Đã thi công' },
    { id: 'under-construction', label: 'Đang thi công' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Nhà máy điện mặt trời 50MW',
      category: 'industrial-park',
      location: 'Ninh Thuận',
      year: '2023',
      status: 'completed',
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Solar', 'EPC'],
    },
    {
      id: 2,
      title: 'Nhà máy sản xuất linh kiện điện tử',
      category: 'packaging-paper',
      location: 'Bắc Ninh',
      year: '2023',
      status: 'completed',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Industrial', 'Clean Room'],
    },
    {
      id: 3,
      title: 'Hệ thống xử lý nước thải KCN',
      category: 'wastewater-garbage',
      location: 'Đồng Nai',
      year: '2024',
      status: 'under-construction',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Wastewater', 'Green Tech'],
    },
    {
      id: 4,
      title: 'Trạm biến áp 220kV',
      category: 'industrial-park',
      location: 'Đà Nẵng',
      year: '2022',
      status: 'completed',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Power Grid', 'Infrastructure'],
    },
    {
      id: 5,
      title: 'Nhà máy phong điện 100MW',
      category: 'industrial-park',
      location: 'Quảng Trị',
      year: '2023',
      status: 'completed',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Wind', 'Renewable'],
    },
    {
      id: 6,
      title: 'Nhà máy sản xuất thực phẩm',
      category: 'food-factory',
      location: 'TP.HCM',
      year: '2024',
      status: 'under-construction',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Food Processing', 'HACCP'],
    },
    {
      id: 7,
      title: 'Bệnh viện đa khoa khu vực',
      category: 'hospital',
      location: 'Hà Nội',
      year: '2023',
      status: 'completed',
      image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Healthcare', 'Infrastructure'],
    },
    {
      id: 8,
      title: 'Khách sạn 5 sao',
      category: 'hotel-restaurant',
      location: 'Đà Nẵng',
      year: '2024',
      status: 'under-construction',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Hospitality', 'Luxury'],
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (selectedCategory === 'all' || project.category === selectedCategory) &&
      (selectedYear === 'all' || project.year === selectedYear) &&
      (selectedStatus === 'all' || project.status === selectedStatus)
  );

  if (fullPage) {
    return (
      <div className="pt-32 pb-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1E2A78] mb-4">Dự án tiêu biểu</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hơn 500 dự án thành công trên toàn quốc
            </p>
          </div>
          <div className="flex gap-8">
            <div className="w-80 flex-shrink-0">
              <ProjectFilters
                categories={categories}
                years={years}
                statuses={statuses}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                selectedYear={selectedYear}
                setSelectedYear={setSelectedYear}
                selectedStatus={selectedStatus}
                setSelectedStatus={setSelectedStatus}
              />
            </div>
            <div className="flex-1">
              <ProjectGrid projects={filteredProjects} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider">
            Dự án
          </span>
          <h2 className="text-4xl font-bold text-[#1E2A78] mt-4 mb-6">
            Dự án tiêu biểu
          </h2>
        </div>
        <ProjectGrid projects={filteredProjects.slice(0, 3)} />
      </div>
    </section>
  );
}

function ProjectFilters({
  categories,
  years,
  statuses,
  selectedCategory,
  setSelectedCategory,
  selectedYear,
  setSelectedYear,
  selectedStatus,
  setSelectedStatus
}: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-8">
      <h3 className="text-lg font-bold text-[#1E2A78] mb-6">Bộ lọc dự án</h3>

      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Theo nhóm:</h4>
          <div className="space-y-2">
            {categories.map((category: any) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  selectedCategory === category.id
                    ? 'bg-[#1E2A78] text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Dự án theo năm:</h4>
          <div className="space-y-2">
            {years.map((year: any) => (
              <button
                key={year.id}
                onClick={() => setSelectedYear(year.id)}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  selectedYear === year.id
                    ? 'bg-[#3CB371] text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {year.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-4">Dự án theo status:</h4>
          <div className="space-y-2">
            {statuses.map((status: any) => (
              <button
                key={status.id}
                onClick={() => setSelectedStatus(status.id)}
                className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all text-sm ${
                  selectedStatus === status.id
                    ? 'bg-[#FF6B35] text-white shadow-md'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {status.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectGrid({ projects }: any) {
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-.98-5.5-2.5m.5-4.5a7.963 7.963 0 015.5-2.5c2.34 0 4.29.98 5.5 2.5m-.5 4.5H7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Chưa tìm thấy dự án</h3>
        <p className="text-gray-600 max-w-md">
          Không có dự án nào phù hợp với bộ lọc hiện tại. Vui lòng thử điều chỉnh các tiêu chí lọc để tìm kiếm dự án khác.
        </p>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project: any) => (
        <div
          key={project.id}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag: string, i: number) => (
                  <span key={i} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-[#1E2A78] group-hover:text-[#3CB371] transition-colors">
                {project.title}
              </h3>
              <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                project.status === 'completed'
                  ? 'bg-green-100 text-green-800'
                  : 'bg-orange-100 text-orange-800'
              }`}>
                {project.status === 'completed' ? (
                  <CheckCircle size={12} />
                ) : (
                  <Clock size={12} />
                )}
                {project.status === 'completed' ? 'Hoàn thành' : 'Đang thi công'}
              </div>
            </div>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-[#3CB371]" />
                {project.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} className="text-[#3CB371]" />
                {project.year}
              </div>
            </div>
            <button className="text-[#3CB371] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
              Xem chi tiết
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
