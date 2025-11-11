import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Clock, User, Tag, BookOpen, Eye, ChevronRight, Package, Settings, Star, CheckCircle, DollarSign } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import PageWrapper from './PageWrapper';
import { getProductById, getRelatedProducts } from '../data/productsData';

export default function ProductDetail() {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);
  const [tableOfContents, setTableOfContents] = useState<{ id: string; text: string; level: number }[]>([]);

  const productId = parseInt(id || '101');
  const product = getProductById(productId);

  if (!product) {
    return (
      <PageWrapper>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-600 mb-4">{t('products.productNotFound')}</h1>
          <p className="text-gray-600 mb-8">{t('products.productNotFoundDesc')}</p>
          <button
            onClick={() => navigate('/products')}
            className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-600/90 transition-colors"
          >
            {t('products.backToList')}
          </button>
        </div>
      </PageWrapper>
    );
  }

  const relatedProducts = getRelatedProducts(productId, product.relatedProducts);

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
    const title = product.title;
    const text = `Xem sản phẩm: ${title}`;

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
              onClick={() => navigate('/products')}
              className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">{t('products.backToProducts')}</span>
            </button>

            {/* Share Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600 hidden sm:inline">{t('products.share')}:</span>
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
        <div className="grid lg:grid-cols-3 gap-8">
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
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 md:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-6 left-6 flex gap-3">
                  <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-semibold text-primary-600">
                    {product.category}
                  </span>
                  {product.price && (
                    <span className="px-4 py-2 bg-accent-500 text-white rounded-full text-sm font-semibold">
                      {product.price}
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-12">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm text-gray-600 mb-8 pb-8 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-primary-500" />
                    <span>{product.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-primary-500" />
                    <span>{product.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className="text-primary-500" />
                    <span>{product.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={16} className="text-primary-500" />
                    <span>{Math.floor(Math.random() * 1000) + 100} views</span>
                  </div>
                </div>

                {/* Article Title */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                  {product.title}
                </h1>

                {/* Article Excerpt */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                  {product.excerpt}
                </p>

                {/* Product Specifications */}
                {product.specifications && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Settings className="text-primary-600" />
                      {t('products.specifications')}
                    </h2>
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        {Object.entries(product.specifications).map(([key, value], index) => (
                          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                            <span className="font-medium text-gray-700">{key}:</span>
                            <span className="text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Product Features */}
                {product.features && product.features.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                      <Star className="text-primary-600" />
                      {t('products.features')}
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg">
                          <CheckCircle className="text-accent-600 mt-1 flex-shrink-0" size={20} />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-blockquote:border-primary-500 prose-blockquote:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: product.content }}
                />

                {/* Product Tags */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <Tag size={18} className="text-primary-600" />
                    <span className="text-sm font-medium text-gray-700">Tags:</span>
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium hover:bg-primary-200 transition-colors cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <button className="flex items-center justify-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                      <Package size={20} />
                      {t('products.requestQuote')}
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-semibold">
                      <Share2 size={20} />
                      {t('products.shareProduct')}
                    </button>
                  </div>

                  {/* Share Buttons */}
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      <Share2 size={16} />
                      {t('products.share')}:
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
            {/* Quick Info */}
            <div className="bg-primary-50 rounded-2xl p-6 border border-primary-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="text-primary-600" />
                {t('products.productInfo')}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{t('products.category')}</span>
                  <span className="text-sm font-medium text-gray-900">{product.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{t('products.readTime')}</span>
                  <span className="text-sm font-medium text-gray-900">{product.readTime}</span>
                </div>
                {product.price && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{t('products.price')}</span>
                    <span className="text-sm font-bold text-accent-600">{product.price}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4">{t('products.contactForm.title')}</h3>
              <p className="text-sm text-gray-600 mb-4">
                {t('products.contactForm.description')}
              </p>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={t('products.contactForm.name')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="email"
                  placeholder={t('products.contactForm.email')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder={t('products.contactForm.phone')}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <textarea
                  placeholder={t('products.contactForm.message')}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                >
                  {t('products.contactForm.submit')}
                </button>
              </form>
            </div>

            {/* Table of Contents */}
            {tableOfContents.length > 0 && (
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen size={20} className="text-primary-600" />
                  {t('products.tableOfContents')}
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors flex items-center gap-2 group"
                    >
                      <ChevronRight size={14} className="text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="line-clamp-2">{item.text}</span>
                    </button>
                  ))}
                </nav>
              </div>
            )}

            {/* Related Products */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{t('products.relatedProducts')}</h3>
              <div className="space-y-4">
                {relatedProducts.map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    onClick={() => navigate(`/products/${relatedProduct.id}`)}
                    className="group cursor-pointer"
                  >
                    <div className="flex gap-4">
                      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 mb-2">
                          {relatedProduct.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <Calendar size={12} />
                          <span>{relatedProduct.date}</span>
                        </div>
                        {relatedProduct.price && (
                          <div className="flex items-center gap-2 text-xs text-accent-600 font-medium mt-1">
                            <DollarSign size={12} />
                            <span>{relatedProduct.price}</span>
                          </div>
                        )}
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
