import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  fullPage?: boolean;
}

export default function Contact({ fullPage = false }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  if (fullPage) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#0F5132] mb-4 animate-slideInUp">Liên hệ với chúng tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-slideInUp delay-100">
              Sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>
          <ContactContent formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider">
            Liên hệ
          </span>
          <h2 className="text-4xl font-bold text-[#0F5132] mt-4 mb-6">
            Bắt đầu dự án của bạn
          </h2>
        </div>
        <ContactContent formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} compact />
      </div>
    </section>
  );
}

function ContactContent({ formData, setFormData, handleSubmit, compact = false }: any) {
  const offices = [
    {
      city: 'Hà Nội',
      address: '123 Đường ABC, Quận Cầu Giấy, Hà Nội',
      phone: '(024) 1234 5678',
      email: 'hanoi@vlcgroup.vn',
    },
    {
      city: 'TP.HCM',
      address: '456 Đường XYZ, Quận 1, TP.HCM',
      phone: '(028) 8765 4321',
      email: 'hcm@vlcgroup.vn',
    },
    {
      city: 'Đà Nẵng',
      address: '789 Đường DEF, Quận Hải Châu, Đà Nẵng',
      phone: '(0236) 9876 5432',
      email: 'danang@vlcgroup.vn',
    },
  ];

  return (
    <div>
      <div className="bg-gradient-to-br from-[#0F5132] to-[#1e5f3a] rounded-3xl p-12 text-white mb-16 animate-fadeIn">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold mb-4 text-center animate-slideInUp">Gửi yêu cầu tư vấn</h3>
          <p className="text-gray-200 text-center mb-8 animate-slideInUp delay-100">
            Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong vòng 24h
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 animate-slideInUp delay-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <label className="block text-sm font-medium mb-2">Họ và tên *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3CB371]"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: '0.5s' }}>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3CB371]"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <label className="block text-sm font-medium mb-2">Số điện thoại *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3CB371]"
                  placeholder="0901234567"
                />
              </div>
              <div className="animate-fadeIn" style={{ animationDelay: '0.7s' }}>
                <label className="block text-sm font-medium mb-2">Dịch vụ quan tâm</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#3CB371]"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="epc">Tổng thầu EPC</option>
                  <option value="om">Vận hành & Bảo trì</option>
                  <option value="env">Tư vấn Môi trường</option>
                  <option value="product">Sản phẩm & Công nghệ</option>
                </select>
              </div>
            </div>

            <div className="animate-fadeIn" style={{ animationDelay: '0.8s' }}>
              <label className="block text-sm font-medium mb-2">Nội dung *</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3CB371] resize-none"
                placeholder="Mô tả chi tiết về nhu cầu của bạn..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#3CB371] text-white rounded-lg font-semibold hover:bg-[#34a563] transition-all flex items-center justify-center gap-2 animate-fadeIn"
              style={{ animationDelay: '0.9s' }}
            >
              Gửi yêu cầu
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>

      {!compact && (
        <div className="mb-16 aspect-[21/7] rounded-3xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096905980362!2d105.78034931493227!3d21.02879998599504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cd0c66f05%3A0xea31563511af2e54!2zSOG7kyBUw6J5!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-8">
        {offices.map((office, index) => (
          <div key={index} className="bg-[#F5F7FA] rounded-2xl p-8 animate-slideInUp" style={{ animationDelay: `${index * 200}ms` }}>
            <h3 className="text-2xl font-bold text-[#0F5132] mb-6 animate-fadeIn" style={{ animationDelay: `${index * 200 + 200}ms` }}>{office.city}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 animate-fadeIn" style={{ animationDelay: `${index * 200 + 400}ms` }}>
                <MapPin className="text-[#3CB371] flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600 text-sm">{office.address}</span>
              </div>
              <div className="flex items-center gap-3 animate-fadeIn" style={{ animationDelay: `${index * 200 + 600}ms` }}>
                <Phone className="text-[#3CB371] flex-shrink-0" size={20} />
                <span className="text-gray-600 text-sm">{office.phone}</span>
              </div>
              <div className="flex items-center gap-3 animate-fadeIn" style={{ animationDelay: `${index * 200 + 800}ms` }}>
                <Mail className="text-[#3CB371] flex-shrink-0" size={20} />
                <span className="text-gray-600 text-sm">{office.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
