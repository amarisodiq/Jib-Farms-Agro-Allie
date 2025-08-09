import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <Image
        src="/images/grass-2.png"
        alt="Grass footer decoration"
        width={1920}
        height={30}
        className="h-[30px] object-cover w-full"
        priority={false} // ensures lazy loading
      />
      <div className="bg-[#0d401c] text-gray-300 py-8">
        <div className="max-w-7xl mx-auto px-5 md:px-10">
          {/* Top Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Logo / About */}
            <div>
              <Image
                src="/images/jib-logo.png"
                alt="Jib Farms Logo"
                width={120}
                height={50}
                className="h-auto w-auto mb-4"
              />
              <p className="text-sm">
                We produce and distribute premium livestock feeds to help
                farmers raise healthier animals and grow profitable farms.
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Address</h3>
              <p className="mb-3">
                4, Ahmad Taoffek Street, Off Umar Audi Road, Gra Ilorin
              </p>
              <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
              <p>ibjimoh204@gmail.com</p>
              <p>+234 813 927 2948</p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">
                Follow Us
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
            © {new Date().getFullYear()} Jib Farms & Agro-Allied. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
