import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Văn Lang VLC không chỉ là một đối tác xây dựng, mà còn là người đồng hành tin cậy trong mọi dự án của chúng tôi. Sự chuyên nghiệp, uy tín và chất lượng luôn được đặt lên hàng đầu.",
    name: "Ông Nguyễn Văn A",
    position: "Tổng Giám đốc",
    image: "/image-ceo.jpg"
  },
  {
    id: 2,
    quote: "Chúng tôi rất ấn tượng với khả năng hoàn thành dự án đúng tiến độ và vượt qua các tiêu chuẩn chất lượng. VLC Group thực sự là đối tác đáng tin cậy.",
    name: "Bà Trần Thị B",
    position: "Giám đốc Dự án",
    image: "/image-ceo.jpg"
  },
  {
    id: 3,
    quote: "Với VLC, chúng tôi không chỉ nhận được sản phẩm chất lượng mà còn được hỗ trợ tận tình trong suốt quá trình hợp tác. Rất hài lòng!",
    name: "Ông Lê Văn C",
    position: "Chủ đầu tư",
    image: "/image-ceo.jpg"
  }
];

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentTestimonial = testimonials[currentSlide];

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1E2A78] mb-4">Ý kiến khách hàng</h2>
          <p className="text-xl text-gray-600">
            Những gì khách hàng nói về chúng tôi
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="bg-white rounded-2xl p-12 shadow-lg relative overflow-hidden">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="text-[#1E2A78] w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="text-[#1E2A78] w-6 h-6" />
            </button>

            {/* Testimonial Content */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="flex items-center justify-center">
                <img
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full max-h-96 rounded-2xl object-cover shadow-lg transition-all duration-700 ease-out transform hover:scale-105 opacity-0 animate-fade-in"
                  style={{
                    animation: 'fadeInSlideLeft 0.7s ease-out forwards',
                    animationDelay: '0.1s'
                  }}
                  key={`image-${currentSlide}`}
                />
              </div>
              <div className="flex flex-col justify-center">
                <Quote
                  className="text-[#3CB371] w-12 h-12 mb-6 opacity-0"
                  style={{
                    animation: 'fadeInSlideRight 0.6s ease-out forwards',
                    animationDelay: '0.2s'
                  }}
                  key={`quote-icon-${currentSlide}`}
                />
                <blockquote
                  className="text-xl text-gray-700 leading-relaxed mb-8 italic opacity-0"
                  style={{
                    animation: 'fadeInSlideRight 0.6s ease-out forwards',
                    animationDelay: '0.3s'
                  }}
                  key={`quote-${currentSlide}`}
                >
                  "{currentTestimonial.quote}"
                </blockquote>
                <div
                  className="opacity-0"
                  style={{
                    animation: 'fadeInSlideRight 0.6s ease-out forwards',
                    animationDelay: '0.4s'
                  }}
                  key={`name-${currentSlide}`}
                >
                  <h4 className="font-semibold text-[#1E2A78] text-lg mb-1">{currentTestimonial.name}</h4>
                  <p className="text-gray-600">{currentTestimonial.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-[#3CB371] scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
