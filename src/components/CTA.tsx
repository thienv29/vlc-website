import { useState } from 'react';
import { Send } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CTA Form submitted:', formData);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary-800 to-primary-500">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-6">
            Bắt đầu dự án của bạn ngay hôm nay
          </h2>
          <p className="text-xl text-gray-100 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để nhận tư vấn miễn phí và báo giá chi tiết cho dự án của bạn
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-white mb-2">Họ và tên *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary-400"
                  placeholder="Nguyễn Văn A"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary-400"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Số điện thoại *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary-400"
                placeholder="0901234567"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">Nội dung cần tư vấn</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 resize-none"
                placeholder="Mô tả ngắn gọn về dự án của bạn..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all flex items-center justify-center gap-2"
            >
              Gửi yêu cầu tư vấn
              <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
