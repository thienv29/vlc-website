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
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Dịch vụ EPC (Engineering, Procurement và Construction)</strong> là giải pháp "trọn gói" hàng đầu mà VLC Group cung cấp
        cho các doanh nghiệp muốn đầu tư vào các dự án năng lượng tái tạo, công nghiệp và hạ tầng. Với hơn 15 năm kinh nghiệm
        và đội ngũ kỹ sư chuyên nghiệp, chúng tôi cam kết mang đến giải pháp đầu tư hiệu quả nhất cho khách hàng.
      </p>

      <div class="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <h3 class="text-lg font-bold text-blue-900 mb-3">Tại sao chọn VLC Group?</h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>Giảm 30-40% chi phí so với phương thức triển khai riêng lẻ</li>
          <li>Tiết kiệm 25% thời gian triển khai dự án</li>
          <li>Đảm bảo chất lượng và tiến độ với hợp đồng trách nhiệm</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Quy trình EPC 4 bước chuẩn quốc tế</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        VLC Group triển khai dự án theo quy trình EPC chuẩn mực quốc tế, đảm bảo hiệu quả và chất lượng tối ưu:
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
            <h3 class="font-bold text-green-800">Engineering - Thiết kế</h3>
          </div>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Phân tích kỹ thuật chi tiết</li>
            <li>Thiết kế tối ưu về mặt kỹ thuật và kinh tế</li>
            <li>Lập hồ sơ thiết kế thi công</li>
            <li>Đánh giá rủi ro và biện pháp phòng ngừa</li>
          </ul>
        </div>
        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
            <h3 class="font-bold text-green-800">Procurement - Thu mua</h3>
          </div>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Lựa chọn nhà cung cấp uy tín</li>
            <li>Đàm phán giá cả tối ưu</li>
            <li>Kiểm soát chất lượng vật tư thiết bị</li>
            <li>Quản lý logistics và giao nhận</li>
          </ul>
        </div>
        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
            <h3 class="font-bold text-green-800">Construction - Thi công</h3>
          </div>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Quản lý đội ngũ thi công chuyên nghiệp</li>
            <li>Giám sát chất lượng 24/7</li>
            <li>Tuân thủ an toàn lao động</li>
            <li>Báo cáo tiến độ hàng tuần</li>
          </ul>
        </div>
        <div class="bg-white border-l-4 border-green-500 p-6 rounded-r-lg shadow-sm">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
            <h3 class="font-bold text-green-800">Commissioning - Nghiệm thu</h3>
          </div>
          <ul class="list-disc list-inside space-y-1 text-sm text-gray-600">
            <li>Nghiệm thu từng hạng mục</li>
            <li>Chạy thử và hiệu chỉnh</li>
            <li>Đào tạo vận hành cho khách hàng</li>
            <li>Bàn giao dự án hoàn chỉnh</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Tiêu chuẩn chất lượng</h2>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-green-600 text-sm">✓</span>
          </div>
          <span>Tuân thủ các tiêu chuẩn quốc tế ISO 9001:2015</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-green-600 text-sm">✓</span>
          </div>
          <span>Đảm bảo an toàn lao động và môi trường</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-green-600 text-sm">✓</span>
          </div>
          <span>Kiểm soát chất lượng nghiêm ngặt ở mọi giai đoạn</span>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Gói dịch vụ EPC</h2>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-green-800 mb-2">Gói Cơ bản</h3>
          <p class="text-sm text-gray-600">Thiết kế, thu mua và thi công</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-green-800 mb-2">Gói Nâng cao</h3>
          <p class="text-sm text-gray-600">Bao gồm vận hành và bảo trì</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-green-800 mb-2">Gói Toàn diện</h3>
          <p class="text-sm text-gray-600">Giải pháp trọn gói từ A đến Z</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h3 class="text-lg font-semibold text-green-800 mb-2">Gói Tư vấn</h3>
          <p class="text-sm text-gray-600">Tư vấn và lập kế hoạch dự án</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Lợi ích của dịch vụ EPC</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Khách hàng lựa chọn dịch vụ EPC của VLC Group sẽ nhận được:
      </p>
      <div class="bg-green-500/5 rounded-xl p-6 mb-6">
        <ul class="space-y-3">
          <li class="flex items-start gap-3">
            <span class="text-[#3CB371] font-bold">✓</span>
            <span>Giảm thiểu rủi ro và chi phí phát sinh</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#3CB371] font-bold">✓</span>
            <span>Tiết kiệm thời gian triển khai dự án</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#3CB371] font-bold">✓</span>
            <span>Đảm bảo chất lượng và tiến độ</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-[#3CB371] font-bold">✓</span>
            <span>Hỗ trợ bảo hành và bảo trì dài hạn</span>
          </li>
        </ul>
      </div>

      <div class="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Dịch vụ EPC"
          class="w-full h-64 object-cover"
        />
      </div>

      <div class="bg-green-500/5 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-green-800 mb-4">Chứng nhận & Chứng chỉ</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="text-center">
            <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
              <span class="text-[#3CB371] font-bold">ISO</span>
            </div>
            <span class="text-sm text-gray-700">ISO 9001:2015</span>
          </div>
          <div class="text-center">
            <div class="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mx-auto mb-2 shadow-sm">
              <span class="text-[#3CB371] font-bold">EPC</span>
            </div>
            <span class="text-sm text-gray-700">EPC Certified</span>
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
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>Dịch vụ bảo trì và vận hành 24/7</strong> là "lá chắn" bảo vệ hệ thống năng lượng của bạn.
        Với trung tâm điều khiển hiện đại và đội ngũ kỹ thuật chuyên nghiệp, chúng tôi đảm bảo hệ thống
        luôn vận hành ổn định, hiệu quả tối ưu và tuổi thọ kéo dài.
      </p>

      <div class="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
        <h3 class="text-lg font-bold text-orange-900 mb-3 flex items-center gap-2">
          <span class="text-2xl">🚨</span>
          Thực tế đáng buồn
        </h3>
        <ul class="list-disc list-inside space-y-1 text-gray-700">
          <li>70% hệ thống ngừng hoạt động do thiếu bảo trì định kỳ</li>
          <li>Hiệu suất giảm 20-30% sau 2 năm không bảo trì</li>
          <li>Chi phí sửa chữa khẩn cấp cao gấp 5-10 lần bảo trì định kỳ</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Hệ thống giám sát thông minh 24/7</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Trung tâm điều khiển hiện đại của VLC Group với công nghệ AI giám sát tự động:
      </p>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">24</div>
            <h3 class="font-bold text-green-800">Giám sát liên tục</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• Camera HD quan sát realtime</li>
            <li>• Cảm biến nhiệt độ, độ ẩm, rung động</li>
            <li>• Giám sát dòng điện, hiệu suất</li>
            <li>• AI phát hiện sự cố sớm</li>
          </ul>
        </div>
        <div class="bg-green-50 rounded-2xl p-6 border border-green-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">7</div>
            <h3 class="font-bold text-green-800">Phản ứng tức thời</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• Đội kỹ thuật trực 24/7</li>
            <li>• Phản ứng trong 30 phút</li>
            <li>• Xe kỹ thuật dự phòng</li>
            <li>• Linh kiện thay thế dự trữ</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Bảo trì dự đoán - Công nghệ tiên tiến</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Sử dụng AI và Big Data để dự đoán và ngăn ngừa sự cố trước khi xảy ra:
      </p>
      <div class="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-500 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">
              🤖
            </div>
            <h4 class="font-bold text-green-800 mb-2">AI Analytics</h4>
            <p class="text-sm text-gray-600">Phân tích dữ liệu thời gian thực</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">
              📊
            </div>
            <h4 class="font-bold text-green-800 mb-2">Big Data</h4>
            <p class="text-sm text-gray-600">Dự đoán xu hướng hỏng hóc</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">
              🔮
            </div>
            <h4 class="font-bold text-green-800 mb-2">Predictive</h4>
            <p class="text-sm text-gray-600">Ngăn ngừa sự cố 90%</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Dịch vụ bảo trì</h2>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-orange-600 text-sm">🔧</span>
          </div>
          <span>Thay thế linh kiện hao mòn</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-orange-600 text-sm">🔧</span>
          </div>
          <span>Kiểm tra và hiệu chỉnh hệ thống</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-orange-600 text-sm">🔧</span>
          </div>
          <span>Vệ sinh và bảo dưỡng định kỳ</span>
        </li>
      </ul>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Các gói bảo trì</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        VLC Group cung cấp đa dạng các gói bảo trì phù hợp với nhu cầu của khách hàng:
      </p>
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-green-800 mb-3">Gói Cơ bản</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Kiểm tra định kỳ hàng tháng</li>
            <li>• Bảo trì phòng ngừa</li>
            <li>• Hỗ trợ kỹ thuật từ xa</li>
          </ul>
        </div>
        <div class="bg-white border border-gray-200 rounded-lg p-6">
          <h3 class="text-lg font-semibold text-green-800 mb-3">Gói Nâng cao</h3>
          <ul class="space-y-2 text-sm text-gray-600">
            <li>• Giám sát 24/7</li>
            <li>• Bảo trì dự đoán</li>
            <li>• Hỗ trợ khẩn cấp</li>
          </ul>
        </div>
      </div>

      <div class="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Dịch vụ bảo trì"
          class="w-full h-64 object-cover"
        />
      </div>

      <div class="bg-gray-50 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-green-800 mb-4">Dự án tiêu biểu</h3>
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center shadow-sm">
              <span class="text-[#3CB371] font-bold text-sm">1</span>
            </div>
            <span>Nhà máy điện mặt trời 100MW Ninh Thuận</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center shadow-sm">
              <span class="text-[#3CB371] font-bold text-sm">2</span>
            </div>
            <span>Hệ thống lọc nước công nghiệp Bình Dương</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center shadow-sm">
              <span class="text-[#3CB371] font-bold text-sm">3</span>
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
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>"Môi trường là tương lai"</strong> - Với hơn 20 năm kinh nghiệm, VLC Group là đối tác tin cậy
        giúp doanh nghiệp của bạn "xanh hóa" hoạt động sản xuất, tuân thủ pháp luật và phát triển bền vững.
        Chúng tôi không chỉ giúp bạn tránh phạt mà còn tạo lợi thế cạnh tranh trên thị trường xanh.
      </p>

      <div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 mb-8 border border-green-200">
        <h3 class="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
          <span class="text-2xl">💡</span>
          Cơ hội vàng cho doanh nghiệp
        </h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-center gap-3">
            <span class="text-green-500 font-bold">🎯</span>
            <span>Tiết kiệm 50-70% chi phí xử phạt vi phạm môi trường</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-green-500 font-bold">🎯</span>
            <span>Nâng cao hình ảnh thương hiệu "xanh" thu hút khách hàng</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-green-500 font-bold">🎯</span>
            <span>Được ưu tiên trong đấu thầu dự án xanh</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-green-500 font-bold">🎯</span>
            <span>Tiếp cận nguồn vốn ưu đãi từ các tổ chức quốc tế</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Dịch vụ tư vấn môi trường toàn diện</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        VLC Group cung cấp bộ giải pháp tư vấn môi trường 360 độ:
      </p>
      <div class="grid md:grid-cols-2 gap-6 mb-8">
        <div class="bg-green-50 rounded-2xl p-6 border border-green-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-green-500 text-white rounded-2xl flex items-center justify-center text-xl">📋</div>
            <h3 class="font-bold text-green-800">Đánh giá tác động môi trường</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• EIA đầy đủ theo quy định pháp luật</li>
            <li>• Đánh giá rủi ro môi trường chi tiết</li>
            <li>• Đề xuất biện pháp giảm thiểu tối ưu</li>
            <li>• Hỗ trợ phê duyệt từ cơ quan chức năng</li>
          </ul>
        </div>
        <div class="bg-blue-50 rounded-2xl p-6 border border-blue-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-blue-500 text-white rounded-2xl flex items-center justify-center text-xl">📊</div>
            <h3 class="font-bold text-green-800">Báo cáo môi trường định kỳ</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• Báo cáo quan trắc môi trường hàng quý</li>
            <li>• Báo cáo đánh giá hiệu quả BVMT</li>
            <li>• Báo cáo sự cố môi trường (nếu có)</li>
            <li>• Tư vấn cải thiện chỉ số môi trường</li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-purple-500 text-white rounded-2xl flex items-center justify-center text-xl">🔬</div>
            <h3 class="font-bold text-green-800">Xử lý nước thải & khí thải</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• Tư vấn công nghệ xử lý tối ưu</li>
            <li>• Lựa chọn thiết bị phù hợp</li>
            <li>• Thiết kế hệ thống xử lý</li>
            <li>• Giám sát hiệu quả vận hành</li>
          </ul>
        </div>
        <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
          <div class="flex items-center gap-3 mb-4">
            <div class="w-12 h-12 bg-orange-500 text-white rounded-2xl flex items-center justify-center text-xl">📄</div>
            <h3 class="font-bold text-green-800">Cấp phép & pháp lý</h3>
          </div>
          <ul class="space-y-2 text-sm text-gray-700">
            <li>• Xin giấy phép xả thải</li>
            <li>• Xin giấy phép khai thác nước ngầm</li>
            <li>• Tư vấn pháp lý môi trường</li>
            <li>• Đại diện làm việc với cơ quan chức năng</li>
          </ul>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Quy trình hỗ trợ</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Quy trình tư vấn môi trường chuyên nghiệp của chúng tôi:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-[#3CB371] font-bold text-sm">1</span>
          </div>
          <span>Khảo sát và thu thập thông tin</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-[#3CB371] font-bold text-sm">2</span>
          </div>
          <span>Phân tích và đánh giá tác động</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-[#3CB371] font-bold text-sm">3</span>
          </div>
          <span>Đề xuất giải pháp và biện pháp giảm thiểu</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-[#3CB371] font-bold text-sm">4</span>
          </div>
          <span>Lập báo cáo và hỗ trợ phê duyệt</span>
        </li>
      </ul>

      <div class="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Tư vấn môi trường"
          class="w-full h-64 object-cover"
        />
      </div>

      <div class="bg-green-50 rounded-2xl p-6 mb-6">
        <h3 class="text-lg font-semibold text-green-800 mb-4">Infographic quy trình</h3>
        <div class="text-center text-gray-600">
          <p>Quy trình tư vấn môi trường từ A đến Z</p>
          <p class="text-sm mt-2">Hỗ trợ doanh nghiệp hoàn thiện hồ sơ pháp lý</p>
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
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        <strong>"Công nghệ tạo nên sự khác biệt"</strong> - VLC Group là nhà cung cấp giải pháp công nghệ hàng đầu Việt Nam,
        mang đến các sản phẩm tiên tiến nhất từ các thương hiệu quốc tế. Chúng tôi không chỉ bán sản phẩm mà còn
        cung cấp giải pháp tổng thể giúp doanh nghiệp tối ưu hóa quy trình sản xuất và nâng cao năng lực cạnh tranh.
      </p>

      <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-200">
        <h3 class="text-lg font-bold text-green-800 mb-3 flex items-center gap-2">
          <span class="text-2xl">🚀</span>
          Ưu thế cạnh tranh
        </h3>
        <ul class="space-y-2 text-gray-700">
          <li class="flex items-center gap-3">
            <span class="text-blue-500 font-bold">💎</span>
            <span>Công nghệ tiên tiến nhất từ các thương hiệu top đầu thế giới</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-blue-500 font-bold">💎</span>
            <span>Giải pháp tùy chỉnh phù hợp với từng ngành nghề</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-blue-500 font-bold">💎</span>
            <span>Hỗ trợ kỹ thuật 24/7 và bảo hành dài hạn</span>
          </li>
          <li class="flex items-center gap-3">
            <span class="text-blue-500 font-bold">💎</span>
            <span>Tiết kiệm 20-40% chi phí vận hành so với giải pháp thông thường</span>
          </li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Danh mục sản phẩm flagship</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Bộ sưu tập các sản phẩm công nghệ hàng đầu được tin dùng bởi hàng nghìn doanh nghiệp:
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 rounded-3xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-cyan-400 to-blue-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg text-2xl">
            💧
          </div>
          <h4 class="text-lg font-bold text-green-800 mb-3">Hệ thống lọc nước công nghiệp</h4>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">Công nghệ RO tiên tiến, xử lý nước biển thành nước tinh khiết đạt chuẩn WHO</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Công suất:</span>
              <span class="font-semibold text-[#3CB371]">1-1000 m³/h</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Tiết kiệm:</span>
              <span class="font-semibold text-green-600">60% nước thải</span>
            </div>
          </div>
          <button class="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all">
            Xem chi tiết
          </button>
        </div>
        <div class="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-3xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg text-2xl">
            ☀️
          </div>
          <h4 class="text-lg font-bold text-green-800 mb-3">Thiết bị năng lượng mặt trời</h4>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">Tấm pin thế hệ mới với hiệu suất 22-23%, tuổi thọ lên đến 30 năm</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Hiệu suất:</span>
              <span class="font-semibold text-[#3CB371]">22-23%</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Bảo hành:</span>
              <span class="font-semibold text-green-600">25 năm</span>
            </div>
          </div>
          <button class="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-2 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all">
            Xem chi tiết
          </button>
        </div>
        <div class="bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 rounded-3xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-1">
          <div class="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg text-2xl">
            ⚡
          </div>
          <h4 class="text-lg font-bold text-green-800 mb-3">Hệ thống biến tần</h4>
          <p class="text-gray-600 text-sm mb-4 leading-relaxed">Biến tần vector điều khiển, tiết kiệm điện năng lên đến 50%</p>
          <div class="space-y-2 mb-4">
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Công suất:</span>
              <span class="font-semibold text-[#3CB371]">0.75-500kW</span>
            </div>
            <div class="flex justify-between text-sm">
              <span class="text-gray-600">Tiết kiệm:</span>
              <span class="font-semibold text-green-600">30-50%</span>
            </div>
          </div>
          <button class="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all">
            Xem chi tiết
          </button>
        </div>
      </div>

      <div class="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 mb-8 border border-indigo-200">
        <h3 class="text-2xl font-bold text-green-800 mb-6 text-center">Công nghệ 4.0 - Tương lai của ngành công nghiệp</h3>
        <div class="grid md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-indigo-400 to-purple-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl text-3xl">
              🤖
            </div>
            <h4 class="font-bold text-green-800 mb-2">AI & Machine Learning</h4>
            <p class="text-sm text-gray-600">Tự động hóa quy trình, tối ưu hóa hiệu suất</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl text-3xl">
              🌐
            </div>
            <h4 class="font-bold text-green-800 mb-2">IoT & Big Data</h4>
            <p class="text-sm text-gray-600">Kết nối thông minh, phân tích dữ liệu realtime</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl text-3xl">
              🔄
            </div>
            <h4 class="font-bold text-green-800 mb-2">Industry 4.0</h4>
            <p class="text-sm text-gray-600">Nhà máy thông minh, sản xuất linh hoạt</p>
          </div>
          <div class="text-center">
            <div class="w-20 h-20 bg-gradient-to-br from-red-400 to-orange-500 text-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-xl text-3xl">
              🔒
            </div>
            <h4 class="font-bold text-green-800 mb-2">Cybersecurity</h4>
            <p class="text-sm text-gray-600">Bảo mật hệ thống, an toàn thông tin</p>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl overflow-hidden shadow-lg mb-6">
        <img
          src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="Sản phẩm công nghệ"
          class="w-full h-64 object-cover"
        />
      </div>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Công nghệ tiên tiến</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        VLC Group luôn cập nhật và áp dụng các công nghệ tiên tiến nhất:
      </p>
      <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-[#3CB371] font-bold text-sm">AI</span>
          </div>
          <span>Trí tuệ nhân tạo trong tối ưu hóa hệ thống</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-[#3CB371] font-bold text-sm">IoT</span>
          </div>
          <span>Internet of Things cho giám sát từ xa</span>
        </li>
        <li class="flex items-start gap-3">
          <div class="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span class="text-[#3CB371] font-bold text-sm">SCADA</span>
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
