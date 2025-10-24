import React, { useState } from "react";
import { Send, X, AlertCircle } from "lucide-react";

const Report = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState("");
  const [issueText, setIssueText] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const categories = [
    { value: "", label: "Select Problem Category" },
    { value: "transaction", label: "💳 Transaction" },
    { value: "login", label: "🔐 Login Issue" },
    { value: "security", label: "🛡️ Security" },
    { value: "bug", label: "🐛 Bug Report" },
    { value: "other", label: "📝 Other" },
  ];

  const openModal = () => {
    setModalOpen(true);
    setIsAnimating(true);
  };

  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setModalOpen(false);
      setName("");
      setPhone("");
      setCategory("");
      setIssueText("");
      setError("");
      setSuccess(false);
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !category || !issueText.trim()) {
      setError("Please fill all fields and select a category");
      return;
    }
    setError("");

    try {
      const res = fetch("https://digital-wallet-server-tau.vercel.app/api/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          type: category,
          reportText: issueText,
        }),
      });
      
      setSuccess(true);
      setName("");
      setPhone("");
      setCategory("");
      setIssueText("");
      setTimeout(() => closeModal(), 2000);
    } catch {
      setError("Server error, please try again later");
    }
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse-ring {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
          70% { box-shadow: 0 0 0 20px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes bounce-check {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes field-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
          50% { box-shadow: 0 0 30px rgba(16, 185, 129, 0.5); }
        }
        @keyframes field-glow-dark {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
          50% { box-shadow: 0 0 35px rgba(16, 185, 129, 0.7); }
        }
        
        .float-btn { animation: float 3s ease-in-out infinite; }
        
        /* Light Mode */
        .modal-backdrop { 
          animation: fade-in 0.3s ease-out; 
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(20, 184, 166, 0.15), rgba(5, 150, 105, 0.1));
        }
        .modal-content { 
          animation: scale-in 0.3s ease-out;
          background: white;
        }
        .form-input { 
          transition: all 0.3s ease;
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        .form-input:hover {
          animation: gradient-shift 1.5s ease infinite, field-glow 2s ease-in-out infinite;
          transform: translateY(-2px);
        }
        .form-input:focus {
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.3), 0 0 30px rgba(16, 185, 129, 0.5);
          transform: translateY(-3px);
          animation: gradient-shift 1s ease infinite;
        }
        
        /* Dark Mode */
        .dark .modal-backdrop { 
          background: linear-gradient(135deg, rgba(5, 46, 38, 0.4), rgba(6, 78, 59, 0.5), rgba(4, 47, 46, 0.4));
        }
        .dark .modal-content {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
        }
        .dark .form-input:hover {
          animation: gradient-shift 1.5s ease infinite, field-glow-dark 2s ease-in-out infinite;
          transform: translateY(-2px);
        }
        .dark .form-input:focus {
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.5), 0 0 35px rgba(16, 185, 129, 0.7);
          transform: translateY(-3px);
          animation: gradient-shift 1s ease infinite;
        }
        .dark .label-text {
          color: #d1d5db !important;
        }
        .dark .heading-text {
          background: linear-gradient(to right, #10b981, #14b8a6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .success-check {
          animation: bounce-check 0.6s ease-out;
        }
        .success-animation {
          animation: slide-up 0.5s ease-out;
        }
      `}</style>

      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1557683316-973673baf926?w=1920&q=80)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/60 via-green-800/50 to-teal-900/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Floating Icons Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 text-white/20 animate-pulse" style={{animation: 'float 4s ease-in-out infinite'}}>
            <AlertCircle size={48} />
          </div>
          <div className="absolute top-40 right-20 text-white/20 animate-pulse" style={{animation: 'float 5s ease-in-out infinite', animationDelay: '1s'}}>
            <Send size={40} />
          </div>
          <div className="absolute bottom-32 left-1/4 text-white/20 animate-pulse" style={{animation: 'float 6s ease-in-out infinite', animationDelay: '2s'}}>
            <AlertCircle size={56} />
          </div>
          <div className="absolute bottom-20 right-1/3 text-white/20 animate-pulse" style={{animation: 'float 5.5s ease-in-out infinite', animationDelay: '1.5s'}}>
            <Send size={44} />
          </div>
        </div>

        {/* Main Button */}
        <button
          onClick={openModal}
          className="float-btn group relative bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 text-white px-12 py-5 rounded-2xl hover:shadow-2xl transition-all duration-300 font-bold text-xl flex items-center gap-3 overflow-hidden z-10 border-2 border-white/30 hover:scale-105 active:scale-95"
          style={{boxShadow: '0 10px 40px rgba(16, 185, 129, 0.4)'}}
        >
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          <AlertCircle size={28} className="relative z-10" />
          <span className="relative z-10">Report a Problem</span>
        </button>
      </div>

      {modalOpen && (
        <div className={`modal-backdrop fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm p-4`}>
          <div className={`modal-content bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl relative overflow-hidden`}>
            {/* Gradient backgrounds */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-100 rounded-full -mr-10 -mt-10 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-100 rounded-full -ml-8 -mb-8 opacity-40"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold heading-text bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                  Report Issue
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors hover:scale-110"
                >
                  <X size={24} />
                </button>
              </div>

              {success ? (
                <div className="success-animation text-center py-12">
                  <div className="mb-4">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                      <span className="text-4xl success-check">✓</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600">
                    Your report has been submitted successfully. We'll review it soon.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="label-text block text-sm font-semibold text-gray-700 mb-2">
                      📝 Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full border-2 text-white placeholder-white/70 border-white/30 rounded-lg px-4 py-3 focus:border-white focus:outline-none bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="label-text block text-sm font-semibold text-gray-700 mb-2">
                      📞 Phone Number
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full border-2 text-white placeholder-white/70 border-white/30 rounded-lg px-4 py-3 focus:border-white focus:outline-none bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div>
                    <label className="label-text block text-sm font-semibold text-gray-700 mb-2">
                      🏷️ Problem Category
                    </label>
                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full border-2 text-white border-white/30 rounded-lg px-4 py-3 focus:border-white focus:outline-none bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value} className="bg-emerald-600">
                          {cat.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="label-text block text-sm text-gray-700 font-semibold mb-2">
                      💬 Describe Your Issue
                    </label>
                    <textarea
                      value={issueText}
                      onChange={(e) => setIssueText(e.target.value)}
                      rows={4}
                      className="form-input w-full border-2 text-white placeholder-white/70 border-white/30 rounded-lg p-3 focus:border-white focus:outline-none resize-none bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
                      placeholder="Tell us more about the issue..."
                    />
                  </div>

                  {error && (
                    <div className="success-animation bg-red-50 border-2 border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle size={20} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-300 font-semibold text-gray-700 hover:border-gray-400"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSubmit}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-3 rounded-lg text-white hover:shadow-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 hover:scale-105 active:scale-95"
                    >
                      <Send size={18} />
                      Submit
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Report;