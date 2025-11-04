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
      <h1>Dịch vụ EPC toàn diện</h1>

      <p><strong>Dịch vụ EPC (Engineering, Procurement và Construction)</strong> là giải pháp "trọn gói" hàng đầu mà VLC Group cung cấp cho các doanh nghiệp muốn đầu tư vào các dự án năng lượng tái tạo, công nghiệp và hạ tầng.</p>

      <h2>Tại sao chọn VLC Group?</h2>
      <ul>
        <li>Giảm 30-40% chi phí so với phương thức triển khai riêng lẻ</li>
        <li>Tiết kiệm 25% thời gian triển khai dự án</li>
        <li>Đảm bảo chất lượng và tiến độ với hợp đồng trách nhiệm</li>
      </ul>

      <h2>Quy trình EPC 4 bước</h2>
      <p>VLC Group triển khai dự án theo quy trình chuẩn quốc tế:</p>

      <h3>Bước 1: Engineering - Thiết kế</h3>
      <ul>
        <li>Phân tích kỹ thuật chi tiết</li>
        <li>Thiết kế tối ưu về mặt kỹ thuật và kinh tế</li>
        <li>Lập hồ sơ thiết kế thi công</li>
        <li>Đánh giá rủi ro và biện pháp phòng ngừa</li>
      </ul>

      <h3>Bước 2: Procurement - Thu mua</h3>
      <ul>
        <li>Lựa chọn nhà cung cấp uy tín</li>
        <li>Đàm phán giá cả tối ưu</li>
        <li>Kiểm soát chất lượng vật tư thiết bị</li>
        <li>Quản lý logistics và giao nhận</li>
      </ul>

      <h3>Bước 3: Construction - Thi công</h3>
      <ul>
        <li>Quản lý đội ngũ thi công chuyên nghiệp</li>
        <li>Giám sát chất lượng 24/7</li>
        <li>Tuân thủ an toàn lao động</li>
        <li>Báo cáo tiến độ hàng tuần</li>
      </ul>

      <h3>Bước 4: Commissioning - Nghiệm thu</h3>
      <ul>
        <li>Nghiệm thu từng hạng mục</li>
        <li>Chạy thử và hiệu chỉnh</li>
        <li>Đào tạo vận hành cho khách hàng</li>
        <li>Bàn giao dự án hoàn chỉnh</li>
      </ul>

      <h2>Tiêu chuẩn chất lượng</h2>
      <ul>
        <li>Tuân thủ các tiêu chuẩn quốc tế ISO 9001:2015</li>
        <li>Đảm bảo an toàn lao động và môi trường</li>
        <li>Kiểm soát chất lượng nghiêm ngặt ở mọi giai đoạn</li>
      </ul>

      <h2>Gói dịch vụ EPC</h2>
      <p>Chúng tôi cung cấp các gói dịch vụ phù hợp với nhu cầu:</p>

      <h3>Gói Cơ bản</h3>
      <p>Thiết kế, thu mua và thi công</p>

      <h3>Gói Nâng cao</h3>
      <p>Bao gồm vận hành và bảo trì</p>

      <h3>Gói Toàn diện</h3>
      <p>Giải pháp trọn gói từ A đến Z</p>

      <h3>Gói Tư vấn</h3>
      <p>Tư vấn và lập kế hoạch dự án</p>

      <h2>Lợi ích của dịch vụ EPC</h2>
      <p>Khách hàng lựa chọn dịch vụ EPC của VLC Group sẽ nhận được:</p>
      <ul>
        <li>Giảm thiểu rủi ro và chi phí phát sinh</li>
        <li>Tiết kiệm thời gian triển khai dự án</li>
        <li>Đảm bảo chất lượng và tiến độ</li>
        <li>Hỗ trợ bảo hành và bảo trì dài hạn</li>
      </ul>

      <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
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
      <h1>Dịch vụ bảo trì và vận hành 24/7</h1>

      <p><strong>Dịch vụ bảo trì và vận hành 24/7</strong> là "lá chắn" bảo vệ hệ thống năng lượng của bạn. Với trung tâm điều khiển hiện đại và đội ngũ kỹ thuật chuyên nghiệp, chúng tôi đảm bảo hệ thống luôn vận hành ổn định, hiệu quả tối ưu và tuổi thọ kéo dài.</p>

      <h2>Thực tế đáng buồn</h2>
      <ul>
        <li>70% hệ thống ngừng hoạt động do thiếu bảo trì định kỳ</li>
        <li>Hiệu suất giảm 20-30% sau 2 năm không bảo trì</li>
        <li>Chi phí sửa chữa khẩn cấp cao gấp 5-10 lần bảo trì định kỳ</li>
      </ul>

      <h2>Hệ thống giám sát thông minh 24/7</h2>
      <p>Trung tâm điều khiển hiện đại của VLC Group với công nghệ AI giám sát tự động:</p>

      <h3>Giám sát liên tục</h3>
      <ul>
        <li>Camera HD quan sát realtime</li>
        <li>Cảm biến nhiệt độ, độ ẩm, rung động</li>
        <li>Giám sát dòng điện, hiệu suất</li>
        <li>AI phát hiện sự cố sớm</li>
      </ul>

      <h3>Phản ứng tức thời</h3>
      <ul>
        <li>Đội kỹ thuật trực 24/7</li>
        <li>Phản ứng trong 30 phút</li>
        <li>Xe kỹ thuật dự phòng</li>
        <li>Linh kiện thay thế dự trữ</li>
      </ul>

      <h2>Bảo trì dự đoán - Công nghệ tiên tiến</h2>
      <p>Sử dụng AI và Big Data để dự đoán và ngăn ngừa sự cố trước khi xảy ra:</p>

      <h3>AI Analytics</h3>
      <p>Phân tích dữ liệu thời gian thực</p>

      <h3>Big Data</h3>
      <p>Dự đoán xu hướng hỏng hóc</p>

      <h3>Predictive</h3>
      <p>Ngăn ngừa sự cố 90%</p>

      <h2>Dịch vụ bảo trì</h2>
      <ul>
        <li>Thay thế linh kiện hao mòn</li>
        <li>Kiểm tra và hiệu chỉnh hệ thống</li>
        <li>Vệ sinh và bảo dưỡng định kỳ</li>
      </ul>

      <h2>Các gói bảo trì</h2>
      <p>VLC Group cung cấp đa dạng các gói bảo trì phù hợp với nhu cầu của khách hàng:</p>

      <h3>Gói Cơ bản</h3>
      <ul>
        <li>Kiểm tra định kỳ hàng tháng</li>
        <li>Bảo trì phòng ngừa</li>
        <li>Hỗ trợ kỹ thuật từ xa</li>
      </ul>

      <h3>Gói Nâng cao</h3>
      <ul>
        <li>Giám sát 24/7</li>
        <li>Bảo trì dự đoán</li>
        <li>Hỗ trợ khẩn cấp</li>
      </ul>

      <h2>Dự án tiêu biểu</h2>
      <ul>
        <li>Nhà máy điện mặt trời 100MW Ninh Thuận</li>
        <li>Hệ thống lọc nước công nghiệp Bình Dương</li>
        <li>Trạm biến áp 110kV Long An</li>
      </ul>

      <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
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
      <h1>Tư vấn môi trường - Giải pháp bền vững</h1>

      <p><strong>"Môi trường là tương lai"</strong> - Với hơn 20 năm kinh nghiệm, VLC Group là đối tác tin cậy giúp doanh nghiệp của bạn "xanh hóa" hoạt động sản xuất, tuân thủ pháp luật và phát triển bền vững.</p>

      <h2>Cơ hội vàng cho doanh nghiệp</h2>
      <ul>
        <li>Tiết kiệm 50-70% chi phí xử phạt vi phạm môi trường</li>
        <li>Nâng cao hình ảnh thương hiệu "xanh" thu hút khách hàng</li>
        <li>Được ưu tiên trong đấu thầu dự án xanh</li>
        <li>Tiếp cận nguồn vốn ưu đãi từ các tổ chức quốc tế</li>
      </ul>

      <h2>Dịch vụ tư vấn môi trường toàn diện</h2>
      <p>VLC Group cung cấp bộ giải pháp tư vấn môi trường 360 độ:</p>

      <h3>Đánh giá tác động môi trường</h3>
      <ul>
        <li>EIA đầy đủ theo quy định pháp luật</li>
        <li>Đánh giá rủi ro môi trường chi tiết</li>
        <li>Đề xuất biện pháp giảm thiểu tối ưu</li>
        <li>Hỗ trợ phê duyệt từ cơ quan chức năng</li>
      </ul>

      <h3>Báo cáo môi trường định kỳ</h3>
      <ul>
        <li>Báo cáo quan trắc môi trường hàng quý</li>
        <li>Báo cáo đánh giá hiệu quả BVMT</li>
        <li>Báo cáo sự cố môi trường (nếu có)</li>
        <li>Tư vấn cải thiện chỉ số môi trường</li>
      </ul>

      <h3>Xử lý nước thải & khí thải</h3>
      <ul>
        <li>Tư vấn công nghệ xử lý tối ưu</li>
        <li>Lựa chọn thiết bị phù hợp</li>
        <li>Thiết kế hệ thống xử lý</li>
        <li>Giám sát hiệu quả vận hành</li>
      </ul>

      <h3>Cấp phép & pháp lý</h3>
      <ul>
        <li>Xin giấy phép xả thải</li>
        <li>Xin giấy phép khai thác nước ngầm</li>
        <li>Tư vấn pháp lý môi trường</li>
        <li>Đại diện làm việc với cơ quan chức năng</li>
      </ul>

      <h2>Quy trình hỗ trợ</h2>
      <p>Quy trình tư vấn môi trường chuyên nghiệp của chúng tôi:</p>
      <ol>
        <li>Khảo sát và thu thập thông tin</li>
        <li>Phân tích và đánh giá tác động</li>
        <li>Đề xuất giải pháp và biện pháp giảm thiểu</li>
        <li>Lập báo cáo và hỗ trợ phê duyệt</li>
      </ol>

      <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
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
      <h1>Sản phẩm và công nghệ tiên tiến</h1>

      <p><strong>"Công nghệ tạo nên sự khác biệt"</strong> - VLC Group là nhà cung cấp giải pháp công nghệ hàng đầu Việt Nam, mang đến các sản phẩm tiên tiến nhất từ các thương hiệu quốc tế.</p>

      <h2>Ưu thế cạnh tranh</h2>
      <ul>
        <li>Công nghệ tiên tiến nhất từ các thương hiệu top đầu thế giới</li>
        <li>Giải pháp tùy chỉnh phù hợp với từng ngành nghề</li>
        <li>Hỗ trợ kỹ thuật 24/7 và bảo hành dài hạn</li>
        <li>Tiết kiệm 20-40% chi phí vận hành so với giải pháp thông thường</li>
      </ul>

      <h2>Danh mục sản phẩm flagship</h2>
      <p>Bộ sưu tập các sản phẩm công nghệ hàng đầu:</p>

      <h3>Hệ thống lọc nước công nghiệp</h3>
      <p>Công nghệ RO tiên tiến, xử lý nước biển thành nước tinh khiết đạt chuẩn WHO</p>
      <ul>
        <li>Công suất: 1-1000 m³/h</li>
        <li>Tiết kiệm: 60% nước thải</li>
      </ul>

      <h3>Thiết bị năng lượng mặt trời</h3>
      <p>Tấm pin thế hệ mới với hiệu suất 22-23%, tuổi thọ lên đến 30 năm</p>
      <ul>
        <li>Hiệu suất: 22-23%</li>
        <li>Bảo hành: 25 năm</li>
      </ul>

      <h3>Hệ thống biến tần</h3>
      <p>Biến tần vector điều khiển, tiết kiệm điện năng lên đến 50%</p>
      <ul>
        <li>Công suất: 0.75-500kW</li>
        <li>Tiết kiệm: 30-50%</li>
      </ul>

      <h2>Công nghệ 4.0 - Tương lai của ngành công nghiệp</h2>

      <h3>AI & Machine Learning</h3>
      <p>Tự động hóa quy trình, tối ưu hóa hiệu suất</p>

      <h3>IoT & Big Data</h3>
      <p>Kết nối thông minh, phân tích dữ liệu realtime</p>

      <h3>Industry 4.0</h3>
      <p>Nhà máy thông minh, sản xuất linh hoạt</p>

      <h3>Cybersecurity</h3>
      <p>Bảo mật hệ thống, an toàn thông tin</p>

      <h2>Công nghệ tiên tiến</h2>
      <p>VLC Group luôn cập nhật và áp dụng các công nghệ tiên tiến nhất:</p>
      <ul>
        <li>Trí tuệ nhân tạo trong tối ưu hóa hệ thống</li>
        <li>Internet of Things cho giám sát từ xa</li>
        <li>Hệ thống giám sát và điều khiển tự động</li>
      </ul>

      <p>Liên hệ với chúng tôi để được tư vấn chi tiết!</p>
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
