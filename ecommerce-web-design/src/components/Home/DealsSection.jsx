import Image from "next/image";
import Container from "../container";

export default function DealsSection() {
  const deals = [
    { id: 1, name: "Smart watches", discount: "-25%", image: "/assets/image/tech/8.jpg" },
    { id: 2, name: "Laptops", discount: "-15%", image: "/assets/image/tech/7.jpg" },
    { id: 3, name: "GoPro Camera", discount: "-40%", image: "/assets/image/tech/6.jpg" },
    { id: 4, name: "Headphones", discount: "-30%", image: "/assets/image/tech/5.jpg" },
    { id: 5, name: "Canon Cameras", discount: "-25%", image: "/assets/image/tech/3.jpg" },
  ];

  return (
    <Container>
      <div className="deals-section bg-white border border-gray-200 rounded-md overflow-hidden grid grid-cols-12 gap-0">
        
        {/* Left Side: Title & Timer */}
        <div className="col-span-12 md:col-span-3 p-4 border-b md:border-b-0 md:border-r border-gray-200">
          <div className="flex md:block justify-between items-center">
            <div className="title">
              <h2 className="text-lg font-bold">Deals and offers</h2>
              <p className="text-gray-500 text-sm hidden md:block">Hygiene and equipments</p>
              <p className="text-gray-400 text-xs md:hidden">Electronic equipments</p>
            </div>

            <div className="time flex pt-0 md:pt-6 gap-x-1 sm:gap-x-2">
              {[
                { val: "04", label: "Days" },
                { val: "12", label: "Hour" },
                { val: "30", label: "Min" },
                { val: "45", label: "Sec" },
              ].map((t, i) => (
                <div key={i} className="bg-[#E3E8EE] md:bg-[#606060] text-gray-600 md:text-white w-10 h-10 md:w-12 md:h-12 flex flex-col items-center justify-center rounded text-[10px] md:text-xs">
                  <span className="font-bold text-xs md:text-sm">{t.val}</span> 
                  <span className="opacity-70">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: Deals Cards */}
        <div className="col-span-12 md:col-span-9">
          {/* Mobile: horizontal scroll | Desktop: grid-cols-5 */}
          <div className="flex md:grid md:grid-cols-5 overflow-x-auto no-scrollbar">
            {deals.map((deal) => (
              <div 
                className="min-w-[140px] md:min-w-full flex-shrink-0 border-r border-gray-200 last:border-r-0 p-4 hover:bg-gray-50 transition" 
                key={deal.id}
              >
                <div className="card flex flex-col items-center justify-center text-center">
                  <div className="img mb-3 h-[120px] flex items-center">
                    <Image 
                      src={deal.image} 
                      alt={deal.name} 
                      width={100} 
                      height={100} 
                      className="object-contain"
                    />
                  </div>
                  <div className="text">
                    <h3 className="text-sm text-gray-700 whitespace-nowrap overflow-hidden text-ellipsis w-full max-w-[120px]">
                      {deal.name}
                    </h3>
                    <p className="discount my-2">
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {deal.discount}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Container>
  );
}