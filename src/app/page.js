import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ========== SECTION 1: HERO ========== */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Welcome to MyApp
              </h1>
              <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 leading-relaxed">
                Your complete solution for browsing, managing, and discovering amazing products with secure authentication and a modern, responsive interface.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/items"
                  className="inline-block bg-white text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition text-center"
                >
                  Browse Items
                </Link>
                <Link
                  href="/login"
                  className="inline-block border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-blue-700 rounded-lg p-8 text-center">
                <div className="text-6xl mb-4">🛍️</div>
                <p className="text-blue-100">Modern Shopping Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 1.5: PROMOTIONAL BANNER ========== */}
      <section className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 text-white py-6 sm:py-8 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="text-3xl sm:text-4xl">🎉</span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Limited Time Offer!</h3>
                <p className="text-sm sm:text-base text-white opacity-90">Get 30% off on your first purchase</p>
              </div>
            </div>
            <Link
              href="/items"
              className="bg-white text-orange-600 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-bold hover:bg-gray-100 transition whitespace-nowrap text-sm sm:text-base"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SECTION 2: FEATURES ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose MyApp?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive platform with the best features to enhance your shopping experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: '🔒', title: 'Secure Authentication', desc: 'Protected accounts with secure login and credential management.' },
              { icon: '📦', title: 'Rich Product Catalog', desc: 'Extensive collection with detailed info, pricing, and availability.' },
              { icon: '⚡', title: 'Lightning Fast', desc: 'Built with Next.js for blazing fast performance on all devices.' },
              { icon: '📱', title: 'Fully Responsive', desc: 'Perfect experience on mobile, tablet, and desktop devices.' },
              { icon: '🔍', title: 'Advanced Search', desc: 'Find products instantly with our powerful search and filters.' },
              { icon: '💾', title: 'Easy Management', desc: 'Manage your items and inventory with an intuitive interface.' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition hover:scale-105">
                <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 3: HOW IT WORKS ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Get started in just 4 simple steps
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: 1, title: 'Browse', desc: 'Explore our amazing collection' },
              { step: 2, title: 'Search', desc: 'Find exactly what you need' },
              { step: 3, title: 'Login', desc: 'Secure your account' },
              { step: 4, title: 'Manage', desc: 'Add or manage items' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl sm:text-3xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 4: TESTIMONIALS ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Loved by thousands of happy customers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: 'John Doe', role: 'Product Manager', text: 'Amazing platform! Very intuitive and easy to use. The product catalog is extensive and well-organized.' },
              { name: 'Jane Smith', role: 'Business Owner', text: 'The authentication system is secure and straightforward. I trust this platform with my inventory.' },
              { name: 'Mike Johnson', role: 'Developer', text: 'Built with modern tech stack. Love the clean API design and responsive interface.' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-600 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 5: FEATURES HIGHLIGHT ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Features
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage your products efficiently
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Advanced Search</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Filter products by category, price range, and availability. Find exactly what you're looking for in seconds.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Inventory Management</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Real-time inventory tracking. Add, edit, and delete products with ease from your dashboard.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Secure Transactions</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Enterprise-grade security with encrypted data transmission and secure authentication protocols.
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center text-2xl">
                  ✓
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Get help whenever you need it. Our support team is available around the clock to assist you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SECTION 6: STATS/METRICS ========== */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10K+', label: 'Products' },
              { number: '50K+', label: 'Happy Users' },
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-blue-100 text-sm sm:text-base">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SECTION 7: CALL-TO-ACTION ========== */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 leading-relaxed">
            Join thousands of users who are already enjoying seamless product management and shopping experience with MyApp.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              href="/items"
              className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-center text-sm sm:text-base"
            >
              Browse Products Now
            </Link>
            <Link
              href="/login"
              className="inline-block bg-gray-100 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-gray-200 transition text-center text-sm sm:text-base"
            >
              Login to Dashboard
            </Link>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm mt-6 sm:mt-8">
            No credit card required • Free to use • Instant setup
          </p>
        </div>
      </section>
    </div>
  );
}
