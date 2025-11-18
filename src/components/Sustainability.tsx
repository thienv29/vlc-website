import React, { useState, useEffect } from 'react';
import PageWrapper from './PageWrapper';

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  badge: string;
  image: string;
  philosophy: string;
  philosophyContent: string;
  values: { title: string; content: string }[];
  impact: Record<string, string>;
  impactDescription: string;
  relatedNews: { date: string; title: string; excerpt: string; image: string }[];
}

const projectsData: Project[] = [
  {
    id: 1,
    category: "Tài trợ Công nghệ",
    title: "Nước Sạch Cho Vùng Xa",
    description: "Dự án hỗ trợ, tài trợ công nghệ lắp đặt các hệ thống xử lý nước sạch ứng dụng công nghệ tiên tiến của VLC cho các cộng đồng nông thôn, vùng sâu vùng xa, khu vực khó khăn đang thiếu nước sạch.",
    badge: "CSR",
    image: "https://cdn.thuvienphapluat.vn/uploads/tintuc/2024/10/01/gia-nuoc-sach.jpg?w=800",
    philosophy: "Triết lý của dự án",
    philosophyContent: "Nước sạch không phải là đặc quyền mà là quyền cơ bản của mọi người. VLC tin rằng công nghệ tiên tiến không chỉ phục vụ lợi nhuận mà còn lan tỏa giá trị nhân văn. Thay vì chỉ tài trợ thiết bị đơn thuần, chúng tôi mang đến giải pháp công nghệ hoàn chỉnh, bền vững, giúp cộng đồng tự chủ về nguồn nước sạch.",
    values: [
      {
        title: "Công nghệ cho cộng đồng",
        content: "Áp dụng hệ thống lọc RO kết hợp UV, công nghệ tương tự các dự án công nghiệp của VLC, loại bỏ 99.9% vi khuẩn, kim loại nặng và tạp chất"
      },
      {
        title: "Trao quyền, không phụ thuộc",
        content: "Đào tạo kỹ thuật viên địa phương vận hành và bảo trì hệ thống, tạo việc làm và đảm bảo dự án hoạt động lâu dài"
      },
      {
        title: "Lan tỏa giá trị bền vững",
        content: "Mỗi hệ thống phục vụ 500-1,000 người, giảm 80% bệnh đường tiêu hóa, cải thiện chất lượng cuộc sống"
      },
      {
        title: "Đo lường tác động",
        content: "Theo dõi chất lượng nước định kỳ, đánh giá sức khỏe cộng đồng, minh bạch hóa mọi kết quả"
      }
    ],
    impact: {
      systems: "15",
      provinces: "10",
      beneficiaries: "8,000+"
    },
    impactDescription: "Đến nay, dự án đã lắp đặt 15 hệ thống xử lý nước tại 10 tỉnh thành miền núi phía Bắc và Tây Nguyên, mang nước sạch đến hơn 8,000 người dân, trong đó 60% là trẻ em và phụ nữ.",
    relatedNews: [
      {
        date: "15/10/2025",
        title: "VLC lắp đặt hệ thống lọc nước tại 5 xã vùng cao Hà Giang",
        excerpt: "Hệ thống công suất 2,000 lít/giờ đã chính thức đi vào hoạt động, phục vụ hơn 3,000 người dân...",
        image: "https://images.unsplash.com/photo-1541672599-e485abc1a211?w=400"
      },
      {
        date: "08/09/2025",
        title: "Đào tạo kỹ thuật viên vận hành hệ thống nước sạch tại Cao Bằng",
        excerpt: "20 người dân địa phương đã hoàn thành khóa đào tạo 5 ngày, sẵn sàng quản lý hệ thống...",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400"
      }
    ]
  },
  {
    id: 2,
    category: "Học bổng & Nghiên cứu",
    title: "Kiến Tạo Tương Lai Xanh",
    description: "Kiến tạo tương lai xanh bằng các hoạt động tài trợ, trao học bổng và hỗ trợ các dự án nghiên cứu của sinh viên các ngành Môi trường, Kỹ thuật tại các trường Đại học tại Thành phố Hồ Chí Minh nhằm góp phần ươm mầm thế hệ kỹ sư tương lai.",
    badge: "Giáo dục",
    image: "https://files02.duytan.edu.vn/svruploads/news-duytan/uploads/images/songxanh-50.jpg?w=800",
    philosophy: "Triết lý của dự án",
    philosophyContent: "Tương lai xanh không tự nhiên mà có, nó được kiến tạo bởi những thế hệ kỹ sư tài năng với tầm nhìn bền vững. VLC tin rằng đầu tư vào giáo dục là đầu tư vào tương lai. Thay vì chỉ trao học bổng, chúng tôi tạo ra một hệ sinh thái hỗ trợ toàn diện: tài chính, kiến thức, cơ hội thực tế và mạng lưới.",
    values: [
      {
        title: "Học bổng toàn diện",
        content: "20 triệu đồng/năm cho sinh viên xuất sắc ngành Môi trường và Kỹ thuật, kèm theo cơ hội thực tập tại VLC"
      },
      {
        title: "Tài trợ nghiên cứu",
        content: "Hỗ trợ 50-100 triệu đồng cho các đề tài nghiên cứu về xử lý nước, năng lượng tái tạo, công nghệ xanh"
      },
      {
        title: "Mentorship thực chiến",
        content: "Kết nối sinh viên với các chuyên gia VLC, hướng dẫn từ lý thuyết đến thực hành trên dự án thực tế"
      },
      {
        title: "Cơ hội nghề nghiệp",
        content: "Ưu tiên tuyển dụng các học bổng sinh xuất sắc, tạo lộ trình phát triển nghề nghiệp rõ ràng"
      }
    ],
    impact: {
      scholarships: "50",
      research: "15",
      universities: "8"
    },
    impactDescription: "Chương trình đã trao 50 suất học bổng, tài trợ 15 đề tài nghiên cứu, hợp tác với 8 trường đại học hàng đầu TP.HCM. 70% sinh viên tham gia đã có việc làm trong lĩnh vực môi trường ngay sau tốt nghiệp.",
    relatedNews: [
      {
        date: "15/09/2025",
        title: "Trao 50 suất học bổng 'Kiến tạo tương lai xanh' năm 2025",
        excerpt: "Lễ trao học bổng đã vinh danh 50 sinh viên xuất sắc từ 8 trường đại học...",
        image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400"
      },
      {
        date: "20/08/2025",
        title: "Đề tài 'Xử lý nước thải bằng vật liệu sinh học' nhận tài trợ 80 triệu",
        excerpt: "Nhóm sinh viên ĐH Bách Khoa được VLC tài trợ nghiên cứu giải pháp xử lý nước chi phí thấp...",
        image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400"
      }
    ]
  },
  {
    id: 3,
    category: "Y tế Cộng đồng",
    title: "Hiến Máu Nhân Đạo",
    description: "Y tế cộng đồng là hoạt động thường niên trong nội bộ của doanh nghiệp trong việc tổ chức, tham gia các buổi hiến máu tình nguyện theo định kỳ, góp phần cứu sống hàng trăm bệnh nhân.",
    badge: "Nhân đạo",
    image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800",
    philosophy: "Triết lý của dự án",
    philosophyContent: "Máu là sự sống, là món quà vô giá mà mỗi người có thể dành tặng cho người khác. VLC tin rằng văn hóa doanh nghiệp không chỉ nằm trong KPI mà còn ở lòng nhân ái. Hiến máu định kỳ không chỉ là trách nhiệm mà là nét đẹp văn hóa, giúp CBNV kết nối, chia sẻ và cảm nhận giá trị sống ý nghĩa hơn.",
    values: [
      {
        title: "Văn hóa sẻ chia",
        content: "100% nhân viên VLC được khuyến khích tham gia, tạo không khí tương thân, tương ái trong công ty"
      },
      {
        title: "Cam kết định kỳ",
        content: "Tổ chức 4 đợt hiến máu/năm, phối hợp với Viện Huyết học - Truyền máu TP.HCM, đảm bảo an toàn tuyệt đối"
      },
      {
        title: "Chăm sóc sức khỏe",
        content: "Khám sàng lọc miễn phí, tư vấn dinh dưỡng, nghỉ phép có lương cho người hiến máu"
      },
      {
        title: "Tôn vinh và lan tỏa",
        content: "Vinh danh 'Chiến sĩ Hồng thập tự' hàng năm, truyền cảm hứng cho cộng đồng doanh nghiệp"
      }
    ],
    impact: {
      donors: "200+",
      bloodUnits: "600+",
      lives: "1,800+"
    },
    impactDescription: "5 năm qua, hơn 200 CBNV VLC đã hiến hơn 600 đơn vị máu, góp phần cứu sống ước tính 1,800 bệnh nhân. VLC được vinh danh 'Đơn vị tiên tiến trong phong trào hiến máu nhân đạo' 3 năm liên tiếp.",
    relatedNews: [
      {
        date: "25/10/2025",
        title: "Ngày hội hiến máu VLC lần thứ 20: 150 đơn vị máu tình nguyện",
        excerpt: "Với tinh thần 'Giọt máu hồng - Tấm lòng vàng', 80 CBNV đã tham gia hiến máu...",
        image: "https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=400"
      },
      {
        date: "18/07/2025",
        title: "VLC nhận Bằng khen của Bộ Y tế về phong trào hiến máu",
        excerpt: "Ghi nhận những đóng góp xuất sắc trong 5 năm, VLC vinh dự nhận bằng khen...",
        image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400"
      }
    ]
  },
  {
    id: 4,
    category: "Môi trường Xanh",
    title: "Phủ Xanh Thành Phố",
    description: "Bảo vệ môi trường, kiến tạo không gian xanh là những hoạt động CSR công ty hướng đến việc dùng hành động thực tế để hỗ trợ tạo ra bầu không khí xanh, trong lành không chỉ ở công ty, nhà máy, xí nghiệp mà lan tỏa bằng những buổi tham gia trồng cây phủ xanh cho thành phố.",
    badge: "Môi trường",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800",
    philosophy: "Triết lý của dự án",
    philosophyContent: "Mỗi cái cây là một lá phổi xanh cho thành phố, là di sản cho thế hệ sau. VLC tin rằng bảo vệ môi trường không chỉ là khẩu hiệu mà là hành động cụ thể, bắt đầu từ chính mình. Từ việc xanh hóa nhà máy, đến trồng cây công viên, chúng tôi muốn tạo ra làn sóng lan tỏa, biến mỗi CBNV thành đại sứ xanh.",
    values: [
      {
        title: "Xanh hóa nội bộ",
        content: "100% văn phòng, nhà máy của VLC có không gian xanh, vườn cây bản địa, giảm 30% nhiệt độ tự nhiên"
      },
      {
        title: "Trồng cây cộng đồng",
        content: "Phối hợp với UBND TP.HCM trồng 5,000 cây xanh/năm tại các công viên, đường phố, khu dân cư"
      },
      {
        title: "Giáo dục môi trường",
        content: "Tổ chức workshop 'Sống xanh' cho CBNV và cộng đồng, hướng dẫn phân loại rác, tiết kiệm năng lượng"
      },
      {
        title: "Zero waste",
        content: "Cam kết giảm 50% rác thải nhựa trong 3 năm, chuyển sang vật liệu phân hủy sinh học"
      }
    ],
    impact: {
      trees: "15,000+",
      parks: "20+",
      co2Reduced: "180 tấn/năm"
    },
    impactDescription: "3 năm qua, VLC đã trồng hơn 15,000 cây xanh tại 20 công viên và tuyến phố TP.HCM, góp phần giảm 180 tấn CO2/năm. 100% CBNV cam kết 'Sống xanh mỗi ngày', giảm 70% rác thải văn phòng.",
    relatedNews: [
      {
        date: "05/11/2025",
        title: "VLC trồng 2,000 cây xanh tại Công viên Gia Định",
        excerpt: "Sự kiện 'Phủ xanh thành phố' thu hút 300 tình nguyện viên VLC và cộng đồng...",
        image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400"
      },
      {
        date: "22/09/2025",
        title: "Workshop 'Zero Waste' cho 200 CBNV VLC",
        excerpt: "Chương trình đào tạo về phân loại rác, tái chế, giảm thiểu nhựa đã được tổ chức...",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400"
      }
    ]
  }
];

export default function Sustainability() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  const impactLabels: Record<string, string> = {
    systems: 'Hệ thống lắp đặt',
    provinces: 'Tỉnh thành',
    beneficiaries: 'Người thụ hưởng',
    scholarships: 'Học bổng trao tặng',
    research: 'Đề tài nghiên cứu',
    universities: 'Trường đại học',
    donors: 'Người hiến máu',
    bloodUnits: 'Đơn vị máu',
    lives: 'Mạng sống cứu được',
    trees: 'Cây xanh trồng',
    parks: 'Công viên/Tuyến phố',
    co2Reduced: 'CO₂ giảm thiểu'
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <PageWrapper>
      {/* Hero Banner */}
      <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: `linear-gradient(135deg, rgba(0, 70, 80, 0.9) 0%, rgba(0, 97, 113, 0.85) 100%), url(${"/nhon-trach-6a-120.jpg"})` }}>
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative z-10 max-w-4xl px-6 mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.3)' }}>
            PHÁT TRIỂN BỀN VỮNG
          </h1>
          <h1
  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
  style={{
    color: 'rgb(204, 236, 129)'
  }}
>
  TRÁCH NHIỆM TRONG TỪNG HÀNH ĐỘNG
</h1>
          <p className="text-xl md:text-2xl opacity-95 leading-relaxed mb-6">
            Các thông tin, tin tức về các dự án học bổng, tài trợ, hoạt động thiện nguyện của VLC đang trực tiếp góp phần vào sự phát triển bền vững của khách hàng và xã hội
          </p>
        </div>
      </div>

      {/* Commitment */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-green-800 border-b-4 border-yellow-400 pb-2 inline-block">
            CAM KẾT PHÁT TRIỂN BỀN VỮNG
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 text-justify">
            Tại VLC, <span className="font-bold text-green-700">sự bền vững</span> là một trong bốn giá trị cốt lõi, là kim chỉ nam cho mọi chiến lược và hành động. Chúng tôi tin rằng sự phát triển của doanh nghiệp phải luôn hài hòa với lợi ích của xã hội và bảo vệ môi trường.<br/><br/>
            Sứ mệnh <span className="font-bold text-green-700">"Đồng hành vì màu xanh"</span> của chúng tôi được thể hiện qua cam kết làm chủ các giải pháp kỹ thuật và pháp lý, không chỉ để đảm bảo sự tuân thủ tuyệt đối cho khách hàng mà còn để chủ động kiến tạo những giá trị tích cực, bảo vệ tài nguyên nước và góp phần xây dựng một tương lai an toàn cho thế hệ mai sau.
          </p>
        </div>
      </section>

      {/* Core Business */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-green-800">
            BỀN VỮNG TRONG HOẠT ĐỘNG KINH DOANH
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">01</div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Giải pháp kỹ thuật hiện đại, tiên tiến</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Chúng tôi kiến tạo các công trình, dự án đặc biệt là các dự án xử lý nước bằng công nghệ tiên tiến, tối ưu hóa việc sử dụng năng lượng, giảm phát thải và đảm bảo chất lượng nước đầu ra đạt tiêu chuẩn cao nhất.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">02</div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Tư vấn giải pháp môi trường tối ưu</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Chúng tôi luôn đảm bảo sự chính trực và trách nhiệm, đồng hành cùng doanh nghiệp đảm bảo sự tuân thủ tuyệt đối về pháp lý, ngăn ngừa rủi ro ngay từ giai đoạn lập dự án, đưa ra các giải pháp tối ưu nhất cho khách hàng và không ảnh hưởng đến môi trường.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border-l-4 border-green-500">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">03</div>
              <h3 className="text-xl font-bold mb-4 text-green-800">Chất lượng dịch vụ</h3>
              <p className="text-gray-600 leading-relaxed text-justify">
                Chúng tôi cam kết chính trực trong mọi hoạt động tư vấn, giúp khách hàng xây dựng hệ thống pháp lý môi trường một cách minh bạch, đúng luật. Là "người đồng hành tín nhiệm", chúng tôi luôn đảm bảo các hệ thống vận hành ổn định, hiệu quả và an toàn trong suốt vòng đời.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-green-800 to-green-700 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[{number: '25+', label: 'Năm kinh nghiệm'},
            {number: '500+', label: 'Dự án hoàn thành'},
            {number: '100+', label: 'Đối tác tin cậy'},
            {number: '8,000+', label: 'Người được hưởng lợi'}].map((stat, index) => (
            <div key={index} className="p-6 bg-white/10 rounded-lg hover:bg-white/15 transition">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.number}</div>
              <div className="text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Community Projects */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 text-green-800">
              KIẾN TẠO GIÁ TRỊ BỀN VỮNG VÌ CỘNG ĐỒNG
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              VLC luôn chủ động thực hiện trách nhiệm xã hội, không chỉ bằng các hoạt động hướng về cộng đồng đơn lẻ mà chúng tôi muốn bằng chính năng lực cốt lõi của mình để kiến tạo những giá trị lâu dài, đúng với tinh thần hướng về cộng đồng, lan toả và phát triển bền vững
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="flex flex-col justify-end bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition transform hover:-translate-y-3">
                <div className="relative h-64">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-green-800 px-4 py-2 rounded-full font-bold text-sm">
                    {project.badge}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>
                <div className="p-8 h-full flex flex-col justify-between items-start">
                  <div>
                    <p className="text-green-600 font-bold text-sm uppercase mb-2">{project.category}</p>
                    <h3 className="text-2xl font-bold mb-4 text-green-800">{project.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-justify">{project.description}</p>
                  </div>
                  <button className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition" onClick={() => openModal(project)}>
                    Tìm hiểu thêm
                    <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && selectedProject && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center overflow-y-auto" onClick={closeModal}>
          <div className="bg-white max-w-6xl w-full rounded-2xl overflow-hidden mt-8 mb-8" onClick={(e) => e.stopPropagation()}>
            {/* Modal header */}
            <div className="relative h-80 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${selectedProject.image})`}}>
              <button className="absolute top-4 right-4 bg-black/70 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-black/90 transition text-2xl font-bold" onClick={closeModal}>
                ×
              </button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                <p className="text-yellow-400 font-bold text-sm uppercase mb-2">{selectedProject.category}</p>
                <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                <p className="text-lg text-gray-200">{selectedProject.description}</p>
              </div>
            </div>
            {/* Modal body */}
            <div className="p-8">
              {/* Philosophy */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-green-800 border-l-4 border-yellow-400 pl-4">{selectedProject.philosophy}</h3>
                <p className="text-gray-600 leading-relaxed text-justify">{selectedProject.philosophyContent}</p>
              </div>
              {/* Values */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800 border-l-4 border-yellow-400 pl-4">Giá trị cốt lõi</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {selectedProject.values.map((value, index) => (
                    <div key={index} className="bg-gradient-to-br from-yellow-50 to-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-md transition">
                      <h4 className="font-bold text-green-700 mb-3">{value.title}</h4>
                      <p className="text-gray-600 leading-relaxed text-justify">{value.content}</p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Impact */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6 text-green-800 border-l-4 border-yellow-400 pl-4">Tác động thực tế</h3>
                <div className="grid grid-cols-3 gap-6 bg-gradient-to-r from-green-800 to-green-700 text-white p-6 rounded-xl mb-6">
                  {Object.entries(selectedProject.impact).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-yellow-400 mb-1">{value}</div>
                      <div className="text-sm">{impactLabels[key]}</div>
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed text-justify">{selectedProject.impactDescription}</p>
              </div>
              {/* News */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-green-800 border-l-4 border-yellow-400 pl-4">Tin tức liên quan</h3>
                <div className="space-y-4">
                  {selectedProject.relatedNews.map((news, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-xl hover:shadow-md transition cursor-pointer">
                      <div className="w-24 h-16 bg-cover bg-center bg-no-repeat rounded-lg flex-shrink-0" style={{backgroundImage: `url(${news.image})`}}></div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">{news.date}</p>
                        <h4 className="font-bold text-green-800 mb-1">{news.title}</h4>
                        <p className="text-gray-600 text-sm">{news.excerpt}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

   </PageWrapper>
  );
}
