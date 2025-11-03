import { useState } from 'react';
import { Calendar, ArrowRight, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from './PageWrapper';

interface NewsProps {
  fullPage?: boolean;
}

export default function News({ fullPage = false }: NewsProps) {
  const [activeTab, setActiveTab] = useState('company');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const news = {
    company: [
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
    ],
    community: [
      {
        id: 4,
        title: 'Trao tặng 1000 suất học bổng cho học sinh vượt khó',
        excerpt: 'Chương trình "Sáng tỏ tương lai" đã trao học bổng cho học sinh xuất sắc tại 10 tỉnh thành...',
        date: '12/03/2024',
        category: 'Giáo dục',
        image: 'https://images.pexels.com/photos/8197525/pexels-photo-8197525.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 5,
        title: 'Chiến dịch trồng 10,000 cây xanh tại miền Trung',
        excerpt: 'Hưởng ứng chiến dịch "Vì một Việt Nam xanh", VLC Group cùng cộng đồng trồng cây...',
        date: '08/03/2024',
        category: 'Môi trường',
        image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 6,
        title: 'Khám bệnh miễn phí cho 2000 người dân vùng cao',
        excerpt: 'Đoàn y bác sĩ VLC Group đã mang y tế đến với đồng bào các dân tộc thiểu số...',
        date: '01/03/2024',
        category: 'Y tế',
        image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 13,
        title: 'Chương trình "Nâng bước em tới trường" tại vùng sâu vùng xa',
        excerpt: 'VLC Group phối hợp với địa phương xây dựng 50 phòng học cho các trường tiểu học...',
        date: '25/02/2024',
        category: 'Giáo dục',
        image: 'https://images.pexels.com/photos/8197526/pexels-photo-8197526.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 14,
        title: 'Hỗ trợ xây dựng 20 giếng khoan nước sạch cho vùng khô hạn',
        excerpt: 'Giải quyết vấn đề thiếu nước sinh hoạt cho hơn 5000 hộ dân tại các tỉnh miền Trung...',
        date: '20/02/2024',
        category: 'Nước sạch',
        image: 'https://images.pexels.com/photos/1072825/pexels-photo-1072825.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 15,
        title: 'Đào tạo nghề miễn phí cho 500 thanh niên nông thôn',
        excerpt: 'Chương trình đào tạo kỹ năng nghề nghiệp nhằm tạo cơ hội việc làm bền vững...',
        date: '15/02/2024',
        category: 'Đào tạo',
        image: 'https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 16,
        title: 'Xây dựng trung tâm y tế tại huyện nghèo',
        excerpt: 'Trung tâm y tế hiện đại với đầy đủ trang thiết bị khám chữa bệnh...',
        date: '10/02/2024',
        category: 'Y tế',
        image: 'https://images.pexels.com/photos/7579832/pexels-photo-7579832.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 17,
        title: 'Phát triển mô hình nông nghiệp sạch tại các tỉnh phía Bắc',
        excerpt: 'Hỗ trợ nông dân chuyển đổi sang phương thức canh tác bền vững và thân thiện môi trường...',
        date: '05/02/2024',
        category: 'Nông nghiệp',
        image: 'https://images.pexels.com/photos/1072826/pexels-photo-1072826.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
      {
        id: 18,
        title: 'Chương trình bảo vệ động vật hoang dã quý hiếm',
        excerpt: 'Hợp tác với các tổ chức quốc tế bảo tồn đa dạng sinh học Việt Nam...',
        date: '01/02/2024',
        category: 'Môi trường',
        image: 'https://images.pexels.com/photos/1072827/pexels-photo-1072827.jpeg?auto=compress&cs=tinysrgb&w=800',
      },
    ],
  };

  const currentNews = activeTab === 'company' ? news.company : news.community;

  // Pagination logic for full page
  const totalPages = Math.ceil(currentNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageNews = currentNews.slice(startIndex, endIndex);

  const displayNews = fullPage ? currentPageNews : currentNews.slice(0, 3);

  // Reset to page 1 when switching tabs
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  if (fullPage) {
    return (
       <div className="pt-32 pb-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center my-16">
            <h2 className="text-5xl font-bold text-[#0F5132] mb-4">Tin tức & Sự kiện</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cập nhật những hoạt động mới nhất của VLC Group
            </p>
          </div>
          <NewsTabs activeTab={activeTab} setActiveTab={handleTabChange} />
          <NewsGrid news={displayNews} />
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

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider">
              Tin tức
            </span>
            <h2 className="text-4xl font-bold text-[#0F5132] mt-4">
              Hoạt động nổi bật
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[#3CB371] font-semibold hover:gap-3 transition-all">
            Xem tất cả
            <ArrowRight size={20} />
          </button>
        </div>
        <NewsGrid news={displayNews} compact />
      </div>
    </section>
  );
}

function NewsTabs({ activeTab, setActiveTab }: any) {
  return (
    <div className="flex gap-4 mb-12 justify-center">
      <button
        onClick={() => setActiveTab('company')}
        className={`px-8 py-3 rounded-full font-semibold transition-all ${
          activeTab === 'company'
            ? 'bg-[#0F5132] text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Tin công ty
      </button>
      <button
        onClick={() => setActiveTab('community')}
        className={`px-8 py-3 rounded-full font-semibold transition-all ${
          activeTab === 'community'
            ? 'bg-[#3CB371] text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-50'
        }`}
      >
        Tin cộng đồng
      </button>
    </div>
  );
}

function NewsGrid({ news, compact = false }: any) {
  const navigate = useNavigate();

  if (compact) {
    return (
      <div className="grid md:grid-cols-3 gap-8">
        {news.map((item: any) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    );
  }

  const [featured, ...rest] = news;

  return (
    <div className="space-y-8">
      <div
        className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl cursor-pointer hover:shadow-2xl transition-shadow"
        onClick={() => navigate(`/news/${featured.id}`)}
      >
        <div className="aspect-[4/3]">
          <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-12">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 bg-[#3CB371]/10 text-[#3CB371] rounded-full text-sm font-medium">
              {featured.category}
            </span>
            <span className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar size={16} />
              {featured.date}
            </span>
          </div>
          <h3 className="text-3xl font-bold text-[#0F5132] mb-4">{featured.title}</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">{featured.excerpt}</p>
          <button className="text-[#3CB371] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
            Đọc thêm
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {rest.map((item: any) => (
          <NewsCard key={item.id} news={item} />
        ))}
      </div>
    </div>
  );
}

function NewsCard({ news }: any) {
  const navigate = useNavigate();

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
      onClick={() => navigate(`/news/${news.id}`)}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#0F5132]">
            {news.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <Calendar size={16} className="text-[#3CB371]" />
          {news.date}
        </div>
        <h3 className="text-lg font-bold text-[#0F5132] mb-2 line-clamp-2 group-hover:text-[#3CB371] transition-colors">
          {news.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{news.excerpt}</p>
        <button className="text-[#3CB371] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
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
