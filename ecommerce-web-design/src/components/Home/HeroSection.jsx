import Container from "../container";

export default function HeroSection() {
  return (
    <>
      <Container>
        <div className="hero-section py-4">
          <div className="content-wrapper">
            <div className="grid grid-cols-12 gap-4">
              
              {/* Category List - Mobile pe hidden, Tablet/Desktop pe 2 columns */}
              <div className="hidden md:block md:col-span-3 lg:col-span-2">
                <ul className=" text-gray-600">
                  <li className="bg-blue-100 font-semibold p-2 rounded">Automobiles</li>
                  <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Clothes and wear</li>
                  <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Home interiors</li>
                  <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Computer and tech</li>
                  <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Tools, equipments</li>
                  <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Sports and outdoor</li>
                  <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Animal and pets</li>
                  <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Machinery tools</li>
                  <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">More category</li>
                </ul>
              </div>

              {/* Main Banner - Mobile pe 12 columns (full width), Desktop pe adjust */}
              <div className="col-span-12 md:col-span-9 lg:col-span-8">
                <div className="relative bg-[url('/assets/image/backgrounds/banner.png')] bg-center bg-no-repeat h-[180px] sm:h-[250px] md:h-[360px] w-full bg-cover flex items-center p-6 sm:p-10">
                  <div className="hero-title text-content sm:max-w-[200px] sm:max-w-md">
                    <h1 className="text-sm sm:text-lg">Latest trending</h1>
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Electronic items</h2>
                    <button className="mt-0 md:mt-4 px-4 py-1 md:py-2 bg-white text-blue-600 font-semibold rounded shadow hover:bg-gray-100 transition">
                      Learn more
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Panel (Profile/Offers) - Mobile pe hidden, Laptop pe visible */}
              <div className="hidden lg:block lg:col-span-2">
                <div className="flex flex-col gap-2">
                  <div className="user-profile bg-blue-50 p-4 rounded-lg">
                    <div className="profile-pic flex items-center mb-3">
                      <img src="/assets/avatar=pic1.jpg" alt="User" className="w-10 h-10 rounded-full" />
                      <p className="text-xs ms-2 leading-tight">Hi, <br /><b>user let’s get started</b></p>
                    </div>
                    <div className="profile-btn flex flex-col gap-2">
                      <button className="w-full bg-blue-600 text-white text-sm py-2 rounded-md">Join now</button>
                      <button className="w-full bg-white text-blue-600 text-sm py-2 rounded-md border border-gray-200">Login</button>
                    </div>
                  </div>
                  
                  <div className="discount bg-orange-400 text-white p-4 rounded-lg h-24 flex items-center">
                    <p className="text-xs font-medium leading-tight">
                      Get US $10 off <br /> with a new <br /> supplier
                    </p>
                  </div>
                  
                  <div className="query bg-teal-400 text-white p-4 rounded-lg h-24 flex items-center">
                    <p className="text-xs font-medium leading-tight">
                      Send quotes with <br /> supplier <br /> preferences
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </>
  );
}