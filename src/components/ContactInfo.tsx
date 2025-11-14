import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactInfo() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#F8FFFE] to-[#E8F8F5] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#3CB371]/5 rounded-full -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0F5132]/3 rounded-full translate-x-32 translate-y-32"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#3CB371] to-[#0F5132] rounded-full mb-6">
            <Mail className="text-white" size={20} />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#0F5132] to-[#3CB371] bg-clip-text text-transparent mb-4">
            Thông tin liên hệ
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Hãy liên hệ với chúng tôi để được tư vấn và hỗ trợ tốt nhất
          </p>
        </div>

        {/* Email and Phone in 2 columns */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/50">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3CB371] to-[#2E8B57] rounded-xl flex items-center justify-center mx-auto">
                <Mail className="text-white" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F5132] mb-4">Email</h3>
            <div className="space-y-2">
              <p className="text-gray-600 font-medium hover:text-[#3CB371] transition-colors cursor-pointer">info@vlcgroup.vn</p>
              <p className="text-gray-600 font-medium hover:text-[#3CB371] transition-colors cursor-pointer">support@vlcgroup.vn</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/50">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3CB371] to-[#2E8B57] rounded-xl flex items-center justify-center mx-auto">
                <Phone className="text-white" size={28} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F5132] mb-4">Điện thoại</h3>
            <div className="space-y-2">
              <p className="text-gray-600 font-medium hover:text-[#3CB371] transition-colors cursor-pointer">(024) 1234 5678</p>
              <p className="text-gray-600 font-medium hover:text-[#3CB371] transition-colors cursor-pointer">(028) 8765 4321</p>
            </div>
          </div>
        </div>

        {/* Addresses in 3 columns */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/50 group">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3CB371] to-[#2E8B57] rounded-xl flex items-center justify-center mx-auto">
                <MapPin className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F5132] mb-4 bg-gradient-to-r from-[#0F5132] to-[#3CB371] bg-clip-text text-transparent">Miền Bắc</h3>
            <div className="space-y-1">
              <p className="text-gray-600 text-sm leading-relaxed">36 Trần Thái Tông</p>
              <p className="text-gray-600 text-sm leading-relaxed">Phường Cầu Giấy, Hà Nội</p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs font-medium text-[#3CB371]">Chi nhánh chính</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/50 group">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3CB371] to-[#2E8B57] rounded-xl flex items-center justify-center mx-auto">
                <MapPin className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F5132] mb-4 bg-gradient-to-r from-[#0F5132] to-[#3CB371] bg-clip-text text-transparent">Miền Trung</h3>
            <div className="space-y-1">
              <p className="text-gray-600 text-sm leading-relaxed">23 Trảng Kèo 4</p>
              <p className="text-gray-600 text-sm leading-relaxed">Phường Hội An Tây, Đà Nẵng</p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs font-medium text-[#3CB371]">Chi nhánh Đà Nẵng</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/50 group">
            <div className="relative mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3CB371] to-[#2E8B57] rounded-xl flex items-center justify-center mx-auto">
                <MapPin className="text-white" size={24} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#0F5132] mb-4 bg-gradient-to-r from-[#0F5132] to-[#3CB371] bg-clip-text text-transparent">Miền Tây</h3>
            <div className="space-y-1">
              <p className="text-gray-600 text-sm leading-relaxed">Lô 17D, Đường số 5</p>
              <p className="text-gray-600 text-sm leading-relaxed">Phường Long Xuyên, An Giang</p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-xs font-medium text-[#3CB371]">Chi nhánh An Giang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
