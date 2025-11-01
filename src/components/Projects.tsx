import { useState } from 'react';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';

interface ProjectsProps {
  fullPage?: boolean;
}

export default function Projects({ fullPage = false }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'energy', label: 'Năng lượng' },
    { id: 'industrial', label: 'Công nghiệp' },
    { id: 'infrastructure', label: 'Hạ tầng' },
    { id: 'environment', label: 'Môi trường' },
  ];

  const regions = [
    { id: 'all', label: 'Toàn quốc' },
    { id: 'north', label: 'Miền Bắc' },
    { id: 'central', label: 'Miền Trung' },
    { id: 'south', label: 'Miền Nam' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Nhà máy điện mặt trời 50MW',
      category: 'energy',
      region: 'south',
      location: 'Ninh Thuận',
      year: '2023',
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Solar', 'EPC'],
    },
    {
      id: 2,
      title: 'Nhà máy sản xuất linh kiện điện tử',
      category: 'industrial',
      region: 'north',
      location: 'Bắc Ninh',
      year: '2023',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Industrial', 'Clean Room'],
    },
    {
      id: 3,
      title: 'Hệ thống xử lý nước thải KCN',
      category: 'environment',
      region: 'south',
      location: 'Đồng Nai',
      year: '2024',
      image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Wastewater', 'Green Tech'],
    },
    {
      id: 4,
      title: 'Trạm biến áp 220kV',
      category: 'infrastructure',
      region: 'central',
      location: 'Đà Nẵng',
      year: '2022',
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Power Grid', 'Infrastructure'],
    },
    {
      id: 5,
      title: 'Nhà máy phong điện 100MW',
      category: 'energy',
      region: 'central',
      location: 'Quảng Trị',
      year: '2023',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Wind', 'Renewable'],
    },
    {
      id: 6,
      title: 'Nhà máy sản xuất thực phẩm',
      category: 'industrial',
      region: 'south',
      location: 'TP.HCM',
      year: '2024',
      image: 'https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['Food Processing', 'HACCP'],
    },
  ];

  const filteredProjects = projects.filter(
    (project) =>
      (selectedFilter === 'all' || project.category === selectedFilter) &&
      (selectedRegion === 'all' || project.region === selectedRegion)
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
          <ProjectFilters
            filters={filters}
            regions={regions}
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
          <ProjectGrid projects={filteredProjects} />
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

function ProjectFilters({ filters, regions, selectedFilter, setSelectedFilter, selectedRegion, setSelectedRegion }: any) {
  return (
    <div className="mb-12 space-y-6">
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Lĩnh vực:</p>
        <div className="flex flex-wrap gap-3">
          {filters.map((filter: any) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === filter.id
                  ? 'bg-[#1E2A78] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-700 mb-3">Khu vực:</p>
        <div className="flex flex-wrap gap-3">
          {regions.map((region: any) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedRegion === region.id
                  ? 'bg-[#3CB371] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {region.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectGrid({ projects }: any) {
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
            <h3 className="text-xl font-bold text-[#1E2A78] mb-3 group-hover:text-[#3CB371] transition-colors">
              {project.title}
            </h3>
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
