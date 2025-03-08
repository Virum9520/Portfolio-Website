import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const [copiedText, setCopiedText] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);

    setTimeout(() => {
      setCopiedText(""); // Reset after 2 seconds
    }, 2000);
  };

  return (
    <div id="contactme" className="bg-black text-white">
      <section className="max-w-[1400px] mx-auto py-10 px-6">
        {/* Call to Action Section */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-sky-400 animate-fadeIn">
            Ready To Grow? Let's Work Together!
          </h1>
        </div>

        {/* Contact Info & Socials (Single Row) */}
        <div className="bg-gray-900 py-6 px-8 rounded-lg shadow-lg animate-fadeIn">
          <div className="flex flex-wrap justify-between items-center text-lg font-semibold gap-6">
            {/* Contact Info */}
            <div className="flex gap-6">
              {/* Location (Not Copyable) */}
              <div className="flex items-center gap-2 hover:text-sky-400 transition duration-300">
                <HiLocationMarker className="text-2xl text-sky-400" />
                <p className="font-bold">Mumbai, India</p>
              </div>

              {/* Email (Copyable) */}
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-sky-400 transition duration-300 relative"
                onClick={() => copyToClipboard("virumranka5503@gmail.com")}
              >
                <MdMessage className="text-2xl text-sky-400" />
                <p className="font-bold">virumranka5503@gmail.com</p>
                {copiedText === "virumranka5503@gmail.com" && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-sky-400 text-black text-xs py-1 px-2 rounded-md">
                    Copied!
                  </span>
                )}
              </div>

              {/* Phone (Copyable) */}
              <div
                className="flex items-center gap-2 cursor-pointer hover:text-sky-400 transition duration-300 relative"
                onClick={() => copyToClipboard("+91 8767001908")}
              >
                <MdCall className="text-2xl text-sky-400" />
                <p className="font-bold">+91 8767001908</p>
                {copiedText === "+91 8767001908" && (
                  <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-sky-400 text-black text-xs py-1 px-2 rounded-md">
                    Copied!
                  </span>
                )}
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex gap-6">
              <a
                href="https://twitter.com/yourprofile"
                className="text-xl text-gray-400 hover:text-sky-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/yourprofile"
                className="text-xl text-gray-400 hover:text-sky-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="text-xl text-gray-400 hover:text-sky-400 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-600 text-center pt-4">
          <span className="text-sm text-gray-400">
            © {new Date().getFullYear()} <span className="text-sky-400 font-bold">Virum Ranka</span>. All Rights Reserved.
          </span>
        </div>
      </section>
    </div>
  );
};

export default Footer;
