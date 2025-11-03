import { useTranslation } from 'react-i18next';

export default function Partners() {
  const { t } = useTranslation();

  const partners = [
    { name: 'Partner 1', logo: 'https://via.placeholder.com/150x80/3CB371/FFFFFF?text=Partner+1' },
    { name: 'Partner 2', logo: 'https://via.placeholder.com/150x80/0F5132/FFFFFF?text=Partner+2' },
    { name: 'Partner 3', logo: 'https://via.placeholder.com/150x80/2563EB/FFFFFF?text=Partner+3' },
    { name: 'Partner 4', logo: 'https://via.placeholder.com/150x80/1E40AF/FFFFFF?text=Partner+4' },
    { name: 'Partner 5', logo: 'https://via.placeholder.com/150x80/7C3AED/FFFFFF?text=Partner+5' },
    { name: 'Partner 6', logo: 'https://via.placeholder.com/150x80/DC2626/FFFFFF?text=Partner+6' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#3CB371] font-semibold text-sm uppercase tracking-wider">
            Đối tác
          </span>
          <h2 className="text-4xl font-bold text-[#0F5132] mt-4 mb-6">
            Đối tác chiến lược
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi hợp tác với các đối tác hàng đầu để mang đến giải pháp tốt nhất cho khách hàng
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-gray-50 hover:bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <div className="aspect-[3/2] flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
