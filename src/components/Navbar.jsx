const Navbar = ({ cart, setCartOpen }) => (
  <div className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-yellow-400 shadow-md sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png"
        alt="Nike"
        className="h-6"
      />
      <div className="hidden md:flex space-x-6 text-lg font-semibold text-white">
        {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
          (item, idx) => (
            <a
              key={idx}
              href="#"
              className="hover:scale-105 transition-transform hover:underline"
            >
              {item}
            </a>
          )
        )}
      </div>
      <div className="flex space-x-4 text-white">
        <button className="hover:underline">Sign In</button>
        <button className="hover:underline">Help</button>
        <button onClick={() => setCartOpen(true)} title="Cart">
          🛒 {cart.length}
        </button>
      </div>
    </div>
  </div>
);

export default Navbar;
