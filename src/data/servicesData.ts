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
    title: 'Tổng thầu xử lý môi trường (EPC) - Dịch vụ toàn diện từ Văn Lang',
    excerpt: 'Công ty môi trường Văn Lang - Tổng thầu EPC hàng đầu Việt Nam với 19 năm kinh nghiệm trong xử lý nước thải và môi trường...',
    date: '25/03/2024',
    category: 'Dịch vụ EPC',
    image: '/nhon-trach-6a-120.jpg',
    author: 'Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang',
    readTime: '8 phút đọc',
    content: `
      <h2>Tổng thầu xử lý môi trường (EPC)</h2>

      <p><strong>NHÀ THẦU XỬ LÝ MÔI TRƯỜNG UY TÍN VÀ CHẤT LƯỢNG HÀNG ĐẦU TẠI VIỆT NAM</strong></p>

      <h2>CÔNG TY MÔI TRƯỜNG HÀNG ĐẦU VIỆT NAM</h2>

      <p>Với kinh nghiệm hơn 19 năm xây dựng và phát triển, <strong>VĂN LANG</strong> đã trở thành thương hiệu uy tín và là <strong>Tổng thầu EPC</strong> hàng đầu Việt Nam về Công nghệ Môi trường xử lý nước thải, nước cấp. Thương hiệu <strong>VĂN LANG</strong> gắn liền với những dự án lớn của Chủ đầu tư trong và ngoài nước; các Tập đoàn đa quốc gia...</p>

      <p><strong>VĂN LANG</strong> đã trở thành một trong 5 công ty môi trường hàng đầu Việt Nam, chúng tôi tự hào mang đến những sản phẩm và dịch vụ tối ưu nhất giúp khách hàng an tâm, bền vững sản xuất, phát triển kinh tế.</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/tk-landing-page-web-2.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

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

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/tong-thau-epc.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

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
    relatedNews: [20, 21, 22]
  },
  {
    id: 20,
    title: 'Vận hành - Bảo trì hệ thống xử lý nước thải',
    excerpt: 'Dịch vụ vận hành và bảo trì chuyên nghiệp cho hệ thống xử lý nước cấp, nước thải với đội ngũ kỹ thuật giàu kinh nghiệm...',
    date: '25/03/2024',
    category: 'Vận hành - Bảo trì',
    image: '/landing-page-van-hanh-2.jpg',
    author: 'Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang',
    readTime: '10 phút đọc',
    content: `
      <h2>VẬN HÀNH - BẢO TRÌ</h2>

      <p>Với kinh nghiệm <strong>21 năm</strong> xây dựng và phát triển, <strong>VĂN LANG</strong> đã trở thành thương hiệu uy tín và là <strong>Tổng thầu EPC</strong> hàng đầu Việt Nam về Công nghệ Môi trường xử lý nước thải, nước cấp. Thương hiệu <strong>VĂN LANG</strong> gắn liền với những dự án lớn của Chủ đầu tư trong và ngoài nước; các Tập đoàn đa quốc gia...</p>

      <p><strong>VĂN LANG</strong> đã trở thành một trong 5 công ty môi trường hàng đầu Việt Nam, chúng tôi tự hào mang đến những sản phẩm và dịch vụ tối ưu nhất giúp khách hàng an tâm, bền vững sản xuất, phát triển kinh tế.</p>

      <p>Bên cạnh các lĩnh vực tư vấn thủ tục môi trường, kỹ thuật môi trường, <strong>Công ty Môi trường Văn Lang</strong> còn có <strong>Dịch vụ cung cấp hóa chất/ nhân công vận hành và bảo trì các công trình xử lý nước cấp, nước thải.</strong></p>

      <p>Chúng tôi cung cấp trọn gói cho dịch vụ <strong>Vận hành - Bảo trì</strong> cho các công trình xử lý nước bao gồm:</p>

      <ul>
        <li>Cung cấp <strong>hóa chất và hướng dẫn vận hành</strong> các hệ thống xử lý nước;</li>
        <li>Cung cấp <strong>hóa chất & nhân công</strong> vận hành hệ thống xử lý nước;</li>
        <li><strong>Duy tu, bảo dưỡng</strong> máy móc thiết bị theo định kỳ;</li>
        <li><strong>Giám sát chất lượng & theo dõi qui trình</strong> vận hành hệ thống xử lý.</li>
      </ul>

      <p>Chúng tôi đảm bảo về nguồn gốc và chất lượng hóa chất sử dụng. Cùng với đội ngũ chuyên viên có trình độ chuyên môn cao, khả năng nhận biết và ứng phó với các sự cố xảy ra đối với trạm xử lý nước.</p>

      <p>Đội ngũ chuyên viên với tinh thần trách nhiệm cao và hiểu biết về an toàn lao động trong công tác vận hành.</p>

      <p>Ngoài ra, chúng tôi còn có đội ngũ bảo trì với kiến thức chuyên môn cao về máy móc thiết bị và hệ thống điện điều khiển.</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/vanhanhbaotri.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h3>Hình Ảnh Video nước thải sau xử lý:</h3>

      <div style="text-align: center; margin: 20px 0;">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/7BRYCQVAFOc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <div style="text-align: center; margin: 20px 0;">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/sB8h2Ge-bfs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <h3 style="text-align: center;">Nước Thải Đầu Ra Trạm Xử Lý Nước Thải Dệt Nhuộm Sigma - Long An</h3>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/nuoc-thai-dau-ra-1.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h3 style="text-align: center;">Nước Thải Đầu Ra Trạm Xử Lý Nước Thải Dệt Nhuộm Liên Châu</h3>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/nuoc-thai-dau-ra-6.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h3 style="text-align: center;">Nước Thải Đầu Ra Hệ Thống Xử Lý Nước Thải Dệt Nhuộm KCN - Nhơn Trạch 6A</h3>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/nuoc-thai-dau-ra-7.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h3 style="text-align: center;">Nước Thải Đầu Ra Trạm Xử Lý Nước Thải Thủy Sản Tô Châu</h3>

      <h2 style="text-align: center; color: #c0392b;">NHÀ THẦU XỬ LÝ MÔI TRƯỜNG UY TÍN VÀ CHẤT LƯỢNG HÀNG ĐẦU TẠI VIỆT NAM</h2>

      <h3 style="text-align: center; color: #8e44ad;">CÔNG TY MÔI TRƯỜNG HÀNG ĐẦU VIỆT NAM</h3>

      <p>Với kinh nghiệm hơn 19 năm xây dựng và phát triển, <strong>VĂN LANG</strong> đã trở thành thương hiệu uy tín và là <strong>Tổng thầu EPC</strong> hàng đầu Việt Nam về Công nghệ Môi trường xử lý nước thải, nước cấp. Thương hiệu <strong>VĂN LANG</strong> gắn liền với những dự án lớn của Chủ đầu tư trong và ngoài nước; các Tập đoàn đa quốc gia...</p>

      <p><strong>VĂN LANG</strong> đã trở thành một trong 5 công ty môi trường hàng đầu Việt Nam, chúng tôi tự hào mang đến những sản phẩm và dịch vụ tối ưu nhất giúp khách hàng an tâm, bền vững sản xuất, phát triển kinh tế.</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/tk-landing-page-web-2.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <p>Top 5 công ty môi trường tư nhân hàng đầu Việt Nam. <strong>VĂN LANG</strong> vinh dự trở thành <strong>Tổng Thầu EPC</strong> của các <strong>Dự Án với Quy mô lớn nhất nhì Đông Nam Á</strong> nổi bật như:</p>

      <ol>
        <li>Nhà máy xử lý nước thải KCN NHƠN TRẠCH - 6A - Tổng công suất: 120.000 m³/ngày.đêm. Module 1 - Q = 40.000 m³/ngày.đêm</li>
        <li>Hệ Thống xử lý nước thải KCN Dệt Nhuộm TMTC - Tổng công suất: 40.000 m³/ngày.đêm</li>
        <li>Nhà máy xử lý nước thải KCN Long Bình (KCN Dệt Nhuộm) - 10.600 m³/ngày.đêm</li>
        <li>Hệ Thống xử lý nước thải Dệt nhuộm Cty Chyang Sheng (GĐ 3) Công suất 7.000m³/ngày.đêm</li>
        <li>Hệ Thống xử lý nước thải Sigma Việt Nam (Long An) Công suất 4.900m³/ngày.đêm</li>
        <li>Hệ Thống xử lý nước thải nhà máy Dệt Đại Hào Công suất 3.500m³/ngày.đêm</li>
        <li>Hệ Thống xử lý nước thải nhà máy giấy bình minh Công suất 3.500m³/ngày.đêm</li>
        <li>Hệ Thống xử lý nước thải Dệt may Hoa Sen Công suất 1.000m³/ngày.đêm</li>
      </ol>

      <h3 style="text-align: center; color: #8e44ad;">CƠ SỞ VẬT CHẤT HIỆN ĐẠI ĐÁP ỨNG NHANH TIẾN ĐỘ YÊU CẦU CỦA CHỦ ĐẦU TƯ</h3>

      <p>Với Hơn 19 năm hình thành và phát triển <strong>VĂN LANG</strong> tự hào là một trong những đơn vị dẫn đầu trong lĩnh vực Xử Lý Nước Thải với Cơ Sở Vật Chất đầy đủ, hiện đại cùng dàn cơ giới thiết bị tiên tiến và đặc biệt là nhà xưởng <strong>VĂN LANG</strong> với diện tích lên tới 3000 m² do đó các yêu cầu của khách hàng cả về "TIẾN ĐỘ cùng với CHẤT LƯỢNG" đều được chúng tôi đáp ứng một cách "NHANH CHÓNG VÀ HIỆU QUẢ" nhất.</p>

      <p><strong>VĂN LANG</strong> luôn hướng đến là <strong>TỔNG THẦU EPC</strong> trong lĩnh vực xử lý môi trường số một Việt Nam. Chúng tôi nhận thấy thị trường trong nước và nước ngoài luôn rộng cửa đón chào những doanh nghiệp biết tận dụng thời cơ, làm chủ công nghệ để đáp ứng được các yêu cầu của khách hàng. Vì vậy, <strong>VĂN LANG</strong> luôn quan tâm và tích cực đầu tư trang bị các máy móc công nghệ mới để luôn nâng cao và đáp ứng được các yêu cầu khác nhau của Quý Khách Hàng!</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/tong-thau-epc.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h3 style="text-align: center; color: #8e44ad;">VĂN LANG KHÁC BIỆT VỚI CÁC CÔNG TY MÔI TRƯỜNG KHÁC</h3>

      <p>Chúng tôi khác biệt bởi: <strong>"NĂNG LỰC QUẢN LÝ VÀ TỔ CHỨC THI CÔNG"</strong></p>

      <p>Suốt chặng đường 21 năm hình thành và phát triển, trải qua biết bao thăng trầm và sóng gió <strong>Văn Lang</strong> đã khẳng định được vị thế của mình trong lĩnh vực môi trường nói chung và lĩnh vực Xử Lý Nước Thải nói riêng. Chúng tôi luôn luôn thực hiện theo 4 giá trị như sau: <strong>"CHẤT LƯỢNG - TIẾN ĐỘ - GIÁ THÀNH HỢP LÝ - TẬN TÂM PHỤC VỤ"!</strong></p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="" src="/ckfinder/userfiles/images/H%C3%8CNH%20%E1%BA%A2NH%20B%C3%80I%20VI%E1%BA%BET/BANNEr.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h3 style="text-align: center; color: #8e44ad;">HỆ THỐNG PHÒNG BAN LIÊN KẾT CHẶT CHẼ</h3>

      <p>Về nhân lực, <strong>VĂN LANG</strong> tự hào với đội ngũ nhân sự Chất lượng và Hệ thống các phòng ban liên kết chặt chẽ với nhau trong mọi Dự Án, mọi công trình để chất lượng luôn được đảm bảo một cách tốt nhất và đạt hiệu quả nhất. Chúng tôi hiểu con người chính là giá trị cốt lõi của thành công hiện tại và tương lai nên luôn luôn cải tiến môi trường làm việc, chính sách đãi ngộ để nâng cao đời sống vật chất và tinh thần của cán bộ công nhân viên.</p>

      <p>Với sự phát triển nhanh chóng của công ty và thị trường trong nước <strong>VĂN LANG</strong> luôn chú trọng đào tạo, nâng cao trình độ lao động trong công ty, không chỉ về chuyên môn nghiệp vụ và còn về những kỹ năng mềm trong công việc và kỹ năng quản lý để có thể đáp ứng được yêu cầu công việc và thăng tiến.</p>

      <p>Kết quả của những nỗ lực ấy thể hiện rõ nhất qua sự gắn bó của cán bộ nhân viên với công ty. Nhờ đó, công ty luôn có được đội ngũ nhân lực lành nghề, giàu kinh nghiệm và phong phú. Nhân viên coi công ty như ngôi nhà thứ 2 của mình, đồng nghiệp như người thân, của cải của công ty cũng như tài sản của mình nên vô cùng trân trọng và gìn giữ. Do vậy, các hoạt động phong trào trong công ty luôn được hưởng ứng nhiệt tình và sôi nổi. Đó chính là điều mà mọi nhà quản lý có Tâm luôn mong muốn có được.</p>

      <div style="text-align: center; margin: 20px 0;">
        <iframe width="100%" height="500" src="https://www.youtube.com/embed/FLBNxBAKcjU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>

      <p><strong>Công ty môi trường Văn Lang với bề dày kinh nghiệm 21 năm, là nhà thầu uy tín, Tổng Thầu EPC uy tín trong lĩnh vực xử lý môi trường, là nhà thầu xử lý môi trường hàng đầu tại Việt Nam. Chúng tôi tự tin mang đến cho Quý Khách Hàng những công trình đúng chất lượng và hiệu quả xử lý tốt nhất. Cam kết với chủ đầu tư cả về tiến độ lẫn chất lượng nhà thầu.</strong></p>

      <p><strong>Để được tư vấn cách thức xử lý nước thải nhiễm phèn, tư vấn các loại hóa chất xử lý nước nhiễm phèn, liều lượng sử dụng hóa chất xử lý nước nhiễm phèn, vận hành hệ thống xử lý nước nhiễm phèn cho xử lý nước;</strong></p>

      <p><strong>Quý Khách Hàng có nhu cầu Tư vấn các thủ tục môi trường, Lập giấy phép đăng kinh doanh, giấy phép đầu tư, Lập báo cáo đánh giá tác động môi trường (ĐTM), Lập đề án bảo vệ môi trường, xin giấy phép xả thải, xin giấy phép đăng ký nước ngầm, đăng ký chủ nguồn chất thải, lập báo cáo hoàn thành công trình, biện pháp bảo vệ môi trường, lập báo cáo giám sát môi trường, lập thỏa thuận địa điểm xây dựng, báo cáo đầu tư, giấy chứng nhận, khảo sát điều tra, thu thập số liệu kiên quan đến dự án, đánh giá mức độ tác động ảnh hưởng của các nguồn ô nhiễm, biện pháp môi trường, giám sát môi trường.....</strong></p>

      <p><strong>Tư Vấn Thiết kế hệ thống xử lý nước thải giấy, Tính toán hệ thống xử lý nước thải giấy, Bột giấy, Bản vẽ Cad xử lý nước thải giấy, Cấu tạo Thiết bị xử lý nước, Báo giá hệ thống xử lý nước thải bột giấy, Chi phí xây dựng hệ thống xử nước thải giấy, Tính Kinh tế Xử lý nước thải Dệt Nhuộm, Xử lý nước thải Thủy Sản, Xử lý nước cấp, Xử lý nước Khu Công Nghiệp, Xử lý nước thải chế biến giấy, Xử lý nước thải bột giấy, Xử lý nước thải Thủy Sản, Xử lý nước thải chế biến sữa, Xử lý nước thải váng sữa, Xử lý nước thải thực phẩm, Xử lý nước thải có hàm lượng chất lơ lửng cao...,</strong></p>

      <p><strong>Hỗ trợ tư vấn công trình, Xây dựng Hệ thống xử lý nước thải, Xử lý nước cấp, Tổng Thầu EPC, Tổng Thầu Xây Dựng, Tư Vấn Môi Trường, Đánh giá tác động môi trường (ĐTM), Thủ tục môi trường, Hồ sơ môi trường, Cố vấn môi trường, Tư vấn giám sát môi trường, Vận hành hệ thống xử lý nước thải, Cải tạo Hệ thống xử lý nước thải, Kiểm tra hỗ trợ tư vấn miễn phí công trình hiện hữu tại nhà máy...</strong></p>

      <p><em><strong>Quý Khách Hàng vui lòng liên hệ:</strong></em></p>

      <p><strong>Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang</strong></p>

      <p><strong>Địa chỉ:</strong> 1/1 đường số 5, Phường 7, Quận Gò Vấp, TPHCM</p>

      <p><strong>Hotline:</strong> 0946 758 660 - Mr. Hiếu</p>

      <p><strong>Email:</strong> vanlang@vlc.vn - <a href="mailto:congtymoitruongvanlang@gmail.com">congtymoitruongvanlang@gmail.com</a></p>

      <p><strong>Website:</strong> <a href="http://vlc.vn" target="_blank">vlc.vn</a></p>

      <p><strong>Fanpage:</strong> <a href="https://facebook.com/vlc.vn" target="_blank">facebook.com/vlc.vn</a></p>

      <p><strong>Youtube:</strong> <a href="https://www.youtube.com/channel/UC0AzgJssqlZu8m6k4o3iCAw?view_as=subscriber" target="_blank">youtube.com/channel/UC0AzgJssqlZu8m6k4o3iCAw?view_as=subscriber</a></p>
    `,
    tags: ['Vận hành', 'Bảo trì', 'Xử lý nước thải', 'Hóa chất', 'Văn Lang'],
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
