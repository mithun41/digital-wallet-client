import React, { useState } from "react";
import { Link } from "react-router";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import Logo from "../Navbar/Logo";

// Mock Logo component
// const Logo = () => (
//   <div className="flex items-center gap-2">
//     <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
//       <span className="text-white font-bold text-xl">P</span>
//     </div>
//     <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
//       PayMate
//     </span>
//   </div>
// );

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/signup" },
    { name: "Wallet", path: "/dashboard" },
  ];

  const resources = [
    { name: "About Us", path: "/about" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
    { name: "Help Center", path: "/help" },
  ];

  const socialLinks = [
    { icon: Github, label: "Github", href: "https://github.com/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com" },
  ];

  return (
    <footer className="bg-[#0c0c14] text-gray-300 relative overflow-hidden ">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/5 via-transparent to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />

      {/* Subtle Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Logo & About - Takes 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="-pl-10 -ml-48">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Your trusted digital wallet — secure, fast, and designed for your
              financial freedom. Experience seamless transactions with
              enterprise-grade security.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="group w-10 h-10 rounded-lg bg-white/5 hover:bg-green-500/10 border border-white/10 hover:border-green-500/30 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Takes 2 columns */}
          <div className="lg:col-span-2">
            <h3 className="text-base font-semibold text-white mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  {link.isProtected ? (
                    <span
                      className="group flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors cursor-pointer"
                      title="Access when logged in"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-green-500/10 text-green-400 border border-green-500/20">
                        Protected
                      </span>
                    </span>
                  ) : (
                    <Link
                      to={link.path}
                      className="group flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.name}
                      </span>
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Resources - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-white mb-6 relative inline-block">
              Resources
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
            </h3>
            <ul className="space-y-3">
              {resources.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="group flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {item.name}
                    </span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Takes 3 columns */}
          <div className="lg:col-span-3">
            <h3 className="text-base font-semibold text-white mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gradient-to-r from-green-400 to-transparent rounded-full" />
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:paymate.support@gmail.com"
                className="group flex items-start gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-white/5 group-hover:bg-green-500/10 border border-white/10 group-hover:border-green-500/20 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-0.5">Email</div>
                  <div className="break-all">paymate.support@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+8801798916082"
                className="group flex items-start gap-3 text-sm text-gray-400 hover:text-green-400 transition-colors"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-white/5 group-hover:bg-green-500/10 border border-white/10 group-hover:border-green-500/20 transition-all">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-0.5">Phone</div>
                  <div>+880 1798-916082</div>
                </div>
              </a>

              <div className="flex items-start gap-3 text-sm text-gray-400">
                <div className="mt-0.5 p-2 rounded-lg bg-white/5 border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 mb-0.5">Location</div>
                  <div>Dhaka, Bangladesh</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="relative z-10 border-t border-white/5 mt-12" />

      {/* Bottom Bar */}
      <div className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-medium text-green-400">PayMate</span>. All
            rights reserved.
          </p>
          <p className="text-center md:text-right flex items-center gap-1.5">
            Crafted with
            <span className="text-red-500 inline-block hover:scale-125 transition-transform">
              ❤️
            </span>
            by{" "}
            <span className="font-semibold text-green-400 hover:text-green-300 transition-colors cursor-pointer">
              6 LogicPlas Team
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
