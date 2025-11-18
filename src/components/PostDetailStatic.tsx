import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Clock, User, Tag, Eye } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import PageWrapper from './PageWrapper';
import { getNewsById, getRelatedNews } from '../data/newsData';
import { getServiceById, getRelatedServices } from '../data/servicesData';

export default function PostDetailStatic() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  const newsId = parseInt(id || '1');

  // Try to get news item from news data first, then services data
  const newsItem = getNewsById(newsId) || getServiceById(newsId);

  if (!newsItem) {
    return (
      <PageWrapper>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-[#0F5132] mb-4">Không tìm thấy bài viết</h1>
          <p className="text-gray-600 mb-8">Bài viết bạn tìm kiếm không tồn tại hoặc đã bị xóa.</p>
          <button
            onClick={() => navigate('/news')}
            className="bg-[#0F5132] text-white px-6 py-3 rounded-lg hover:bg-[#0F5132]/90 transition-colors"
          >
            Quay lại trang tin tức
          </button>
        </div>
      </PageWrapper>
    );
  }



  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Share functionality
  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = newsItem.title;
    const text = `Đọc bài viết: ${title}`;

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      default:
        navigator.share?.({ title, text, url });
    }
  };

  return (
    <PageWrapper>
      {/* Hero Banner */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `linear-gradient(135deg, rgba(0, 70, 80, 0.9) 0%, rgba(0, 97, 113, 0.85) 100%), url(${newsItem.image})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl px-6 mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#CCEC81]/10 text-[#CCEC81] rounded-full text-sm font-medium mb-6">
            {newsItem.category}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
            {newsItem.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-6">
            {newsItem.excerpt}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          {/* Article Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Article Title - Centered */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#004650] text-center mb-6 leading-tight">
              {newsItem.title}
            </h1>

            {/* Article Excerpt - Centered */}
            <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto leading-relaxed mb-8">
              {newsItem.excerpt}
            </p>

            {/* Article Body - Prose Styling for rest of content */}
            <div
              className="prose max-w-none prose-headings:text-[#004650] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-blockquote:border-[#208BB3] prose-blockquote:text-gray-800 prose-blockquote:bg-[#208BB3]/5 prose-blockquote:p-4 prose-blockquote:rounded-lg"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />

          </div>
        </div>
      </section>

      {/* Section 2: Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004650] mb-6">Khả Năng & Chuyên Môn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Điểm mạnh của chúng tôi trong việc cung cấp thông tin và giải pháp môi trường chất lượng cao
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#208BB3] to-[#CCEC81]"></div>
              <div className="text-5xl mb-6">👥</div>
              <h3 className="text-2xl font-bold text-[#004650] mb-4">Đội Ngũ Chuyên Gia</h3>
              <p className="text-gray-700 leading-relaxed">
                Kỹ sư và chuyên gia giàu kinh nghiệm, am hiểu sâu sắc về pháp lý môi trường và công nghệ xử lý nước thải.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#208BB3] to-[#CCEC81]"></div>
              <div className="text-5xl mb-6">📊</div>
              <h3 className="text-2xl font-bold text-[#004650] mb-4">Quy Trình Trọn Gói</h3>
              <p className="text-gray-700 leading-relaxed">
                Từ nghiên cứu, tư vấn đến triển khai, chúng tôi cam kết hỗ trợ toàn diện mọi khía cạnh của dự án.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#208BB3] to-[#CCEC81]"></div>
              <div className="text-5xl mb-6">💡</div>
              <h3 className="text-2xl font-bold text-[#004650] mb-4">Giải Pháp Sáng Tạo</h3>
              <p className="text-gray-700 leading-relaxed">
                Luôn tìm kiếm và áp dụng các công nghệ tiên tiến, giải pháp hiệu quả nhất cho từng dự án cụ thể.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Related Topics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#004650] mb-6">Dịch Vụ Liên Quan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Khám phá các dịch vụ môi trường chúng tôi cung cấp để hỗ trợ doanh nghiệp của bạn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-[#208BB3]">
              <div className="bg-gradient-to-r from-[#004650] to-[#006171] p-6 text-center text-white">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-2">Đánh Giá Tác Động Môi Trường</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lập báo cáo ĐTM chi tiết cho các dự án đầu tư mới theo quy định hiện hành.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Khảo sát và đánh giá hiện trạng
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Dự báo tác động môi trường
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Đề xuất biện pháp giảm thiểu
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-[#208BB3]">
              <div className="bg-gradient-to-r from-[#004650] to-[#006171] p-6 text-center text-white">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-2xl font-bold mb-2">Giấy Phép Môi Trường</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lập hồ sơ xin cấp và gia hạn GPMT cho các cơ sở sản xuất kinh doanh.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Xin cấp GPMT mới
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Gia hạn và điều chỉnh giấy phép
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Tư vấn tuân thủ điều kiện
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-[#208BB3]">
              <div className="bg-gradient-to-r from-[#004650] to-[#006171] p-6 text-center text-white">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-2">Đánh Giá Tác Động Môi Trường</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lập báo cáo ĐTM chi tiết cho các dự án đầu tư mới theo quy định hiện hành.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Khảo sát và đánh giá hiện trạng
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Dự báo tác động môi trường
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Đề xuất biện pháp giảm thiểu
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-[#208BB3]">
              <div className="bg-gradient-to-r from-[#004650] to-[#006171] p-6 text-center text-white">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-2xl font-bold mb-2">Đánh Giá Tác Động Môi Trường</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Lập báo cáo ĐTM chi tiết cho các dự án đầu tư mới theo quy định hiện hành.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Khảo sát và đánh giá hiện trạng
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Dự báo tác động môi trường
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="text-[#208BB3] mr-3">✓</span> Đề xuất biện pháp giảm thiểu
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Operations & Maintenance */}
      {newsId === 20 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#004650] mb-6">Vận Hành & Bảo Trì (O&M)</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Khám phá dự án thực tế mà chúng tôi đã triển khai và vận hành thành công
              </p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl max-w-4xl mx-auto">
              <div className="relative">
                <iframe
                  className="w-full h-80 md:h-[500px]"
                  src="https://www.youtube.com/embed/zlqW5XguxEE"
                  title="Dự án xử lý nước thải thực tế - VLC Môi Trường"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-75 text-white px-4 py-2 rounded-lg">
                  <h4 className="font-semibold">Dự án Nhà máy xử lý nước thải ABC</h4>
                  <p className="text-sm">Hoàn thành 2022 - Vận hành ổn định với hiệu suất vượt trội</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
}
