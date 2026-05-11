import { Mail } from "lucide-react";
import Container from "../container"; // Agar aapne Container use karna hai

export default function Newsletter() {
  return (
    <section className="newsletter-section bg-[#F7F7F7] py-10 md:py-16">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        {/* Title & Description */}
        <div className="title-wrapper mb-6">
          <h4 className="text-xl md:text-2xl font-bold text-gray-800">
            Subscribe to our newsletter
          </h4>
          <p className="text-gray-500 text-sm md:text-base mt-2 max-w-md mx-auto">
            Get daily news on upcoming offers from many suppliers all over the world
          </p>
        </div>

        {/* Form Section */}
        <form action="" className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            
            {/* Input Wrapper */}
            <div className="relative w-full group">
              <label 
                htmlFor="email" 
                className="flex items-center bg-white border border-gray-300 rounded-md px-3 py-2 focus-within:border-blue-500 transition-colors"
              >
                <Mail size={18} className="text-gray-400 mr-2" />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  id="email" 
                  className="w-full outline-none text-sm bg-transparent"
                />
              </label>
            </div>

            {/* Subscribe Button */}
            <button 
              className="w-full sm:w-auto bg-blue-600 text-white px-6 py-2.5 rounded-md font-semibold hover:bg-blue-700 transition shadow-md whitespace-nowrap" 
              type="button"
            >
              Subscribe
            </button>

          </div>
        </form>
      </div>
    </section>
  );
}