export default function DashboardPage() {
    return (
      <div className="min-h-screen w-full bg-gray-50 font-sans">
        {/* Hero Section */}
        <div className="relative w-full h-[85vh] overflow-hidden rounded-3xl shadow-lg mx-auto max-w-7xl">
          {/* Background Image */}
          <img
            src="https://assetscdn1.paytm.com/images/catalog/view/1736422178778.png"
            alt="Digital banking"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
  
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70 z-0" />
  
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-xl tracking-wide">
              Your Wallet, Smarter
            </h1>
            <p className="text-lg sm:text-xl max-w-2xl drop-shadow-lg mb-6">
              Instant money transfers, smart wallet features, and secure banking — all in one place.
            </p>
            <div className="flex gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-semibold shadow-md transition">
                Get Started
              </button>
              <button className="bg-white/20 hover:bg-white/30 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md border border-white/30 transition">
                Learn More
              </button>
            </div>
          </div>
        </div>
  
        {/* Feature Cards */}
        <div className="max-w-6xl mx-auto py-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">💸 Instant Transfers</h3>
            <p className="text-gray-600 text-sm">
              Send and receive money instantly to anyone, anywhere, securely with just a few taps.
            </p>
          </div>
  
          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">🔒 Secure Payments</h3>
            <p className="text-gray-600 text-sm">
              Advanced encryption ensures every transaction is protected, always.
            </p>
          </div>
  
          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">📱 Smart Wallet</h3>
            <p className="text-gray-600 text-sm">
              Manage bills, recharge, bank accounts, and rewards all from one wallet.
            </p>
          </div>
        </div>
      </div>
    );
  }
  