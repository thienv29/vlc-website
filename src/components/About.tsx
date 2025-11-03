import { Target, Eye, Award, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface AboutProps {
  fullPage?: boolean;
}

export default function About({ fullPage = false }: AboutProps) {
  const { t } = useTranslation();

  if (fullPage) {
    return (
      <div className="pt-32 pb-20">
        {/* Page Banner */}
        <div className="relative bg-gradient-to-r from-[#1E2A78] to-[#3CB371] text-white py-20 mb-16">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">{t('about.title')}</h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
              {t('about.tagline')}
            </p>
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
    <section className="py-24 bg-white">
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
          {t('about.section')}
        </span>
        <h2 className="text-4xl font-bold text-[#1E2A78] mt-4 mb-6">
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
  const { t } = useTranslation();

  const milestones = [
    { year: '2003', title: t('about.timeline.milestones.2003.title'), desc: t('about.timeline.milestones.2003.desc') },
    { year: '2010', title: t('about.timeline.milestones.2010.title'), desc: t('about.timeline.milestones.2010.desc') },
    { year: '2015', title: t('about.timeline.milestones.2015.title'), desc: t('about.timeline.milestones.2015.desc') },
    { year: '2020', title: t('about.timeline.milestones.2020.title'), desc: t('about.timeline.milestones.2020.desc') },
    { year: '2024', title: t('about.timeline.milestones.2024.title'), desc: t('about.timeline.milestones.2024.desc') },
  ];

  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-[#1E2A78] mb-12 text-center">{t('about.timeline.title')}</h3>
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
  const { t } = useTranslation();

  const values = [
    { title: t('about.values.vision.title'), desc: t('about.values.vision.desc'), icon: Eye },
    { title: t('about.values.mission.title'), desc: t('about.values.mission.desc'), icon: Target },
    { title: t('about.values.coreValues.title'), desc: t('about.values.coreValues.desc'), icon: Award },
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
  const { t } = useTranslation();

  return (
    <div className="bg-[#F5F7FA] rounded-2xl p-12">
      <h3 className="text-3xl font-bold text-[#1E2A78] mb-8 text-center">{t('about.certifications.title')}</h3>
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
