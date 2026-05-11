import Image from "next/image";
import Container from "../container";

const flags = [
  { id: 1, image: '/assets/Layout1/Image/flags/1.png', name: 'Arabic Emirates', link: 'shopname.ae' },
  { id: 2, image: '/assets/Layout1/Image/flags/2.png', name: 'Australia', link: 'shopname.ae' },
  { id: 3, image: '/assets/Layout1/Image/flags/3.png', name: 'United States', link: 'shopname.ae' },
  { id: 4, image: '/assets/Layout1/Image/flags/4.png', name: 'Russia', link: 'shopname.ae' },
  { id: 5, image: '/assets/Layout1/Image/flags/5.png', name: 'Italy', link: 'shopname.ae' },
  { id: 6, image: '/assets/Layout1/Image/flags/6.png', name: 'Denmark', link: 'denmark.com.dk' },
  { id: 7, image: '/assets/Layout1/Image/flags/7.png', name: 'France', link: 'shopname.com.fr' },
  { id: 8, image: '/assets/Layout1/Image/flags/1.png', name: 'Arabic Emirates', link: 'shopname.ae' },
  { id: 9, image: '/assets/Layout1/Image/flags/9.png', name: 'China', link: 'shopname.ae' },
  { id: 10, image: '/assets/Layout1/Image/flags/10.png', name: 'Great Britain', link: 'shopname.co.uk' }
];

export default function Supplier() {
  return (
    <Container>
      <div className="supplier-section py-8">
        <div className="content-wrapper">
          <div className="title mb-6">
            <h3 className="text-xl font-bold text-gray-800">Suppliers by region</h3>
          </div>

          {/* 
            Mobile: 2 columns (grid-cols-2)
            Tablet: 3 columns (md:grid-cols-3)
            Desktop: 5 columns (lg:grid-cols-5)
          */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2 md:gap-10">
            {flags.map(flag => (
              <div key={flag.id} className="flex items-center group cursor-pointer">
                <div className="flag-img flex-shrink-0">
                  <Image 
                    src={flag.image} 
                    alt={flag.name} 
                    width={28} 
                    height={20} 
                    className="rounded-sm object-cover shadow-sm"
                  />
                </div>
                <div className="name ps-3 overflow-hidden">
                  <p className="text-sm text-gray-700 leading-tight truncate">
                    {flag.name}
                  </p>
                  <span className="text-[11px] text-gray-400 block truncate leading-tight">
                    {flag.link}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}