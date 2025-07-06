import { useState, useEffect } from "react";

const shoeImages = [
  "https://pbs.twimg.com/media/CnC-ITAWYAEKv8S.jpg",
  "https://cdnb.artstation.com/p/assets/images/images/059/396/789/large/sachin-pal-airmax-shoes-post.jpg?1676304375",
  "https://cdn.thevoiceoffashion.com/article_images/Banner1-5f216b2739780.jpg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % shoeImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden font-sans">
      <img
        src={shoeImages[index]}
        alt="Shoe Slide"
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out opacity-100"
        style={{ animation: "fade 1s ease-in-out" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-800/40 to-pink-700/30 z-10" />
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
        <h1
          className="text-[3.5rem] md:text-[5rem] font-extrabold tracking-widest"
          style={{
            textShadow: "2px 2px 12px rgba(255, 20, 147, 0.8)",
            animation: "pulseGlow 2s infinite",
          }}
        >
          UNLEASH THE DROP
        </h1>
        <p
          className="mt-4 text-xl md:text-2xl font-medium text-pink-200"
          style={{ animation: "fadeIn 2s ease forwards" }}
        >
          Drip so fresh, even your feet will flex.
        </p>
        <button className="mt-6 px-8 py-3 bg-gradient-to-r from-yellow-300 to-pink-400 text-black rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-md hover:shadow-2xl">
          Shop The Heat 🛍️
        </button>
      </div>

      {/* Add animations inline if no Tailwind config */}
      <style>{`
        @keyframes fade {
          from { opacity: 0.3; }
          to { opacity: 1; }
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulseGlow {
          0%, 100% {
            text-shadow: 0 0 10px #ff1493, 0 0 20px #ff1493, 0 0 30px #ff1493;
          }
          50% {
            text-shadow: 0 0 20px #ff69b4, 0 0 30px #ff69b4, 0 0 40px #ff69b4;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
