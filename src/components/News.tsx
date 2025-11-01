import { useState } from 'react';
import { Calendar, ArrowRight, TrendingUp } from 'lucide-react';

interface NewsProps {
  fullPage?: boolean;
}

export default function News({ fullPage = false }: NewsProps) {
  const [activeTab, setActiveTab] = useState('company');

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
    ],
  };

  const currentNews = activeTab === 'company' ? news.company : news.community;
  const displayNews = fullPage ? currentNews : currentNews.slice(0, 3);

  if (fullPage) {
    return (
      <div className="pt-32 pb-20 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1E2A78] mb-4">Tin tức & Sự kiện</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cập nhật những hoạt động mới nhất của VLC Group
            </p>
          </div>
          <NewsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <NewsGrid news={displayNews} />
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
            <h2 className="text-4xl font-bold text-[#1E2A78] mt-4">
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
            ? 'bg-[#1E2A78] text-white shadow-lg'
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
      <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden shadow-xl">
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
          <h3 className="text-3xl font-bold text-[#1E2A78] mb-4">{featured.title}</h3>
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
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={news.image}
          alt={news.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-[#1E2A78]">
            {news.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
          <Calendar size={16} className="text-[#3CB371]" />
          {news.date}
        </div>
        <h3 className="text-lg font-bold text-[#1E2A78] mb-2 line-clamp-2 group-hover:text-[#3CB371] transition-colors">
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
