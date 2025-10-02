import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo2.png";

const Footer = () => {
  return (
    <footer className=" ">
      <hr className="bg-gray-400" />
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Logo & About */}
          <div>
            <img src={logo} alt="Logo" className="w-36 mx-auto md:mx-0 mb-4" />
            <p className="text-sm leading-relaxed ">
              A smart way to manage your money. <br />
              Safe, fast, and reliable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-green-400 transition duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-green-400 transition duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/signup"
                  className="hover:text-green-400 transition duration-300"
                >
                  Signup
                </Link>
              </li>
              <li>
                <span
                  className="hover:text-green-400 transition duration-300 cursor-pointer"
                  title="Access when logged in"
                >
                  Wallet
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold  mb-4">Contact</h3>
            <p className="text-sm ">📧 paymate.support@gmail.com</p>
            <p className="text-sm ">📞 +8801711121212</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t  py-4">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-sm ">
          <p>© {new Date().getFullYear()} PayMate. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="font-medium text-green-400">6 LogicPlas Team</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
