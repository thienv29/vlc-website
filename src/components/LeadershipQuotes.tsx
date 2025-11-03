import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const leadershipQuotes = [
  {
    id: 1,
    quote: "Tại VLC Group, chúng tôi tin rằng phát triển bền vững không chỉ là trách nhiệm mà còn là cơ hội để tạo nên những giá trị lâu dài cho cộng đồng và xã hội.",
    name: "Ông Nguyễn Văn A",
    position: "Tổng Giám đốc VLC Group",
    image: "/image-ceo.jpg"
  },
  {
    id: 2,
    quote: "Với hơn 20 năm kinh nghiệm, chúng tôi cam kết mang đến những giải pháp công nghệ tiên tiến nhất cho ngành năng lượng tái tạo Việt Nam.",
    name: "Bà Trần Thị B",
    position: "Phó Tổng Giám đốc",
    image: "/image-ceo.jpg"
  },
  {
    id: 3,
    quote: "Mỗi dự án chúng tôi thực hiện đều góp phần xây dựng một tương lai xanh, sạch và bền vững cho thế hệ mai sau.",
    name: "Ông Lê Văn C",
    position: "Giám đốc Kỹ thuật",
    image: "/image-ceo.jpg"
  }
];

export default function LeadershipQuotes() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % leadershipQuotes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + leadershipQuotes.length) % leadershipQuotes.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentQuote = leadershipQuotes[currentSlide];

  return (
    <section className="py-24 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider">
            Lãnh đạo
          </span>
          <h2 className="text-4xl font-bold text-[#0F5132] mt-4 mb-6">
            Lời chia sẻ từ lãnh đạo
          </h2>
          <p className="text-xl text-gray-600">
            Tầm nhìn và sứ mệnh của ban lãnh đạo VLC Group
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="bg-white rounded-2xl p-12 shadow-lg relative overflow-hidden">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="text-[#0F5132] w-6 h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="text-[#0F5132] w-6 h-6" />
            </button>

            {/* Quote Content */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="flex items-center justify-center">
                <img
                  src={currentQuote.image}
                  alt={currentQuote.name}
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
                  "{currentQuote.quote}"
                </blockquote>
                <div
                  className="opacity-0"
                  style={{
                    animation: 'fadeInSlideRight 0.6s ease-out forwards',
                    animationDelay: '0.4s'
                  }}
                  key={`name-${currentSlide}`}
                >
                  <h4 className="font-semibold text-[#0F5132] text-lg mb-1">{currentQuote.name}</h4>
                  <p className="text-gray-600">{currentQuote.position}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-3">
            {leadershipQuotes.map((_, index) => (
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
