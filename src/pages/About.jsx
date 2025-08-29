import React from "react";

function About() {
  return (
    <div id="about" className="bg-[#12372A] text-white min-h-screen py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-100">About Us</h1>
        <p className="mt-4 text-gray-300 text-lg">
          Welcome to <span className="text-yellow-200 font-semibold">FoodieHub</span> –
          your one-stop destination for fresh, delicious and affordable meals.
          From juicy burgers to refreshing cold coffee, we bring taste & quality
          together at your fingertips.
        </p>
      </div>

      {/* 3 Sections (Mission, Quality, Delivery) */}
      <div className="mt-16 grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Mission */}
        <div className="bg-[#0d2b20] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-yellow-100">🍔 Our Mission</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            To make your dining experience convenient, fun and satisfying with
            delicious food that’s always served fresh.
          </p>
        </div>

        {/* Quality */}
        <div className="bg-[#0d2b20] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-yellow-100">🥗 Quality First</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            We use only the finest ingredients and maintain strict hygiene
            standards to ensure every bite is safe & tasty.
          </p>
        </div>

        {/* Delivery */}
        <div className="bg-[#0d2b20] p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-yellow-100">🚚 Fast Delivery</h2>
          <p className="mt-3 text-gray-300 text-sm leading-relaxed">
            Freshly cooked meals delivered to your doorstep quickly, so you
            never have to wait too long for your cravings.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold text-yellow-100">Taste the Difference Today!</h2>
        <p className="mt-3 text-gray-300">
          Browse our menu and order your favorite meals instantly.
        </p>
        <a
          href="/shop"
          className="inline-block mt-6 bg-yellow-200 text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-300 transition"
        >
          Explore Menu
        </a>
      </div>
    </div>
  );
}

export default About;
