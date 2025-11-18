import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Briefcase, DollarSign, Users, Send, User, Mail, Phone, FileText, GraduationCap } from 'lucide-react';
import PageWrapper from './PageWrapper';
import { useState } from 'react';

export default function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experience: '',
    education: '',
    coverLetter: '',
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock job data - in a real app, this would come from an API
  const job = {
    id: 1,
    title: 'Kỹ sư EPC',
    location: 'Hà Nội',
    type: 'Full-time',
    level: 'Junior - Senior',
    salary: '15-25 triệu VND',
    department: 'Kỹ thuật',
    description: 'Tham gia thiết kế, giám sát thi công các dự án EPC quy mô lớn trong lĩnh vực năng lượng tái tạo và xử lý nước thải.',
    requirements: [
      'Tốt nghiệp Đại học/Cao đẳng chuyên ngành Kỹ thuật Xây dựng, Cơ điện tử, hoặc lĩnh vực liên quan',
      'Có kinh nghiệm 2+ năm trong lĩnh vực EPC hoặc thi công công trình',
      'Thành thạo các phần mềm AutoCAD, Revit, MS Project',
      'Có kỹ năng giao tiếp tốt, làm việc nhóm hiệu quả',
      'Có khả năng làm việc dưới áp lực và đáp ứng deadline'
    ],
    responsibilities: [
      'Tham gia lập kế hoạch và thiết kế kỹ thuật cho các dự án EPC',
      'Giám sát quá trình thi công tại hiện trường',
      'Đảm bảo chất lượng công trình theo tiêu chuẩn và quy định',
      'Phối hợp với các bộ phận liên quan trong dự án',
      'Báo cáo tiến độ và giải quyết các vấn đề phát sinh'
    ],
    benefits: [
      'Lương thưởng cạnh tranh theo năng lực',
      'Bảo hiểm đầy đủ theo quy định nhà nước',
      'Đào tạo chuyên môn định kỳ',
      'Môi trường làm việc chuyên nghiệp',
      'Cơ hội thăng tiến và phát triển bản thân'
    ],
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920',
    postedDate: '2024-01-15',
    applicationDeadline: '2024-02-15'
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    alert('Ứng tuyển thành công! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.');
    setIsSubmitting(false);

    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      experience: '',
      education: '',
      coverLetter: '',
      resume: null
    });
  };

  return (
    <PageWrapper>
      {/* Page Banner */}
      <div className="relative bg-gradient-to-r from-primary-600 to-accent-600 text-white py-20 mb-16">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Chi tiết tuyển dụng</h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            {job.title}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-16">
        {/* Back Button */}
        <button
          onClick={() => navigate('/careers')}
          className="flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Quay lại danh sách vị trí</span>
        </button>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Job Header */}
            <div className="border-b border-gray-200 pb-8">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-4xl font-bold text-accent-800 mb-4">{job.title}</h1>
                  <div className="flex flex-wrap gap-6 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary-600" />
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={18} className="text-primary-600" />
                      <span className="font-medium">{job.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign size={18} className="text-primary-600" />
                      <span className="font-medium">{job.salary}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-semibold">
                    {job.level}
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4">
                  <Users size={20} className="text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Bộ phận</p>
                  <p className="font-semibold text-accent-800">{job.department}</p>
                </div>
                <div className="p-4">
                  <Clock size={20} className="text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Hạn nộp</p>
                  <p className="font-semibold text-accent-800">{job.applicationDeadline}</p>
                </div>
                <div className="p-4">
                  <Briefcase size={20} className="text-primary-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-500 uppercase tracking-wide">Kinh nghiệm</p>
                  <p className="font-semibold text-accent-800">{job.level}</p>
                </div>
              </div>
            </div>

            {/* Job Details */}
            <div className="space-y-10">
              {/* Job Description */}
              <div>
                <h2 className="text-2xl font-bold text-accent-800 mb-4">Mô tả công việc</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{job.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h2 className="text-2xl font-bold text-accent-800 mb-6">Trách nhiệm chính</h2>
                <ul className="space-y-4">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-primary-700 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h2 className="text-2xl font-bold text-accent-800 mb-6">Yêu cầu ứng viên</h2>
                <ul className="space-y-4">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-accent-700 font-semibold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div>
                <h2 className="text-2xl font-bold text-accent-800 mb-6">Quyền lợi</h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary-700 font-bold text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Application Form Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 sticky top-8">
              <h3 className="text-xl font-bold text-accent-800 mb-6">Ứng tuyển ngay</h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại *
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="0123 456 789"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kinh nghiệm
                  </label>
                  <div className="relative">
                    <Briefcase size={18} className="absolute left-3 top-3 text-gray-400" />
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Chọn kinh nghiệm</option>
                      <option value="0-1">Dưới 1 năm</option>
                      <option value="1-3">1-3 năm</option>
                      <option value="3-5">3-5 năm</option>
                      <option value="5+">Trên 5 năm</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Trình độ học vấn
                  </label>
                  <div className="relative">
                    <GraduationCap size={18} className="absolute left-3 top-3 text-gray-400" />
                    <select
                      name="education"
                      value={formData.education}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Chọn trình độ</option>
                      <option value="high-school">Trung học phổ thông</option>
                      <option value="college">Cao đẳng</option>
                      <option value="university">Đại học</option>
                      <option value="master">Thạc sĩ</option>
                      <option value="phd">Tiến sĩ</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thư xin việc
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                    placeholder="Giới thiệu ngắn gọn về bản thân và lý do ứng tuyển..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CV/Resume *
                  </label>
                  <div className="relative">
                    <FileText size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                    />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Chấp nhận file PDF, DOC, DOCX (tối đa 5MB)</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Đang gửi...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Gửi ứng tuyển
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Lưu ý:</strong> Thông tin của bạn sẽ được bảo mật và chỉ sử dụng cho mục đích tuyển dụng.
                  Chúng tôi sẽ liên hệ với bạn trong vòng 3-5 ngày làm việc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
