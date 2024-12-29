import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-16">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Footer Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Bistro Restaurant</h3>
            <p className="text-gray-400">
              Discover our unique flavors and enjoy an unforgettable dining experience with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="text-gray-400">
              <li>
                <a href="/" className="hover:text-white">Home</a>
              </li>
              <li>
                <a href="/menu" className="hover:text-white">Menu</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="text-gray-400">
              <li>Phone: (123) 456-7890</li>
              <li>Email: info@bistro.com</li>
              <li>Location: 123 Bistro St, Food City, FC 12345</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex justify-between items-center border-t border-gray-700 pt-6 mt-6">
          <p className="text-gray-400">
            &copy; 2024 Bistro Restaurant. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://www.facebook.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.twitter.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
