import { useState, useRef } from 'react';
import { Video, VideoOff, Mic, MicOff, Phone, PhoneOff } from 'lucide-react';

const VideoCallHub = () => {
  // --- STATES (Jo badlav humein yaad rakhne hain) ---
  const [isInCall, setIsInCall] = useState(false);       
  const [isMuted, setIsMuted] = useState(false);         
  const [isVideoOn, setIsVideoOn] = useState(true);       
  const [localStream, setLocalStream] = useState(null); // Live camera stream save karne ke liye

  // --- REF (HTML element ko direct target karne ke liye) ---
  const localVideoRef = useRef(null);

  // --- LOGIC FUNCTIONS ---

  // 1. Call Shuru Karna aur Camera On Karna
  const startCall = async () => {
    try {
      setIsInCall(true);

      // Browser se real camera aur mic mangne ka tareeqa
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      });

      // Stream ko state mein rakh diya
      setLocalStream(stream);

      // 100 millisecond ka wait taake React video tag ko screen par render kar chuka ho
      setTimeout(() => {
        if (localVideoRef.current) {
          localVideoRef.current.srcObject = stream; // Video element ko data assign kiya
        }
      }, 100);

    } catch (error) {
      console.error("Camera access nahi mila:", error);
      alert("Please allow camera and microphone access to start the call.");
      setIsInCall(false);
    }
  };

  // 2. Call Khatam Karna aur Hardware Off Karna
  const endCall = () => {
    setIsInCall(false);

    // Agar background mein camera chal raha hai to usay band karo
    if (localStream) {
      localStream.getTracks().forEach(track => track.stop());
      setLocalStream(null);
    }
  };

  // 3. Mic Unmute/Mute Toggle Logic
  const toggleMic = () => {
    if (localStream) {
      // Audio tracks nikal kar unki enabled property ko ulta (toggle) kar diya
      localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsMuted(!isMuted);
    }
  };

  // 4. Camera On/Off Toggle Logic
  const toggleVideo = () => {
    if (localStream) {
      // Video tracks nikal kar unki state ko invert kar diya
      localStream.getVideoTracks().forEach(track => {
        track.enabled = !track.enabled;
      });
      setIsVideoOn(!isVideoOn);
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6"> Nexus Real Video Chamber</h1>

      {/* Main Video Screen Box */}
      <div className="w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative border border-slate-800" style={{ height: '500px' }}>
        
        {isInCall ? (
          /* AGAR CALL CHAL RAHI HAI */
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-2 p-2 relative">
            
            {/* Screen 1: Dummy Remote User */}
            <div className="bg-slate-800 rounded-xl relative flex items-center justify-center border border-slate-700">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto text-white font-bold text-xl mb-2 animate-pulse">
                  INV
                </div>
                <p className="text-slate-300 text-sm">Investor (Waiting to Connect...)</p>
              </div>
            </div>

            {/* Screen 2: Aapka Apna Live Web Camera */}
            <div className="bg-slate-800 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-700">
              
              {/* REAL VIDEO TAG */}
              <video 
                ref={localVideoRef} 
                autoPlay 
                playsInline 
                muted 
                className={`w-full h-full object-cover ${!isVideoOn ? 'hidden' : ''}`}
              />

              {/* Agar camera video band ho to black screen par yeh message aaye */}
              {!isVideoOn && (
                <div className="text-center text-slate-500 absolute">
                  <VideoOff size={40} className="mx-auto mb-2 text-slate-600" />
                  <p className="text-xs">Your Camera is Off</p>
                </div>
              )}
              
              {/* Mic Status Badge */}
              <span className="absolute top-3 left-3 bg-slate-950/70 text-slate-300 text-xs px-2 py-1 rounded flex items-center gap-1">
                {isMuted ? <MicOff size={12} className="text-red-400" /> : <Mic size={12} className="text-green-400" />}
                You (Live)
              </span>
            </div>

          </div>
        ) : (
          /* AGAR CALL BAND HAI (JOIN SCREEN) */
          <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 p-6">
            <Phone size={48} className="mb-4 text-slate-600" />
            <h3 className="text-xl font-semibold text-slate-200 mb-2">Initialize Local Media</h3>
            <p className="text-sm text-slate-500 mb-6 text-center max-w-sm">
              Click start to test your real camera and microphone inside the chamber.
            </p>
            <button 
              onClick={startCall}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg transition-all"
            >
              <Phone size={18} /> Start Real Call Test
            </button>
          </div>
        )}

        {/* BOTTOM FLOATING CONTROLS (Sirf call ke dauran dikhenge) */}
        {isInCall && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-slate-950/90 border border-slate-800 px-6 py-3 rounded-2xl flex items-center gap-4 shadow-2xl backdrop-blur-sm z-10">
            
            {/* Mute Button */}
            <button 
              onClick={toggleMic} 
              className={`p-3 rounded-xl transition-all ${isMuted ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-800 text-slate-300'}`}
            >
              {isMuted ? <MicOff size={20} /> : <Mic size={20} />}
            </button>

            {/* Camera Button */}
            <button 
              onClick={toggleVideo} 
              className={`p-3 rounded-xl transition-all ${!isVideoOn ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-slate-800 text-slate-300'}`}
            >
              {isVideoOn ? <Video size={20} /> : <VideoOff size={20} />}
            </button>

            <div className="w-[1px] h-6 bg-slate-800 mx-1" />

            {/* End Call Button */}
            <button onClick={endCall} className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-xl">
              <PhoneOff size={20} />
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default VideoCallHub;