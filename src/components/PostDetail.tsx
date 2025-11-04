import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Clock, User, Tag, BookOpen, Eye, ChevronRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import PageWrapper from './PageWrapper';
import { getNewsById, getRelatedNews } from '../data/newsData';
import { getServiceById, getRelatedServices } from '../data/servicesData';

interface PostDetailProps {
  showSidebar?: boolean;
}

export default function PostDetail({ showSidebar = true }: PostDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);

  const newsId = parseInt(id || '1');
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

  const relatedNewsItems = getRelatedNews(newsId, newsItem.relatedNews) || getRelatedServices(newsId, newsItem.relatedNews) || [];

  // Table of contents effects
  useEffect(() => {
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

      <div className={`${showSidebar ? 'max-w-7xl' : 'max-w-4xl'} mx-auto px-6 py-8`}>

        {/* Main Article */}
        <div className={`grid ${showSidebar ? 'lg:grid-cols-3' : ''} gap-12`}>
          {/* Article Content */}
          <div className={`${showSidebar ? 'lg:col-span-2' : ''}`}>
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
          {showSidebar && (
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
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
