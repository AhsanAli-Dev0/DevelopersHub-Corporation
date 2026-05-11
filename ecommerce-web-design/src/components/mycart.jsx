import Image from "next/image";
import Container from "./container";
import Link from "next/link";
import { Lock, MessageSquare, Truck, ShoppingCart  } from "lucide-react";
export default function MyCart() {
  const mycarts = [
    {
      img: "/assets/Image/cloth/1.jpg",
      title: "T-shirts with multiple colors, for men and lady",
      description: "Size: medium, Color: blue, Material: Plastic",
      price: "$78.99",
      qty: 9,
      seller: "Artel Market"
    },
    {
      img: "/assets/Image/cloth/5.jpg",
      title: "T-shirts with multiple colors, for men and lady",
      description: "Size: medium, Color: blue, Material: Plastic",
      price: "$39.00",
      qty: 3,
      seller: "Best factory LLC"
    },
    {
      img: "/assets/Image/interior/6.jpg",
      title: "T-shirts with multiple colors, for men and lady",
      description: "Size: medium, Color: blue, Material: Plastic",
      price: "$170.50",
      qty: 1,
      seller: "Artel Market"
    }
  ];
const features = [
  {
    icon: <Lock className="text-gray-400" size={20} />,
    title: "Secure payment",
    desc: "Have you ever finally just"
  },
  {
    icon: <MessageSquare className="text-gray-400" size={20} />,
    title: "Customer support",
    desc: "Have you ever finally just"
  },
  {
    icon: <Truck className="text-gray-400" size={20} />,
    title: "Free delivery",
    desc: "Have you ever finally just"
  }
];
const savedItems = [
  {
    img: "/assets/Image/tech/2.jpg",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera - Black"
  },
  {
    img: "/assets/Image/tech/4.jpg",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera - Black"
  },
  {
    img: "/assets/Image/tech/8.jpg",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera - Black"
  },
  {
    img: "/assets/Image/tech/7.jpg",
    price: "$99.50",
    title: "GoPro HERO6 4K Action Camera - Black"
  }
];
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <Container>
        <div className="grid grid-cols-12 gap-6">
          {/* Left Side: Cart Items */}
          <div className="col-span-12 lg:col-span-9 bg-white border border-gray-200 rounded-lg p-5">
            <h2 className="text-xl font-semibold mb-5">My cart ({mycarts.length})</h2>
            
            {mycarts.map((item, index) => (
              <div key={index} className="flex gap-4 border-b border-gray-100 py-5 last:border-0">
                {/* Product Image */}
                <div className="w-20 h-20 flex-shrink-0 border border-gray-200 rounded-md p-1">
                  <Image
                    src={item.img}
                    width={80}
                    height={80}
                    alt={item.title}
                    className="object-contain w-full h-full"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-800 leading-tight mb-1">{item.title}</h4>
                      <p className="text-sm text-gray-400">{item.description}</p>
                      <p className="text-sm text-gray-400">Seller: {item.seller}</p>
                      
                      <div className="mt-2 flex gap-3">
                        <button className="text-red-500 text-xs border border-gray-200 px-3 py-1 rounded shadow-sm hover:bg-red-50">Remove</button>
                        <button className="text-blue-600 text-xs border border-gray-200 px-3 py-1 rounded shadow-sm hover:bg-blue-50">Save for later</button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="font-semibold block mb-2">{item.price}</span>
                      <select className="border border-gray-300 rounded-md p-1 text-sm bg-white outline-none">
                        <option>Qty: {item.qty}</option>
                        <option>Qty: 1</option>
                        <option>Qty: 2</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-between mt-6">
              <Link href={'/category'}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2">
                <span>←</span> Back to shop
              </button>
              </Link>
              <button className="text-blue-600 border border-gray-200 px-4 py-2 rounded-md">Remove all</button>
            </div>
          </div>

          {/* Right Side: Summary Section */}
          <div className="col-span-12 lg:col-span-3">
             <div className="bg-white border border-gray-200 rounded-lg p-5">
                <p className="text-gray-600 mb-2">Have a coupon?</p>
                <div className="flex mb-6">
                  <input type="text" placeholder="Add coupon" className="border border-gray-300 rounded-l-md p-2 w-full outline-none" />
                  <button className="text-blue-600 border border-gray-300 border-l-0 rounded-r-md px-4 font-medium">Apply</button>
                </div>
                
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between"><span>Subtotal:</span> <span>$1403.97</span></div>
                  <div className="flex justify-between text-red-500"><span>Discount:</span> <span>-$60.00</span></div>
                  <div className="flex justify-between text-green-500"><span>Tax:</span> <span>+$14.00</span></div>
                  <hr className="my-4" />
                  <div className="flex justify-between text-black font-bold text-lg">
                    <span>Total:</span> <span>$1357.97</span>
                  </div>
                </div>
                
                <button className="w-full bg-green-600 text-white font-semibold py-3 rounded-md mt-6 hover:bg-green-700 transition">
                  Checkout
                </button>
                
                <div className="flex justify-center gap-2 mt-4 opacity-60">
                   {/* Payment Icons Placeholder */}
                   <span className="text-[10px]">💳 VISA | PayPal | Apple Pay</span>
                </div>
             </div>
          </div>
        </div>
{/* New Features Section */}
        <div className="flex flex-wrap gap-8 mt-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Circle Icon Wrapper */}
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <div>
                <h5 className="text-sm font-medium text-gray-800 leading-tight">
                  {feature.title}
                </h5>
                <p className="text-xs text-gray-400">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
{/* --- Saved for later Section --- */}
        <div className="mt-12 bg-white border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-5">Saved for later</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {savedItems.map((item, index) => (
              <div key={index} className="group">
                {/* Image Container */}
                <div className="bg-gray-100 rounded-lg p-4 mb-3 flex justify-center items-center h-48">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    width={150} 
                    height={150} 
                    className="object-contain mix-blend-multiply"
                  />
                </div>
                
                {/* Price & Title */}
                <div className="space-y-1">
                  <p className="font-bold text-gray-900">{item.price}</p>
                  <p className="text-sm text-gray-500 leading-snug line-clamp-2">
                    {item.title}
                  </p>
                </div>

                {/* Move to Cart Button */}
                <button className="mt-4 flex items-center gap-2 text-blue-600 border border-gray-200 px-3 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
                  <ShoppingCart size={16} />
                  Move to cart
                </button>
              </div>
            ))}
          </div>
          </div>
                {/* Blue Discount Banner */}
      <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between text-white">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-semibold">Super discount on more than 100 USD</h3>
          <p className="text-blue-100 text-sm mt-1">Have you ever finally just write dummy info</p>
        </div>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-medium transition shadow-md">
          Shop now
        </button>
      </div>
      </Container>
      
    </div>
  );
}