import { useState } from 'react';
import { Shield, Lock, Eye, Key, Users, CheckCircle } from 'lucide-react';

const SecurityHub = () => {
  // --- STATES ---
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(""); // Weak, Medium, Strong
  
  const [otp, setOtp] = useState(["", "", "", ""]); // 4 boxes ke liye 4 khali strings
  const [is2FAVerified, setIs2FAVerified] = useState(false);

  const [currentRole, setCurrentRole] = useState("Investor"); // Default role

  // --- 1. PASSWORD STRENGTH LOGIC ---
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (value.length === 0) {
      setStrength("");
    } else if (value.length < 5) {
      setStrength("Weak");
    } else if (value.length < 8) {
      setStrength("Medium");
    } else {
      setStrength("Strong");
    }
  };

  // --- 2. 2FA OTP LOGIC ---
  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false; // Sirf numbers allow hain

    // Purane array ki copy banao (Hamara ADD/UPDATE wala formula!)
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Auto-focus logic: Agar user ne number likh diya hai, to agle box par jao
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    if (fullOtp === "1234") { // Mock OTP code "1234" rakha hai
      setIs2FAVerified(true);
      alert("2FA Verification Successful!");
    } else {
      alert("Galat OTP! Demo ke liye '1234' enter karein.");
    }
  };

  // --- STYLING HELPERS ---
  const getStrengthColor = () => {
    if (strength === "Weak") return "bg-red-500 w-1/3";
    if (strength === "Medium") return "bg-yellow-500 w-2/3";
    if (strength === "Strong") return "bg-green-500 w-full";
    return "bg-gray-200 w-0";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">🛡️ Security & Role Control Gate</h1>

      {/* 🔄 ROLE-BASED UI CONTROLLER SWITCH */}
      <div className="bg-white p-4 rounded-xl shadow-xs border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-bold text-gray-700 flex items-center gap-2">
            <Users className="text-blue-600" /> Simulated Persona Routing
          </h3>
          <p className="text-xs text-gray-400">Select a role to preview how the platform UI changes dynamically.</p>
        </div>
        
        {/* Toggle Buttons */}
        <div className="flex bg-gray-100 p-1 rounded-xl border">
          <button
            onClick={() => setCurrentRole("Investor")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${currentRole === "Investor" ? "bg-white text-blue-600 shadow-xs" : "text-gray-500 hover:text-gray-700"}`}
          >
            Investor Dashboard View
          </button>
          <button
            onClick={() => setCurrentRole("Entrepreneur")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${currentRole === "Entrepreneur" ? "bg-white text-blue-600 shadow-xs" : "text-gray-500 hover:text-gray-700"}`}
          >
            Entrepreneur Dashboard View
          </button>
        </div>
      </div>

      {/* MAIN TWO-COLUMN LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Security Tools (Password + 2FA) */}
        <div className="space-y-6 lg:col-span-1">
          
          {/* PASSWORD STRENGTH METER CARD */}
          <div className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100">
            <h2 className="text-base font-semibold text-gray-700 mb-3 flex items-center gap-2">
              <Lock size={16} className="text-blue-600" /> Access Security
            </h2>
            <div className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-gray-400 uppercase mb-1">Update Master Password</label>
                <input
                  type="password"
                  placeholder="Enter secure password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full border p-2 rounded-xl text-sm outline-none focus:border-blue-500 bg-gray-50/50"
                />
              </div>

              {/* Progress Bar Element */}
              {strength && (
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-gray-400">Strength:</span>
                    <span className={`font-bold ${strength === 'Weak' ? 'text-red-500' : strength === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>{strength}</span>
                  </div>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className={`h-full transition-all duration-300 ${getStrengthColor()}`}></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* MULTI-STEP 2FA OTP CARD */}
          <div className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100">
            <h2 className="text-base font-semibold text-gray-700 mb-1 flex items-center gap-2">
              <Shield size={16} className="text-blue-600" /> Multi-Factor 2FA
            </h2>
            <p className="text-xs text-gray-400 mb-4">Enter the dummy OTP code code sent to secure device.</p>
            
            <form onSubmit={verifyOTP} className="space-y-4">
              <div className="flex justify-center gap-3">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={data}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="w-12 h-12 text-center border-2 rounded-xl font-bold text-lg text-slate-800 focus:border-blue-600 outline-none bg-slate-50"
                  />
                ))}
              </div>

              <button
                type="submit"
                disabled={is2FAVerified}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-xl text-xs transition-all shadow-xs disabled:bg-green-600"
              >
                {is2FAVerified ? "✓ Device Guard Active" : "Verify Authenticator Code"}
              </button>
            </form>
          </div>

        </div>

        {/* RIGHT COLUMN: DYNAMIC ROLE-BASED DASHBOARD PREVIEW */}
        <div className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 lg:col-span-2">
          <div className="border-b pb-3 mb-4 flex justify-between items-center">
            <h2 className="text-lg font-bold text-gray-800">
              Active Session Workspace
            </h2>
            <span className="bg-blue-50 text-blue-700 font-bold px-2.5 py-0.5 rounded-md text-xs border border-blue-100 uppercase tracking-wider">
              {currentRole} Mode
            </span>
          </div>

          {/* DYNAMIC CONTENT RENDERING CONDITIONAL LOGIC */}
          {currentRole === "Investor" ? (
            /* INVESTOR DASHBOARD VIEW */
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl">
                <h4 className="font-bold text-sm text-blue-900 mb-1">📊 Deal Flow Analytics Portfolio</h4>
                <p className="text-xs text-blue-700">Welcome, Venture Capitalist. Below are your open deals waiting for capital allocation injection.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-4 rounded-xl bg-gray-50/50"><p className="text-xs text-gray-400">Total Capital Committed</p><p className="text-lg font-bold text-gray-700">$450,000</p></div>
                <div className="border p-4 rounded-xl bg-gray-50/50"><p className="text-xs text-gray-400">Active Term Sheets</p><p className="text-lg font-bold text-gray-700">3 Pending</p></div>
              </div>
              <button className="bg-slate-900 text-white text-xs font-semibold py-2 px-4 rounded-lg">Browse Startup Pitches</button>
            </div>
          ) : (
            /* ENTREPRENEUR DASHBOARD VIEW */
            <div className="space-y-4 animate-fadeIn">
              <div className="p-4 bg-purple-50/50 border border-purple-100 rounded-xl">
                <h4 className="font-bold text-sm text-purple-900 mb-1">🚀 Founder Pitch Deck Core</h4>
                <p className="text-xs text-purple-700">Welcome, Innovator. Upload your seed documents and check your active escrow funding pipelines.</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="border p-4 rounded-xl bg-gray-50/50"><p className="text-xs text-gray-400">Seed Funding Requested</p><p className="text-lg font-bold text-purple-700">$85,000</p></div>
                <div className="border p-4 rounded-xl bg-gray-50/50"><p className="text-xs text-gray-400">Investor Match Views</p><p className="text-lg font-bold text-gray-700">142 Stream Views</p></div>
              </div>
              <button className="bg-purple-600 text-white text-xs font-semibold py-2 px-4 rounded-lg">Edit Project Proposals</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default SecurityHub;