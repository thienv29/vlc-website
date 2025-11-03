import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider">
            Liên hệ
          </span>
          <h2 className="text-4xl font-bold text-[#0F5132] mt-4 mb-6">
            Thông tin liên hệ
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-[#3CB371]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Mail className="text-[#3CB371]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#0F5132] mb-4">Email</h3>
            <p className="text-gray-600">info@vlcgroup.vn</p>
            <p className="text-gray-600">support@vlcgroup.vn</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-[#3CB371]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Phone className="text-[#3CB371]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#0F5132] mb-4">Điện thoại</h3>
            <p className="text-gray-600">(024) 1234 5678</p>
            <p className="text-gray-600">(028) 8765 4321</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-[#3CB371]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="text-[#3CB371]" size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#0F5132] mb-4">Địa chỉ</h3>
            <p className="text-gray-600">123 Đường ABC</p>
            <p className="text-gray-600">Quận Cầu Giấy, Hà Nội</p>
          </div>
        </div>
      </div>
    </section>
  );
}
