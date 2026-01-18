import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to MyApp
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover amazing products and items with our secure platform. Browse,
            authenticate, and manage your inventory with ease.
          </p>
          <Link
            href="/items"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Browse Items
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure Authentication</h3>
            <p className="text-gray-600">
              Protected accounts with secure login and credential management. Your data
              is safe with our authentication system.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">📦</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Rich Product Catalog</h3>
            <p className="text-gray-600">
              Browse through our extensive collection of items with detailed information,
              pricing, and availability status.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast & Responsive</h3>
            <p className="text-gray-600">
              Built with Next.js for lightning-fast performance and seamless user
              experience on all devices.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: 1, title: 'Browse', desc: 'Explore our collection' },
              { step: 2, title: 'Find', desc: 'Locate your desired item' },
              { step: 3, title: 'Login', desc: 'Create or login account' },
              { step: 4, title: 'Manage', desc: 'Add or manage items' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          What Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'John Doe',
              role: 'Product Manager',
              text: 'Amazing platform! Very easy to use and manage products.',
            },
            {
              name: 'Jane Smith',
              role: 'Business Owner',
              text: 'The authentication system is secure and straightforward.',
            },
            {
              name: 'Mike Johnson',
              role: 'Developer',
              text: 'Built with modern tech stack. Love the clean API design.',
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">
            Login to access exclusive features and manage your items.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/login"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Login
            </Link>
            <Link
              href="/items"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Browse Items
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
