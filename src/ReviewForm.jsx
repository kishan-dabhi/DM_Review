import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { toast } from "sonner";

const reviews = [
  "Extremely happy with their honest advice.",
  "Best mobile store in Ahmedabad!",
  "Quick service and genuine pricing.",
  "Great EMI options available!",
  "Loved their phone cover collection!",
  "Professional staff and top-notch service.",
];

const getRandomReview = () => {
  return reviews[Math.floor(Math.random() * reviews.length)];
};

const ReviewCard = () => {
  const [review, setReview] = useState(getRandomReview());
  const quoteRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      quoteRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      }
    );
  }, [review]);

  const handleCopy = () => {
    navigator.clipboard.writeText(review);
    toast.success("Review copied to clipboard!");
  };

  const handleGoogleReview = () => {
    window.open("https://www.google.com/maps/place/DM+Mobile+%26+Electronic", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white py-6 px-3 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white shadow-xl rounded-2xl p-5 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/70 backdrop-blur-lg rounded-2xl z-0" />
        <div className="relative z-10 text-center space-y-4">

          {/* Thank You Heading */}
          <p className="text-xs sm:text-sm text-gray-600 italic">🙏 Thank you for visiting <b>DM Mobile</b> – We value your trust!</p>

          {/* Shop Name & Address */}
          <h1 className="text-xl font-bold text-blue-800 flex justify-center items-center gap-2">
            📱 DM Mobile & Electronic
          </h1>
          <p className="text-xs text-gray-600 leading-tight">
            A/187, Chanakyapuri, Ghatlodiya – Ahmedabad
          </p>
          <p className="text-[11px] text-gray-500">
            GST: 24CSDPK139 | 📞 84888 81660
          </p>

          {/* Trust Tag */}
          <div className="bg-green-100 text-green-700 font-medium italic px-3 py-1 rounded-full text-xs inline-block shadow-sm">
            Trusted by 1000+ happy customers 🌟
          </div>

          {/* Review Text */}
          <div
            ref={quoteRef}
            className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-4 rounded-xl shadow text-blue-800 italic text-base font-medium"
          >
            “{review}”
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleCopy}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg shadow-sm"
            >
              📋 Copy Review
            </button>
            <button
              onClick={handleGoogleReview}
              className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm px-4 py-2 rounded-lg shadow-sm"
            >
              ⭐ Leave Google Review
            </button>
          </div>

          {/* Footer Info */}
          <div className="text-xs text-gray-700 space-y-1 mt-3">
            <p>
              We provide 📱 <b>New Phones</b>, 🛠️ <b>Repairs</b>, 💼 <b>EMI Options</b>, 🎁 <b>Custom Covers</b> & more.
            </p>
            <p className="text-[11px] text-gray-500">We appreciate your feedback 🙏</p>
            <p className="text-[11px] text-blue-600 italic animate-pulse opacity-70">
              (Refresh the page to get a new AI-generated review)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
