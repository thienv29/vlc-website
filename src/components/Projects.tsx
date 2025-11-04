import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, ArrowRight, CheckCircle, Clock, Search, SortAsc, SortDesc, ChevronLeft, ChevronRight } from 'lucide-react';
import PageWrapper from './PageWrapper';

interface ProjectsProps {
  fullPage?: boolean;
}

export default function Projects({ fullPage = false }: ProjectsProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('year-desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

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

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter(
      (project) =>
        (selectedCategory === 'all' || project.category === selectedCategory) &&
        (selectedYear === 'all' || project.year === selectedYear) &&
        (selectedStatus === 'all' || project.status === selectedStatus) &&
        (searchQuery === '' || project.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'year-desc':
          return parseInt(b.year) - parseInt(a.year);
        case 'year-asc':
          return parseInt(a.year) - parseInt(b.year);
        case 'name-asc':
          return a.title.localeCompare(b.title);
        case 'name-desc':
          return b.title.localeCompare(a.title);
        case 'status':
          if (a.status === b.status) return 0;
          return a.status === 'completed' ? -1 : 1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, selectedCategory, selectedYear, selectedStatus, searchQuery, sortBy]);

  // Pagination logic for full page
  const totalPages = Math.ceil(filteredAndSortedProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageProjects = filteredAndSortedProjects.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedYear, selectedStatus, searchQuery, sortBy]);

  if (fullPage) {
    return (
      <PageWrapper>
        {/* Page Banner */}
        <div className="relative bg-gradient-to-r from-[#0F5132] to-[#3CB371] text-white py-20 mb-16 animate-fadeIn">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideInUp">Dự án tiêu biểu</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto animate-slideInUp delay-100">
              Hơn 500 dự án thành công trên toàn quốc
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex gap-8">
            <div className="w-80 flex-shrink-0 animate-fadeIn">
              <ProjectFilters
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />
            </div>
            <div className="flex-1">
              {/* Top Controls within the project column */}
              <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 animate-slideInUp">
                <div className="grid md:grid-cols-4 gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      placeholder="Tìm kiếm dự án..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-[#0F5132] bg-white"
                    />
                  </div>

                  {/* Year Filter */}
                  <div>
                    <select
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3CB371] focus:border-[#3CB371] bg-white"
                    >
                      {years.map((year: any) => (
                        <option key={year.id} value={year.id}>
                          {year.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Status Filter */}
                  <div>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6B35] focus:border-[#FF6B35] bg-white"
                    >
                      {statuses.map((status: any) => (
                        <option key={status.id} value={status.id}>
                          {status.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Sort */}
                  <div>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0F5132] focus:border-[#0F5132] bg-white"
                    >
                      <option value="year-desc">Năm giảm dần</option>
                      <option value="year-asc">Năm tăng dần</option>
                      <option value="name-asc">Tên A-Z</option>
                      <option value="name-desc">Tên Z-A</option>
                      <option value="status">Trạng thái</option>
                    </select>
                  </div>
                </div>
              </div>

              <ProjectGrid projects={currentPageProjects} fullPage={true} />

              {totalPages > 1 && (
                <ProjectPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </div>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <section className="py-24 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider animate-slideInUp">
            Dự án
          </span>
          <h2 className="text-4xl font-bold text-[#0F5132] mt-4 mb-6 animate-slideInUp delay-100">
            Dự án tiêu biểu
          </h2>
        </div>
        <ProjectGrid projects={filteredAndSortedProjects.slice(0, 3)} />
      </div>
    </section>
  );
}

function ProjectPagination({ currentPage, totalPages, onPageChange }: any) {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-12 mb-8">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-[#0F5132] hover:bg-[#0F5132] hover:text-white shadow-md hover:shadow-lg'
        }`}
      >
        <ChevronLeft size={16} />
        Trước
      </button>

      {/* Page Numbers */}
      <div className="flex gap-1">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              page === currentPage
                ? 'bg-[#0F5132] text-white shadow-lg'
                : page === '...'
                ? 'bg-transparent text-gray-400 cursor-default'
                : 'bg-white text-[#0F5132] hover:bg-[#0F5132] hover:text-white shadow-md hover:shadow-lg'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next Button */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white text-[#0F5132] hover:bg-[#0F5132] hover:text-white shadow-md hover:shadow-lg'
        }`}
      >
        Sau
        <ChevronRight size={16} />
      </button>
    </div>
  );
}

function ProjectFilters({
  categories,
  selectedCategory,
  setSelectedCategory
}: any) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-8 animate-slideInUp">
      <h3 className="text-lg font-bold text-[#0F5132] mb-6">Theo nhóm</h3>

      <div className="space-y-2">
        {categories.map((category: any, index: number) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all text-sm transform hover:-translate-y-0.5 ${
              selectedCategory === category.id
                ? 'bg-[#0F5132] text-white shadow-md'
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ProjectGrid({ projects, fullPage = false }: any) {
  const navigate = useNavigate();

  const handleProjectClick = (projectId: number) => {
    if (fullPage) {
      navigate(`/projects/${projectId}`);
    }
  };

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center animate-fadeIn">
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
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project: any, index: number) => (
        <div
          key={project.id}
          onClick={() => handleProjectClick(project.id)}
          className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 animate-slideInUp`}
          style={{ animationDelay: `${index * 100}ms` }}
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
          <div className="p-4 flex flex-col justify-between  aspect-[6/3]" >
            <div>
              <h3 className="text-lg font-bold text-[#0F5132] group-hover:text-[#3CB371] transition-colors leading-tight mb-3">
                {project.title}
              </h3>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#3CB371] flex-shrink-0" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-[#3CB371] flex-shrink-0" />
                  <span>{project.year}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
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
                <span className="hidden sm:inline">
                  {project.status === 'completed' ? 'Hoàn thành' : 'Đang thi công'}
                </span>
              </div>

              {fullPage && (
                <button className="text-[#3CB371] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Xem chi tiết
                  <ArrowRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
