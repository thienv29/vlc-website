import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Facebook, Twitter, Linkedin, Clock, User, Tag, Eye } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import PageWrapper from './PageWrapper';

export default function NewsDetailStatic() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [readingProgress, setReadingProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

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
          Đây là một trong những dự án năng lượng tái tạo quy mô lớn mà công ty đã thực hiện.
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
    },
    // Service-related articles
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
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Thiết kế kỹ thuật chi tiết và tối ưu</li>
          <li>Thu mua vật tư và thiết bị chất lượng cao</li>
          <li>Thi công xây dựng theo tiêu chuẩn quốc tế</li>
          <li>Nghiệm thu và bàn giao dự án hoàn chỉnh</li>
        </ul>

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
        <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
          <li>Đánh giá tác động môi trường (EIA)</li>
          <li>Lập báo cáo môi trường định kỳ</li>
          <li>Tư vấn xử lý nước thải và khí thải</li>
          <li>Hỗ trợ xin cấp phép môi trường</li>
        </ul>
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
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0F5132] mb-3">Hệ thống lọc nước</h3>
            <p className="text-sm text-gray-600 mb-3">Công nghệ lọc tiên tiến, hiệu suất cao</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Công suất: 1-1000 m³/h</li>
              <li>• Hiệu suất lọc: >99%</li>
              <li>• Tiết kiệm năng lượng</li>
            </ul>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-[#0F5132] mb-3">Thiết bị năng lượng mặt trời</h3>
            <p className="text-sm text-gray-600 mb-3">Tấm pin mặt trời thế hệ mới</p>
            <ul className="space-y-1 text-sm text-gray-600">
              <li>• Hiệu suất: 22-23%</li>
              <li>• Tuổi thọ: 25+ năm</li>
              <li>• Bảo hành 10 năm</li>
            </ul>
          </div>
        </div>
      `,
      tags: ['Sản phẩm', 'Công nghệ', 'Hiệu quả', 'Chất lượng'],
      relatedNews: [19, 20, 21]
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

  // Reading progress effect
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
              onClick={() => navigate('/services')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0F5132] text-white rounded-xl font-semibold hover:bg-[#0F5132]/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <ArrowLeft size={20} />
              Quay lại trang dịch vụ
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
