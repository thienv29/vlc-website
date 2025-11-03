import { Mail, Phone, MapPin, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0F5132] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <img
                src="/logowebsite.png"
                alt="VLC Group Logo"
                className="h-16 w-auto object-contain bg-white rounded-lg p-1"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Đối tác tin cậy trong lĩnh vực EPC và phát triển bền vững,
              mang đến giá trị vượt trội cho khách hàng và cộng đồng.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#3CB371] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#3CB371] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#3CB371] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Về chúng tôi</h4>
            <ul className="space-y-3">
              {[
                { path: '/about', label: 'Giới thiệu' },
                { path: '/services', label: 'Dịch vụ' },
                { path: '/projects', label: 'Dự án' },
                { path: '/sustainability', label: 'Phát triển bền vững' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-[#3CB371] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Hỗ trợ</h4>
            <ul className="space-y-3">
              {[
                { path: '/news', label: 'Tin tức' },
                { path: '/careers', label: 'Tuyển dụng' },
                { path: '/contact', label: 'Liên hệ' },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-[#3CB371] transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3CB371] transition-colors text-sm">
                  Chính sách bảo mật
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#3CB371] transition-colors text-sm">
                  Điều khoản sử dụng
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-[#3CB371] flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-300 text-sm">
                  123 Đường ABC, Quận Cầu Giấy, Hà Nội
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-[#3CB371] flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">(024) 1234 5678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-[#3CB371] flex-shrink-0" size={18} />
                <span className="text-gray-300 text-sm">contact@vlcgroup.vn</span>
              </div>
            </div>

            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-sm">Đăng ký nhận tin</h5>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email của bạn"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#3CB371]"
                />
                <button className="px-4 py-2 bg-[#3CB371] rounded-lg hover:bg-[#34a563] transition-colors">
                  <Mail size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; 2024 VLC Group. All rights reserved.</p>
            <p>Thiết kế bởi VLC Digital Team</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
