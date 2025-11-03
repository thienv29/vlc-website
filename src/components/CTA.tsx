import { useState, useEffect } from 'react';
import { Send, Clock, CheckCircle, Phone, Mail, MapPin, Sparkles, ArrowRight } from 'lucide-react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('CTA Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    'Tư vấn miễn phí 100%',
    'Báo giá chi tiết trong 24h',
    'Hỗ trợ kỹ thuật trọn đời',
    'Đảm bảo tiến độ và chất lượng'
  ];

  const contactInfo = [
    { icon: Phone, label: 'Hotline', value: '1900 XXX XXX', color: 'text-green-400' },
    { icon: Mail, label: 'Email', value: 'info@vlc-group.vn', color: 'text-blue-400' },
    { icon: MapPin, label: 'Địa chỉ', value: 'TP.HCM & Hà Nội', color: 'text-red-400' }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-white animate-slideInUp">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 backdrop-blur-sm border border-primary-400/30 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-primary-300 font-medium text-sm">Ưu đãi đặc biệt</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Bắt đầu dự án <span className="text-primary-400">hôm nay</span>
            </h2>

            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Đừng để dự án của bạn bị trì hoãn. Liên hệ ngay để nhận tư vấn miễn phí và giải pháp EPC toàn diện từ đội ngũ chuyên gia hàng đầu Việt Nam.
            </p>

            {/* Urgency Timer */}
            <div className="bg-red-500/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-red-400 animate-pulse" />
                <span className="text-red-300 font-medium">Thời gian ưu đãi còn lại:</span>
              </div>
              <div className="text-3xl font-bold text-white font-mono">
                {formatTime(timeLeft)}
              </div>
              <p className="text-red-200 text-sm mt-2">Tư vấn miễn phí + Báo giá chi tiết</p>
            </div>

            {/* Benefits */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 animate-fadeIn" style={{ animationDelay: `${index * 200}ms` }}>
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-gray-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-center gap-3 animate-fadeIn" style={{ animationDelay: `${index * 100 + 800}ms` }}>
                  <contact.icon className={`w-5 h-5 ${contact.color} flex-shrink-0`} />
                  <div>
                    <div className="text-sm text-gray-300">{contact.label}</div>
                    <div className="text-white font-medium">{contact.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="animate-slideInUp delay-200">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 border border-white/20 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Gửi thành công!</h3>
                  <p className="text-gray-200">Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Yêu cầu tư vấn miễn phí</h3>
                    <p className="text-gray-200">Điền thông tin để nhận báo giá chi tiết</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <label className="block text-sm font-medium text-white mb-2 group-focus-within:text-primary-300 transition-colors">
                          Họ và tên *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all"
                          placeholder="Nguyễn Văn A"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-sm font-medium text-white mb-2 group-focus-within:text-primary-300 transition-colors">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-white mb-2 group-focus-within:text-primary-300 transition-colors">
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all"
                        placeholder="0901234567"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-sm font-medium text-white mb-2 group-focus-within:text-primary-300 transition-colors">
                        Mô tả dự án
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:border-primary-400 focus:bg-white/15 transition-all resize-none"
                        placeholder="Mô tả ngắn gọn về dự án của bạn..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="group w-full py-4 bg-gradient-to-r from-primary-500 to-primary-400 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-primary-500 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      Gửi yêu cầu tư vấn
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>

                    <p className="text-center text-gray-300 text-sm">
                      Chúng tôi cam kết bảo mật thông tin của bạn
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
