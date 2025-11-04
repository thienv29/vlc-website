import { Crown, Target, Lightbulb, Users, Award, TrendingUp } from 'lucide-react';

const leadershipQuotes = [
  {
    id: 1,
    quote: "Tại VLC Group, chúng tôi tin rằng phát triển bền vững không chỉ là trách nhiệm mà còn là cơ hội để tạo nên những giá trị lâu dài cho cộng đồng và xã hội.",
    name: "Ông Nguyễn Văn A",
    position: "Tổng Giám đốc VLC Group",
    image: "/image-ceo.jpg",
    focus: "Tầm nhìn chiến lược",
    icon: Crown,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    achievements: ["20+ năm kinh nghiệm", "500+ dự án thành công", "Top 10 EPC Việt Nam"]
  },
  {
    id: 2,
    quote: "Với hơn 20 năm kinh nghiệm, chúng tôi cam kết mang đến những giải pháp công nghệ tiên tiến nhất cho ngành năng lượng tái tạo Việt Nam.",
    name: "Bà Trần Thị B",
    position: "Phó Tổng Giám đốc",
    image: "/image-ceo.jpg",
    focus: "Đổi mới công nghệ",
    icon: Lightbulb,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    achievements: ["AI & IoT tích hợp", "Công nghệ 4.0", "Giải pháp xanh"]
  },
  {
    id: 3,
    quote: "Mỗi dự án chúng tôi thực hiện đều góp phần xây dựng một tương lai xanh, sạch và bền vững cho thế hệ mai sau.",
    name: "Ông Lê Văn C",
    position: "Giám đốc Kỹ thuật",
    image: "/image-ceo.jpg",
    focus: "Cam kết bền vững",
    icon: Target,
    color: "text-green-600",
    bgColor: "bg-green-50",
    achievements: ["ISO 14001:2015", "ESG commitment", "Bộ phận bền vững"]
  }
];

export default function LeadershipQuotes() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-200 rounded-full px-4 py-2 mb-6 animate-fadeIn">
            <Award className="w-4 h-4 text-primary-600" />
            <span className="text-primary-700 font-medium text-sm">Ban lãnh đạo</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-slideInUp">
            Tầm nhìn từ <span className="text-primary-600">lãnh đạo</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp delay-50 leading-relaxed">
            Những nhà lãnh đạo với tầm nhìn chiến lược, dẫn dắt VLC Group phát triển bền vững và đổi mới không ngừng
          </p>
        </div>

        {/* Leadership Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {leadershipQuotes.map((leader, index) => (
            <div
              key={leader.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 animate-slideInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header with focus area */}
              <div className={`${leader.bgColor} px-6 py-4 border-b border-gray-100`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${leader.bgColor} rounded-xl flex items-center justify-center`}>
                    <leader.icon className={`w-5 h-5 ${leader.color}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${leader.color} text-sm uppercase tracking-wider`}>
                      {leader.focus}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="relative px-6 pt-6">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="px-6 pb-6">
                {/* Quote */}
                <div className="relative mb-6">
                  <div className="text-primary-600 text-4xl leading-none mb-2 opacity-20">"</div>
                  <blockquote className="text-gray-700 leading-relaxed italic text-sm pl-4 border-l-2 border-primary-200">
                    {leader.quote}
                  </blockquote>
                </div>

                {/* Leader Info */}
                <div className="mb-4">
                  <h4 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-primary-600 transition-colors">
                    {leader.name}
                  </h4>
                  <p className="text-gray-600 text-sm font-medium">{leader.position}</p>
                </div>

                {/* Achievements */}
                <div className="space-y-2">
                  <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Thành tựu chính</h5>
                  {leader.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                      <span className="text-xs text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-500 rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <Users className="w-8 h-8 text-primary-300 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">50+</div>
              <div className="text-primary-100 text-sm">Năm lãnh đạo</div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <Award className="w-8 h-8 text-primary-300 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">15+</div>
              <div className="text-primary-100 text-sm">Chứng nhận</div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              <TrendingUp className="w-8 h-8 text-primary-300 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">500+</div>
              <div className="text-primary-100 text-sm">Dự án thành công</div>
            </div>
            <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}>
              <Target className="w-8 h-8 text-primary-300 mx-auto mb-3" />
              <div className="text-2xl font-bold mb-1">100%</div>
              <div className="text-primary-100 text-sm">Cam kết chất lượng</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
