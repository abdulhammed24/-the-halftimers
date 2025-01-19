"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/rtk-query/store";
import { logout } from "@/rtk-query/features/authSlice";
import { useToast } from "@/hooks/use-toast";
import { useLogoutMutation } from "@/rtk-query/features/authApi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const [logoutApi] = useLogoutMutation();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state: RootState) => state.auth);
  const userFirstName = userInfo?.name?.split(" ")[0] || "User";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    router.push("/login");
  };

  const handleLogout = async () => {
    try {
      await logoutApi();
      dispatch(logout());

      toast({
        title: "Logout successful!",
        description: "Kindly, Login back",
        duration: 1500,
      });
    } catch (error) {
      const err = error as { data?: { message?: string } };

      toast({
        title: "Logout failed",
        description: err.data?.message || " Please try again.",
        duration: 1500,
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-primary-foreground">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <div className="flex-shrink-0">
            <div className="relative before:absolute before:left-0 before:top-1/2 before:h-1 before:w-5 before:-translate-y-1/2 before:bg-foreground before:content-['']">
              <Link
                href="/"
                className="ml-7 text-lg font-bold italic lg:text-2xl"
              >
                The Halftimers
              </Link>
            </div>
          </div>

          <div className="hidden items-center space-x-8 md:flex">
            <Link href="/blog" className="text-sm hover:text-primary">
              Blog
            </Link>
            <Link href="/the-host" className="text-sm hover:text-primary">
              The Host
            </Link>

            {userInfo ? (
              <Popover>
                <PopoverTrigger>
                  <span className="flex size-8 min-w-[2rem] items-center justify-center rounded-full bg-primary font-semibold text-white">
                    {userFirstName.charAt(0)}
                  </span>
                </PopoverTrigger>

                <PopoverContent
                  align="end"
                  sideOffset={8}
                  className="w-44 rounded-md border p-2 shadow-lg"
                >
                  <div className="p-2">
                    <span className="line-clamp-1 text-xs">
                      {userFirstName}
                    </span>
                  </div>

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
            {userInfo && (
              <span className="flex size-8 min-w-[2rem] items-center justify-center rounded-full bg-primary font-semibold text-white">
                {userFirstName.charAt(0)}
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
            {userInfo && (
              <div className="flex items-center gap-2 text-xs">
                <span className="flex size-8 min-w-[2rem] items-center justify-center rounded-full bg-primary font-semibold text-white">
                  {userFirstName.charAt(0)}
                </span>
                <span>{userFirstName}</span>
              </div>
            )}
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

            {userInfo ? (
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
