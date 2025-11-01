import { Target, Eye, Award, Users } from 'lucide-react';

interface AboutProps {
  fullPage?: boolean;
}

export default function About({ fullPage = false }: AboutProps) {
  if (fullPage) {
    return (
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-[#1E2A78] mb-4">Về VLC Group</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We build values that last
            </p>
          </div>

          <AboutContent />
          <Timeline />
          <Values />
          <Certifications />
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AboutContent />
      </div>
    </section>
  );
}

function AboutContent() {
  return (
    <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
      <div className="relative">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden">
          <img
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="VLC Group"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#3CB371]/10 rounded-2xl -z-10" />
      </div>

      <div>
        <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider">
          Về chúng tôi
        </span>
        <h2 className="text-4xl font-bold text-[#1E2A78] mt-4 mb-6">
          Đối tác tin cậy cho dự án EPC của bạn
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          VLC Group là đơn vị tiên phong trong lĩnh vực EPC (Engineering, Procurement, Construction),
          cung cấp giải pháp tổng thể từ thiết kế, cung ứng thiết bị đến thi công và vận hành.
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          Với hơn 20 năm kinh nghiệm và đội ngũ chuyên gia giàu năng lực, chúng tôi cam kết
          mang đến các dự án chất lượng cao, bền vững và thân thiện với môi trường.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {[
            { icon: Target, label: 'Chất lượng hàng đầu' },
            { icon: Users, label: '1000+ Chuyên gia' },
            { icon: Award, label: 'ISO 9001:2015' },
            { icon: Eye, label: 'Minh bạch & Uy tín' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#3CB371]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="text-[#3CB371]" size={24} />
              </div>
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Timeline() {
  const milestones = [
    { year: '2003', title: 'Thành lập', desc: 'Khởi đầu với đội ngũ 20 người' },
    { year: '2010', title: 'Mở rộng', desc: 'Mở chi nhánh tại 5 tỉnh thành' },
    { year: '2015', title: 'Chứng nhận', desc: 'Đạt chứng nhận ISO 9001:2015' },
    { year: '2020', title: 'Xanh hóa', desc: 'Ra mắt bộ phận Phát triển bền vững' },
    { year: '2024', title: 'Số hóa', desc: 'Ứng dụng AI và IoT trong EPC' },
  ];

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-[#1E2A78] mb-12 text-center">Hành trình phát triển</h3>
      <div className="relative">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#1E2A78] to-[#3CB371]" />
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-16 h-16 bg-white border-4 border-[#3CB371] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-lg font-bold text-[#1E2A78]">{milestone.year}</span>
                </div>
              </div>
              <h4 className="font-semibold text-[#1E2A78] mb-1">{milestone.title}</h4>
              <p className="text-sm text-gray-600">{milestone.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Values() {
  const values = [
    { title: 'TẦM NHÌN', desc: 'Trở thành đối tác EPC hàng đầu khu vực, tiên phong trong giải pháp bền vững', icon: Eye },
    { title: 'SỨ MỆNH', desc: 'Mang đến giá trị vượt trội cho khách hàng, đối tác và cộng đồng', icon: Target },
    { title: 'GIÁ TRỊ CỐT LÕI', desc: 'Chất lượng - Uy tín - Sáng tạo - Bền vững - Trách nhiệm', icon: Award },
  ];

  return (
    <div className="mb-20 grid md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <div key={index} className="bg-gradient-to-br from-[#1E2A78] to-[#2a3f8f] text-white p-8 rounded-2xl">
          <value.icon size={40} className="mb-4 text-[#3CB371]" />
          <h3 className="text-xl font-bold mb-3">{value.title}</h3>
          <p className="text-gray-200 leading-relaxed">{value.desc}</p>
        </div>
      ))}
    </div>
  );
}

function Certifications() {
  return (
    <div className="bg-[#F5F7FA] rounded-2xl p-12">
      <h3 className="text-3xl font-bold text-[#1E2A78] mb-8 text-center">Chứng nhận & Giải thưởng</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {['ISO 9001:2015', 'ISO 14001', 'OHSAS 18001', 'Green Building'].map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm">
            <Award className="text-[#3CB371] mx-auto mb-3" size={40} />
            <p className="font-semibold text-[#1E2A78]">{cert}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
