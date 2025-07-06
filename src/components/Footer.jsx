// src/components/Footer.jsx
const Footer = () => (
  <footer className="w-full bg-gray-900 text-white py-6 mt-10">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
      <div className="mb-4 md:mb-0">
        <p>📧 Email: support@nikefreaks.com</p>
        <p>📞 Phone: +91 98765 43210</p>
      </div>
      <a
        href="/"
        className="text-yellow-400 hover:underline hover:text-yellow-300 transition"
      >
        🏠 Back to Home
      </a>
    </div>
  </footer>
);

export default Footer;
