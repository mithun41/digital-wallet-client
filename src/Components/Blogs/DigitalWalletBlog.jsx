import React, { useState } from "react";
import { Calendar, Clock, User, ArrowRight, TrendingUp, Shield, Zap, Smartphone, ChevronRight, Search, Menu, X } from "lucide-react";



const blogPosts = [
  {
    id: 1,
    title: "The Future of Digital Payments in Bangladesh",
    excerpt: "Explore how digital wallets are revolutionizing the way Bangladeshis handle money, from mobile recharges to bill payments.",
    author: "Rahul Ahmed",
    date: "October 5, 2025",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
    featured: true
  },
  {
    id: 2,
    title: "5 Security Tips for Your Digital Wallet",
    excerpt: "Keep your money safe with these essential security practices. Learn how to protect your digital wallet from fraud and theft.",
    author: "Nadia Islam",
    date: "October 3, 2025",
    readTime: "4 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"
  },
  {
    id: 3,
    title: "How to Maximize Cashback Rewards",
    excerpt: "Discover strategies to earn maximum cashback and rewards on every transaction you make with your digital wallet.",
    author: "Karim Hassan",
    date: "September 30, 2025",
    readTime: "6 min read",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80"
  },
  {
    id: 4,
    title: "Digital Wallet vs Traditional Banking",
    excerpt: "A comprehensive comparison between digital wallets and traditional banking services. Which one is right for you?",
    author: "Fatima Khan",
    date: "September 28, 2025",
    readTime: "7 min read",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  },
  {
    id: 5,
    title: "QR Code Payments: The Complete Guide",
    excerpt: "Everything you need to know about QR code payments - how they work, security features, and best practices.",
    author: "Tanvir Rahman",
    date: "September 25, 2025",
    readTime: "5 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=800&q=80"
  },
  {
    id: 6,
    title: "Top 10 Features to Look for in a Digital Wallet",
    excerpt: "Not all digital wallets are created equal. Here are the must-have features you should look for.",
    author: "Sadia Akter",
    date: "September 22, 2025",
    readTime: "8 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&q=80"
  },
  // Industry Insights - Additional Posts
  {
    id: 7,
    title: "Bangladesh's Digital Economy Growth in 2025",
    excerpt: "Analyzing the rapid growth of digital economy in Bangladesh and its impact on financial inclusion.",
    author: "Aminul Islam",
    date: "September 20, 2025",
    readTime: "6 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: 8,
    title: "The Rise of Fintech Startups in Dhaka",
    excerpt: "How fintech startups are transforming the financial landscape in Bangladesh's capital city.",
    author: "Tasnim Rahman",
    date: "September 18, 2025",
    readTime: "5 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
  },
  {
    id: 9,
    title: "Government Initiatives for Digital Bangladesh",
    excerpt: "Understanding the government's role in promoting digital payments and financial technology.",
    author: "Rafiqul Alam",
    date: "September 15, 2025",
    readTime: "7 min read",
    category: "Industry Insights",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
  },
  // Security - Additional Posts
//   {
//     id: 10,
//     title: "Biometric Authentication in Digital Wallets",
//     excerpt: "How fingerprint and face recognition are making digital payments more secure than ever.",
//     author: "Nadia Islam",
//     date: "September 12, 2025",
//     readTime: "4 min read",
//     category: "Security",
//     image: "https://images.unsplash.com/photo-1597848212624-e6d4bd7e1e92?w=800&q=80"
//   },
  {
    id: 11,
    title: "Two-Factor Authentication: Why You Need It",
    excerpt: "The importance of 2FA in protecting your digital wallet from unauthorized access.",
    author: "Shahriar Hossain",
    date: "September 10, 2025",
    readTime: "5 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80"
  },
  {
    id: 12,
    title: "Preventing Phishing Attacks on Mobile Wallets",
    excerpt: "Learn how to identify and avoid phishing attempts targeting your digital wallet.",
    author: "Nadia Islam",
    date: "September 8, 2025",
    readTime: "6 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80"
  },
  // Tips & Tricks - Additional Posts
  {
    id: 13,
    title: "Budgeting with Your Digital Wallet",
    excerpt: "Use your digital wallet's features to create and stick to a monthly budget effectively.",
    author: "Karim Hassan",
    date: "September 5, 2025",
    readTime: "5 min read",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&q=80"
  },
  {
    id: 14,
    title: "Hidden Features of Popular Digital Wallets",
    excerpt: "Discover lesser-known features that can enhance your digital wallet experience.",
    author: "Anika Chowdhury",
    date: "September 3, 2025",
    readTime: "4 min read",
    category: "Tips & Tricks",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
  },
//   {
//     id: 15,
//     title: "Managing Multiple Digital Wallets Efficiently",
//     excerpt: "Tips for organizing and using multiple digital wallets without confusion.",
//     author: "Karim Hassan",
//     date: "September 1, 2025",
//     readTime: "6 min read",
//     category: "Tips & Tricks",
//     image: "https://images.unsplash.com/photo-1554224154-26032aec3d7d?w=800&q=80"
//   },
  // Technology - Additional Posts
  {
    id: 16,
    title: "Blockchain Technology in Digital Payments",
    excerpt: "How blockchain is revolutionizing the security and transparency of digital transactions.",
    author: "Tanvir Rahman",
    date: "August 28, 2025",
    readTime: "7 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80"
  },
//   {
//     id: 17,
//     title: "NFC Payments: How They Work",
//     excerpt: "Understanding Near Field Communication technology and its role in contactless payments.",
//     author: "Rahim Abdullah",
//     date: "August 25, 2025",
//     readTime: "5 min read",
//     category: "Technology",
//     image: "https://images.unsplash.com/photo-1565623006066-1f5fc8d6e6b0?w=800&q=80"
//   },
  {
    id: 18,
    title: "AI and Machine Learning in Fraud Detection",
    excerpt: "How artificial intelligence is helping prevent fraudulent transactions in real-time.",
    author: "Tanvir Rahman",
    date: "August 22, 2025",
    readTime: "6 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80"
  },
  // Guide - Additional Posts
  {
    id: 19,
    title: "Step-by-Step Guide to Setting Up Your First Digital Wallet",
    excerpt: "A beginner-friendly guide to creating and configuring your first digital wallet.",
    author: "Sadia Akter",
    date: "August 20, 2025",
    readTime: "8 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=800&q=80"
  },
//   {
//     id: 20,
//     title: "Troubleshooting Common Digital Wallet Issues",
//     excerpt: "Solutions to the most common problems users face with digital wallets.",
//     author: "Farhan Ahmed",
//     date: "August 18, 2025",
//     readTime: "6 min read",
//     category: "Guide",
//     image: "https://images.unsplash.com/photo-1558618666-fcd25856cd63?w=800&q=80"
//   },
  {
    id: 21,
    title: "Advanced Settings for Power Users",
    excerpt: "Master your digital wallet with these advanced configuration tips and tricks.",
    author: "Sadia Akter",
    date: "August 15, 2025",
    readTime: "7 min read",
    category: "Guide",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  },
  // Comparison - Additional Posts
  {
    id: 22,
    title: "bKash vs Nagad: Which is Better for You?",
    excerpt: "A detailed comparison of Bangladesh's two most popular digital wallet services.",
    author: "Fatima Khan",
    date: "August 12, 2025",
    readTime: "8 min read",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
  },
  {
    id: 23,
    title: "International Digital Wallets: PayPal vs Local Alternatives",
    excerpt: "Comparing international payment solutions with locally optimized digital wallets.",
    author: "Rashidul Hasan",
    date: "August 10, 2025",
    readTime: "6 min read",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?w=800&q=80"
  },
  {
    id: 24,
    title: "Mobile Banking Apps vs Dedicated Digital Wallets",
    excerpt: "Understanding the key differences and use cases for each type of digital payment solution.",
    author: "Fatima Khan",
    date: "August 8, 2025",
    readTime: "7 min read",
    category: "Comparison",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  }
];

const categories = ["All", "Industry Insights", "Security", "Tips & Tricks", "Technology", "Guide", "Comparison"];

const features = [
  { icon: Shield, title: "Secure Transactions", description: "Bank-level security" },
  { icon: Zap, title: "Instant Transfers", description: "Money in seconds" },
  { icon: Smartphone, title: "Mobile First", description: "Pay on the go" },
  { icon: TrendingUp, title: "Smart Analytics", description: "Track your spending" }
];

const DigitalWalletBlog = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-slate-900 dark:to-indigo-950">
      {/* Navigation */}
   

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-200 via-green-700 to-green-200 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Digital Wallet Insights
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Stay updated with the latest trends, tips, and insights about digital payments
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 dark:text-white bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border-2 border-transparent focus:border-white focus:outline-none shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="currentColor" className="text-slate-50 dark:text-gray-900"/>
          </svg>
        </div>
      </div>

      {/* Features Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
                <Icon className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-green-600 to-green-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:shadow-md border border-gray-200 dark:border-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow group">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative h-64 md:h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-500 text-white rounded-full text-sm font-bold shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block px-4 py-1 bg-green-100 dark:bg-green-500/30 text-green-600 dark:text-green-400 rounded-full text-sm font-semibold mb-4 w-fit">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>

                <button className="group/btn flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all w-fit">
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
          <span className="text-green-600 dark:text-green-400 ml-2">({filteredPosts.length})</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <div key={post.id} className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-green-200 dark:bg-green-900/30  dark:text-indigo-400 rounded-full text-xs font-semibold mb-3">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* <button className="group/btn flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl text-gray-500 dark:text-gray-400">No articles found</p>
            <p className="text-gray-400 dark:text-gray-500 mt-2">Try adjusting your search or filter</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default DigitalWalletBlog;
 