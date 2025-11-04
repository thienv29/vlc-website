import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Clock, User, Tag, BookOpen, Eye, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import PageWrapper from './PageWrapper';

export default function NewsDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);



  // Mock news data - in a real app, this would come from an API
  const allNews = [
    {
      id: 1,
      title: 'VLC Group ký kết hợp tác chiến lược với tập đoàn năng lượng quốc tế',
      excerpt: 'Thỏa thuận hợp tác sẽ mở ra cơ hội phát triển các dự án năng lượng tái tạo quy mô lớn...',
      date: '15/03/2024',
      category: 'Đối tác',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Bộ phận Truyền thông VLC Group',
      readTime: '5 phút đọc',
      content: `
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          VLC Group vừa chính thức ký kết thỏa thuận hợp tác chiến lược với một tập đoàn năng lượng quốc tế hàng đầu.
          Thỏa thuận này đánh dấu bước ngoặt quan trọng trong chiến lược phát triển bền vững của công ty.
        </p>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Nội dung hợp tác</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Hai bên cam kết hợp tác trong các lĩnh vực:
        </p>
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Phát triển các dự án năng lượng tái tạo quy mô lớn</li>
          <li>Chuyển giao công nghệ xử lý nước thải tiên tiến</li>
          <li>Đào tạo và phát triển nguồn nhân lực</li>
          <li>Nghiên cứu chung về các giải pháp môi trường bền vững</li>
        </ul>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Tầm quan trọng của thỏa thuận</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Ông Nguyễn Văn A, Tổng Giám đốc VLC Group, chia sẻ: "Đây là cơ hội tuyệt vời để chúng tôi tiếp cận với
          công nghệ tiên tiến nhất trên thế giới và đóng góp nhiều hơn nữa cho sự nghiệp bảo vệ môi trường Việt Nam."
        </p>

        <blockquote className="border-l-4 border-[#3CB371] pl-6 py-4 my-8 bg-[#3CB371]/5 rounded-r-lg">
          <p className="text-lg italic text-gray-800">
            "Hợp tác này không chỉ mang lại lợi ích kinh tế mà còn góp phần bảo vệ môi trường và phát triển bền vững."
          </p>
          <cite className="text-[#3CB371] font-semibold mt-2 block">- Ông Nguyễn Văn A, Tổng Giám đốc VLC Group</cite>
        </blockquote>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Kế hoạch triển khai</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Thỏa thuận sẽ được triển khai theo giai đoạn với mục tiêu cụ thể:
        </p>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3CB371]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-[#3CB371]">1</span>
              </div>
              <h3 className="font-semibold text-[#0F5132] mb-2">Giai đoạn 1</h3>
              <p className="text-sm text-gray-600">2024-2025: Chuyển giao công nghệ</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3CB371]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-[#3CB371]">2</span>
              </div>
              <h3 className="font-semibold text-[#0F5132] mb-2">Giai đoạn 2</h3>
              <p className="text-sm text-gray-600">2025-2027: Triển khai dự án chung</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3CB371]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-[#3CB371]">3</span>
              </div>
              <h3 className="font-semibold text-[#0F5132] mb-2">Giai đoạn 3</h3>
              <p className="text-sm text-gray-600">2027+: Mở rộng hợp tác</p>
            </div>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed">
          VLC Group cam kết sẽ nỗ lực hết mình để thực hiện thành công thỏa thuận hợp tác này,
          đóng góp tích cực cho sự nghiệp bảo vệ môi trường và phát triển bền vững của Việt Nam.
        </p>
      `,
      tags: ['Hợp tác', 'Năng lượng tái tạo', 'Công nghệ', 'Môi trường'],
      relatedNews: [2, 3, 4]
    },
    {
      id: 2,
      title: 'Khánh thành nhà máy điện mặt trời 100MW tại Ninh Thuận',
      excerpt: 'Dự án được hoàn thành đúng tiến độ với công nghệ tiên tiến và hiệu suất cao...',
      date: '10/03/2024',
      category: 'Dự án',
      image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Phòng Kỹ thuật VLC Group',
      readTime: '4 phút đọc',
      content: `
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Sau 18 tháng thi công, VLC Group đã chính thức khánh thành nhà máy điện mặt trời 100MW tại Ninh Thuận.
          Đây là một trong những dự án năng lượng tái tạo quy mô lớn nhất mà công ty đã thực hiện.
        </p>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Quy mô và công nghệ</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Nhà máy sử dụng công nghệ tấm pin mặt trời thế hệ mới nhất với hiệu suất chuyển đổi lên đến 22%.
          Tổng công suất lắp đặt đạt 100MW, đủ cung cấp điện cho khoảng 50.000 hộ gia đình.
        </p>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Tác động kinh tế</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Dự án tạo ra hơn 200 việc làm trực tiếp và hàng nghìn việc làm gián tiếp trong khu vực.
          Ngoài ra, nhà máy còn góp phần giảm phát thải CO2 khoảng 150.000 tấn mỗi năm.
        </p>
      `,
      tags: ['Điện mặt trời', 'Năng lượng tái tạo', 'Ninh Thuận'],
      relatedNews: [1, 3, 5]
    },
    {
      id: 3,
      title: 'VLC Group nhận chứng nhận ISO 14001:2015 về quản lý môi trường',
      excerpt: 'Cam kết mạnh mẽ trong việc bảo vệ môi trường và phát triển bền vững...',
      date: '05/03/2024',
      category: 'Chứng nhận',
      image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Bộ phận Chất lượng VLC Group',
      readTime: '3 phút đọc',
      content: `
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          VLC Group vinh dự nhận chứng nhận ISO 14001:2015 về hệ thống quản lý môi trường,
          khẳng định cam kết mạnh mẽ của công ty trong việc bảo vệ môi trường.
        </p>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Ý nghĩa của chứng nhận</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Chứng nhận ISO 14001:2015 là tiêu chuẩn quốc tế về hệ thống quản lý môi trường,
          chứng minh khả năng của tổ chức trong việc quản lý tác động môi trường một cách có hệ thống.
        </p>
      `,
      tags: ['ISO 14001', 'Quản lý môi trường', 'Chứng nhận'],
      relatedNews: [1, 2, 6]
    },
    {
      id: 4,
      title: 'Trao tặng 1000 suất học bổng cho học sinh vượt khó',
      excerpt: 'Chương trình "Sáng tỏ tương lai" đã trao học bổng cho học sinh xuất sắc tại 10 tỉnh thành...',
      date: '12/03/2024',
      category: 'Giáo dục',
      image: 'https://images.pexels.com/photos/8197525/pexels-photo-8197525.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Phòng Nhân sự VLC Group',
      readTime: '4 phút đọc',
      content: `
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Trong khuôn khổ chương trình "Sáng tỏ tương lai", VLC Group đã trao tặng 1000 suất học bổng
          cho học sinh vượt khó trên toàn quốc.
        </p>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Tiêu chí xét chọn</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Học sinh được xét chọn dựa trên các tiêu chí: thành tích học tập, hoàn cảnh gia đình khó khăn,
          và tinh thần vượt khó vươn lên trong học tập.
        </p>
      `,
      tags: ['Học bổng', 'Giáo dục', 'Trách nhiệm xã hội'],
      relatedNews: [5, 6]
    },
    {
      id: 5,
      title: 'Chiến dịch trồng 10,000 cây xanh tại miền Trung',
      excerpt: 'Hưởng ứng chiến dịch "Vì một Việt Nam xanh", VLC Group cùng cộng đồng trồng cây...',
      date: '08/03/2024',
      category: 'Môi trường',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Bộ phận Trách nhiệm Xã hội VLC Group',
      readTime: '3 phút đọc',
      content: `
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          VLC Group đã phối hợp với chính quyền địa phương và cộng đồng trồng 10.000 cây xanh
          tại các tỉnh miền Trung Việt Nam.
        </p>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Các loại cây trồng</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Chương trình tập trung trồng các loại cây bản địa có khả năng chịu hạn tốt như:
          keo lai, bạch đàn, và các loại cây ăn quả lâu năm.
        </p>
      `,
      tags: ['Trồng cây', 'Môi trường', 'Miền Trung'],
      relatedNews: [4, 6]
    },
    {
      id: 6,
      title: 'Khám bệnh miễn phí cho 2000 người dân vùng cao',
      excerpt: 'Đoàn y bác sĩ VLC Group đã mang y tế đến với đồng bào các dân tộc thiểu số...',
      date: '01/03/2024',
      category: 'Y tế',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Bộ phận Y tế VLC Group',
      readTime: '4 phút đọc',
      content: `
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Đoàn y bác sĩ của VLC Group đã tổ chức chương trình khám bệnh miễn phí cho 2000 người dân
          tại các vùng cao của tỉnh Hà Giang và Tuyên Quang.
        </p>

        <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Dịch vụ y tế cung cấp</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Chương trình cung cấp các dịch vụ khám chữa bệnh cơ bản, tư vấn sức khỏe,
          và cấp phát thuốc miễn phí cho người dân.
        </p>
      `,
      tags: ['Y tế', 'Vùng cao', 'Trách nhiệm xã hội'],
      relatedNews: [4, 5]
    }
  ];

  const newsItem = allNews.find(item => item.id === parseInt(id || '1'));

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

  const relatedNewsItems = allNews.filter(item => newsItem.relatedNews.includes(item.id));

  // Reading progress and table of contents effects
  useEffect(() => {
    const handleScroll = () => {
      if (!articleRef.current) return;

      const article = articleRef.current;
      const scrollTop = window.scrollY;
      const articleTop = article.offsetTop;
      const articleHeight = article.offsetHeight;
      const windowHeight = window.innerHeight;

      const scrollProgress = Math.min(
        Math.max((scrollTop - articleTop + windowHeight) / (articleHeight + windowHeight), 0),
        1
      );
      setReadingProgress(scrollProgress * 100);
    };

    const generateTableOfContents = () => {
      if (!articleRef.current) return;

      const headings = articleRef.current.querySelectorAll('h2');
      const toc = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
          id,
          text: heading.textContent || '',
          level: 2
        };
      });
      setTableOfContents(toc);
    };

    // Generate TOC after content is rendered
    setTimeout(generateTableOfContents, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Approximate header height
      const elementPosition = element.offsetTop - headerHeight - 20; // Extra padding

      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <PageWrapper>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div
          className="h-full bg-[#3CB371] transition-all duration-150 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Compact Header */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Back Button */}
            <button
              onClick={() => navigate('/news')}
              className="flex items-center gap-2 text-[#0F5132] hover:text-[#3CB371] transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Quay lại tin tức</span>
            </button>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden sm:inline">Chia sẻ:</span>
              <div className="flex gap-2">
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-8 h-8 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-[#1877F2]/90 transition-colors"
                  title="Chia sẻ trên Facebook"
                >
                  <Facebook size={16} />
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-8 h-8 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:bg-[#1DA1F2]/90 transition-colors"
                  title="Chia sẻ trên Twitter"
                >
                  <Twitter size={16} />
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-8 h-8 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:bg-[#0077B5]/90 transition-colors"
                  title="Chia sẻ trên LinkedIn"
                >
                  <Linkedin size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* Main Article */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Article Content */}
          <div className="lg:col-span-2">
            <article
              ref={articleRef}
              className={`bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Article Header */}
              <div className="relative">
                <img
                  src={newsItem.image}
                  alt={newsItem.title}
                  className="w-full h-80 md:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-[#0F5132]">
                    {newsItem.category}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-12">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#3CB371]" />
                    <span>{newsItem.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-[#3CB371]" />
                    <span>{newsItem.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-[#3CB371]" />
                    <span>{newsItem.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={16} className="text-[#3CB371]" />
                    <span>{Math.floor(Math.random() * 1000) + 100} lượt xem</span>
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F5132] mb-8 leading-tight">
                  {newsItem.title}
                </h1>

                {/* Article Excerpt */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                  {newsItem.excerpt}
                </p>

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-[#0F5132] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-blockquote:border-[#3CB371] prose-blockquote:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />

                {/* Article Tags */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <Tag size={18} className="text-[#3CB371]" />
                    <span className="text-sm font-medium text-gray-700">Tags:</span>
                    {newsItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#3CB371]/10 text-[#3CB371] rounded-full text-sm font-medium hover:bg-[#3CB371]/20 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Share2 size={16} />
                      Chia sẻ:
                    </span>
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleShare('facebook')}
                        className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-[#1877F2]/90 transition-colors"
                        title="Chia sẻ trên Facebook"
                      >
                        <Facebook size={18} />
                      </button>
                      <button
                        onClick={() => handleShare('twitter')}
                        className="w-10 h-10 bg-[#1DA1F2] text-white rounded-full flex items-center justify-center hover:bg-[#1DA1F2]/90 transition-colors"
                        title="Chia sẻ trên Twitter"
                      >
                        <Twitter size={18} />
                      </button>
                      <button
                        onClick={() => handleShare('linkedin')}
                        className="w-10 h-10 bg-[#0077B5] text-white rounded-full flex items-center justify-center hover:bg-[#0077B5]/90 transition-colors"
                        title="Chia sẻ trên LinkedIn"
                      >
                        <Linkedin size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter Signup */}
            <div className="bg-[#3CB371]/5 rounded-2xl p-6 border border-[#3CB371]/20">
              <h3 className="text-lg font-bold text-[#0F5132] mb-3">Đăng ký nhận tin</h3>
              <p className="text-sm text-gray-600 mb-4">
                Nhận những tin tức mới nhất về VLC Group và các dự án của chúng tôi.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3CB371] focus:border-transparent"
                />
                <button className="w-full bg-[#3CB371] text-white py-2 rounded-lg hover:bg-[#3CB371]/90 transition-colors font-medium">
                  Đăng ký
                </button>
              </div>
            </div>

            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-lg font-bold text-[#0F5132] mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-[#3CB371]" />
                  Mục lục
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-[#3CB371] hover:bg-[#3CB371]/5 rounded-lg transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight size={14} className="text-[#3CB371] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="line-clamp-2">{item.text}</span>
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Related News */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-[#0F5132] mb-6">Tin tức liên quan</h3>
              <div className="space-y-4">
                {relatedNewsItems.map((relatedItem) => (
                  <div
                    key={relatedItem.id}
                    onClick={() => navigate(`/news/${relatedItem.id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={relatedItem.image}
                          alt={relatedItem.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-[#0F5132] group-hover:text-[#3CB371] transition-colors line-clamp-2 mb-2">
                          {relatedItem.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Calendar size={12} />
                          <span>{relatedItem.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
