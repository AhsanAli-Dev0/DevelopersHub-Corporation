import { useState } from 'react';
import { Wallet, ArrowUpRight, ArrowDownLeft, DollarSign, History, Send } from 'lucide-react';

const PaymentHub = () => {
  // --- STATES ---
  const [balance, setBalance] = useState(25000); // Mock initial balance ($25,000)
  const [transferAmount, setTransferAmount] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(""); // Processing -> Success

  // Mock Transaction History Array
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Deposit", amount: 5000, party: "Bank Account", status: "Success", date: "2026-05-15" },
    { id: 2, type: "Transfer", amount: 1200, party: "Zubair (Developer)", status: "Success", date: "2026-05-20" },
    { id: 3, type: "Withdraw", amount: 800, party: "ATM", status: "Success", date: "2026-05-22" },
  ]);

  // --- FUNDING DEAL LOGIC (Investor -> Entrepreneur) ---
  const handleTransfer = (e) => {
    e.preventDefault();
    
    // Validations (Check karna ke input sahi hai ya nahi)
    const amount = parseFloat(transferAmount);
    if (!amount || amount <= 0) return alert("Valid amount likhein!");
    if (amount > balance) return alert("Aapka balance kam hai!");
    if (!receiverName.trim()) return alert("Receiver ka naam likhein!");

    setPaymentStatus("Processing");

    // Stripe style fake delay simulation (2 seconds ka wait)
    setTimeout(() => {
      // 1. Balance kam karo
      setBalance((prevBalance) => prevBalance - amount);

      // 2. New Transaction Object banao
      const newTx = {
        id: Date.now(), // Unique ID ke liye timestamp
        type: "Transfer",
        amount: amount,
        party: receiverName.trim(),
        status: "Success",
        date: new Date().toISOString().split('T')[0] // Aaj ki date YYYY-MM-DD format mein
      };

      // 3. ADD TO ARRAY Formula: Purani history ke sath naya transaction jodo
      setTransactions([newTx, ...transactions]);
      
      // Fields khali karo aur status set karo
      setTransferAmount("");
      setReceiverName("");
      setPaymentStatus("Success");

      // 3 second baad success message hatane ke liye
      setTimeout(() => setPaymentStatus(""), 3000);
    }, 2000);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">💳 Financial Control & Escrow Hub</h1>

      {/* TOP ROW: Balance Card & Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* WALLET BALANCE DISPLAY */}
        <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-6 rounded-2xl text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-[-20px] bottom-[-20px] opacity-10 text-white">
            <Wallet size={150} />
          </div>
          <p className="text-blue-100 text-xs font-semibold uppercase tracking-wider mb-1">Available Wallet Balance</p>
          <h2 className="text-4xl font-black flex items-center">${balance.toLocaleString()}</h2>
          <div className="mt-4 flex gap-2 text-xs text-blue-100 bg-white/10 p-2 rounded-lg w-fit">
            <span className="font-bold text-green-300">● Live Escrow</span> Secured via Nexus Protection
          </div>
        </div>

        {/* Quick Fake Stat 1 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="p-3 bg-green-50 text-green-600 rounded-xl"><ArrowDownLeft size={24} /></div>
          <div>
            <p className="text-xs text-gray-400 font-medium">Total Funds Deposited</p>
            <h3 className="text-xl font-bold text-gray-700">$30,000</h3>
          </div>
        </div>

        {/* Quick Fake Stat 2 */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
          <div className="p-3 bg-red-50 text-red-600 rounded-xl"><ArrowUpRight size={24} /></div>
          <div>
            <p className="text-xs text-gray-400 font-medium">Total Funds Invested</p>
            <h3 className="text-xl font-bold text-gray-700">$5,000</h3>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT COLUMN: Stripe-Style Transfer Form */}
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <Send size={18} className="text-blue-600" /> Fund a Deal (Simulation)
          </h2>

          <form onSubmit={handleTransfer} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">RECEIVER NAME / PROJECT</label>
              <input 
                type="text"
                placeholder="e.g., Zubair (Nexus App)"
                value={receiverName}
                onChange={(e) => setReceiverName(e.target.value)}
                disabled={paymentStatus === "Processing"}
                className="w-full border p-2.5 rounded-xl text-sm outline-none focus:border-blue-500 bg-gray-50/50"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">AMOUNT (USD)</label>
              <div className="relative">
                <span className="absolute left-3 top-2.5 text-gray-400 text-sm font-bold">$</span>
                <input 
                  type="number"
                  placeholder="0.00"
                  value={transferAmount}
                  onChange={(e) => setTransferAmount(e.target.value)}
                  disabled={paymentStatus === "Processing"}
                  className="w-full border pl-7 pr-3 py-2.5 rounded-xl text-sm outline-none focus:border-blue-500 bg-gray-50/50"
                  required
                />
              </div>
            </div>

            {/* STYLED STRIPE BUTTON WITH STATUS */}
            <button
              type="submit"
              disabled={paymentStatus === "Processing"}
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 disabled:bg-slate-400"
            >
              {paymentStatus === "Processing" ? (
                <span className="flex items-center gap-2">
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Contacting Stripe Gateway...
                </span>
              ) : (
                <>Authorize Payment Securely</>
              )}
            </button>

            {paymentStatus === "Success" && (
              <div className="bg-green-50 border border-green-200 text-green-700 p-3 rounded-xl text-xs text-center font-medium">
                🎉 Payment successfully escrowed and transferred!
              </div>
            )}
          </form>
        </div>

        {/* RIGHT COLUMN: Transaction History Table */}
        <div className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 lg:col-span-2">
          <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
            <History size={18} className="text-blue-600" /> Transaction Ledger
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-xs font-bold text-gray-400 uppercase bg-gray-50/50">
                  <th className="py-3 px-4">Party/Target</th>
                  <th className="py-3 px-4">Type</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm text-gray-600">
                {transactions.map((tx) => (
                  <tr key={tx.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="py-3 px-4 font-medium text-gray-800">{tx.party}</td>
                    <td className="py-3 px-4">
                      <span className={`text-[11px] px-2 py-0.5 rounded-md font-medium ${tx.type === 'Transfer' ? 'bg-orange-50 text-orange-600' : 'bg-blue-50 text-blue-600'}`}>
                        {tx.type}
                      </span>
                    </td>
                    <td className={`py-3 px-4 font-bold ${tx.type === 'Transfer' ? 'text-red-500' : 'text-green-500'}`}>
                      {tx.type === 'Transfer' ? '-' : '+'}${tx.amount.toLocaleString()}
                    </td>
                    <td className="py-3 px-4 text-xs text-gray-400">{tx.date}</td>
                    <td className="py-3 px-4 text-right">
                      <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PaymentHub;