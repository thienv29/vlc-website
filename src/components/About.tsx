import { Target, Eye, Award, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useRef, useState } from 'react';

// Custom hook for scroll-triggered animations
function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

interface AboutProps {
  fullPage?: boolean;
}

export default function About({ fullPage = false }: AboutProps) {
  const { t } = useTranslation();

  if (fullPage) {
    return (
      <div className="pt-24 pb-20">
        {/* Page Banner */}
        <div className="relative bg-gradient-to-r from-primary-800 to-primary-500 text-white py-20 mb-16 animate-fadeIn">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slideInUp">{t('about.title')}</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto animate-slideInUp delay-100 mb-8">
              {t('about.tagline')}
            </p>
            <button
              onClick={() => {
                const timelineElement = document.getElementById('timeline-section');
                timelineElement?.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
              className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full shadow-lg hover:bg-white/20 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 animate-slideInUp delay-200"
            >
              <span className="font-semibold">Khám phá hành trình phát triển</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <AboutContent />
          <Timeline />
          <Values />
          <Certifications />
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-white animate-fadeIn">
      <div className="max-w-7xl mx-auto px-6">
        <AboutContent />
      </div>
    </section>
  );
}

function AboutContent() {
  const { t } = useTranslation();

  const features = [
    { icon: Target, label: t('about.features.quality') },
    { icon: Users, label: t('about.features.experts') },
    { icon: Award, label: t('about.features.iso') },
    { icon: Eye, label: t('about.features.transparency') },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-16 items-center mb-20 animate-fadeIn">
      <div className="relative animate-slideInUp">
        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
          <img
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="VLC Group"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary-500/10 rounded-2xl -z-10 animate-pulseLight" />
      </div>

      <div className="animate-slideInUp delay-100">
        <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
          {t('about.section')}
        </span>
        <h2 className="text-4xl font-bold text-primary-800 mt-4 mb-6">
          {t('about.title2')}
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          {t('about.description1')}
        </p>
        <p className="text-gray-600 leading-relaxed mb-8">
          {t('about.description2')}
        </p>

        <div className="grid grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-3 transform hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                <item.icon className="text-primary-600" size={24} />
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
  const { t } = useTranslation();

  const milestones = [
    {
      year: '2003',
      title: t('about.timeline.milestones.2003.title'),
      desc: t('about.timeline.milestones.2003.desc'),
      achievements: ['Đội ngũ 20 người', 'Khởi nghiệp EPC'],
      impact: 'Bước ngoặt khởi đầu'
    },
    {
      year: '2010',
      title: t('about.timeline.milestones.2010.title'),
      desc: t('about.timeline.milestones.2010.desc'),
      achievements: ['5 chi nhánh', 'Mở rộng thị trường', '100+ nhân viên'],
      impact: 'Bứt phá mở rộng'
    },
    {
      year: '2015',
      title: t('about.timeline.milestones.2015.title'),
      desc: t('about.timeline.milestones.2015.desc'),
      achievements: ['ISO 9001:2015', 'Chất lượng quốc tế', 'Uy tín ngành'],
      impact: 'Đạt chuẩn quốc tế'
    },
    {
      year: '2020',
      title: t('about.timeline.milestones.2020.title'),
      desc: t('about.timeline.milestones.2020.desc'),
      achievements: ['Bộ phận bền vững', 'Công nghệ xanh', 'ESG commitment'],
      impact: 'Chuyển đổi xanh'
    },
    {
      year: '2024',
      title: t('about.timeline.milestones.2024.title'),
      desc: t('about.timeline.milestones.2024.desc'),
      achievements: ['AI & IoT', 'Số hóa EPC', 'Công nghệ 4.0'],
      impact: 'Cách mạng số'
    },
  ];

  return (
    <div id="timeline-section" className="mb-20 animate-fadeIn">
      <div className="text-center mb-20">
        <h3 className="text-5xl font-bold text-primary-800 mb-6 animate-slideInUp">{t('about.timeline.title')}</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slideInUp delay-100 leading-relaxed">
          Hành trình 20 năm phát triển và đổi mới của VLC Group - Từ khởi nghiệp đến dẫn dắt ngành EPC
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mt-8 rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Enhanced Timeline line with gradient */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-primary-600 via-primary-500 to-primary-400 rounded-full shadow-lg"></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-white via-transparent to-white rounded-full opacity-50"></div>

        {milestones.map((milestone, index) => {
          const { ref, isVisible } = useScrollAnimation();

          return (
            <div
              key={index}
              ref={ref}
              className={`relative mb-24 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:text-left'}`}
            >
              {/* Enhanced Timeline dot with pulse effect */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 z-20">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-primary-500 rounded-full border-4 border-white shadow-xl animate-pulse"></div>
                <div className="absolute inset-0 w-8 h-8 bg-primary-400 rounded-full animate-ping opacity-20"></div>
              </div>

              {/* Premium Content card - Rectangular with Image */}
              <div
                className={`relative bg-white shadow-xl border border-gray-200 rounded-lg transform hover:scale-102 hover:shadow-2xl transition-all duration-500 group max-w-2xl overflow-hidden ${
                  index % 2 === 0 ? 'md:mr-16 ml-auto' : 'md:ml-16'
                } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms'
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={`https://images.pexels.com/photos/${[
                      '3184430', // 2003 - team/startup
                      '3182812', // 2010 - business growth
                      '3184325', // 2015 - certification
                      '159304',  // 2020 - technology
                      '8386440'  // 2024 - AI/digital
                    ][index]}/pexels-photo-${[
                      '3184430',
                      '3182812',
                      '3184325',
                      '159304',
                      '8386440'
                    ][index]}.jpeg?auto=compress&cs=tinysrgb&w=800`}
                    alt={milestone.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Year badge overlay */}
                  <div className="absolute top-6 left-6">
                    <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center">
                      <div className="text-center text-primary-800">
                        <div className="text-xl font-bold">{milestone.year}</div>
                      </div>
                    </div>
                  </div>

                  {/* Impact label overlay */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/90 backdrop-blur-sm text-primary-800 px-4 py-2 rounded-full text-sm font-semibold border border-white/20 shadow-md">
                      {milestone.impact}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Title with enhanced styling */}
                  <h4 className="text-2xl font-bold text-primary-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {milestone.title}
                  </h4>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-base">
                    {milestone.desc}
                  </p>

                  {/* Achievements with enhanced design */}
                  <div className="space-y-3">
                    <h5 className="text-sm font-semibold text-primary-700 uppercase tracking-wider mb-3">Thành tựu chính</h5>
                    <div className="flex flex-wrap gap-2">
                      {milestone.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="bg-gradient-to-r from-primary-50 to-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium border border-primary-200 shadow-sm hover:shadow-md hover:from-primary-100 hover:to-primary-200 transition-all duration-300"
                        >
                          ✓ {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Progress indicator */}
        <div className="text-center mt-24 mb-8 relative z-10">
          <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white px-12 py-6 rounded-full shadow-xl inline-block">
            <span className="font-bold text-lg">20 năm phát triển liên tục</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Values() {
  const { t } = useTranslation();

  const values = [
    { title: t('about.values.vision.title'), desc: t('about.values.vision.desc'), icon: Eye },
    { title: t('about.values.mission.title'), desc: t('about.values.mission.desc'), icon: Target },
    { title: t('about.values.coreValues.title'), desc: t('about.values.coreValues.desc'), icon: Award },
  ];

  return (
    <div className="mb-20 grid md:grid-cols-3 gap-8 animate-fadeIn">
      {values.map((value, index) => (
        <div key={index} className="bg-gradient-to-br from-primary-800 to-primary-700 text-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300" style={{ animationDelay: `${index * 150}ms` }}>
          <value.icon size={40} className="mb-4 text-primary-400" />
          <h3 className="text-xl font-bold mb-3">{value.title}</h3>
          <p className="text-gray-200 leading-relaxed">{value.desc}</p>
        </div>
      ))}
    </div>
  );
}

function Certifications() {
  const { t } = useTranslation();

  const certificationImages = [
    { name: 'ISO 9001:2015', image: 'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'ISO 14001', image: 'https://images.pexels.com/photos/3862135/pexels-photo-3862135.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'OHSAS 18001', image: 'https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=100' },
    { name: 'Green Building', image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=100' },
  ];

  return (
    <div className="bg-[#F5F7FA] rounded-2xl p-12 animate-fadeIn">
      <h3 className="text-3xl font-bold text-primary-800 mb-8 text-center animate-slideInUp">{t('about.certifications.title')}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {certificationImages.map((cert, index) => (
          <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm transform hover:scale-105 transition-transform duration-300" style={{ animationDelay: `${index * 100}ms` }}>
            <img src={cert.image} alt={cert.name} className="mx-auto mb-3 w-20 h-20 object-contain" />
            <p className="font-semibold text-primary-800">{cert.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
