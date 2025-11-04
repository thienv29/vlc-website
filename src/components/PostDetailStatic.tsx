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
      {/* Clean Static Page Layout */}
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 py-16">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#3CB371]/10 text-[#3CB371] rounded-full text-sm font-medium mb-6">
              {newsItem.category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F5132] mb-6 leading-tight">
              {newsItem.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {newsItem.excerpt}
            </p>
          </div>

          {/* Hero Image */}
          <div className="mb-12">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl">
            {/* Article Content */}
            <div
              className="prose prose-xl max-w-none prose-headings:text-[#0F5132] prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-blockquote:border-[#3CB371] prose-blockquote:text-gray-800 prose-blockquote:bg-[#3CB371]/5 prose-blockquote:p-6 prose-blockquote:rounded-lg"
              dangerouslySetInnerHTML={{ __html: newsItem.content }}
            />

            {/* Article Meta */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-6">
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
                </div>

                {/* Share Buttons */}
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium text-gray-700">Chia sẻ:</span>
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

              {/* Tags */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Tag size={18} className="text-[#3CB371]" />
                <span className="text-sm font-medium text-gray-700">Tags:</span>
                {newsItem.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#3CB371]/10 text-[#3CB371] rounded-full text-sm font-medium hover:bg-[#3CB371]/20 transition-colors cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back Navigation */}
          <div className="text-center mt-12">
            <button
              onClick={() => {
                // Check if this is a service or news item based on the ID
                const isService = newsItem && newsItem.id >= 19 && newsItem.id <= 22;
                navigate(isService ? '/services' : '/news');
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F5132] text-white rounded-xl font-semibold hover:bg-[#0F5132]/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft size={20} />
              {newsItem && newsItem.id >= 19 && newsItem.id <= 22 ? 'Quay lại trang dịch vụ' : 'Quay lại trang tin tức'}
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
