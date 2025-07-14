import React, { useState } from 'react';

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Navbar */}
      <nav className="mx-auto w-full max-w-7xl rounded mt-2 px-4 sm:px-10 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-pink-700">HOMSAF IMS🛒</div>
        <div className="hidden md:flex space-x-6 text-gray-700 text-lg">
          <a href="#features" className="hover:text-pink-700">Features</a>
          <a href="#testimonials" className="hover:text-pink-700">Testimonials</a>
          <a href="#contact" className="hover:text-pink-700">Contact</a>
          <a href="#about" className="hover:text-pink-700">About</a>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-blue-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="bg-white shadow-md flex flex-col items-center py-8 space-y-8 md:hidden">
          <a href="#features" onClick={() => setMenuOpen(false)} className="text-gray-700">Features</a>
          <a href="#testimonials" onClick={() => setMenuOpen(false)} className="text-gray-700">Testimonials</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-gray-700">Contact</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-gray-700">About</a>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="bg-white flex flex-col items-center justify-center text-center px-8 py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-pink-700 mb-4 leading-tight">
          Manage Your Inventory with Confidence
        </h1>
        <p className="text-pink-700 text-lg max-w-2xl mb-6">
          Streamline your business operations with a smart and secure inventory management solution tailored for your needs.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-x-7 sm:space-y-0">
          <button className="bg-pink-700 text-white px-10 py-2 rounded hover:bg-pink-800 transition cursor-pointer w-full sm:w-auto">
            Get Started
          </button>
          <button className="bg-transparent text-pink border border-black hover:bg-pink-800 hover:text-white px-16 py-2 rounded cursor-pointer w-full sm:w-auto">
            Learn More About Us
          </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 bg-white">
        <h2 className="text-4xl font-bold text-pink-700 mb-8 text-center">Say Hello👋</h2>
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto items-start">
          {/* Contact Form */}
          <form className="flex-1 space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button type="submit" className="bg-pink-700 text-white px-6 py-2 rounded hover:bg-pink-800 w-full transition">
              Send Message
            </button>
          </form>

          {/* Map Embed */}
          <div className="flex-1 w-full h-80">
            <iframe
              title="Mogadishu Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d994.5013804810377!2d45.35543486672934!3d2.0319990662587535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58c7a9ac9b8b37%3A0x992a992c3e74d9ed!2sHamar%20Weyne%2C%20Mogadishu%2C%20Somalia!5e0!3m2!1sen!2sso!4v1710419534982!5m2!1sen!2sso"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
      {/* Features Section */}

      <section>
        <h2 className="text-4xl font-bold text-pink-700 mb-8 text-center">Our Features</h2>
        <div></div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-700 text-white py-8 px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-xl mb-2">HOMSAF IMS</h4>
            <p className="text-white text-sm">Empowering businesses with reliable inventory solutions.</p>
          </div>
          <div>
            <h4 className="font-bold text-xl mb-2">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:underline text-white">Features</a></li>
              <li><a href="#testimonials" className="hover:underline text-white">Testimonials</a></li>
              <li><a href="#contact" className="hover:underline text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-white text-sm mt-6">&copy; 2025 IMS Dashboard — All Rights Reserved.</div>
      </footer>
    </div>
  );
};

export default HomePage;
