const ProductList = ({ products, addToCart }) => (
  <div className="max-w-7xl mx-auto px-6 py-12">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <img
            src={p.image}
            alt={p.name}
            className="h-56 mx-auto object-contain"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-800">{p.name}</h3>
          <p className="text-lg text-gray-600">₹{p.price}</p>
          <button
            onClick={() => addToCart(p)}
            className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default ProductList;
