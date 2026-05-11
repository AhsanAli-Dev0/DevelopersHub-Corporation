import Container from "../container";

export default function Form() {
  return (
    <>
      <Container>
        <div className="form my-8">
          <div className="form-wrapper overflow-hidden rounded-md">
            {/* Background Image Container */}
            <div className="bg-[url('/assets/image/backgrounds/formbg.png')] bg-center bg-no-repeat bg-cover min-h-[300px] md:h-[420px] relative flex items-center">
              
              {/* Overlay for better readability on mobile */}
              <div className="absolute inset-0 bg-blue-600/20 md:bg-transparent"></div>

              <div className="grid grid-cols-12 w-full p-6 md:p-10 relative z-10">
                
                {/* Text Content */}
                <div className="col-span-12 md:col-span-7 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">
                    An easy way to send <br className="hidden md:block" />
                    requests to all suppliers
                  </h2>
                  <p className="mt-4 text-sm md:text-base hidden md:block">
                    Lorem ipsum dolor sit amet, consectetur adipisicing <br />
                    elit, sed do eiusmod tempor incididunt.
                  </p>
                  
                  {/* Mobile Only Button - image_f01191.png ke mutabiq */}
                  <button className="md:hidden mt-6 bg-blue-600 text-white px-6 py-2 rounded-md font-medium shadow-lg">
                    Send inquiry
                  </button>
                </div>

                {/* Form Card - Mobile pe hidden, Desktop pe visible */}
                <div className="hidden md:block md:col-span-5">
                  <div className="contact bg-white p-6 rounded-lg shadow-lg max-w-[400px] ml-auto">
                    <h4 className="text-xl font-bold mb-4 text-gray-800">Send quote to suppliers</h4>
                    <form action="" className="flex flex-col gap-4">
                      <input 
                        type="text" 
                        placeholder="What item you need?" 
                        className="border border-gray-300 p-2.5 rounded-md focus:outline-blue-500" 
                      />
                      <textarea 
                        rows="3"
                        placeholder="Type more details" 
                        className="border border-gray-300 p-2.5 rounded-md focus:outline-blue-500"
                      ></textarea>
                      
                      <div className="flex gap-3">
                        <input 
                          type="number" 
                          placeholder="Quantity" 
                          className="border border-gray-300 p-2.5 rounded-md w-1/2" 
                        />
                        <select className="border border-gray-300 p-2.5 rounded-md w-1/2 bg-white outline-none">
                          <option value="Pcs">Pcs</option>
                          <option value="Kg">Kg</option>
                        </select>
                      </div>
                      
                      <button 
                        className="bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700 transition-colors" 
                        type="submit"
                      >
                        Send inquiry
                      </button>
                    </form>
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