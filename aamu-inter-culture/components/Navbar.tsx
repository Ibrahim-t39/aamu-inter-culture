"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import AuthModal from "./AuthModal";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Events", path: "/events" },
  { name: "Student Directory", path: "/directory" },
  { name: "Cultural Corner", path: "/cultural-corner" },
  { name: "Resources", path: "/resources" },
  { name: "Contact Us", path: "/contact" },
];

const NavItems = ({ pathname }: { pathname: string }) => (
  <>
    {navItems.map((item) => (
      <Link
        key={item.name}
        href={item.path}
        className={`px-3 py-2 rounded-md text-sm font-medium ${
          pathname === item.path
            ? "bg-[#990000] text-white"
            : "text-gray-300 hover:bg-[#990000] hover:text-white"
        }`}
      >
        {item.name}
      </Link>
    ))}
  </>
);

const UserMenu = ({ onLogout }: { onLogout: () => void }) => (
  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
    <Link
      href="/profile"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      Your Profile
    </Link>
    <Link
      href="/settings"
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
    >
      Settings
    </Link>
    <button
      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
      onClick={onLogout}
    >
      Sign out
    </button>
  </div>
);

const MobileMenu = ({
  isLoggedIn,
  pathname,
  onShowAuthModal,
  onLogout,
}: {
  isLoggedIn: boolean;
  pathname: string;
  onShowAuthModal: () => void;
  onLogout: () => void;
}) => (
  <div className="md:hidden" id="mobile-menu">
    <div className="px-2 pt-2 pb-3 space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`block px-3 py-2 rounded-md text-base font-medium ${
            pathname === item.path
              ? "bg-[#990000] text-white"
              : "text-gray-300 hover:bg-[#990000] hover:text-white"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
    <div className="pt-4 pb-3 border-t border-gray-700">
      {isLoggedIn ? (
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-10 rounded-full"
              src="https://ufvqvhwxhqjjbvbvjkzz.supabase.co/storage/v1/object/public/images/placeholder.svg?height=40&width=40"
              alt="User avatar"
              width={40}
              height={40}
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-white">User Name</div>
            <div className="text-sm font-medium text-gray-400">
              user@example.com
            </div>
          </div>
          <Button onClick={onLogout} variant="outline" className="ml-auto">
            Sign out
          </Button>
        </div>
      ) : (
        <div className="mt-3 px-2 space-y-1">
          <Button
            onClick={onShowAuthModal}
            variant="outline"
            className="w-full justify-center text-black bg-white hover:bg-gray-100"
          >
            Login
          </Button>
          <Button
            onClick={onShowAuthModal}
            className="w-full justify-center mt-2"
          >
            Sign up
          </Button>
        </div>
      )}
    </div>
  </div>
);

const Navbar = () => {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleLogin = (email: string, password: string) => {
    console.log("Login attempt", { email, password });
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  const handleSignup = (name: string, email: string, password: string) => {
    console.log("Signup attempt", { name, email, password });
    setIsLoggedIn(true);
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setShowUserMenu(false);
  };

  return (
    <nav className="bg-[#660000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="font-bold text-xl">
              AAMU ISA
            </Link>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <NavItems pathname={pathname} />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            {isLoggedIn ? (
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="bg-[#990000] p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <span className="sr-only">View notifications</span>
                  <Image
                    className="h-8 w-8 rounded-full"
                    src="https://ufvqvhwxhqjjbvbvjkzz.supabase.co/storage/v1/object/public/images/placeholder.svg?height=32&width=32"
                    alt="User avatar"
                    width={32}
                    height={32}
                  />
                </button>
                {showUserMenu && <UserMenu onLogout={handleLogout} />}
              </div>
            ) : (
              <div>
                <Button
                  onClick={() => setShowAuthModal(true)}
                  variant="outline"
                  className="mr-2 text-black bg-white hover:bg-gray-100"
                >
                  Login
                </Button>
                <Button onClick={() => setShowAuthModal(true)}>Sign up</Button>
              </div>
            )}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#990000] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {showMobileMenu ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {showMobileMenu && (
        <MobileMenu
          isLoggedIn={isLoggedIn}
          pathname={pathname}
          onShowAuthModal={() => setShowAuthModal(true)}
          onLogout={handleLogout}
        />
      )}

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
        onSignup={handleSignup}
      />
    </nav>
  );
};

export default Navbar;
