import React from "react";
import { Link } from "react-router";
import Logo from "../Navbar/Logo";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f1a] text-gray-300">
      {/* Divider */}
      <hr className="border-gray-700" />

      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <Logo />
          <p className="text-sm leading-relaxed mt-4 text-gray-400">
            Your trusted digital wallet solution. <br />
            Secure, fast, and designed for your financial freedom.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "Login", path: "/login" },
              { name: "Signup", path: "/signup" },
            ].map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className="hover:text-green-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <span
                className="hover:text-green-400 transition-all duration-300 cursor-pointer inline-block hover:translate-x-1"
                title="Access when logged in"
              >
                Wallet
              </span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">
            Contact Us
          </h3>
          <div className="space-y-2 text-sm">
            <p>📧 paymate.support@gmail.com</p>
            <p>📞 +8801711121212</p>
            <p>📍 Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-5 bg-[#0c0c14]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-green-400">PayMate</span>. All
            rights reserved.
          </p>
          <p className="mt-3 md:mt-0">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="font-semibold text-green-400 hover:text-green-300 transition-colors">
              6 LogicPlas Team
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
