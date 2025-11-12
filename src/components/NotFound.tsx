import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center px-6 pt-32">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Number */}
        <div className="relative mb-8">
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
            404
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-xl animate-bounce" style={{ animationDuration: '3s' }} />
        </div>

        {/* Error Message */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Trang không tồn tại
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Xin lỗi, trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
          Hãy quay lại trang chủ hoặc liên hệ với chúng tôi để được hỗ trợ.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => navigate('/')}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl font-semibold text-lg hover:from-primary-700 hover:to-primary-800 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Home className="w-6 h-6" />
            Về trang chủ
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => navigate('/contact')}
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-primary-600 rounded-xl font-semibold text-lg hover:bg-primary-50 transition-all border-2 border-primary-200 hover:border-primary-300 shadow-lg hover:shadow-xl"
          >
            <Search className="w-6 h-6" />
            Liên hệ hỗ trợ
          </button>
        </div>

        {/* Additional Help */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Bạn có thể thử:
          </h3>
          <ul className="text-left space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="text-primary-600">•</span>
              Kiểm tra lại đường dẫn URL
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">•</span>
              Quay lại trang trước đó
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">•</span>
              Sử dụng menu điều hướng ở trên
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary-600">•</span>
              Liên hệ với chúng tôi để được hỗ trợ
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Cần hỗ trợ? Gọi hotline: <span className="font-semibold text-primary-600">1900 XXX XXX</span> hoặc email: <span className="font-semibold text-primary-600">info@vlcgroup.vn</span>
          </p>
        </div>
      </div>
    </div>
  );
}
