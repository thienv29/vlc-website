// Products data separated from components
export interface ProductItem {
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
  relatedProducts: number[];
  price?: string;
  specifications?: {
    [key: string]: string;
  };
  features?: string[];
}

export const productsData: ProductItem[] = [
  {
    id: 101,
    title: 'Hệ thống lọc nước RO công nghiệp - VLC RO-1000',
    excerpt: 'Hệ thống lọc nước RO công nghiệp công suất 1000m³/ngày với công nghệ tiên tiến, tiết kiệm năng lượng và vận hành ổn định.',
    date: '25/03/2024',
    category: 'Hệ thống lọc nước',
    image: '/nhon-trach-6a-120.jpg',
    author: 'Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang',
    readTime: '6 phút đọc',
    price: 'Liên hệ báo giá',
    specifications: {
      'Công suất': '1000 m³/ngày',
      'Nguồn điện': '380V/3Phase/50Hz',
      'Công suất tiêu thụ': '45 kW',
      'Kích thước': '5000x2000x2500 mm',
      'Trọng lượng': '3500 kg',
      'Tuổi thọ màng RO': '3-5 năm',
      'Bảo hành': '24 tháng'
    },
    features: [
      'Công nghệ RO tiên tiến từ Mỹ',
      'Tự động hóa hoàn toàn',
      'Tiết kiệm năng lượng 30%',
      'Chống ăn mòn cao',
      'Dễ vận hành và bảo trì',
      'Hiển thị LCD thông minh'
    ],
    content: `
      <h2>Hệ thống lọc nước RO công nghiệp VLC RO-1000</h2>

      <p><strong>HỆ THỐNG LỌC NƯỚC RO CÔNG NGHIỆP CAO CẤP - VLC RO-1000</strong></p>

      <p>Hệ thống lọc nước RO công nghiệp VLC RO-1000 là giải pháp lọc nước tinh khiết tiên tiến nhất hiện nay, được thiết kế đặc biệt cho các nhà máy, khu công nghiệp với công suất xử lý lên đến 1000m³/ngày.đêm.</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="Hệ thống lọc nước RO VLC RO-1000" src="/nhon-trach-6a-120.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h2>ƯU ĐIỂM NỔI BẬT</h2>

      <ul>
        <li><strong>Công nghệ RO tiên tiến:</strong> Sử dụng màng RO nhập khẩu từ Mỹ, hiệu suất lọc cao, tuổi thọ lên đến 5 năm</li>
        <li><strong>Tự động hóa hoàn toàn:</strong> Hệ thống PLC điều khiển thông minh, giám sát 24/7</li>
        <li><strong>Tiết kiệm năng lượng:</strong> Công nghệ tiết kiệm điện năng lên đến 30% so với các hệ thống thông thường</li>
        <li><strong>Chống ăn mòn cao:</strong> Vỏ bọc bằng thép không gỉ SUS304, chịu được môi trường nước biển</li>
        <li><strong>Dễ vận hành:</strong> Giao diện LCD hiển thị thông số, cảnh báo lỗi tự động</li>
      </ul>

      <h2>THÔNG SỐ KỸ THUẬT</h2>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Thông số</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Giá trị</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Công suất xử lý</td>
          <td style="border: 1px solid #ddd; padding: 12px;">1000 m³/ngày.đêm</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Nguồn điện</td>
          <td style="border: 1px solid #ddd; padding: 12px;">380V/3Phase/50Hz</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Công suất tiêu thụ</td>
          <td style="border: 1px solid #ddd; padding: 12px;">45 kW</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Kích thước</td>
          <td style="border: 1px solid #ddd; padding: 12px;">5000x2000x2500 mm</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Trọng lượng</td>
          <td style="border: 1px solid #ddd; padding: 12px;">3500 kg</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Tuổi thọ màng RO</td>
          <td style="border: 1px solid #ddd; padding: 12px;">3-5 năm</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Bảo hành</td>
          <td style="border: 1px solid #ddd; padding: 12px;">24 tháng</td>
        </tr>
      </table>

      <h2>ỨNG DỤNG</h2>

      <p>Hệ thống lọc nước RO VLC RO-1000 phù hợp cho:</p>

      <ul>
        <li>Khu công nghiệp và nhà máy sản xuất</li>
        <li>Ngành thực phẩm và đồ uống</li>
        <li>Ngành dược phẩm và y tế</li>
        <li>Ngành điện tử và bán dẫn</li>
        <li>Cung cấp nước tinh khiết cho khu dân cư</li>
      </ul>

      <h2>CHỨNG NHẬN & TIÊU CHUẨN</h2>

      <p>Hệ thống đạt các chứng nhận quốc tế:</p>

      <ul>
        <li>ISO 9001:2015 - Hệ thống quản lý chất lượng</li>
        <li>NSF/ANSI 58 - Tiêu chuẩn an toàn nước uống</li>
        <li>CE - Tiêu chuẩn Châu Âu</li>
        <li>Tư vấn thiết kế theo TCVN 6258:1998</li>
      </ul>

      <h2>DỊCH VỤ HẬU MÃI</h2>

      <ul>
        <li>Bảo hành 24 tháng toàn bộ hệ thống</li>
        <li>Hỗ trợ kỹ thuật 24/7</li>
        <li>Cung cấp vật tư thay thế</li>
        <li>Đào tạo vận hành cho kỹ thuật viên</li>
        <li>Kiểm tra định kỳ 6 tháng/lần</li>
      </ul>

      <h2>THÔNG TIN LIÊN HỆ</h2>

      <p><strong>Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang</strong></p>
      <p><strong>Địa chỉ:</strong> 1/1 đường số 5, Phường 7, Quận Gò Vấp, TPHCM</p>
      <p><strong>Hotline:</strong> 0946 758 660 - Mr. Hiếu hoặc 0918 203 065 - Mr. Long</p>
      <p><strong>Email:</strong> vanlang@vlc.vn</p>
      <p><strong>Website:</strong> <a href="http://vlc.vn" target="_blank">vlc.vn</a></p>
    `,
    tags: ['RO', 'Lọc nước', 'Công nghiệp', 'Tinh khiết', 'VLC'],
    relatedProducts: [102, 103, 104]
  },
  {
    id: 102,
    title: 'Thiết bị biến tần công nghiệp VLC VFD-500',
    excerpt: 'Biến tần công nghiệp VLC VFD-500 với công nghệ vector điều khiển, tiết kiệm điện năng lên đến 50%, phù hợp cho các ứng dụng công nghiệp nặng.',
    date: '20/03/2024',
    category: 'Thiết bị điện',
    image: '/landing-page-van-hanh-2.jpg',
    author: 'Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang',
    readTime: '5 phút đọc',
    price: 'Liên hệ báo giá',
    specifications: {
      'Công suất': '0.75 - 500 kW',
      'Điện áp đầu vào': '380V/3Phase',
      'Tần số đầu ra': '0-400 Hz',
      'Hiệu suất': '> 98%',
      'Bảo vệ': 'IP65',
      'Nhiệt độ hoạt động': '-10°C đến +50°C',
      'Bảo hành': '36 tháng'
    },
    features: [
      'Công nghệ vector điều khiển tiên tiến',
      'Tiết kiệm điện năng lên đến 50%',
      'Khởi động mềm, bảo vệ động cơ',
      'Điều khiển tốc độ chính xác',
      'Chống nhiễu điện từ EMC',
      'Giao diện RS485 Modbus'
    ],
    content: `
      <h2>Thiết bị biến tần công nghiệp VLC VFD-500</h2>

      <p><strong>BIẾN TẦN CÔNG NGHIỆP CAO CẤP - VLC VFD-500</strong></p>

      <p>Biến tần VLC VFD-500 là giải pháp điều khiển tốc độ động cơ tiên tiến, giúp tiết kiệm điện năng và tối ưu hóa hiệu suất sản xuất cho các ứng dụng công nghiệp.</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="Biến tần VLC VFD-500" src="/landing-page-van-hanh-2.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h2>CÔNG NGHỆ TIÊN TIẾN</h2>

      <ul>
        <li><strong>Công nghệ vector:</strong> Điều khiển vector không cảm biến, độ chính xác cao</li>
        <li><strong>Khởi động mềm:</strong> Giảm dòng khởi động, bảo vệ động cơ và lưới điện</li>
        <li><strong>Tiết kiệm năng lượng:</strong> Tối ưu hóa hiệu suất, tiết kiệm đến 50% điện năng</li>
        <li><strong>Điều khiển thông minh:</strong> Hỗ trợ nhiều chế độ điều khiển tốc độ</li>
      </ul>

      <h2>THÔNG SỐ KỸ THUẬT</h2>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Thông số</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Giá trị</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Dải công suất</td>
          <td style="border: 1px solid #ddd; padding: 12px;">0.75 - 500 kW</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Điện áp đầu vào</td>
          <td style="border: 1px solid #ddd; padding: 12px;">380V/3Phase ±15%</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Tần số đầu ra</td>
          <td style="border: 1px solid #ddd; padding: 12px;">0 - 400 Hz</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Hiệu suất</td>
          <td style="border: 1px solid #ddd; padding: 12px;">> 98%</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Độ bảo vệ</td>
          <td style="border: 1px solid #ddd; padding: 12px;">IP65</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Nhiệt độ hoạt động</td>
          <td style="border: 1px solid #ddd; padding: 12px;">-10°C đến +50°C</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Bảo hành</td>
          <td style="border: 1px solid #ddd; padding: 12px;">36 tháng</td>
        </tr>
      </table>

      <h2>TÍNH NĂNG NỔI BẬT</h2>

      <ul>
        <li>Điều khiển vector không cảm biến</li>
        <li>Khởi động mềm, giảm dòng điện</li>
        <li>Tiết kiệm năng lượng tối ưu</li>
        <li>Bảo vệ động cơ toàn diện</li>
        <li>Giao diện RS485 Modbus</li>
        <li>Hiển thị LCD đa ngôn ngữ</li>
        <li>Chống nhiễu EMC chuẩn Châu Âu</li>
      </ul>

      <h2>ỨNG DỤNG</h2>

      <p>Biến tần VLC VFD-500 phù hợp cho:</p>

      <ul>
        <li>Máy bơm công nghiệp</li>
        <li>Quạt công nghiệp</li>
        <li>Máy nén khí</li>
        <li>Dây chuyền sản xuất</li>
        <li>Máy CNC</li>
        <li>Hệ thống HVAC</li>
      </ul>

      <h2>CHỨNG NHẬN CHẤT LƯỢNG</h2>

      <ul>
        <li>CE - Tiêu chuẩn Châu Âu</li>
        <li>RoHS - Không chứa chất độc hại</li>
        <li>ISO 9001:2015</li>
        <li>Tương thích EMC</li>
      </ul>
    `,
    tags: ['Biến tần', 'VFD', 'Tiết kiệm điện', 'Công nghiệp', 'VLC'],
    relatedProducts: [101, 103, 105]
  },
  {
    id: 103,
    title: 'Hệ thống năng lượng mặt trời VLC Solar-50KW',
    excerpt: 'Hệ thống điện năng lượng mặt trời hòa lưới 50KW với tấm pin thế hệ mới, hiệu suất 23%, tuổi thọ lên đến 30 năm.',
    date: '15/03/2024',
    category: 'Năng lượng mặt trời',
    image: '/tk-landing-page-web-2.jpg',
    author: 'Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang',
    readTime: '7 phút đọc',
    price: 'Liên hệ báo giá',
    specifications: {
      'Công suất': '50 kW',
      'Tấm pin': 'Mono-crystalline',
      'Hiệu suất': '23%',
      'Tuổi thọ': '30 năm',
      'Bảo hành tấm pin': '25 năm',
      'Bảo hành inverter': '10 năm',
      'Diện tích lắp đặt': '250 m²',
      'Sản lượng ước tính': '75.000 kWh/năm'
    },
    features: [
      'Tấm pin đơn tinh thể hiệu suất cao',
      'Inverter hòa lưới thông minh',
      'Giám sát online 24/7',
      'Tự động theo dõi điểm cực đại',
      'Chống nóng và chịu tải tốt',
      'Dễ lắp đặt và bảo trì'
    ],
    content: `
      <h2>Hệ thống năng lượng mặt trời VLC Solar-50KW</h2>

      <p><strong>HỆ THỐNG ĐIỆN NĂNG LƯỢNG MẶT TRỜI HÒA LƯỚI - VLC SOLAR-50KW</strong></p>

      <p>Hệ thống điện năng lượng mặt trời VLC Solar-50KW là giải pháp tiết kiệm năng lượng xanh, sử dụng công nghệ tiên tiến nhất từ các thương hiệu hàng đầu thế giới.</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="Hệ thống năng lượng mặt trời VLC Solar-50KW" src="/tk-landing-page-web-2.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h2>CÔNG NGHỆ TIÊN TIẾN</h2>

      <ul>
        <li><strong>Tấm pin đơn tinh thể:</strong> Hiệu suất chuyển đổi 23%, tuổi thọ lên đến 30 năm</li>
        <li><strong>Inverter hòa lưới:</strong> Công nghệ MPPT tiên tiến, hiệu suất > 98%</li>
        <li><strong>Giám sát thông minh:</strong> Theo dõi sản lượng realtime qua ứng dụng</li>
        <li><strong>Tự động tối ưu:</strong> Theo dõi điểm cực đại, tối ưu hóa sản lượng</li>
      </ul>

      <h2>THÔNG SỐ KỸ THUẬT</h2>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Thông số</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Giá trị</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Công suất hệ thống</td>
          <td style="border: 1px solid #ddd; padding: 12px;">50 kW</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Loại tấm pin</td>
          <td style="border: 1px solid #ddd; padding: 12px;">Mono-crystalline</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Hiệu suất tấm pin</td>
          <td style="border: 1px solid #ddd; padding: 12px;">23%</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Tuổi thọ hệ thống</td>
          <td style="border: 1px solid #ddd; padding: 12px;">30 năm</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Bảo hành tấm pin</td>
          <td style="border: 1px solid #ddd; padding: 12px;">25 năm</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Bảo hành inverter</td>
          <td style="border: 1px solid #ddd; padding: 12px;">10 năm</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Diện tích lắp đặt</td>
          <td style="border: 1px solid #ddd; padding: 12px;">250 m²</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Sản lượng ước tính</td>
          <td style="border: 1px solid #ddd; padding: 12px;">75.000 kWh/năm</td>
        </tr>
      </table>

      <h2>LỢI ÍCH KINH TẾ</h2>

      <ul>
        <li><strong>Tiết kiệm chi phí:</strong> Giảm 100% tiền điện lưới trong giờ nắng</li>
        <li><strong>Thu hồi vốn nhanh:</strong> Thời gian thu hồi 6-8 năm</li>
        <li><strong>Doanh thu bán điện:</strong> Bán điện dư cho lưới điện quốc gia</li>
        <li><strong>Giảm phát thải CO2:</strong> Bảo vệ môi trường, nhận ưu đãi xanh</li>
      </ul>

      <h2>TÍNH NĂNG NỔI BẬT</h2>

      <ul>
        <li>Giám sát sản lượng qua smartphone</li>
        <li>Cảnh báo lỗi tự động</li>
        <li>Tự động vệ sinh tấm pin</li>
        <li>Chống nóng và chịu tải tốt</li>
        <li>Dễ dàng mở rộng hệ thống</li>
        <li>Tương thích với lưới điện quốc gia</li>
      </ul>

      <h2>ỨNG DỤNG</h2>

      <p>Hệ thống phù hợp cho:</p>

      <ul>
        <li>Nhà máy sản xuất công nghiệp</li>
        <li>Khu công nghiệp</li>
        <li>Trường học và bệnh viện</li>
        <li>Trung tâm thương mại</li>
        <li>Nông nghiệp công nghệ cao</li>
        <li>Căn hộ và nhà ở</li>
      </ul>

      <h2>CHÍNH SÁCH HỖ TRỢ</h2>

      <ul>
        <li>Miễn tiền thuê đất lắp đặt</li>
        <li>Giảm 30% thuế VAT</li>
        <li>Ưu đãi lãi suất vay vốn</li>
        <li>Giá bán điện dư cho EVN</li>
        <li>Bảo hiểm hệ thống 10 năm</li>
      </ul>
    `,
    tags: ['Năng lượng mặt trời', 'Solar', 'Xanh', 'Tiết kiệm', 'VLC'],
    relatedProducts: [101, 102, 104]
  },
  {
    id: 104,
    title: 'Hệ thống xử lý nước thải công nghiệp VLC WWT-500',
    excerpt: 'Hệ thống xử lý nước thải công nghiệp công suất 500m³/ngày với công nghệ sinh học tiên tiến, đạt chuẩn xả thải A.',
    date: '10/03/2024',
    category: 'Xử lý nước thải',
    image: '/nuoc-thai-dau-ra-1.jpg',
    author: 'Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang',
    readTime: '8 phút đọc',
    price: 'Liên hệ báo giá',
    specifications: {
      'Công suất': '500 m³/ngày',
      'Công nghệ': 'MBBR + MBR',
      'Chất lượng đầu ra': 'Đạt chuẩn A',
      'COD giảm': '95%',
      'BOD giảm': '97%',
      'TSS giảm': '98%',
      'Diện tích': '200 m²',
      'Bảo hành': '24 tháng'
    },
    features: [
      'Công nghệ sinh học tiên tiến MBBR',
      'Tự động hóa hoàn toàn',
      'Tiết kiệm năng lượng',
      'Chất lượng nước đầu ra đạt chuẩn A',
      'Dễ vận hành và bảo trì',
      'Giám sát online 24/7'
    ],
    content: `
      <h2>Hệ thống xử lý nước thải công nghiệp VLC WWT-500</h2>

      <p><strong>HỆ THỐNG XỬ LÝ NƯỚC THẢI CÔNG NGHIỆP - VLC WWT-500</strong></p>

      <p>Hệ thống xử lý nước thải VLC WWT-500 sử dụng công nghệ sinh học tiên tiến, đảm bảo chất lượng nước đầu ra đạt chuẩn xả thải nghiêm ngặt nhất của Việt Nam.</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="Hệ thống xử lý nước thải VLC WWT-500" src="/nuoc-thai-dau-ra-1.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h2>CÔNG NGHỆ XỬ LÝ</h2>

      <ul>
        <li><strong>MBBR (Moving Bed Biofilm Reactor):</strong> Công nghệ biofilm di động tiên tiến</li>
        <li><strong>MBR (Membrane BioReactor):</strong> Kết hợp sinh học và màng lọc</li>
        <li><strong>Coagulation & Flocculation:</strong> Keo tụ và tạo bông</li>
        <li><strong>Sedimentation:</strong> Lắng lọc tự nhiên</li>
        <li><strong>Disinfection:</strong> Khử trùng bằng clo hoặc UV</li>
      </ul>

      <h2>THÔNG SỐ KỸ THUẬT</h2>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Thông số</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Giá trị</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Công suất xử lý</td>
          <td style="border: 1px solid #ddd; padding: 12px;">500 m³/ngày</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Công nghệ chính</td>
          <td style="border: 1px solid #ddd; padding: 12px;">MBBR + MBR</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Tiêu chuẩn xả thải</td>
          <td style="border: 1px solid #ddd; padding: 12px;">Đạt chuẩn A (QCVN 40:2011)</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Hiệu suất giảm COD</td>
          <td style="border: 1px solid #ddd; padding: 12px;">≥ 95%</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Hiệu suất giảm BOD</td>
          <td style="border: 1px solid #ddd; padding: 12px;">≥ 97%</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Hiệu suất giảm TSS</td>
          <td style="border: 1px solid #ddd; padding: 12px;">≥ 98%</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Diện tích lắp đặt</td>
          <td style="border: 1px solid #ddd; padding: 12px;">200 m²</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Bảo hành</td>
          <td style="border: 1px solid #ddd; padding: 12px;">24 tháng</td>
        </tr>
      </table>

      <h2>QUY TRÌNH XỬ LÝ</h2>

      <ol>
        <li><strong>Thu gom:</strong> Thu gom nước thải từ các nguồn phát sinh</li>
        <li><strong>Tiền xử lý:</strong> Lọc rác, điều hòa pH, keo tụ tạo bông</li>
        <li><strong>Xử lý sinh học:</strong> Phân hủy chất hữu cơ bằng vi sinh</li>
        <li><strong>Lắng lọc:</strong> Tách bùn và nước đã xử lý</li>
        <li><strong>Khử trùng:</strong> Loại bỏ vi khuẩn gây bệnh</li>
        <li><strong>Giám sát chất lượng:</strong> Kiểm tra các thông số trước khi xả</li>
      </ol>

      <h2>TÍNH NĂNG NỔI BẬT</h2>

      <ul>
        <li>Tự động hóa hoàn toàn với PLC</li>
        <li>Giám sát online 24/7 qua internet</li>
        <li>Cảnh báo lỗi và bảo trì tự động</li>
        <li>Tiết kiệm năng lượng và hóa chất</li>
        <li>Dễ vận hành, bảo trì đơn giản</li>
        <li>Tuân thủ nghiêm ngặt các tiêu chuẩn</li>
      </ul>

      <h2>ỨNG DỤNG</h2>

      <p>Hệ thống phù hợp cho các ngành:</p>

      <ul>
        <li>Ngành dệt nhuộm và hoàn tất</li>
        <li>Ngành thực phẩm và đồ uống</li>
        <li>Ngành hóa chất và dược phẩm</li>
        <li>Ngành giấy và bột giấy</li>
        <li>Ngành điện tử và bán dẫn</li>
        <li>Khu công nghiệp tập trung</li>
      </ul>

      <h2>CHỨNG NHẬN & TIÊU CHUẨN</h2>

      <ul>
        <li>QCVN 40:2011/BTNMT - Nước thải sinh hoạt</li>
        <li>QCVN 11:2008/BTNMT - Nước thải công nghiệp</li>
        <li>ISO 14001:2015 - Hệ thống quản lý môi trường</li>
        <li>Túi lọc đạt chuẩn NSF/ANSI 42 & 53</li>
      </ul>
    `,
    tags: ['Xử lý nước thải', 'MBBR', 'MBR', 'Công nghiệp', 'VLC'],
    relatedProducts: [101, 103, 105]
  },
  {
    id: 105,
    title: 'Hệ thống giám sát IoT VLC IoT-100',
    excerpt: 'Hệ thống giám sát thông minh IoT cho nhà máy với cảm biến đa dạng, phân tích dữ liệu realtime và cảnh báo tự động.',
    date: '05/03/2024',
    category: 'IoT & Giám sát',
    image: '/vanhanhbaotri.jpg',
    author: 'Công ty TNHH Xử lý Chất thải Công nghiệp và Tư vấn Môi trường Văn Lang',
    readTime: '6 phút đọc',
    price: 'Liên hệ báo giá',
    specifications: {
      'Số cảm biến': '100 điểm',
      'Giao thức': 'MQTT, Modbus',
      'Tần suất thu thập': '1 giây',
      'Dung lượng lưu trữ': '1TB',
      'Kết nối': 'WiFi, Ethernet, 4G',
      'Pin dự phòng': '72 giờ',
      'Bảo hành': '24 tháng'
    },
    features: [
      'Giám sát realtime 24/7',
      'Cảm biến đa dạng (nhiệt độ, áp suất, lưu lượng)',
      'Phân tích dữ liệu AI',
      'Cảnh báo tự động qua SMS/Email/App',
      'Dashboard web responsive',
      'API mở cho tích hợp'
    ],
    content: `
      <h2>Hệ thống giám sát IoT VLC IoT-100</h2>

      <p><strong>HỆ THỐNG GIÁM SÁT THÔNG MINH IoT - VLC IoT-100</strong></p>

      <p>Hệ thống giám sát VLC IoT-100 mang đến giải pháp giám sát nhà máy thông minh, giúp tối ưu hóa sản xuất và giảm thiểu downtime.</p>

      <div style="text-align: center; margin: 20px 0;">
        <img alt="Hệ thống giám sát IoT VLC IoT-100" src="/vanhanhbaotri.jpg" style="display: block; margin: 0 auto; max-width: 100%; height: auto;" />
      </div>

      <h2>CÔNG NGHỆ IoT TIÊN TIẾN</h2>

      <ul>
        <li><strong>Cảm biến thông minh:</strong> Đo nhiệt độ, áp suất, lưu lượng, độ ẩm, rung động</li>
        <li><strong>Kết nối đa giao thức:</strong> MQTT, Modbus, OPC UA</li>
        <li><strong>Thu thập dữ liệu realtime:</strong> Tần suất 1 giây</li>
        <li><strong>Phân tích AI:</strong> Dự đoán lỗi, tối ưu hóa hiệu suất</li>
        <li><strong>Cảnh báo thông minh:</strong> SMS, Email, App notification</li>
      </ul>

      <h2>THÔNG SỐ KỸ THUẬT</h2>

      <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
        <tr style="background-color: #f5f5f5;">
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Thông số</th>
          <th style="border: 1px solid #ddd; padding: 12px; text-align: left;">Giá trị</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Số điểm giám sát</td>
          <td style="border: 1px solid #ddd; padding: 12px;">100 điểm</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Giao thức hỗ trợ</td>
          <td style="border: 1px solid #ddd; padding: 12px;">MQTT, Modbus, OPC UA</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Tần suất thu thập</td>
          <td style="border: 1px solid #ddd; padding: 12px;">1 giây</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Dung lượng lưu trữ</td>
          <td style="border: 1px solid #ddd; padding: 12px;">1TB (mở rộng được)</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Kết nối mạng</td>
          <td style="border: 1px solid #ddd; padding: 12px;">WiFi, Ethernet, 4G/5G</td>
        </tr>
        <tr style="background-color: #f9f9f9;">
          <td style="border: 1px solid #ddd; padding: 12px;">Pin dự phòng</td>
          <td style="border: 1px solid #ddd; padding: 12px;">72 giờ</td>
        </tr>
        <tr>
          <td style="border: 1px solid #ddd; padding: 12px;">Bảo hành</td>
          <td style="border: 1px solid #ddd; padding: 12px;">24 tháng</td>
        </tr>
      </table>

      <h2>CẢM BIẾN HỖ TRỢ</h2>

      <ul>
        <li><strong>Cảm biến nhiệt độ:</strong> PT100, Thermocouple K/J</li>
        <li><strong>Cảm biến áp suất:</strong> 0-10 bar, 0-100 bar</li>
        <li><strong>Cảm biến lưu lượng:</strong> Electromagnetic, Ultrasonic</li>
        <li><strong>Cảm biến độ ẩm:</strong> 0-100% RH</li>
        <li><strong>Cảm biến rung động:</strong> FFT Analysis</li>
        <li><strong>Cảm biến mức:</strong> Radar, Ultrasonic, Capacitive</li>
      </ul>

      <h2>TÍNH NĂNG PHÂN TÍCH</h2>

      <ul>
        <li>Biểu đồ thời gian thực</li>
        <li>Phân tích xu hướng</li>
        <li>Dự đoán lỗi bằng AI</li>
        <li>Báo cáo tự động</li>
        <li>So sánh hiệu suất</li>
        <li>Cảnh báo thông minh</li>
      </ul>

      <h2>ỨNG DỤNG</h2>

      <p>Hệ thống phù hợp cho:</p>

      <ul>
        <li>Giám sát nhà máy sản xuất</li>
        <li>Hệ thống HVAC</li>
        <li>Máy nén khí và bơm</li>
        <li>Dây chuyền tự động</li>
        <li>Kho lạnh và kho hàng</li>
        <li>Hệ thống năng lượng</li>
      </ul>

      <h2>LỢI ÍCH</h2>

      <ul>
        <li>Giảm 30% downtime thiết bị</li>
        <li>Tiết kiệm 20% chi phí bảo trì</li>
        <li>Tăng 15% hiệu suất sản xuất</li>
        <li>Cảnh báo sớm sự cố</li>
        <li>Tối ưu hóa tài nguyên</li>
        <li>Dữ liệu cho quyết định</li>
      </ul>
    `,
    tags: ['IoT', 'Giám sát', 'AI', 'Công nghiệp 4.0', 'VLC'],
    relatedProducts: [102, 104]
  }
];

// Helper functions
export const getProductById = (id: number): ProductItem | undefined => {
  return productsData.find(item => item.id === id);
};

export const getRelatedProducts = (currentId: number, relatedIds: number[]): ProductItem[] => {
  return productsData.filter(item => relatedIds.includes(item.id) && item.id !== currentId);
};

export const getProductsByCategory = (category: string): ProductItem[] => {
  return productsData.filter(item => item.category === category);
};

export const searchProducts = (query: string): ProductItem[] => {
  const lowerQuery = query.toLowerCase();
  return productsData.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.excerpt.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    item.category.toLowerCase().includes(lowerQuery)
  );
};
