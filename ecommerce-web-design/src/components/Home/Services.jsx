import Image from "next/image"; 
import Container from "../container";
import { Search, Archive, SendHorizontal, ShieldCheck } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: 1,
      name: "Source from Industry Hubs",
      image: "/assets/Image/backgrounds/1.png",
      icon: <Search size={18} />
    },
    {
      id: 2,
      name: "Customize Your Products",
      image: "/assets/Image/backgrounds/2.png",
      icon: <Archive size={18} />
    },
    {
      id: 3,
      name: "Fast, reliable shipping by ocean or air",
      image: "/assets/Image/backgrounds/3.png",
      icon: <SendHorizontal size={18} />
    },
    {
      id: 4,
      name: "Product monitoring and inspection", 
      image: "/assets/Image/backgrounds/4.png" ,
      icon: <ShieldCheck size={18} />
    }, 
  ];

  return (
    <>
      <Container>
        <section className="services-section pt-8 pb-10">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Our extra services</h2>
          
          {/* Responsive Grid: Mobile 1, Tablet 2, Desktop 4 columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                
                {/* Image Container */}
                <div className="relative h-[120px] w-full">
                  <Image 
                    src={service.image} 
                    alt={service.name} 
                    fill // Container ke mutabiq khud adjust hoga
                    className="object-cover"
                  />
                  {/* Overlay for darker effect on hover */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                </div>

                {/* Content Section */}
                <div className="relative p-4 pt-6">
                  {/* Floating Icon Container */}
                  <div className="absolute -top-6 right-4 p-3 rounded-full bg-[#D1E7FF] border-4 border-white flex items-center justify-center shadow-sm">
                    <div className="text-gray-800">
                      {service.icon}
                    </div>
                  </div>
                  
                  {/* Service Name */}
                  <p className="font-medium text-gray-800 leading-snug max-w-[80%]">
                    {service.name}
                  </p>
                </div>
                
              </div>
            ))}
          </div>
        </section>
      </Container>
    </> 
  );
}