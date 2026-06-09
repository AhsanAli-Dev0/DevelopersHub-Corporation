import { useState, useRef } from 'react';
import { FileText, CheckCircle, Clock, Edit3, Trash2, Upload } from 'lucide-react';

const DocumentChamber = () => {
  // --- STATES ---
  const [documentStatus, setDocumentStatus] = useState("Draft"); 
  const [contractText, setContractText] = useState(
    "NEXUS PROJECT CONTRACT\n\nThis agreement is made between Investor and Web Developer.\nThe developer agrees to build the 'Meeting & Scheduling Hub' by Week 4."
  );
  const [isDrawing, setIsDrawing] = useState(false); 

  // --- REFS ---
  const canvasRef = useRef(null); 
  const fileInputRef = useRef(null); // Hidden file input ko click karwane ke liye

  // --- 📂 NEW FEATURE: REAL FILE UPLOAD LOGIC ---
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // FileReader ka object banaya jo file ko padhega
    const reader = new FileReader();

    // Jab file poori tarah parh li jaye (onload event)
    reader.onload = (event) => {
      const textResult = event.target.result; // File ka sara text yahan milta hai
      setContractText(textResult); // Preview text area mein save kar diya
      setDocumentStatus("Draft"); // Naye document ke liye status wapas Draft kar diya
    };

    // File ko text ke roop mein padhna shuru karo
    reader.readAsText(file);
  };

  // --- ✍️ SIGNATURE PAD LOGIC ---
  const startSigning = (e) => {
    const canvas = canvasRef.current;
    if (!canvas || documentStatus === "Signed") return; 

    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const drawSignature = (e) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke(); 
  };

  const stopSigning = () => {
    setIsDrawing(false);
  };

  const clearSignature = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height); 
    if (documentStatus === "Signed") {
      setDocumentStatus("In Review"); 
    }
  };

  const finalizeContract = () => {
    setDocumentStatus("Signed");
  };

  const getStatusBadgeClass = () => {
    if (documentStatus === "Draft") return "bg-gray-100 text-gray-700 border-gray-200";
    if (documentStatus === "In Review") return "bg-yellow-50 text-yellow-700 border-yellow-200";
    return "bg-green-50 text-green-700 border-green-200";
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6"> Document Processing Chamber</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Contract Viewer & Upload */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 lg:col-span-2 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
              <FileText className="text-blue-600" /> Contract Preview
            </h2>
            
            <div className="flex items-center gap-3">
              {/* HIDDEN FILE INPUT */}
              <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileUpload}
                accept=".pdf,.doc,.docx" // Kaunsi files allow karni hain
                className="hidden" 
              />
              
              {/* UPLOAD BUTTON (Triggers Hidden Input) */}
              <button 
                onClick={() => fileInputRef.current.click()}
                className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium px-3 py-1.5 rounded-lg text-xs transition-all border shadow-xs"
              >
                <Upload size={14} /> Upload Contract
              </button>

              <span className={`border px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getStatusBadgeClass()}`}>
                {documentStatus}
              </span>
            </div>
          </div>

          {/* Textarea for view and edit */}
          <textarea
            value={contractText}
            onChange={(e) => setContractText(e.target.value)}
            disabled={documentStatus === "Signed"} 
            className="w-full flex-1 min-h-[250px] p-4 border rounded-xl bg-slate-50 text-slate-700 font-mono text-sm leading-relaxed outline-none focus:border-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
          />

          {documentStatus === "Draft" && (
            <button 
              onClick={() => setDocumentStatus("In Review")}
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-xl text-sm transition-all shadow-md self-end px-6"
            >
              Send for Review
            </button>
          )}
        </div>

        {/* RIGHT COLUMN: E-Signature Pad Controls */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2 flex items-center gap-2">
              <Edit3 className="text-blue-600" /> E-Signature Mockup
            </h2>
            <p className="text-xs text-gray-400 mb-4">
              Sign inside the box below using your mouse or trackpad to authorize this deal.
            </p>

            {/* THE CANVAS SIGNATURE PAD */}
            <div className="border border-dashed border-gray-300 rounded-xl bg-slate-50 overflow-hidden relative">
              <canvas
                ref={canvasRef}
                width={300}
                height={180}
                onMouseDown={startSigning}
                onMouseMove={drawSignature}
                onMouseUp={stopSigning}
                onMouseLeave={stopSigning}
                className={`w-full cursor-crosshair ${documentStatus === "Signed" ? 'bg-green-50/50' : ''}`}
                style={{ touchAction: 'none' }} 
              />
              
              {documentStatus === "Draft" && (
                <div className="absolute inset-0 bg-white/80 backdrop-blur-xs flex items-center justify-center p-4 text-center">
                  <p className="text-xs text-gray-500 font-medium">
                    ⚠️ Move document to <span className="text-yellow-600 font-bold">"In Review"</span> first to unlock signing pad.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Signature Action Buttons */}
          <div className="mt-6 space-y-2">
            <div className="flex gap-2">
              <button
                onClick={clearSignature}
                disabled={documentStatus === "Draft"}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium py-2 rounded-lg text-xs flex items-center justify-center gap-1 border"
              >
                <Trash2 size={14} /> Clear Pad
              </button>
              
              <button
                onClick={finalizeContract}
                disabled={documentStatus !== "In Review"}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white disabled:opacity-50 disabled:cursor-not-allowed font-medium py-2 rounded-lg text-xs flex items-center justify-center gap-1 shadow-sm"
              >
                <CheckCircle size={14} /> Apply Sign
              </button>
            </div>

         
          </div>

        </div>

      </div>
    </div>
  );
};

export default DocumentChamber;