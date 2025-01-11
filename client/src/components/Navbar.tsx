"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "./Container";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Menu, X } from "lucide-react";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();
  const [userFirstName, setUserFirstName] = useState("");
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const { userName } = JSON.parse(userData);
      setUserFirstName(userName);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserFirstName("");
    router.push("/login");
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary-foreground">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="ml-7 text-lg font-bold italic lg:text-2xl"
            >
              The Halftimers
            </Link>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <Link href="/blog" className="text-sm hover:text-primary">
              Blog
            </Link>
            <Link href="/the-host" className="text-sm hover:text-primary">
              The Host
            </Link>

            {isAuthenticated ? (
              <Popover>
                <PopoverTrigger>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
                    {userFirstName.charAt(0)}{" "}
                  </span>
                </PopoverTrigger>

                <PopoverContent
                  align="end"
                  sideOffset={8}
                  className="w-44 rounded-md border p-2 shadow-lg"
                >
                  <PopoverClose
                    onClick={handleLogout}
                    className="w-full p-2 text-left text-sm text-destructive hover:bg-gray-100"
                  >
                    Logout
                  </PopoverClose>
                </PopoverContent>
              </Popover>
            ) : (
              <button
                onClick={handleLogin}
                className="flex w-fit items-center border border-foreground px-7 py-2 text-sm"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex gap-5 md:hidden">
            {isAuthenticated && (
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-white">
                {userFirstName.charAt(0)}{" "}
              </span>
            )}
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <Menu />
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`fixed right-0 top-0 z-10 h-full w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <button
            onClick={toggleMobileMenu}
            className="absolute right-4 top-4 text-gray-600 hover:text-gray-900"
          >
            <X />
          </button>

          <div className="mt-8 flex flex-col space-y-6">
            <Link
              href="/blog"
              className="text-gray-800 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              Blog
            </Link>
            <Link
              href="/the-host"
              className="text-gray-800 hover:text-primary"
              onClick={toggleMobileMenu}
            >
              The Host
            </Link>

            {isAuthenticated ? (
              <button
                className="text-left text-destructive"
                onClick={() => {
                  handleLogout();
                  toggleMobileMenu();
                }}
              >
                Log out
              </button>
            ) : (
              <button
                onClick={() => {
                  handleLogin();
                  toggleMobileMenu();
                }}
                className="flex w-fit items-center border border-foreground px-7 py-2 text-sm"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={toggleMobileMenu}
        ></div>
      )}
    </nav>
  );
};

export default Navbar;
