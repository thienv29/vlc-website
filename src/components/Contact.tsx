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
            <h2 className="text-5xl font-bold text-brand-dark mb-4">Liên hệ với chúng tôi</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
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
            <span className="text-brand-green font-semibold text-sm uppercase tracking-wider">
              Liên hệ
            </span>
            <h2 className="text-4xl font-bold text-brand-dark mt-4 mb-6">
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
      city: 'Chi nhánh Miền Bắc',
      address: '36 Trần Thái Tông, Phường Cầu Giấy, Hà Nội',
      phone: '(024) 1234 5678',
      email: 'hanoi@vlcgroup.vn',
    },
    {
      city: 'Chi nhánh Miền Trung',
      address: '23 Trảng Kèo 4, Phường Hội An Tây, Đà Nẵng',
      phone: '(0236) 9876 5432',
      email: 'danang@vlcgroup.vn',
    },
    {
      city: 'Chi nhánh Miền Tây',
      address: 'Lô 17D, Đường số 5, Phường Long Xuyên, An Giang',
      phone: '(0296) 1234 5678',
      email: 'angiang@vlcgroup.vn',
    },
  ];

  return (
    <div>
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-12 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Mail size={16} />
              Liên hệ với chúng tôi
            </div>
            <h3 className="text-3xl font-bold text-brand-dark mb-4">Gửi yêu cầu tư vấn</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Điền thông tin bên dưới, chúng tôi sẽ liên hệ trong vòng 24h để hỗ trợ bạn tốt nhất
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">

                <label className="block text-sm font-semibold text-brand-dark">Họ và tên *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-dark">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-dark">Số điện thoại *</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all"
                  placeholder="0901234567"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-brand-dark">Dịch vụ quan tâm</label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 text-brand-dark focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all bg-white"
                >
                  <option value="">Chọn dịch vụ</option>
                  <option value="epc">Tổng thầu EPC</option>
                  <option value="om">Vận hành & Bảo trì</option>
                  <option value="env">Tư vấn Môi trường</option>
                  <option value="product">Sản phẩm & Công nghệ</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-brand-dark">Nội dung *</label>
              <textarea
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 text-brand-dark placeholder-gray-400 focus:outline-none focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 transition-all resize-none"
                placeholder="Mô tả chi tiết về nhu cầu của bạn..."
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brand-green to-brand-dark text-white rounded-xl font-semibold hover:from-brand-dark hover:to-brand-green transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Gửi yêu cầu tư vấn
              </button>
              <p className="text-sm text-gray-500 mt-4">
                Chúng tôi cam kết bảo mật thông tin của bạn
              </p>
            </div>
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
          <div key={index} className="bg-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">{office.city}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-green flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-600 text-sm">{office.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brand-green flex-shrink-0" size={20} />
                <span className="text-gray-600 text-sm">{office.phone}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="text-brand-green flex-shrink-0" size={20} />
                <span className="text-gray-600 text-sm">{office.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
