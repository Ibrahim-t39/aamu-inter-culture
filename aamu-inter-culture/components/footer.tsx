import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#660000] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:underline">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/cultural-corner" className="hover:underline">
                  Cultural Corner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:isa@aamu.edu" className="hover:underline">
                  isa@aamu.edu
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li>4900 Meridian St N,</li>
              <li>Huntsville, AL 35810</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Alabama A&M University
            International Student Association. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
