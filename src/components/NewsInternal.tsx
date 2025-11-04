import { useState } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from './PageWrapper';

export default function NewsInternal() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const news = [
    {
      id: 1,
      title: 'VLC Group ký kết hợp tác chiến lược với tập đoàn năng lượng quốc tế',
      excerpt: 'Thỏa thuận hợp tác sẽ mở ra cơ hội phát triển các dự án năng lượng tái tạo quy mô lớn...',
      date: '15/03/2024',
      category: 'Đối tác',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 2,
      title: 'Khánh thành nhà máy điện mặt trời 100MW tại Ninh Thuận',
      excerpt: 'Dự án được hoàn thành đúng tiến độ với công nghệ tiên tiến và hiệu suất cao...',
      date: '10/03/2024',
      category: 'Dự án',
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 3,
      title: 'VLC Group nhận chứng nhận ISO 14001:2015 về quản lý môi trường',
      excerpt: 'Cam kết mạnh mẽ trong việc bảo vệ môi trường và phát triển bền vững...',
      date: '05/03/2024',
      category: 'Chứng nhận',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 7,
      title: 'Đầu tư 500 tỷ đồng vào công nghệ xử lý nước thải tiên tiến',
      excerpt: 'VLC Group tiếp tục đầu tư mạnh vào công nghệ xanh, hướng tới mục tiêu phát triển bền vững...',
      date: '28/02/2024',
      category: 'Đầu tư',
      image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 8,
      title: 'Mở rộng thị trường sang Đông Nam Á với dự án năng lượng tái tạo',
      excerpt: 'VLC Group chính thức mở rộng hoạt động kinh doanh sang các nước Đông Nam Á...',
      date: '20/02/2024',
      category: 'Mở rộng',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 9,
      title: 'Hợp tác với Đại học Quốc gia Hà Nội trong nghiên cứu khoa học',
      excerpt: 'Chương trình hợp tác nghiên cứu sẽ tập trung vào các giải pháp công nghệ xanh...',
      date: '15/02/2024',
      category: 'Nghiên cứu',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 10,
      title: 'VLC Group đạt doanh thu kỷ lục trong quý IV/2023',
      excerpt: 'Với doanh thu tăng 35% so với cùng kỳ, VLC Group tiếp tục khẳng định vị thế dẫn đầu...',
      date: '10/02/2024',
      category: 'Tài chính',
      image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 11,
      title: 'Triển khai hệ thống quản lý chất lượng ISO 9001:2015',
      excerpt: 'VLC Group hoàn thành triển khai hệ thống quản lý chất lượng trên toàn bộ các đơn vị...',
      date: '05/02/2024',
      category: 'Chất lượng',
      image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: 12,
      title: 'Khởi công dự án nhà máy điện gió ngoài khơi 200MW',
      excerpt: 'Dự án được kỳ vọng sẽ đóng góp đáng kể vào lưới điện quốc gia trong tương lai...',
      date: '01/02/2024',
      category: 'Dự án',
      image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(news.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageNews = news.slice(startIndex, endIndex);

  const [featured, ...rest] = currentPageNews;

  return (
    <div className="pt-32 pb-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center my-16">
          <h2 className="text-5xl font-bold text-[#0F5132] mb-4 animate-slideInUp">Tin Nội Bộ</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slideInUp delay-100">
            Cập nhật những hoạt động và thành tựu nội bộ của VLC Group
          </p>
        </div>

        <div className="space-y-8 animate-fadeIn">
          <div
            className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow animate-slideInUp"
            onClick={() => window.location.href = `/news/${featured.id}`}
          >
            <div className="aspect-[4/3]">
              <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-12">
              <div className="flex items-center gap-4 mb-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                <span className="px-3 py-1 bg-[#3CB371]/10 text-[#3CB371] rounded-full text-sm font-medium">
                  {featured.category}
                </span>
                <span className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  {featured.date}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-[#0F5132] mb-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>{featured.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.7s' }}>{featured.excerpt}</p>
              <button className="text-[#3CB371] font-semibold flex items-center gap-2 hover:gap-3 transition-all animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                Đọc thêm
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((item: any, index: number) => (
              <NewsCard key={item.id} news={item} index={index} />
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}

function NewsCard({ news, index = 0 }: any) {
  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-slideInUp"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => window.location.href = `/news/${news.id}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#0F5132] animate-fadeIn" style={{ animationDelay: `${index * 100 + 200}ms` }}>
            {news.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 animate-fadeIn" style={{ animationDelay: `${index * 100 + 300}ms` }}>
          <Calendar size={16} className="text-[#3CB371]" />
          {news.date}
        </div>
        <h3 className="text-lg font-bold text-[#0F5132] mb-2 line-clamp-2 group-hover:text-[#3CB371] transition-colors animate-fadeIn" style={{ animationDelay: `${index * 100 + 400}ms` }}>
          {news.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 animate-fadeIn" style={{ animationDelay: `${index * 100 + 500}ms` }}>{news.excerpt}</p>
        <button className="text-[#3CB371] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all animate-fadeIn" style={{ animationDelay: `${index * 100 + 600}ms` }}>
          Đọc thêm
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }: any) {
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
