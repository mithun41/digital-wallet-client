import React, { useState, useEffect } from 'react';
import { Play, Sparkles, Zap, TrendingUp, Users, CreditCard, Send, ArrowRight } from 'lucide-react';

const Banner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeUser, setActiveUser] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    // User avatar cycling
    const userInterval = setInterval(() => {
      setActiveUser(prev => (prev + 1) % 5);
    }, 1500);

    // Counter animation
    const countInterval = setInterval(() => {
      setCount(prev => (prev >= 10245 ? 0 : prev + 125));
    }, 50);

    return () => {
      clearInterval(userInterval);
      clearInterval(countInterval);
    };
  }, []);

  const companies = ['Digital', 'Wallet', 'SendMoney', 'CashOut', 'Tranaction', 'MobileReasharge', 'Taransfer'];
  // const transactions = ['Ethan', 'Noah', 'Mason', 'Liam', 'Oliver'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden relative">
      {/* Animated Decorative Elements */}
      <div className="absolute top-10 left-10 w-12 h-12 border-4 border-lime-200 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
      <div className="absolute top-20 right-1/4 w-32 h-32 border-2 border-lime-200/30 rounded-full animate-pulse"></div>
      
      {/* Bouncing Arrow */}
      <div className="absolute top-1/4 right-20 text-lime-400 animate-bounce">
        <svg width="50" height="50" viewBox="0 0 50 50" fill="currentColor" className="animate-spin" style={{animationDuration: '2s'}}>
          <path d="M25 5L30 20L25 25L20 20L25 5Z"/>
          <path d="M25 5L30 20L25 25L20 20L25 5Z" transform="rotate(90 25 25)"/>
          <path d="M25 5L30 20L25 25L20 20L25 5Z" transform="rotate(180 25 25)"/>
          <path d="M25 5L30 20L25 25L20 20L25 5Z" transform="rotate(270 25 25)"/>
        </svg>
      </div>

      {/* Multiple Sparkles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`sparkle-${i}`}
          className="absolute text-yellow-500 animate-pulse"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 18}%`,
            animationDelay: `${i * 0.3}s`
          }}
        >
          <Sparkles size={24 + i * 4} className="animate-spin" style={{animationDuration: `${4 + i}s`}} />
        </div>
      ))}

      {/* Floating Icons */}
      <div className="absolute top-1/3 left-10 text-lime-400 animate-bounce" style={{animationDelay: '0.5s'}}>
        <CreditCard size={40} className="animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 right-10 text-yellow-400 animate-bounce" style={{animationDelay: '1s'}}>
        <TrendingUp size={40} className="animate-pulse" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="flex items-center gap-2 text-lime-400">
              <Sparkles size={24} />
              <span className="text-sm font-bold tracking-wider">EASY PAYMENT</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
              Fast, Secure, & Easy
              <br />
              <span className="relative inline-block">
                <span className="inline-block hover:scale-110 transition-transform duration-300">Transactions.</span>
                <div className="absolute bottom-2 left-0 w-full h-1 bg-yellow-400"></div>
              </span>
            </h1>

            <p className="text-teal-100 text-lg leading-relaxed max-w-xl">
              Effortlessly send, receive, and request money online with paynone.
              <br />
              Get a tailored solution for your business needs.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <button className="bg-green-500 text-black px-8 py-4 rounded-lg font-bold text-sm hover:bg-lime-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-lime-400/50 group">
                <span className="flex items-center gap-2">
                  MAKE AN APPOINTMENT
                  <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
                </span>
              </button>
              
              <button className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-lg hover:bg-white/20 transition-all duration-300 group transform hover:scale-105">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                  <Play fill="currentColor" className="text-teal-900 ml-1" size={20} />
                </div>
                <span className="text-white font-semibold">WATCH VIDEO</span>
              </button>
            </div>

            {/* Animated Stats */}
            <div className="flex gap-6 pt-4">
              {[
                { icon: Users, label: 'Active Users', value: '25K+' },
                { icon: TrendingUp, label: 'Growth', value: '3.09%' },
                { icon: Send, label: 'Transactions', value: '1M+' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg transform hover:scale-105 transition-all duration-300"
                >
                  <stat.icon className="text-lime-400" size={24} />
                  <div>
                    <p className="text-white font-bold">{stat.value}</p>
                    <p className="text-teal-200 text-xs">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="relative z-10">
              {/* Phone Frame */}
              <div className="relative mx-auto w-80 h-[600px] bg-gradient-to-b from-gray-900 to-black rounded-[3rem] p-3 shadow-2xl border-8 border-gray-800 transform hover:scale-105 transition-all duration-500">
                <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-900 rounded-[2.5rem] overflow-hidden">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20"></div>
                  
                  {/* Phone Content */}
                  <div className="p-6 pt-10 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                        <div>
                          <p className="text-white text-xs opacity-70">*******</p>
                          <p className="text-white text-sm font-bold">Welcome Back</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-white text-xs opacity-70 mb-1">Total Balance</p>
                      <h2 className="text-white text-3xl font-bold">$86,290.49</h2>
                    </div>

                    {/* Card */}
                    <div className="bg-gray-300 rounded-2xl p-4 mb-4 shadow-lg transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex gap-1">
                          <div className="w-8 h-8 bg-red-500 rounded-full opacity-80"></div>
                          <div className="w-8 h-8 bg-yellow-500 rounded-full opacity-80 -ml-3"></div>
                        </div>
                        <p className="text-gray-800 text-xs">.... .... .... 8934</p>
                      </div>
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-gray-700 text-xs mb-1">Card Holder</p>
                          <p className="text-gray-900 font-bold">******</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-700 text-xs mb-1">Exp</p>
                          <p className="text-gray-900 font-bold">09/28</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {['Send', 'Request', 'Exchange', 'More'].map((action, i) => (
                        <div key={i} className="text-center transform hover:scale-110 transition-transform">
                          <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-1 hover:bg-white/40 transition-all"></div>
                          <p className="text-white text-xs">{action}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex-1 overflow-hidden">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-white text-xs font-semibold">Recent Transaction</p>
                        <p className="text-white text-xs opacity-70">See all</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <div className="flex gap-2 mb-3">
                          {[1,2,3,4,5].map(i => (
                            <div
                              key={i}
                              className={`w-8 h-8 bg-white/20 rounded-full transform transition-all duration-500 ${activeUser === i - 1 ? 'scale-125 ring-2 ring-white' : 'scale-100'}`}
                            ></div>
                          ))}
                        </div>
                        <p className="text-white text-xs font-semibold mb-2">Scheduled Payments</p>
                        <div className="flex gap-2">
                          <div className="bg-green-500 rounded-lg p-2 flex-1 transform hover:scale-105 transition-transform">
                            <p className="text-white text-xs font-bold">Spotify</p>
                            <p className="text-white text-xs opacity-70">$9/mo</p>
                          </div>
                          <div className="bg-teal-700 rounded-lg p-2 flex-1 transform hover:scale-105 transition-transform">
                            <p className="text-white text-xs font-bold">WeChat</p>
                            <p className="text-white text-xs opacity-70">$5/mo</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards with More Animation */}
            <div className={`absolute -right-8 top-20 bg-white rounded-2xl p-6 shadow-2xl transform transition-all duration-1000 delay-500 hover:scale-110 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <p className="text-gray-600 text-sm mb-1">Payment Received</p>
              <p className="text-green-600 text-2xl font-bold mb-1">+33,890.00</p>
              <p className="text-gray-500 text-xs">1st Jan, 2025 <span className="text-green-600 font-semibold">3.09% ↗</span></p>
            </div>

            <div className={`absolute -left-8 top-64 bg-white rounded-2xl p-6 shadow-2xl transform transition-all duration-1000 delay-700 hover:scale-110 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full"></div>
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full"></div>
              </div>
              <p className="text-gray-900 text-2xl font-bold mb-1">25K+</p>
              <p className="text-gray-600 text-sm">Active users</p>
            </div>

            {/* Lightning Bolt */}
            <div className="absolute bottom-32 right-12 text-yellow-400">
              <Zap size={48} fill="currentColor" />
            </div>

            {/* Additional Floating Elements */}
            <div className="absolute top-10 left-10 text-lime-400 animate-spin" style={{animationDuration: '4s'}}>
              <Sparkles size={32} />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
          <div className="bg-gradient-to-r from-green-400 via-yellow-300 to-green-400 rounded-t-3xl p-12">
            <div className="mb-8">
              <h3 className="text-3xl font-black text-gray-900 mb-2">
                Join {count.toLocaleString()}+
              </h3>
              <p className="text-gray-800 font-semibold">companies who've reached</p>
            </div>
            
            <div className="flex flex-wrap items-center justify-between gap-8">
              {companies.map((company, i) => (
                <div
                  key={i}
                  className="text-2xl font-bold text-gray-900 hover:scale-110 transition-all duration-300 cursor-pointer"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Decorative Icon */}
      <div className="fixed bottom-8 right-8 text-lime-400 animate-spin" style={{animationDuration: '3s'}}>
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="hover:scale-125 transition-transform">
          <circle cx="40" cy="40" r="3" fill="currentColor" className="animate-ping"/>
          <circle cx="40" cy="10" r="5" fill="currentColor" className="animate-pulse"/>
          <circle cx="40" cy="70" r="5" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
          <circle cx="10" cy="40" r="5" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
          <circle cx="70" cy="40" r="5" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
          <circle cx="20" cy="20" r="4" fill="currentColor" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
          <circle cx="60" cy="20" r="4" fill="currentColor" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <circle cx="20" cy="60" r="4" fill="currentColor" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
          <circle cx="60" cy="60" r="4" fill="currentColor" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
        </svg>
      </div>

      <style jsx>{`
        @keyframes slideWidth {
          0%, 100% { width: 0%; }
          50% { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default Banner;

  