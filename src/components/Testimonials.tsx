import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Khách hàng nói gì về chúng tôi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Những đánh giá chân thực từ đối tác và khách hàng đã tin tưởng lựa chọn dịch vụ của VLC Group
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Nguyễn Văn Minh",
              position: "Giám đốc kỹ thuật",
              company: "Công ty TNHH Cơ điện Việt Nam",
              content: "VLC Group đã hoàn thành dự án EPC nhà máy điện gió 50MW với chất lượng vượt trội. Đội ngũ chuyên nghiệp, tiến độ đúng hẹn và hỗ trợ kỹ thuật 24/7.",
              rating: 5,
              avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
            },
            {
              name: "Trần Thị Lan",
              position: "Phó Tổng Giám đốc",
              company: "Tập đoàn Xây dựng Quốc tế",
              content: "Dịch vụ bảo trì và vận hành của VLC Group giúp chúng tôi tối ưu hóa hiệu suất hệ thống. Tiết kiệm 30% chi phí vận hành hàng năm.",
              rating: 5,
              avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
            },
            {
              name: "Lê Hoàng Anh",
              position: "Trưởng phòng Môi trường",
              company: "Công ty Cổ phần Đầu tư Bền vững",
              content: "Quy trình tư vấn môi trường chuyên nghiệp, giúp doanh nghiệp chúng tôi hoàn thiện hồ sơ pháp lý nhanh chóng và tuân thủ đầy đủ các quy định.",
              rating: 5,
              avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover shadow-md"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}</div>
                  <div className="text-xs text-primary-600 font-medium">{testimonial.company}</div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-white rounded-2xl shadow-lg border border-gray-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-600">98%</div>
              <div className="text-sm text-gray-600">Khách hàng quay lại</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">4.9/5</div>
              <div className="text-sm text-gray-600">Đánh giá trung bình</div>
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">24/7</div>
              <div className="text-sm text-gray-600">Hỗ trợ kỹ thuật</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
