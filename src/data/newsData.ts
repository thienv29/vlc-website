// News data separated from components
export interface NewsItem {
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
  type: 'internal' | 'public'; // New category field
}

export const newsData: NewsItem[] = [
  // Internal News (Company news)
  {
    id: 1,
    title: 'VLC Group ký kết hợp tác chiến lược với tập đoàn năng lượng quốc tế',
    excerpt: 'Thỏa thuận hợp tác sẽ mở ra cơ hội phát triển các dự án năng lượng tái tạo quy mô lớn...',
    date: '15/03/2024',
    category: 'Đối tác',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Truyền thông VLC Group',
    readTime: '5 phút đọc',
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group vừa chính thức ký kết thỏa thuận hợp tác chiến lược với một tập đoàn năng lượng quốc tế hàng đầu.
        Thỏa thuận này đánh dấu bước ngoặt quan trọng trong chiến lược phát triển bền vững của công ty.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Nội dung hợp tác</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Hai bên cam kết hợp tác trong các lĩnh vực:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Phát triển các dự án năng lượng tái tạo quy mô lớn</li>
        <li>Chuyển giao công nghệ xử lý nước thải tiên tiến</li>
        <li>Đào tạo và phát triển nguồn nhân lực</li>
        <li>Nghiên cứu chung về các giải pháp môi trường bền vững</li>
      </ul>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Tầm quan trọng của thỏa thuận</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Ông Nguyễn Văn A, Tổng Giám đốc VLC Group, chia sẻ: "Đây là cơ hội tuyệt vời để chúng tôi tiếp cận với
        công nghệ tiên tiến nhất trên thế giới và đóng góp nhiều hơn nữa cho sự nghiệp bảo vệ môi trường Việt Nam."
      </p>

      <blockquote class="border-l-4 border-[#3CB371] pl-6 py-4 my-8 bg-green-500/5 rounded-r-lg">
        <p class="text-lg italic text-gray-800">
          "Hợp tác này không chỉ mang lại lợi ích kinh tế mà còn góp phần bảo vệ môi trường và phát triển bền vững."
        </p>
        <cite class="text-[#3CB371] font-semibold mt-2 block">- Ông Nguyễn Văn A, Tổng Giám đốc VLC Group</cite>
      </blockquote>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Kế hoạch triển khai</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Thỏa thuận sẽ được triển khai theo giai đoạn với mục tiêu cụ thể:
      </p>
      <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 mb-6">
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl font-bold text-[#3CB371]">1</span>
            </div>
            <h3 class="font-semibold text-green-800 mb-2">Giai đoạn 1</h3>
            <p class="text-sm text-gray-600">2024-2025: Chuyển giao công nghệ</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl font-bold text-[#3CB371]">2</span>
            </div>
            <h3 class="font-semibold text-green-800 mb-2">Giai đoạn 2</h3>
            <p class="text-sm text-gray-600">2025-2027: Triển khai dự án chung</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <span class="text-2xl font-bold text-[#3CB371]">3</span>
            </div>
            <h3 class="font-semibold text-green-800 mb-2">Giai đoạn 3</h3>
            <p class="text-sm text-gray-600">2027+: Mở rộng hợp tác</p>
          </div>
        </div>
      </div>

      <p class="text-gray-700 leading-relaxed">
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
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Sau 18 tháng thi công, VLC Group đã chính thức khánh thành nhà máy điện mặt trời 100MW tại Ninh Thuận.
        Đây là một trong những dự án năng lượng tái tạo quy mô lớn mà công ty đã thực hiện.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Quy mô và công nghệ</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Nhà máy sử dụng công nghệ tấm pin mặt trời thế hệ mới nhất với hiệu suất chuyển đổi lên đến 22%.
        Tổng công suất lắp đặt đạt 100MW, đủ cung cấp điện cho khoảng 50.000 hộ gia đình.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Tác động kinh tế</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
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
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group vinh dự nhận chứng nhận ISO 14001:2015 về hệ thống quản lý môi trường,
        khẳng định cam kết mạnh mẽ của công ty trong việc bảo vệ môi trường.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Ý nghĩa của chứng nhận</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chứng nhận ISO 14001:2015 là tiêu chuẩn quốc tế về hệ thống quản lý môi trường,
        chứng minh khả năng của tổ chức trong việc quản lý tác động môi trường một cách có hệ thống.
      </p>
    `,
    tags: ['ISO 14001', 'Quản lý môi trường', 'Chứng nhận'],
    relatedNews: [1, 2, 6]
  },
  {
    id: 7,
    title: 'Đầu tư 500 tỷ đồng vào công nghệ xử lý nước thải tiên tiến',
    excerpt: 'VLC Group tiếp tục đầu tư mạnh vào công nghệ xanh, hướng tới mục tiêu phát triển bền vững...',
    date: '28/02/2024',
    category: 'Đầu tư',
    image: 'https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Đầu tư VLC Group',
    readTime: '4 phút đọc',
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group vừa công bố kế hoạch đầu tư 500 tỷ đồng vào công nghệ xử lý nước thải tiên tiến.
        Đây là một phần của chiến lược phát triển bền vững và mở rộng lĩnh vực kinh doanh.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Mục tiêu đầu tư</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Dự án đầu tư tập trung vào:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Nghiên cứu và phát triển công nghệ xử lý nước thải công nghiệp</li>
        <li>Xây dựng nhà máy sản xuất thiết bị xử lý nước thải</li>
        <li>Đào tạo đội ngũ kỹ thuật chuyên nghiệp</li>
        <li>Mở rộng thị trường trong và ngoài nước</li>
      </ul>
    `,
    tags: ['Đầu tư', 'Công nghệ', 'Nước thải', 'Bền vững'],
    relatedNews: [1, 2, 8]
  },
  {
    id: 8,
    title: 'Mở rộng thị trường sang Đông Nam Á với dự án năng lượng tái tạo',
    excerpt: 'VLC Group chính thức mở rộng hoạt động kinh doanh sang các nước Đông Nam Á...',
    date: '20/02/2024',
    category: 'Mở rộng',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Kinh doanh Quốc tế VLC Group',
    readTime: '5 phút đọc',
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group chính thức mở rộng hoạt động kinh doanh sang thị trường Đông Nam Á với dự án
        năng lượng tái tạo đầu tiên tại Thái Lan.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Chiến lược mở rộng</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chiến lược mở rộng của VLC Group bao gồm:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Thành lập văn phòng đại diện tại các nước Đông Nam Á</li>
        <li>Hợp tác với các đối tác địa phương</li>
        <li>Chuyển giao công nghệ và đào tạo</li>
        <li>Phát triển dự án năng lượng tái tạo quy mô lớn</li>
      </ul>
    `,
    tags: ['Mở rộng', 'Đông Nam Á', 'Năng lượng tái tạo', 'Quốc tế'],
    relatedNews: [1, 7, 9]
  },
  {
    id: 9,
    title: 'Hợp tác với Đại học Quốc gia Hà Nội trong nghiên cứu khoa học',
    excerpt: 'Chương trình hợp tác nghiên cứu sẽ tập trung vào các giải pháp công nghệ xanh...',
    date: '15/02/2024',
    category: 'Nghiên cứu',
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Nghiên cứu & Phát triển VLC Group',
    readTime: '4 phút đọc',
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group và Đại học Quốc gia Hà Nội vừa ký kết thỏa thuận hợp tác nghiên cứu khoa học
        trong lĩnh vực công nghệ xanh và năng lượng tái tạo.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Nội dung hợp tác</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chương trình hợp tác bao gồm:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Nghiên cứu công nghệ năng lượng mặt trời hiệu suất cao</li>
        <li>Phát triển giải pháp lưu trữ năng lượng</li>
        <li>Đào tạo nhân lực chất lượng cao</li>
        <li>Chuyển giao công nghệ từ trường đại học sang doanh nghiệp</li>
      </ul>
    `,
    tags: ['Nghiên cứu', 'Đại học', 'Công nghệ xanh', 'Đào tạo'],
    relatedNews: [7, 8, 10]
  },
  {
    id: 10,
    title: 'VLC Group đạt doanh thu kỷ lục trong quý IV/2023',
    excerpt: 'Với doanh thu tăng 35% so với cùng kỳ, VLC Group tiếp tục khẳng định vị thế dẫn đầu...',
    date: '10/02/2024',
    category: 'Tài chính',
    image: 'https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Tài chính VLC Group',
    readTime: '3 phút đọc',
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group vừa công bố kết quả kinh doanh quý IV/2023 với doanh thu đạt mức kỷ lục,
        tăng 35% so với cùng kỳ năm trước.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Kết quả kinh doanh</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Các chỉ số chính:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Doanh thu: Tăng 35% so với cùng kỳ</li>
        <li>Lợi nhuận: Tăng 28% so với cùng kỳ</li>
        <li>Tổng tài sản: Đạt 5.000 tỷ đồng</li>
        <li>Vốn chủ sở hữu: Tăng 15% so với đầu năm</li>
      </ul>
    `,
    tags: ['Tài chính', 'Doanh thu', 'Kỷ lục', 'Thành công'],
    relatedNews: [9, 11, 12]
  },
  {
    id: 11,
    title: 'Triển khai hệ thống quản lý chất lượng ISO 9001:2015',
    excerpt: 'VLC Group hoàn thành triển khai hệ thống quản lý chất lượng trên toàn bộ các đơn vị...',
    date: '05/02/2024',
    category: 'Chất lượng',
    image: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Chất lượng VLC Group',
    readTime: '4 phút đọc',
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group đã hoàn thành việc triển khai hệ thống quản lý chất lượng ISO 9001:2015
        trên toàn bộ các đơn vị thành viên.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Quy trình triển khai</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Việc triển khai được thực hiện theo các giai đoạn:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Đánh giá hiện trạng hệ thống quản lý</li>
        <li>Thiết kế và triển khai hệ thống mới</li>
        <li>Đào tạo nhân sự</li>
        <li>Kiểm tra và cấp chứng nhận</li>
      </ul>
    `,
    tags: ['ISO 9001', 'Chất lượng', 'Quản lý', 'Chứng nhận'],
    relatedNews: [10, 12]
  },
  {
    id: 12,
    title: 'Khởi công dự án nhà máy điện gió ngoài khơi 200MW',
    excerpt: 'Dự án được kỳ vọng sẽ đóng góp đáng kể vào lưới điện quốc gia trong tương lai...',
    date: '01/02/2024',
    category: 'Dự án',
    image: 'https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Dự án VLC Group',
    readTime: '5 phút đọc',
    type: 'internal',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group chính thức khởi công dự án nhà máy điện gió ngoài khơi 200MW tại tỉnh Bạc Liêu.
        Đây là dự án năng lượng tái tạo quy mô lớn đầu tiên của công ty trong lĩnh vực điện gió.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Quy mô dự án</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Dự án có các thông số kỹ thuật chính:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Công suất lắp đặt: 200MW</li>
        <li>Số lượng turbine: 40 turbine</li>
        <li>Khu vực triển khai: 10km²</li>
        <li>Thời gian hoàn thành: 24 tháng</li>
      </ul>
    `,
    tags: ['Điện gió', 'Ngoài khơi', 'Năng lượng tái tạo', 'Dự án'],
    relatedNews: [10, 11]
  },

  // Public News (Community news)
  {
    id: 4,
    title: 'Trao tặng 1000 suất học bổng cho học sinh vượt khó',
    excerpt: 'Chương trình "Sáng tỏ tương lai" đã trao học bổng cho học sinh xuất sắc tại 10 tỉnh thành...',
    date: '12/03/2024',
    category: 'Giáo dục',
    image: 'https://images.pexels.com/photos/8197525/pexels-photo-8197525.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Nhân sự VLC Group',
    readTime: '4 phút đọc',
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Trong khuôn khổ chương trình "Sáng tỏ tương lai", VLC Group đã trao tặng 1000 suất học bổng
        cho học sinh vượt khó trên toàn quốc.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Tiêu chí xét chọn</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
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
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group đã phối hợp với chính quyền địa phương và cộng đồng trồng 10.000 cây xanh
        tại các tỉnh miền Trung Việt Nam.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Các loại cây trồng</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
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
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        Đoàn y bác sĩ của VLC Group đã tổ chức chương trình khám bệnh miễn phí cho 2000 người dân
        tại các vùng cao của tỉnh Hà Giang và Tuyên Quang.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Dịch vụ y tế cung cấp</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chương trình cung cấp các dịch vụ khám chữa bệnh cơ bản, tư vấn sức khỏe,
        và cấp phát thuốc miễn phí cho người dân.
      </p>
    `,
    tags: ['Y tế', 'Vùng cao', 'Trách nhiệm xã hội'],
    relatedNews: [4, 5]
  },
  {
    id: 13,
    title: 'Chương trình "Nâng bước em tới trường" tại vùng sâu vùng xa',
    excerpt: 'VLC Group phối hợp với địa phương xây dựng 50 phòng học cho các trường tiểu học...',
    date: '25/02/2024',
    category: 'Giáo dục',
    image: 'https://images.pexels.com/photos/8197526/pexels-photo-8197526.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Trách nhiệm Xã hội VLC Group',
    readTime: '4 phút đọc',
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group phối hợp với UBND các tỉnh xây dựng 50 phòng học kiên cố cho các trường tiểu học
        tại vùng sâu vùng xa trên toàn quốc.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Quy mô chương trình</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chương trình bao gồm:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Xây dựng 50 phòng học kiên cố</li>
        <li>Trang bị bàn ghế, thiết bị dạy học</li>
        <li>Hỗ trợ giáo viên và sách vở</li>
        <li>Đào tạo nâng cao chất lượng giảng dạy</li>
      </ul>
    `,
    tags: ['Giáo dục', 'Vùng sâu', 'Phòng học', 'Trách nhiệm xã hội'],
    relatedNews: [4, 14, 15]
  },
  {
    id: 14,
    title: 'Hỗ trợ xây dựng 20 giếng khoan nước sạch cho vùng khô hạn',
    excerpt: 'Giải quyết vấn đề thiếu nước sinh hoạt cho hơn 5000 hộ dân tại các tỉnh miền Trung...',
    date: '20/02/2024',
    category: 'Nước sạch',
    image: 'https://images.pexels.com/photos/1072825/pexels-photo-1072825.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Môi trường VLC Group',
    readTime: '3 phút đọc',
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group đã hỗ trợ xây dựng 20 giếng khoan nước sạch tại các tỉnh miền Trung,
        giải quyết vấn đề thiếu nước sinh hoạt cho hơn 5000 hộ dân.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Kết quả đạt được</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chương trình đã mang lại:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Nước sạch cho 5000 hộ dân</li>
        <li>Cải thiện sức khỏe cộng đồng</li>
        <li>Phát triển kinh tế địa phương</li>
        <li>Tạo mô hình nhân rộng</li>
      </ul>
    `,
    tags: ['Nước sạch', 'Miền Trung', 'Khô hạn', 'Cộng đồng'],
    relatedNews: [5, 13, 15]
  },
  {
    id: 15,
    title: 'Đào tạo nghề miễn phí cho 500 thanh niên nông thôn',
    excerpt: 'Chương trình đào tạo kỹ năng nghề nghiệp nhằm tạo cơ hội việc làm bền vững...',
    date: '15/02/2024',
    category: 'Đào tạo',
    image: 'https://images.pexels.com/photos/8197527/pexels-photo-8197527.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Nhân sự VLC Group',
    readTime: '4 phút đọc',
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group tổ chức chương trình đào tạo nghề miễn phí cho 500 thanh niên nông thôn
        tại các tỉnh phía Bắc, tập trung vào các ngành nghề có nhu cầu cao.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Các ngành nghề đào tạo</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chương trình đào tạo các nghề:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Điện công nghiệp và năng lượng tái tạo</li>
        <li>Cơ khí và sửa chữa thiết bị</li>
        <li>Nông nghiệp công nghệ cao</li>
        <li>Kinh doanh và marketing</li>
      </ul>
    `,
    tags: ['Đào tạo', 'Nghề nghiệp', 'Nông thôn', 'Việc làm'],
    relatedNews: [13, 14, 16]
  },
  {
    id: 16,
    title: 'Xây dựng trung tâm y tế tại huyện nghèo',
    excerpt: 'Trung tâm y tế hiện đại với đầy đủ trang thiết bị khám chữa bệnh...',
    date: '10/02/2024',
    category: 'Y tế',
    image: 'https://images.pexels.com/photos/7579832/pexels-photo-7579832.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Y tế VLC Group',
    readTime: '4 phút đọc',
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group đã xây dựng và bàn giao trung tâm y tế hiện đại tại huyện nghèo của tỉnh Hà Giang,
        phục vụ nhu cầu khám chữa bệnh cho hơn 10.000 người dân địa phương.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Cơ sở vật chất</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Trung tâm y tế được trang bị:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Phòng khám bệnh hiện đại</li>
        <li>Thiết bị y tế tiên tiến</li>
        <li>Nhà thuốc đạt chuẩn</li>
        <li>Khu vực cấp cứu 24/7</li>
      </ul>
    `,
    tags: ['Y tế', 'Trung tâm', 'Huyện nghèo', 'Cơ sở vật chất'],
    relatedNews: [6, 15, 17]
  },
  {
    id: 17,
    title: 'Phát triển mô hình nông nghiệp sạch tại các tỉnh phía Bắc',
    excerpt: 'Hỗ trợ nông dân chuyển đổi sang phương thức canh tác bền vững và thân thiện môi trường...',
    date: '05/02/2024',
    category: 'Nông nghiệp',
    image: 'https://images.pexels.com/photos/1072826/pexels-photo-1072826.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Nông nghiệp VLC Group',
    readTime: '5 phút đọc',
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group triển khai chương trình phát triển mô hình nông nghiệp sạch tại 5 tỉnh phía Bắc,
        hỗ trợ nông dân chuyển đổi sang phương thức canh tác bền vững.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Mô hình nông nghiệp sạch</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chương trình bao gồm:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Hỗ trợ giống cây trồng sạch</li>
        <li>Đào tạo kỹ thuật canh tác</li>
        <li>Cung cấp phân bón hữu cơ</li>
        <li>Xây dựng chuỗi giá trị bền vững</li>
      </ul>
    `,
    tags: ['Nông nghiệp', 'Sạch', 'Bền vững', 'Phía Bắc'],
    relatedNews: [16, 18]
  },
  {
    id: 18,
    title: 'Chương trình bảo vệ động vật hoang dã quý hiếm',
    excerpt: 'Hợp tác với các tổ chức quốc tế bảo tồn đa dạng sinh học Việt Nam...',
    date: '01/02/2024',
    category: 'Môi trường',
    image: 'https://images.pexels.com/photos/1072827/pexels-photo-1072827.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Môi trường VLC Group',
    readTime: '4 phút đọc',
    type: 'public',
    content: `
      <p class="text-lg text-gray-700 leading-relaxed mb-6">
        VLC Group hợp tác với các tổ chức quốc tế triển khai chương trình bảo vệ động vật hoang dã
        quý hiếm tại các khu bảo tồn thiên nhiên Việt Nam.
      </p>

      <h2 class="text-2xl font-bold text-green-800 mb-4">Các hoạt động bảo tồn</h2>
      <p class="text-gray-700 leading-relaxed mb-6">
        Chương trình tập trung vào:
      </p>
      <ul class="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
        <li>Giám sát và bảo vệ các loài quý hiếm</li>
        <li>Phục hồi hệ sinh thái</li>
        <li>Nâng cao nhận thức cộng đồng</li>
        <li>Hợp tác quốc tế trong bảo tồn</li>
      </ul>
    `,
    tags: ['Động vật', 'Hoang dã', 'Bảo tồn', 'Môi trường'],
    relatedNews: [5, 17]
  }
];

// Helper functions to get news by type
export const getInternalNews = (): NewsItem[] => {
  return newsData.filter(item => item.type === 'internal');
};

export const getPublicNews = (): NewsItem[] => {
  return newsData.filter(item => item.type === 'public');
};

export const getNewsById = (id: number): NewsItem | undefined => {
  return newsData.find(item => item.id === id);
};

export const getRelatedNews = (currentId: number, relatedIds: number[]): NewsItem[] => {
  return newsData.filter(item => relatedIds.includes(item.id) && item.id !== currentId);
};
