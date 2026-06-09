import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling ke liye

const MeetingScheduler = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Mock State: Slots aur Requests ko handle karne ke liye
  const [slots, setSlots] = useState(["10:00 AM", "02:00 PM", "04:00 PM"]);
  const [newSlot, setNewSlot] = useState("");
  
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Investor Sync - Nexus Project", date: "2026-05-22", time: "10:00 AM", status: "Confirmed" },
    { id: 2, title: "Pitch Review", date: "2026-05-25", time: "02:00 PM", status: "Pending" }
  ]);

  // 1. Add Availability Slot
  const handleAddSlot = (e: any) => {
  e.preventDefault();
  if (!newSlot.trim()) return; // Agar time nahi likha to ruk jaye

  // Selected date ko clean format mein lein (e.g., "Thu May 21 2026")
  const dateStr = selectedDate.toDateString(); 
  
  // Date aur Time ko mila kar naya slot banayein
  const fullSlot = `${dateStr} - ${newSlot.trim()}`;

  setSlots([...slots, fullSlot]); // Array mein save karein
  setNewSlot(""); // Input field khali kar dein
};

  // 2. Accept / Decline Requests
  const handleStatusChange = (id:number, newStatus: string) => {
    setMeetings(meetings.map(m => m.id === id ? { ...m, status: newStatus } : m));
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📅 Meeting & Scheduling Hub</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left: Calendar & Add Slots */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Select Date</h2>
          <Calendar 
            onChange={setSelectedDate as any} 
            value={selectedDate} 
            className="w-full rounded-lg border-none"
          />
          
          {/* Add Slot Form */}
          <form onSubmit={handleAddSlot} className="mt-6 border-t pt-4">
            <h3 className="font-medium text-gray-700 mb-2">Add Availability Slot</h3>
            <div className="flex gap-2">
              <input 
                type="time" 
                placeholder="e.g., 11:30 AM" 
                value={newSlot}
                onChange={(e) => setNewSlot(e.target.value)}
                className="border p-2 rounded-lg flex-1 text-sm outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                Add
              </button>
            </div>
          </form>
        </div>

        {/* Center: Available Slots & Requests */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4">Your Slots for {selectedDate.toDateString()}</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {slots.map((slot, index) => (
              <span key={index} className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-medium border border-blue-100">
                {slot}
              </span>
            ))}
          </div>

          <h2 className="text-lg font-semibold mb-4 border-t pt-4">Incoming Requests</h2>
          <div className="space-y-3">
            {meetings.filter(m => m.status === "Pending").map(m => (
              <div key={m.id} className="border p-3 rounded-lg bg-yellow-50/50 border-yellow-100">
                <p className="font-medium text-sm text-gray-800">{m.title}</p>
                <p className="text-xs text-gray-500">{m.date} at {m.time}</p>
                <div className="flex gap-2 mt-3">
                  <button onClick={() => handleStatusChange(m.id, "Confirmed")} className="bg-green-600 text-white text-xs px-3 py-1 rounded hover:bg-green-700">Accept</button>
                  <button onClick={() => handleStatusChange(m.id, "Declined")} className="bg-red-50 text-red-600 text-xs px-3 py-1 rounded hover:bg-red-100">Decline</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Confirmed Meetings Dashboard */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold mb-4 text-green-700">Confirmed Meetings</h2>
          <div className="space-y-3">
            {meetings.filter(m => m.status === "Confirmed").map(m => (
              <div key={m.id} className="border p-3 rounded-lg bg-green-50/30 border-green-100 flex justify-between items-center">
                <div>
                  <p className="font-medium text-sm text-gray-800">{m.title}</p>
                  <p className="text-xs text-gray-500">{m.date} at {m.time}</p>
                </div>
                <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-2 py-1 rounded">
                  Active
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MeetingScheduler;