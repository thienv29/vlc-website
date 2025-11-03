import { Leaf, Heart, Users, TrendingUp } from 'lucide-react';

export default function Sustainability() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative mb-20">
          <div className="aspect-[21/9] rounded-3xl overflow-hidden">
            <img
              src="https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="Sustainability"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#3CB371]/90 to-[#0F5132]/80" />
            <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">
                  Phát triển bền vững
                </h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                  Cam kết xây dựng tương lai xanh và trách nhiệm với cộng đồng
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            { icon: Leaf, number: '15,000', label: 'Tấn CO₂ giảm thiểu', color: '#3CB371' },
            { icon: Heart, number: '50+', label: 'Chương trình CSR', color: '#0F5132' },
            { icon: Users, number: '10,000+', label: 'Người thụ hưởng', color: '#3CB371' },
            { icon: TrendingUp, number: '100%', label: 'Dự án xanh 2024', color: '#0F5132' },
          ].map((stat, index) => (
            <div key={index} className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15` }}>
                <stat.icon size={32} style={{ color: stat.color }} />
              </div>
              <div className="text-4xl font-bold text-[#0F5132] mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-[#0F5132] mb-12 text-center">
            Các chương trình CSR
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Năng lượng cho cộng đồng',
                desc: 'Lắp đặt hệ thống điện mặt trời miễn phí cho 100+ trường học vùng sâu, vùng xa',
                image: 'https://images.pexels.com/photos/8197525/pexels-photo-8197525.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Đào tạo nghề xanh',
                desc: 'Chương trình đào tạo miễn phí kỹ năng lắp đặt năng lượng tái tạo cho thanh niên',
                image: 'https://images.pexels.com/photos/5324986/pexels-photo-5324986.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Bảo vệ môi trường',
                desc: 'Chiến dịch trồng 50,000 cây xanh và làm sạch đại dương tại 10 tỉnh thành',
                image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
              {
                title: 'Y tế cộng đồng',
                desc: 'Hỗ trợ trang thiết bị y tế và khám bệnh miễn phí cho 5,000+ người dân',
                image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=800',
              },
            ].map((program, index) => (
              <div key={index} className="group relative aspect-[16/9] rounded-2xl overflow-hidden cursor-pointer">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-200 text-sm">{program.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#3CB371] to-[#0F5132] rounded-3xl p-12 text-white text-center">
          <h2 className="text-4xl font-bold mb-6">Cam kết Net Zero 2050</h2>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8">
            VLC Group cam kết đạt mục tiêu phát thải ròng bằng 0 vào năm 2050,
            thông qua việc ứng dụng công nghệ xanh và quản lý năng lượng hiệu quả
          </p>
          <button className="px-8 py-4 bg-white text-[#0F5132] rounded-lg font-semibold hover:bg-gray-100 transition-all">
            Xem lộ trình chi tiết
          </button>
        </div>
      </div>
    </div>
  );
}
