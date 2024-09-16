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
        className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
          pathname === item.path
            ? "border-primary text-gray-900"
            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
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
  <div className="sm:hidden" id="mobile-menu">
    <div className="pt-2 pb-3 space-y-1">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
            pathname === item.path
              ? "bg-indigo-50 border-primary text-primary"
              : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </div>
    <div className="pt-4 pb-3 border-t border-gray-200">
      {isLoggedIn ? (
        <div className="flex items-center px-4">
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
            <div className="text-base font-medium text-gray-800">User Name</div>
            <div className="text-sm font-medium text-gray-500">
              user@example.com
            </div>
          </div>
          <Button onClick={onLogout} variant="outline" className="ml-auto">
            Sign out
          </Button>
        </div>
      ) : (
        <div className="mt-3 space-y-1">
          <Button
            onClick={onShowAuthModal}
            variant="outline"
            className="w-full justify-center"
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
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-2xl font-bold text-primary">
                  AAMU ISA
                </span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <NavItems pathname={pathname} />
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            {isLoggedIn ? (
              <div className="ml-3 relative">
                <button
                  type="button"
                  className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  id="user-menu"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => setShowUserMenu(!showUserMenu)}
                >
                  <span className="sr-only">Open user menu</span>
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
              <>
                <Button
                  onClick={() => setShowAuthModal(true)}
                  variant="outline"
                  className="mr-2"
                >
                  Login
                </Button>
                <Button onClick={() => setShowAuthModal(true)}>Sign up</Button>
              </>
            )}
          </div>
          <div className="flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              {showMobileMenu ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
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
