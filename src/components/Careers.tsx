import { MapPin, Clock, ArrowRight, Heart, TrendingUp, Award, Users } from 'lucide-react';

export default function Careers() {
  const jobs = [
    {
      id: 1,
      title: 'Kỹ sư EPC',
      location: 'Hà Nội',
      type: 'Full-time',
      level: 'Junior - Senior',
      description: 'Tham gia thiết kế, giám sát thi công các dự án EPC quy mô lớn',
    },
    {
      id: 2,
      title: 'Chuyên viên Phát triển Bền vững',
      location: 'TP.HCM',
      type: 'Full-time',
      level: 'Middle',
      description: 'Xây dựng và triển khai các chương trình CSR, quản lý môi trường',
    },
    {
      id: 3,
      title: 'Kỹ sư Năng lượng Tái tạo',
      location: 'Đà Nẵng',
      type: 'Full-time',
      level: 'Senior',
      description: 'Thiết kế và tối ưu hóa hệ thống năng lượng mặt trời, gió',
    },
    {
      id: 4,
      title: 'Quản lý Dự án',
      location: 'Hà Nội',
      type: 'Full-time',
      level: 'Senior',
      description: 'Quản lý tiến độ, chất lượng và ngân sách các dự án EPC',
    },
    {
      id: 5,
      title: 'Kỹ thuật viên Vận hành',
      location: 'Bình Dương',
      type: 'Full-time',
      level: 'Junior',
      description: 'Vận hành và bảo trì hệ thống điện, cơ khí cho nhà máy',
    },
    {
      id: 6,
      title: 'Chuyên viên Kinh doanh',
      location: 'TP.HCM',
      type: 'Full-time',
      level: 'Middle',
      description: 'Phát triển khách hàng, tư vấn giải pháp EPC và công nghệ xanh',
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Chế độ phúc lợi',
      items: ['Bảo hiểm đầy đủ', 'Khám sức khỏe định kỳ', 'Team building 4 lần/năm'],
    },
    {
      icon: TrendingUp,
      title: 'Phát triển sự nghiệp',
      items: ['Lộ trình thăng tiến rõ ràng', 'Đào tạo chuyên môn', 'Làm việc với dự án lớn'],
    },
    {
      icon: Award,
      title: 'Thu nhập & Thưởng',
      items: ['Lương cạnh tranh', 'Thưởng theo KPI', 'Review lương 2 lần/năm'],
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="relative mb-20">
        <div className="aspect-[21/9] overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Careers"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-accent-800/90 to-primary-500/80" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Cùng phát triển bền vững cùng VLC
              </h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                Tham gia đội ngũ hơn 1000+ chuyên gia, xây dựng tương lai xanh và thịnh vượng
              </p>
              <button className="px-8 py-4 bg-white text-accent-800 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                Khám phá cơ hội
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-accent-800 mb-12 text-center">
            Tại sao chọn VLC?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-primary-500/10 rounded-xl flex items-center justify-center mb-6">
                  <benefit.icon className="text-primary-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-accent-800 mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, i) => (
                    <li key={i} className="text-gray-600 flex items-start gap-2">
                      <span className="text-primary-600 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-accent-800 mb-12 text-center">
            Vị trí tuyển dụng
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border-2 border-transparent hover:border-primary-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-accent-800 group-hover:text-primary-600 transition-colors">
                    {job.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary-500/10 text-primary-600 rounded-full text-xs font-semibold">
                    {job.level}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-6">{job.description}</p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <MapPin size={16} className="text-primary-600" />
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock size={16} className="text-primary-600" />
                    {job.type}
                  </div>
                </div>
                <button className="w-full py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-all flex items-center justify-center gap-2 group-hover:gap-3">
                  Ứng tuyển ngay
                  <ArrowRight size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-br from-primary-50 to-white rounded-3xl p-12 text-center">
          <Users className="text-primary-600 mx-auto mb-6" size={60} />
          <h3 className="text-3xl font-bold text-accent-800 mb-4">
            Không tìm thấy vị trí phù hợp?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Hãy gửi CV của bạn đến chúng tôi. VLC luôn chào đón những tài năng xuất sắc
            để cùng nhau phát triển.
          </p>
          <button className="px-8 py-4 bg-accent-800 text-white rounded-lg font-semibold hover:bg-accent-900 transition-all">
            Gửi CV tự do
          </button>
        </div>
      </div>
    </div>
  );
}
