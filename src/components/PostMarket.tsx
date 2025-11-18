import { useState } from 'react';
import { Calendar, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getMarketNews } from '../data/newsData';

// Tabs component để chuyển đổi giữa các loại tin
function NewsTabs({ activeTab }: { activeTab: string }) {
  const navigate = useNavigate();
  
  return (
    <div className="flex gap-4 mb-12 justify-center animate-fadeIn flex-wrap">
      <button
        onClick={() => navigate('/news/internal')}
        className={`px-8 py-3 rounded-full font-semibold transition-all ${
          activeTab === 'internal'
            ? 'bg-[#0F5132] text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Tin công ty
      </button>
      <button
        onClick={() => navigate('/news/community')}
        className={`px-8 py-3 rounded-full font-semibold transition-all ${
          activeTab === 'community'
            ? 'bg-[#3CB371] text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Tin cộng đồng
      </button>
      <button
        onClick={() => navigate('/news/market')}
        className={`px-8 py-3 rounded-full font-semibold transition-all ${
          activeTab === 'market'
            ? 'bg-[#2563EB] text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Tin thị trường
      </button>
    </div>
  );
}

export default function NewsMarket() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const news = getMarketNews();

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
          <h2 className="text-5xl font-bold text-[#0F5132] mb-4 animate-slideInUp">Tin Thị Trường</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slideInUp delay-100">
            Cập nhật xu hướng và tin tức thị trường năng lượng & môi trường
          </p>
        </div>

        {/* Tabs để chuyển đổi giữa các loại tin */}
        <NewsTabs activeTab="market" />

        <div className="space-y-8 animate-fadeIn">
          {featured && (
            <div
              className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow animate-slideInUp"
              onClick={() => navigate(`/news/${featured.id}`)}
            >
              <div className="aspect-[4/3]">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-12">
                <div className="flex items-center gap-4 mb-4 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
                  <span className="px-3 py-1 bg-[#2563EB]/10 text-[#2563EB] rounded-full text-sm font-medium">
                    {featured.category}
                  </span>
                  <span className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} />
                    {featured.date}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#0F5132] mb-4 animate-fadeIn" style={{ animationDelay: '0.5s' }}>{featured.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.7s' }}>{featured.excerpt}</p>
                <button className="text-[#2563EB] font-semibold flex items-center gap-2 hover:gap-3 transition-all animate-fadeIn" style={{ animationDelay: '0.9s' }}>
                  Đọc thêm
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          )}

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
  const navigate = useNavigate();

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-slideInUp"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => navigate(`/news/${news.id}`)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#2563EB] animate-fadeIn" style={{ animationDelay: `${index * 100 + 200}ms` }}>
            {news.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3 animate-fadeIn" style={{ animationDelay: `${index * 100 + 300}ms` }}>
          <Calendar size={16} className="text-[#2563EB]" />
          {news.date}
        </div>
        <h3 className="text-lg font-bold text-[#0F5132] mb-2 line-clamp-2 group-hover:text-[#2563EB] transition-colors animate-fadeIn" style={{ animationDelay: `${index * 100 + 400}ms` }}>
          {news.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 animate-fadeIn" style={{ animationDelay: `${index * 100 + 500}ms` }}>{news.excerpt}</p>
        <button className="text-[#2563EB] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all animate-fadeIn" style={{ animationDelay: `${index * 100 + 600}ms` }}>
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

      <div className="flex gap-1">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && onPageChange(page)}
            disabled={page === '...'}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              page === currentPage
                ? 'bg-[#2563EB] text-white shadow-lg'
                : page === '...'
                ? 'bg-transparent text-gray-400 cursor-default'
                : 'bg-white text-[#0F5132] hover:bg-[#2563EB] hover:text-white shadow-md hover:shadow-lg'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

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
