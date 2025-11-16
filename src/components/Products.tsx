import { useState, useMemo } from 'react';
import { Search, Filter, ArrowRight, Tag, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { productsData, getProductsByCategory, searchProducts } from '../data/productsData';
import ProductCard from './ProductCard';

interface ProductsProps {
  fullPage?: boolean;
}

export default function Products({ fullPage = false }: ProductsProps) {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 9;

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(productsData.map(product => product.category))];
    return cats;
  }, []);

  // Filter products based on search and category
  const filteredProducts = useMemo(() => {
    let products = productsData;

    if (selectedCategory) {
      products = getProductsByCategory(selectedCategory);
    }

    if (searchQuery.trim()) {
      products = searchProducts(searchQuery).filter(product =>
        selectedCategory ? product.category === selectedCategory : true
      );
    }

    return products;
  }, [searchQuery, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageProducts = filteredProducts.slice(startIndex, endIndex);

  const displayProducts = fullPage ? currentPageProducts : productsData.slice(0, 6);

  // Reset to page 1 when filters change
  const handleFilterChange = () => {
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setCurrentPage(1);
  };

  if (fullPage) {
    return (
      <div className="pt-32 pb-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center my-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4 animate-slideInUp">
              {t('products.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slideInUp delay-100">
              {t('products.subtitle')}
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 animate-fadeIn">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder={t('products.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    handleFilterChange();
                  }}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Category Filter */}
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => {
                    setSelectedCategory(e.target.value);
                    handleFilterChange();
                  }}
                  className="appearance-none bg-white border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none min-w-[200px]"
                >
                  <option value="">{t('products.allCategories')}</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                <Filter className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              {/* Clear Filters */}
              {(searchQuery || selectedCategory) && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors"
                >
                  <X className="w-4 h-4" />
                  {t('products.clearFilters')}
                </button>
              )}
            </div>

            {/* Filter Summary */}
            {(searchQuery || selectedCategory) && (
              <div className="mt-4 flex flex-wrap gap-2">
                {searchQuery && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                    <Search className="w-3 h-3" />
                    "{searchQuery}"
                  </span>
                )}
                {selectedCategory && (
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">
                    <Tag className="w-3 h-3" />
                    {selectedCategory}
                  </span>
                )}
                <span className="text-sm text-gray-600 ml-2">
                  {t('products.resultsFound')} {filteredProducts.length} {t('products.productsText')}
                </span>
              </div>
            )}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <>
              <ProductsGrid products={displayProducts} />
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('products.noResults')}</h3>
              <p className="text-gray-600 mb-4">{t('products.noResultsDesc')}</p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                {t('products.clearFilters')}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              {t('nav.products')}
            </span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4">
              {t('products.subtitle')}
            </h2>
          </div>
          <button className="hidden md:flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
            {t('products.viewDetails')}
            <ArrowRight size={20} />
          </button>
        </div>
        <ProductsGrid products={displayProducts} compact />
      </div>
    </section>
  );
}

function ProductsGrid({ products, compact = false }: any) {
  const navigate = useNavigate();

  const handleViewDetails = (productId: number) => {
    navigate(`/products/${productId}`);
  };

  const handleAddToCart = (productId: number) => {
    // Add cart logic here
    console.log('Adding product to cart:', productId);
    // You can implement cart functionality here
  };

  if (compact) {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {products.map((product: any) => (
          <ProductCard
            key={product.id}
            product={product}
            onViewDetails={handleViewDetails}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 animate-fadeIn items-stretch">
      {products.map((product: any) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={handleViewDetails}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}

// Pagination component
function Pagination({ currentPage, totalPages, onPageChange }: any) {
  const { t } = useTranslation();

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
            : 'bg-white text-primary-600 hover:bg-primary-600 hover:text-white shadow-md hover:shadow-lg'
        }`}
      >
        <ChevronLeft size={16} />
        {t('products.previous')}
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
                ? 'bg-primary-600 text-white shadow-lg'
                : page === '...'
                ? 'bg-transparent text-gray-400 cursor-default'
                : 'bg-white text-primary-600 hover:bg-primary-600 hover:text-white shadow-md hover:shadow-lg'
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
            : 'bg-white text-primary-600 hover:bg-primary-600 hover:text-white shadow-md hover:shadow-lg'
        }`}
      >
        {t('products.next')}
        <ChevronRight size={16} />
      </button>
    </div>
  );
}
