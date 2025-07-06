import { useNavigate } from "react-router-dom";

const Cart = ({ cart, isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    setIsOpen(false);
    navigate("/checkout", { state: { cart } });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg z-50 p-6 overflow-y-auto">
      <button
        className="text-red-500 font-bold text-xl mb-4"
        onClick={() => setIsOpen(false)}
      >
        ✖
      </button>
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 font-bold">Total: ₹{total}</p>
          <button
            className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
