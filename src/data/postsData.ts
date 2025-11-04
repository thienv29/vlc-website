// Unified posts data - combines services and news
export interface PostItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: 'Dịch vụ' | 'Tin tức'; // Main categories
  subCategory?: 'internal' | 'public'; // For news items
  image: string;
  author: string;
  readTime: string;
  content: string;
  tags: string[];
  relatedPosts: number[];
}

export const postsData: PostItem[] = [
  // Dịch vụ (Services)
  {
    id: 1,
    title: 'Tổng thầu xử lý môi trường (EPC) - Dịch vụ toàn diện từ Văn Lang',
    excerpt: 'Công ty môi trường Văn Lang - Tổng thầu EPC hàng đầu Việt Nam với 19 năm kinh nghiệm trong xử lý nước thải và môi trường...',
    date: '25/03/2024',
    category: 'Dịch vụ',
    image: 'https://images.pexels.com/photos/159304/network-cables-159304.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang',
    readTime: '8 phút đọc',
    content: `
      <h1>Tổng thầu xử lý môi trường (EPC)</h1>

      <p><strong>NHÀ THẦU XỬ LÝ MÔI TRƯỜNG UY TÍN VÀ CHẤT LƯỢNG HÀNG ĐẦU TẠI VIỆT NAM</strong></p>

      <h2>CÔNG TY MÔI TRƯỜNG HÀNG ĐẦU VIỆT NAM</h2>

      <p>Với kinh nghiệm hơn 19 năm xây dựng và phát triển, <strong>VĂN LANG</strong> đã trở thành thương hiệu uy tín và là <strong>Tổng thầu EPC</strong> hàng đầu Việt Nam về Công nghệ Môi trường xử lý nước thải, nước cấp. Thương hiệu <strong>VĂN LANG</strong> gắn liền với những dự án lớn của Chủ đầu tư trong và ngoài nước; các Tập đoàn đa quốc gia...</p>

      <p><strong>VĂN LANG</strong> đã trở thành một trong 5 công ty môi trường hàng đầu Việt Nam, chúng tôi tự hào mang đến những sản phẩm và dịch vụ tối ưu nhất giúp khách hàng an tâm, bền vững sản xuất, phát triển kinh tế.</p>

      <h2>DỰ ÁN TIÊU BIỂU - QUY MÔ LỚN NHẤT ĐÔNG NAM Á</h2>

      <p>Top 5 công ty môi trường tư nhân hàng đầu Việt Nam. <strong>VĂN LANG</strong> vinh dự trở thành <strong>Tổng Thầu EPC</strong> của các <strong>Dự Án với Quy mô lớn nhất nhì Đông Nam Á</strong> nổi bật như:</p>

      <ul>
        <li><strong>Nhà máy xử lý nước thải KCN NHƠN TRẠCH - 6A - Tổng công suất: 120.000 m³/ngày.đêm. Module 1 - Q = 40.000 m³/ngày.đêm</strong></li>
        <li><strong>Hệ Thống xử lý nước thải KCN Dệt Nhuộm TMTC - Tổng công suất: 40.000 m³/ngày.đêm</strong></li>
        <li><strong>Nhà máy xử lý nước thải KCN Long Bình (KCN Dệt Nhuộm) - 10.600 m³/ngày.đêm</strong></li>
        <li><strong>Hệ Thống xử lý nước thải Dệt nhuộm Cty Chyang Sheng (GĐ 3) Công suất 7.000m³/ngày.đêm</strong></li>
        <li><strong>Hệ Thống xử lý nước thải Sigma Việt Nam (Long An) Công suất 4.900m³/ngày.đêm</strong></li>
        <li><strong>Hệ Thống xử lý nước thải nhà máy Dệt Đại Hào Công suất 3.500m³/ngày.đêm</strong></li>
        <li><strong>Hệ Thống xử lý nước thải nhà máy giấy bình minh Công suất 3.500m³/ngày.đêm</strong></li>
        <li><strong>Hệ Thống xử lý nước thải Dệt may Hoa Sen Công suất 1.000m³/ngày.đêm</strong></li>
      </ul>

      <h2>CƠ SỞ VẬT CHẤT HIỆN ĐẠI - ĐÁP ỨNG NHANH TIẾN ĐỘ YÊU CẦU</h2>

      <p>Với Hơn 19 năm hình thành và phát triển <strong>VĂN LANG</strong> tự hào là một trong những đơn vị dẫn đầu trong lĩnh vực Xử Lý Nước Thải với Cơ Sở Vật Chất đầy đủ, hiện đại cùng dàn cơ giới thiết bị tiên tiến và đặc biệt là nhà xưởng <strong>VĂN LANG</strong> với diện tích lên tới 3000 m² do đó các yêu cầu của khách hàng cả về <strong>"TIẾN ĐỘ cùng với CHẤT LƯỢNG"</strong> đều được chúng tôi đáp ứng một cách <strong>"NHANH CHÓNG VÀ HIỆU QUẢ"</strong> nhất.</p>

      <p><strong>VĂN LANG</strong> luôn hướng đến là <strong>TỔNG THẦU EPC</strong> trong lĩnh vực xử lý môi trường số một Việt Nam. Chúng tôi nhận thấy thị trường trong nước và nước ngoài luôn rộng cửa đón chào những doanh nghiệp biết tận dụng thời cơ, làm chủ công nghệ để đáp ứng được các yêu cầu của khách hàng. Vì vậy, <strong>VĂN LANG</strong> luôn quan tâm và tích cực đầu tư trang bị các máy móc công nghệ mới để luôn nâng cao và đáp ứng được các yêu cầu khác nhau của Quý Khách Hàng!</p>

      <h2>VĂN LANG KHÁC BIỆT VỚI CÁC CÔNG TY MÔI TRƯỜNG KHÁC</h2>

      <p>Chúng tôi khác biệt bởi: <strong>"NĂNG LỰC QUẢN LÝ VÀ TỔ CHỨC THI CÔNG"</strong></p>

      <p>Suốt chặng đường hơn 19 năm hình thành và phát triển, trải qua biết bao thăng trầm và sóng gió <strong>Văn Lang</strong> đã khẳng định được vị thế của mình trong lĩnh vực môi trường nói chung và lĩnh vực Xử Lý Nước Thải nói riêng. Chúng tôi luôn luôn thực hiện theo 4 giá trị như sau: <strong>"CHẤT LƯỢNG - TIẾN ĐỘ - GIÁ THÀNH HỢP LÝ - TẬN TÂM PHỤC VỤ"!</strong></p>

      <h2>HỆ THỐNG PHÒNG BAN LIÊN KẾT CHẶT CHẼ</h2>

      <p>Về nhân lực, <strong>VĂN LANG</strong> tự hào với đội ngũ nhân sự Chất lượng và Hệ thống các phòng ban liên kết chặt chẽ với nhau trong mọi Dự Án, mọi công trình để chất lượng luôn được đảm bảo một cách tốt nhất và đạt hiệu quả nhất. Chúng tôi hiểu con người chính là giá trị cốt lõi của thành công hiện tại và tương lai nên luôn luôn cải tiến môi trường làm việc, chính sách đãi ngộ để nâng cao đời sống vật chất và tinh thần của cán bộ công nhân viên.</p>

      <p>Với sự phát triển nhanh chóng của công ty và thị trường trong nước <strong>VĂN LANG</strong> luôn chú trọng đào tạo, nâng cao trình độ lao động trong công ty, không chỉ về chuyên môn nghiệp vụ và còn về những kỹ năng mềm trong công việc và kỹ năng quản lý để có thể đáp ứng được yêu cầu công việc và thăng tiến.</p>

      <p>Kết quả của những nỗ lực ấy thể hiện rõ nhất qua sự gắn bó của cán bộ nhân viên với công ty. Nhờ đó, công ty luôn có được đội ngũ nhân lực lành nghề, giàu kinh nghiệm và phong phú. Nhân viên coi công ty như ngôi nhà thứ 2 của mình, đồng nghiệp như người thân, của cải của công ty cũng như tài sản của mình nên vô cùng trân trọng và gìn giữ. Do vậy, các hoạt động phong trào trong công ty luôn được hưởng ứng nhiệt tình và sôi nổi. Đó chính là điều mà mọi nhà quản lý có Tâm luôn mong muốn có được.</p>

      <h2>CAM KẾT VỚI CHỦ ĐẦU TƯ</h2>

      <p>Công ty môi trường Văn Lang với bề dày kinh nghiệm 19 năm, là nhà thầu uy tín, Tổng Thầu EPC uy tín trong lĩnh vực xử lý môi trường, là nhà thầu xử lý môi trường hàng đầu tại Việt Nam. Chúng tôi tự tin mang đến cho Quý Khách Hàng những công trình đúng chất lượng và hiệu quả xử lý tốt nhất. <strong>Cam kết với chủ đầu tư cả về tiến độ lẫn chất lượng nhà thầu.</strong></p>

      <h2>DỊCH VỤ TƯ VẤN CHUYÊN SÂU</h2>

      <p>Để được tư vấn cách thức xử lý nước thải nhiễm phèn, tư vấn các loại hóa chất xử lý nước nhiễm phèn, liều lượng sử dụng hóa chất xử lý nước nhiễm phèn, vận hành hệ thống xử lý nước nhiễm phèn cho xử lý nước;</p>

      <p>Quý Khách Hàng có nhu cầu Tư vấn các thủ tục môi trường, Lập giấy phép đăng kinh doanh, giấy phép đầu tư, Lập báo cáo đánh giá tác động môi trường (ĐTM), Lập đề án bảo vệ môi trường, xin giấy phép xả thải, xin giấy phép đăng ký nước ngầm, đăng ký chủ nguồn chất thải, lập báo cáo hoàn thành công trình, biện pháp bảo vệ môi trường, lập báo cáo giám sát môi trường...</p>

      <p>Tư Vấn Thiết kế hệ thống xử lý nước thải giấy, Tính toán hệ thống xử lý nước thải giấy, Bột giấy, Bản vẽ Cad xử lý nước thải giấy, Cấu tạo Thiết bị xử lý nước, Báo giá hệ thống xử lý nước thải bột giấy, Chi phí xây dựng hệ thống xử nước thải giấy, Tính Kinh tế Xử lý nước thải Dệt Nhuộm, Xử lý nước thải Thủy Sản, Xử lý nước cấp, Xử lý nước Khu Công Nghiệp, Xử lý nước thải chế biến giấy, Xử lý nước thải bột giấy, Xử lý nước thải Thủy Sản, Xử lý nước thải chế biến sữa, Xử lý nước thải váng sữa, Xử lý nước thải thực phẩm, Xử lý nước thải có hàm lượng chất lơ lửng cao...</p>

      <p>Hỗ trợ tư vấn công trình, Xây dựng Hệ thống xử lý nước thải, Xử lý nước cấp, Tổng Thầu EPC, Tổng Thầu Xây Dựng, Tư Vấn Môi Trường, Đánh giá tác động môi trường (ĐTM), Thủ tục môi trường, Hồ sơ môi trường, Cố vấn môi trường, Tư vấn giám sát môi trường, Vận hành hệ thống xử lý nước thải, Cải tạo Hệ thống xử lý nước thải, Kiểm tra hỗ trợ tư vấn miễn phí công trình hiện hữu tại nhà máy...</p>

      <h2>THÔNG TIN LIÊN HỆ</h2>

      <p><strong>Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang</strong></p>
      <p><strong>Địa chỉ:</strong> 1/1 đường số 5, Phường 7, Quận Gò Vấp, TPHCM</p>
      <p><strong>Hotline:</strong> 0946 758 660 - Mr. Hiếu hoặc 0918 203 065 - Mr. Long</p>
      <p><strong>Email:</strong> vanlang@vlc.vn - <a href="mailto:congtymoitruongvanlang@gmail.com">congtymoitruongvanlang@gmail.com</a></p>
      <p><strong>Website:</strong> <a href="http://vlc.vn" target="_blank">vlc.vn</a></p>
      <p><strong>Fanpage:</strong> <a href="https://facebook.com/vlc.vn" target="_blank">facebook.com/vlc.vn</a></p>
      <p><strong>Youtube:</strong> <a href="https://www.youtube.com/channel/UC0AzgJssqlZu8m6k4o3iCAw?view_as=subscriber" target="_blank">youtube.com/channel/UC0AzgJssqlZu8m6k4o3iCAw?view_as=subscriber</a></p>

      <div style="text-align: center; margin: 20px 0;">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/FLBNxBAKcjU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <p><em>Liên hệ ngay hôm nay để được tư vấn miễn phí và nhận báo giá chi tiết cho dự án của Quý Khách Hàng!</em></p>
    `,
    tags: ['EPC', 'Xử lý nước thải', 'Môi trường', 'Tổng thầu', 'Văn Lang'],
    relatedPosts: [2, 3, 4]
  },
  {
    id: 2,
    title: 'Dịch vụ bảo trì và vận hành - Đảm bảo hiệu suất tối ưu',
    excerpt: 'Dịch vụ bảo trì chuyên nghiệp giúp duy trì hiệu suất và tuổi thọ của các hệ thống năng lượng...',
    date: '18/03/2024',
    category: 'Dịch vụ',
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
    relatedPosts: [1, 3, 4]
  },
  {
    id: 3,
    title: 'Tư vấn môi trường - Giải pháp bền vững cho doanh nghiệp',
    excerpt: 'Dịch vụ tư vấn môi trường chuyên nghiệp giúp doanh nghiệp tuân thủ pháp luật và phát triển bền vững...',
    date: '16/03/2024',
    category: 'Dịch vụ',
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
    relatedPosts: [1, 2, 4]
  },
  {
    id: 4,
    title: 'Sản phẩm và công nghệ tiên tiến - Nâng tầm hiệu quả sản xuất',
    excerpt: 'Danh mục sản phẩm và công nghệ tiên tiến giúp nâng cao hiệu quả và chất lượng sản xuất...',
    date: '14/03/2024',
    category: 'Dịch vụ',
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
    relatedPosts: [1, 2, 3]
  },

  // Tin tức nội bộ (Internal News)
  {
    id: 5,
    title: 'VLC Group ký kết hợp tác chiến lược với tập đoàn năng lượng quốc tế',
    excerpt: 'Thỏa thuận hợp tác sẽ mở ra cơ hội phát triển các dự án năng lượng tái tạo quy mô lớn...',
    date: '15/03/2024',
    category: 'Tin tức',
    subCategory: 'internal',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Truyền thông VLC Group',
    readTime: '5 phút đọc',
    content: `
      <h1>VLC Group ký kết hợp tác chiến lược</h1>

      <p>VLC Group vừa chính thức ký kết thỏa thuận hợp tác chiến lược với một tập đoàn năng lượng quốc tế hàng đầu. Thỏa thuận này đánh dấu bước ngoặt quan trọng trong chiến lược phát triển bền vững của công ty.</p>

      <h2>Nội dung hợp tác</h2>
      <p>Hai bên cam kết hợp tác trong các lĩnh vực:</p>
      <ul>
        <li>Phát triển các dự án năng lượng tái tạo quy mô lớn</li>
        <li>Chuyển giao công nghệ xử lý nước thải tiên tiến</li>
        <li>Đào tạo và phát triển nguồn nhân lực</li>
        <li>Nghiên cứu chung về các giải pháp môi trường bền vững</li>
      </ul>

      <h2>Tầm quan trọng của thỏa thuận</h2>
      <p>Ông Nguyễn Văn A, Tổng Giám đốc VLC Group, chia sẻ: "Đây là cơ hội tuyệt vời để chúng tôi tiếp cận với công nghệ tiên tiến nhất trên thế giới và đóng góp nhiều hơn nữa cho sự nghiệp bảo vệ môi trường Việt Nam."</p>

      <blockquote>
        <p>"Hợp tác này không chỉ mang lại lợi ích kinh tế mà còn góp phần bảo vệ môi trường và phát triển bền vững."</p>
        <cite>- Ông Nguyễn Văn A, Tổng Giám đốc VLC Group</cite>
      </blockquote>

      <h2>Kế hoạch triển khai</h2>
      <p>Thỏa thuận sẽ được triển khai theo giai đoạn với mục tiêu cụ thể:</p>

      <h3>Giai đoạn 1</h3>
      <p>2024-2025: Chuyển giao công nghệ</p>

      <h3>Giai đoạn 2</h3>
      <p>2025-2027: Triển khai dự án chung</p>

      <h3>Giai đoạn 3</h3>
      <p>2027+: Mở rộng hợp tác</p>

      <p>VLC Group cam kết sẽ nỗ lực hết mình để thực hiện thành công thỏa thuận hợp tác này, đóng góp tích cực cho sự nghiệp bảo vệ môi trường và phát triển bền vững của Việt Nam.</p>
    `,
    tags: ['Hợp tác', 'Năng lượng tái tạo', 'Công nghệ', 'Môi trường'],
    relatedPosts: [6, 7, 8]
  },
  {
    id: 6,
    title: 'Khánh thành nhà máy điện mặt trời 100MW tại Ninh Thuận',
    excerpt: 'Dự án được hoàn thành đúng tiến độ với công nghệ tiên tiến và hiệu suất cao...',
    date: '10/03/2024',
    category: 'Tin tức',
    subCategory: 'internal',
    image: 'https://images.pexels.com/photos/371900/pexels-photo-371900.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Kỹ thuật VLC Group',
    readTime: '4 phút đọc',
    content: `
      <h1>Khánh thành nhà máy điện mặt trời 100MW</h1>

      <p>Sau 18 tháng thi công, VLC Group đã chính thức khánh thành nhà máy điện mặt trời 100MW tại Ninh Thuận. Đây là một trong những dự án năng lượng tái tạo quy mô lớn mà công ty đã thực hiện.</p>

      <h2>Quy mô và công nghệ</h2>
      <p>Nhà máy sử dụng công nghệ tấm pin mặt trời thế hệ mới nhất với hiệu suất chuyển đổi lên đến 22%. Tổng công suất lắp đặt đạt 100MW, đủ cung cấp điện cho khoảng 50.000 hộ gia đình.</p>

      <h2>Tác động kinh tế</h2>
      <p>Dự án tạo ra hơn 200 việc làm trực tiếp và hàng nghìn việc làm gián tiếp trong khu vực. Ngoài ra, nhà máy còn góp phần giảm phát thải CO2 khoảng 150.000 tấn mỗi năm.</p>

      <p>Đây là dấu mốc quan trọng trong chiến lược phát triển năng lượng sạch của VLC Group.</p>
    `,
    tags: ['Điện mặt trời', 'Năng lượng tái tạo', 'Ninh Thuận'],
    relatedPosts: [5, 7, 9]
  },
  {
    id: 7,
    title: 'VLC Group nhận chứng nhận ISO 14001:2015 về quản lý môi trường',
    excerpt: 'Cam kết mạnh mẽ trong việc bảo vệ môi trường và phát triển bền vững...',
    date: '05/03/2024',
    category: 'Tin tức',
    subCategory: 'internal',
    image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Chất lượng VLC Group',
    readTime: '3 phút đọc',
    content: `
      <h1>Nhận chứng nhận ISO 14001:2015</h1>

      <p>VLC Group vinh dự nhận chứng nhận ISO 14001:2015 về hệ thống quản lý môi trường, khẳng định cam kết mạnh mẽ của công ty trong việc bảo vệ môi trường.</p>

      <h2>Ý nghĩa của chứng nhận</h2>
      <p>Chứng nhận ISO 14001:2015 là tiêu chuẩn quốc tế về hệ thống quản lý môi trường, chứng minh khả năng của tổ chức trong việc quản lý tác động môi trường một cách có hệ thống.</p>

      <p>Đây là minh chứng cho sự cam kết lâu dài của VLC Group với phát triển bền vững và bảo vệ môi trường.</p>
    `,
    tags: ['ISO 14001', 'Quản lý môi trường', 'Chứng nhận'],
    relatedPosts: [5, 6, 8]
  },

  // Tin tức công cộng (Public News)
  {
    id: 8,
    title: 'Trao tặng 1000 suất học bổng cho học sinh vượt khó',
    excerpt: 'Chương trình "Sáng tỏ tương lai" đã trao học bổng cho học sinh xuất sắc tại 10 tỉnh thành...',
    date: '12/03/2024',
    category: 'Tin tức',
    subCategory: 'public',
    image: 'https://images.pexels.com/photos/8197525/pexels-photo-8197525.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Phòng Nhân sự VLC Group',
    readTime: '4 phút đọc',
    content: `
      <h1>Trao tặng 1000 suất học bổng</h1>

      <p>Trong khuôn khổ chương trình "Sáng tỏ tương lai", VLC Group đã trao tặng 1000 suất học bổng cho học sinh vượt khó trên toàn quốc.</p>

      <h2>Tiêu chí xét chọn</h2>
      <p>Học sinh được xét chọn dựa trên các tiêu chí: thành tích học tập, hoàn cảnh gia đình khó khăn, và tinh thần vượt khó vươn lên trong học tập.</p>

      <p>Chương trình nhằm đóng góp cho sự nghiệp giáo dục và phát triển nguồn nhân lực chất lượng cao cho đất nước.</p>
    `,
    tags: ['Học bổng', 'Giáo dục', 'Trách nhiệm xã hội'],
    relatedPosts: [9, 10]
  },
  {
    id: 9,
    title: 'Chiến dịch trồng 10,000 cây xanh tại miền Trung',
    excerpt: 'Hưởng ứng chiến dịch "Vì một Việt Nam xanh", VLC Group cùng cộng đồng trồng cây...',
    date: '08/03/2024',
    category: 'Tin tức',
    subCategory: 'public',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Trách nhiệm Xã hội VLC Group',
    readTime: '3 phút đọc',
    content: `
      <h1>Chiến dịch trồng 10,000 cây xanh</h1>

      <p>VLC Group đã phối hợp với chính quyền địa phương và cộng đồng trồng 10.000 cây xanh tại các tỉnh miền Trung Việt Nam.</p>

      <h2>Các loại cây trồng</h2>
      <p>Chương trình tập trung trồng các loại cây bản địa có khả năng chịu hạn tốt như: keo lai, bạch đàn, và các loại cây ăn quả lâu năm.</p>

      <p>Sáng kiến này góp phần cải thiện môi trường sống và ứng phó với biến đổi khí hậu.</p>
    `,
    tags: ['Trồng cây', 'Môi trường', 'Miền Trung'],
    relatedPosts: [8, 10]
  },
  {
    id: 10,
    title: 'Khám bệnh miễn phí cho 2000 người dân vùng cao',
    excerpt: 'Đoàn y bác sĩ VLC Group đã mang y tế đến với đồng bào các dân tộc thiểu số...',
    date: '01/03/2024',
    category: 'Tin tức',
    subCategory: 'public',
    image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Bộ phận Y tế VLC Group',
    readTime: '4 phút đọc',
    content: `
      <h1>Khám bệnh miễn phí cho 2000 người dân</h1>

      <p>Đoàn y bác sĩ của VLC Group đã tổ chức chương trình khám bệnh miễn phí cho 2000 người dân tại các vùng cao của tỉnh Hà Giang và Tuyên Quang.</p>

      <h2>Dịch vụ y tế cung cấp</h2>
      <p>Chương trình cung cấp các dịch vụ khám chữa bệnh cơ bản, tư vấn sức khỏe, và cấp phát thuốc miễn phí cho người dân.</p>

      <p>Đây là hoạt động ý nghĩa nhằm nâng cao chất lượng cuộc sống cho đồng bào vùng sâu vùng xa.</p>
    `,
    tags: ['Y tế', 'Vùng cao', 'Trách nhiệm xã hội'],
    relatedPosts: [8, 9]
  }
];

// Helper functions
export const getPostById = (id: number): PostItem | undefined => {
  return postsData.find(item => item.id === id);
};

export const getRelatedPosts = (currentId: number, relatedIds: number[]): PostItem[] => {
  return postsData.filter(item => relatedIds.includes(item.id) && item.id !== currentId);
};

export const getPostsByCategory = (category: 'Dịch vụ' | 'Tin tức'): PostItem[] => {
  return postsData.filter(item => item.category === category);
};

export const getInternalNews = (): PostItem[] => {
  return postsData.filter(item => item.category === 'Tin tức' && item.subCategory === 'internal');
};

export const getPublicNews = (): PostItem[] => {
  return postsData.filter(item => item.category === 'Tin tức' && item.subCategory === 'public');
};

export const getServices = (): PostItem[] => {
  return postsData.filter(item => item.category === 'Dịch vụ');
};
