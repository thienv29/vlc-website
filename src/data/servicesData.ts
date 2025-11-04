// Services data separated from components
export interface ServiceItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  author: string;
  readTime: string;
  content: string;
  tags: string[];
  relatedNews: number[];
}

export const servicesData: ServiceItem[] = [
  {
    id: 19,
    title: 'Dịch vụ EPC toàn diện - Giải pháp đầu tư hiệu quả cho doanh nghiệp',
    excerpt: 'Khám phá dịch vụ Engineering, Procurement và Construction (EPC) chuyên nghiệp từ VLC Group...',
    date: '20/03/2024',
    category: 'Dịch vụ EPC',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Kỹ thuật VLC Group',
    readTime: '6 phút đọc',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Dịch vụ EPC (Engineering, Procurement and Construction) là giải pháp toàn diện mà VLC Group cung cấp
        cho các doanh nghiệp muốn đầu tư vào các dự án năng lượng tái tạo và công nghiệp.
      </p>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Quy trình EPC chuyên nghiệp</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        VLC Group cung cấp dịch vụ EPC toàn diện với quy trình chuẩn mực quốc tế:
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">1</span>
          </div>
          <span>Thiết kế kỹ thuật chi tiết và tối ưu</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">2</span>
          </div>
          <span>Thu mua vật tư và thiết bị chất lượng cao</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">3</span>
          </div>
          <span>Thi công xây dựng theo tiêu chuẩn quốc tế</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">4</span>
          </div>
          <span>Nghiệm thu và bàn giao dự án hoàn chỉnh</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Tiêu chuẩn chất lượng</h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-green-600 text-sm">✓</span>
          </div>
          <span>Tuân thủ các tiêu chuẩn quốc tế ISO 9001:2015</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-green-600 text-sm">✓</span>
          </div>
          <span>Đảm bảo an toàn lao động và môi trường</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-green-600 text-sm">✓</span>
          </div>
          <span>Kiểm soát chất lượng nghiêm ngặt ở mọi giai đoạn</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Gói dịch vụ EPC</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-[#0F5132] mb-2">Gói Cơ bản</h3>
          <p className="text-sm text-gray-600">Thiết kế, thu mua và thi công</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-[#0F5132] mb-2">Gói Nâng cao</h3>
          <p className="text-sm text-gray-600">Bao gồm vận hành và bảo trì</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-[#0F5132] mb-2">Gói Toàn diện</h3>
          <p className="text-sm text-gray-600">Giải pháp trọn gói từ A đến Z</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 className="text-lg font-semibold text-[#0F5132] mb-2">Gói Tư vấn</h3>
          <p className="text-sm text-gray-600">Tư vấn và lập kế hoạch dự án</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Lợi ích của dịch vụ EPC</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Khách hàng lựa chọn dịch vụ EPC của VLC Group sẽ nhận được:
      </p>
      <div className="bg-[#3CB371]/5 rounded-xl p-6 mb-6">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-[#3CB371] font-bold">✓</span>
            <span>Giảm thiểu rủi ro và chi phí phát sinh</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#3CB371] font-bold">✓</span>
            <span>Tiết kiệm thời gian triển khai dự án</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#3CB371] font-bold">✓</span>
            <span>Đảm bảo chất lượng và tiến độ</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#3CB371] font-bold">✓</span>
            <span>Hỗ trợ bảo hành và bảo trì dài hạn</span>
          </li>
        </ul>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Dịch vụ EPC"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="bg-[#3CB371]/5 rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-[#0F5132] mb-4">Chứng nhận & Chứng chỉ</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#3CB371]/10 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
              <span className="text-[#3CB371] font-bold">ISO</span>
            </div>
            <span className="text-sm text-gray-700">ISO 9001:2015</span>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#3CB371]/10 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
              <span className="text-[#3CB371] font-bold">EPC</span>
            </div>
            <span className="text-sm text-gray-700">EPC Certified</span>
          </div>
        </div>
      </div>
    `,
    tags: ['EPC', 'Dịch vụ', 'Năng lượng tái tạo', 'Đầu tư'],
    relatedNews: [20, 21, 22]
  },
  {
    id: 20,
    title: 'Dịch vụ bảo trì và vận hành - Đảm bảo hiệu suất tối ưu',
    excerpt: 'Dịch vụ bảo trì chuyên nghiệp giúp duy trì hiệu suất và tuổi thọ của các hệ thống năng lượng...',
    date: '18/03/2024',
    category: 'Bảo trì',
    image: 'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Vận hành VLC Group',
    readTime: '5 phút đọc',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Dịch vụ bảo trì và vận hành chuyên nghiệp là yếu tố quan trọng quyết định hiệu quả và tuổi thọ
        của các hệ thống năng lượng tái tạo.
      </p>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Quy trình vận hành</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        VLC Group cung cấp dịch vụ vận hành chuyên nghiệp với quy trình chuẩn mực:
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">1</span>
          </div>
          <span>Giám sát hệ thống 24/7</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">2</span>
          </div>
          <span>Bảo trì định kỳ theo lịch</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">3</span>
          </div>
          <span>Sửa chữa khẩn cấp</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">4</span>
          </div>
          <span>Báo cáo hiệu suất hàng tháng</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Dịch vụ bảo trì</h2>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-orange-600 text-sm">🔧</span>
          </div>
          <span>Thay thế linh kiện hao mòn</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-orange-600 text-sm">🔧</span>
          </div>
          <span>Kiểm tra và hiệu chỉnh hệ thống</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-orange-600 text-sm">🔧</span>
          </div>
          <span>Vệ sinh và bảo dưỡng định kỳ</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Các gói bảo trì</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        VLC Group cung cấp đa dạng các gói bảo trì phù hợp với nhu cầu của khách hàng:
      </p>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#0F5132] mb-3">Gói Cơ bản</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Kiểm tra định kỳ hàng tháng</li>
            <li>• Bảo trì phòng ngừa</li>
            <li>• Hỗ trợ kỹ thuật từ xa</li>
          </ul>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-[#0F5132] mb-3">Gói Nâng cao</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Giám sát 24/7</li>
            <li>• Bảo trì dự đoán</li>
            <li>• Hỗ trợ khẩn cấp</li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Dịch vụ bảo trì"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="bg-gray-50 rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-[#0F5132] mb-4">Dự án tiêu biểu</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#3CB371]/10 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-[#3CB371] font-bold text-sm">1</span>
            </div>
            <span>Nhà máy điện mặt trời 100MW Ninh Thuận</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#3CB371]/10 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-[#3CB371] font-bold text-sm">2</span>
            </div>
            <span>Hệ thống lọc nước công nghiệp Bình Dương</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#3CB371]/10 rounded-full flex items-center justify-center shadow-sm">
              <span className="text-[#3CB371] font-bold text-sm">3</span>
            </div>
            <span>Trạm biến áp 110kV Long An</span>
          </div>
        </div>
      </div>
    `,
    tags: ['Bảo trì', 'Vận hành', 'Hiệu suất', 'Hỗ trợ'],
    relatedNews: [19, 21, 22]
  },
  {
    id: 21,
    title: 'Tư vấn môi trường - Giải pháp bền vững cho doanh nghiệp',
    excerpt: 'Dịch vụ tư vấn môi trường chuyên nghiệp giúp doanh nghiệp tuân thủ pháp luật và phát triển bền vững...',
    date: '16/03/2024',
    category: 'Môi trường',
    image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Môi trường VLC Group',
    readTime: '4 phút đọc',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Với hơn 20 năm kinh nghiệm trong lĩnh vực môi trường, VLC Group cung cấp dịch vụ tư vấn
        chuyên nghiệp giúp doanh nghiệp tuân thủ các quy định pháp luật và phát triển bền vững.
      </p>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Dịch vụ tư vấn môi trường</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Các dịch vụ chính bao gồm:
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-green-600 text-sm">🌱</span>
          </div>
          <span>Đánh giá tác động môi trường (EIA)</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-green-600 text-sm">🌱</span>
          </div>
          <span>Lập báo cáo môi trường định kỳ</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-green-600 text-sm">🌱</span>
          </div>
          <span>Tư vấn xử lý nước thải và khí thải</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-green-600 text-sm">🌱</span>
          </div>
          <span>Hỗ trợ xin cấp phép môi trường</span>
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Quy trình hỗ trợ</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Quy trình tư vấn môi trường chuyên nghiệp của chúng tôi:
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">1</span>
          </div>
          <span>Khảo sát và thu thập thông tin</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">2</span>
          </div>
          <span>Phân tích và đánh giá tác động</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">3</span>
          </div>
          <span>Đề xuất giải pháp và biện pháp giảm thiểu</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">4</span>
          </div>
          <span>Lập báo cáo và hỗ trợ phê duyệt</span>
        </li>
      </ul>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Tư vấn môi trường"
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="bg-green-50 rounded-2xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-[#0F5132] mb-4">Infographic quy trình</h3>
        <div className="text-center text-gray-600">
          <p>Quy trình tư vấn môi trường từ A đến Z</p>
          <p className="text-sm mt-2">Hỗ trợ doanh nghiệp hoàn thiện hồ sơ pháp lý</p>
        </div>
      </div>
    `,
    tags: ['Môi trường', 'Tư vấn', 'Pháp luật', 'Bền vững'],
    relatedNews: [19, 20, 22]
  },
  {
    id: 22,
    title: 'Sản phẩm và công nghệ tiên tiến - Nâng tầm hiệu quả sản xuất',
    excerpt: 'Danh mục sản phẩm và công nghệ tiên tiến giúp nâng cao hiệu quả và chất lượng sản xuất...',
    date: '14/03/2024',
    category: 'Sản phẩm',
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Sản phẩm VLC Group',
    readTime: '5 phút đọc',
    content: `
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group cung cấp các sản phẩm và công nghệ tiên tiến nhất trên thị trường,
        giúp khách hàng nâng cao hiệu quả sản xuất và chất lượng sản phẩm.
      </p>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Danh mục sản phẩm nổi bật</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        Các sản phẩm chủ lực:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-[#3CB371]/10 rounded-lg flex items-center justify-center mb-4 shadow-sm">
            <span className="text-[#3CB371] text-lg">📦</span>
          </div>
          <h4 className="text-lg font-semibold text-[#0F5132] mb-2">Hệ thống lọc nước công nghiệp</h4>
          <p className="text-gray-600 text-sm mb-4">Công nghệ lọc tiên tiến, hiệu suất cao</p>
          <div className="flex items-center justify-between">
            <span className="text-[#3CB371] font-medium">Công suất: 1-1000 m³/h</span>
            <button className="text-[#3CB371] hover:text-[#3CB371]/80 text-sm font-medium">
              Chi tiết →
            </button>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-[#3CB371]/10 rounded-lg flex items-center justify-center mb-4 shadow-sm">
            <span className="text-[#3CB371] text-lg">☀️</span>
          </div>
          <h4 className="text-lg font-semibold text-[#0F5132] mb-2">Thiết bị năng lượng mặt trời</h4>
          <p className="text-gray-600 text-sm mb-4">Tấm pin mặt trời thế hệ mới</p>
          <div className="flex items-center justify-between">
            <span className="text-[#3CB371] font-medium">Hiệu suất: 22-23%</span>
            <button className="text-[#3CB371] hover:text-[#3CB371]/80 text-sm font-medium">
              Chi tiết →
            </button>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
          <div className="w-12 h-12 bg-[#3CB371]/10 rounded-lg flex items-center justify-center mb-4 shadow-sm">
            <span className="text-[#3CB371] text-lg">⚡</span>
          </div>
          <h4 className="text-lg font-semibold text-[#0F5132] mb-2">Hệ thống biến tần</h4>
          <p className="text-gray-600 text-sm mb-4">Tiết kiệm năng lượng tối ưu</p>
          <div className="flex items-center justify-between">
            <span className="text-[#3CB371] font-medium">Công suất: 0.75-500kW</span>
            <button className="text-[#3CB371] hover:text-[#3CB371]/80 text-sm font-medium">
              Chi tiết →
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Sản phẩm công nghệ"
          className="w-full h-64 object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-[#0F5132] mb-4">Công nghệ tiên tiến</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        VLC Group luôn cập nhật và áp dụng các công nghệ tiên tiến nhất:
      </p>
      <ul className="space-y-3 mb-6">
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">AI</span>
          </div>
          <span>Trí tuệ nhân tạo trong tối ưu hóa hệ thống</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">IoT</span>
          </div>
          <span>Internet of Things cho giám sát từ xa</span>
        </li>
        <li className="flex items-start gap-3">
          <div className="w-6 h-6 rounded-full bg-[#3CB371]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="text-[#3CB371] font-bold text-sm">SCADA</span>
          </div>
          <span>Hệ thống giám sát và điều khiển tự động</span>
        </li>
      </ul>
    `,
    tags: ['Sản phẩm', 'Công nghệ', 'Hiệu quả', 'Chất lượng'],
    relatedNews: [19, 20, 21]
  }
];

// Helper functions
export const getServiceById = (id: number): ServiceItem | undefined => {
  return servicesData.find(item => item.id === id);
};

export const getRelatedServices = (currentId: number, relatedIds: number[]): ServiceItem[] => {
  return servicesData.filter(item => relatedIds.includes(item.id) && item.id !== currentId);
};
