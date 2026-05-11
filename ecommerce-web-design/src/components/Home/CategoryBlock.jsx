import Image from "next/image";
import Container from "../container";
import Link from "next/link";
import { ChevronRight } from "lucide-react"; // Icons ke liye

export default function CategoryBlock() {
  const initial = [
    { id: 1, name: 'Soft chairs', image: '/assets/Image/interior/1.png', usd: '$19' },
    { id: 2, name: 'Sofa & chair', image: '/assets/Image/interior/6.png', usd: '$19' },
    { id: 3, name: 'Kitchen dishes', image: '/assets/Image/interior/5.png', usd: '$19' },
    { id: 4, name: 'Smart watches', image: '/assets/Image/interior/3.png', usd: '$19' },
    { id: 5, name: 'Kitchen mixer', image: '/assets/Image/interior/9.png', usd: '$100' },
    { id: 6, name: 'Blenders', image: '/assets/Image/interior/8.png', usd: '$100' },
    { id: 7, name: 'Home appliance', image: '/assets/Image/interior/7.png', usd: '$100' },
    { id: 8, name: 'Coffee maker', image: '/assets/Image/interior/4.png', usd: '$100' },
  ];

  const tec = [
    { id: 1, name: 'Smart watches', image: '/assets/Image/tech/8.png', usd: '$19' },
    { id: 2, name: 'Cameras', image: '/assets/Image/tech/6.png', usd: '$19' },
    { id: 3, name: 'Headphones', image: '/assets/Image/tech/9.png', usd: '$19' },
    { id: 4, name: 'Electric kattle', image: '/assets/Image/tech/10.png', usd: '$19' },
    { id: 5, name: 'Gaming sets', image: '/assets/Image/tech/5.png', usd: '$100' },
    { id: 6, name: 'Laptops & PC', image: '/assets/Image/tech/7.png', usd: '$100' },
    { id: 7, name: 'Smartphones', image: '/assets/Image/tech/2.png', usd: '$100' },
    { id: 8, name: 'Smart watches', image: '/assets/Image/tech/1.png', usd: '$100' },
  ];

  // Ek reusable Component taake code saaf rahe
  const Section = ({ title, bgImage, items }) => (
    <div className="bg-white border border-gray-200 rounded-md mb-6 overflow-hidden">
      <div className="grid grid-cols-12">
        {/* Sidebar Banner - Desktop pe dikhega, mobile pe header ban jayega */}
        <div className="col-span-12 md:col-span-3 relative min-h-[150px] md:min-h-full">
          <div 
            className={`absolute inset-0 bg-cover bg-center md:bg-no-repeat`} 
            style={{ backgroundImage: `url(${bgImage})` }}
          >
            <div className="p-5 h-full flex flex-col items-start bg-black/10 md:bg-transparent">
              <h4 className="text-lg font-bold md:max-w-[120px] mb-4">{title}</h4>
              <button className="hidden md:block px-4 py-2 bg-white text-black font-semibold rounded-md shadow hover:bg-gray-100">
                Source now
              </button>
              {/* Mobile version of 'Source Now' */}
              <Link href="#" className="md:hidden flex items-center text-blue-600 font-semibold mt-auto">
                Source now <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Product Grid - Mobile pe horizontal scroll, Desktop pe 4 columns */}
        <div className="col-span-12 md:col-span-9">
          <div className="flex md:grid md:grid-cols-4 overflow-x-auto no-scrollbar md:overflow-visible">
            {items.map((item) => (
              <div 
                key={item.id} 
                className="min-w-[140px] md:min-w-full border-r border-b border-gray-200 p-4 flex flex-col md:flex-row justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="product-info">
                  <h3 className="text-sm font-medium mb-1 line-clamp-1">{item.name}</h3>
                  <p className="text-xs text-gray-400">From</p>
                  <p className="text-sm text-gray-500 font-semibold">USD {item.usd}</p>
                </div>
                <div className="mt-4 md:mt-auto flex justify-center items-end">
                  <Image src={item.image} alt={item.name} width={80} height={80} className="object-contain" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Container>
      <Section 
        title={<>Home and <br /> outdoor</>} 
        bgImage="/assets/image/backgrounds/initial.png" 
        items={initial} 
      />
      
      <Section 
        title={<>Consumer <br className="hidden md:block"/> electronics</>} 
        bgImage="/assets/image/backgrounds/tec.png" 
        items={tec} 
      />
    </Container>
  );
}