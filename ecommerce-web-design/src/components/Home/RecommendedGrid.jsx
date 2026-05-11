import Image from "next/image";
import Container from "../container";

export default function RecommendGrid() {
  const initial = [
    { id: 1, name: 'T-shirts with multiple colors, for men', image: '/assets/Layout/alibaba/Image/cloth/1.png', usd: '$10.30' },
    { id: 2, name: 'Jeans shorts for men blue color', image: '/assets/Layout/alibaba/Image/cloth/2.png', usd: '$10.30' },
    { id: 3, name: 'Brown winter coat medium size', image: '/assets/Layout/alibaba/Image/cloth/3.png', usd: '$12.50' },
    { id: 4, name: 'Jeans bag for travel for men', image: '/assets/Layout/alibaba/Image/cloth/4.png', usd: '$34.00' },
    { id: 5, name: 'Leather wallet', image: '/assets/Layout/alibaba/Image/cloth/5.png', usd: '$99.00' },
    { id: 6, name: 'Canon camera black, 100x zoom', image: '/assets/Layout/alibaba/Image/cloth/6.png', usd: '$9.99' },
    { id: 7, name: 'Headset for gaming with mic', image: '/assets/Layout/alibaba/Image/cloth/7.png', usd: '$8.99' },
    { id: 8, name: 'Smartwatch silver color modern', image: '/assets/Layout/alibaba/Image/cloth/5.png', usd: '$10.30' },
    { id: 9, name: 'Blue wallet for men leather material', image: '/assets/Layout/alibaba/Image/cloth/8.png', usd: '$10.30' },
    { id: 10, name: 'Jeans bag for travel for men', image: '/assets/Layout/alibaba/Image/cloth/9.png', usd: '$80.95' },
  ];

  return (
    <Container>
      <div className="recommended-section mt-6 mb-10">
        <div className="title mb-4">
          <h4 className="text-lg md:text-xl font-bold text-gray-800">Recommended items</h4>
        </div>

        {/* Responsive Grid: Mobile 2 cols, Tablet 3-4 cols, Desktop 5 cols */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {initial.map((item) => (
            <div 
              key={`${item.name}-${item.id}`} 
              className="card-wrapper bg-white border border-gray-200 rounded-md p-3 md:p-4 hover:shadow-md transition-shadow duration-300"
            >
              <div className="card flex flex-col h-full">
                {/* Image Section */}
                <div className="img-container flex justify-center items-center h-32 md:h-40 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    width={140} 
                    height={140} 
                    className="object-contain hover:scale-105 transition-transform"
                  />
                </div>

                {/* Info Section */}
                <div className="text-content mt-3 flex flex-col flex-grow">
                  <p className="price font-semibold text-gray-900 text-sm md:text-base">
                    {item.usd}
                  </p>
                  <p className="item-name text-xs md:text-sm text-gray-500 mt-1 line-clamp-2 leading-relaxed">
                    {item.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}