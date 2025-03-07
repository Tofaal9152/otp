"use client";
import Profile from "@/components/Profile/Profile";
import { selectIsLogin } from "@/redux/allStateSlice";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { Button } from "../ui/button";
import { ModeToggle2 } from "../ui/ModeToggle2";
import MobileNavbar from "./MobileNavar";
import Image from "next/image";

const Navbar = () => {
  const isLogin = useAppSelector(selectIsLogin);
  console.log("====================================");
  console.log(isLogin);
  console.log("====================================");
  const navItems = [
    { name: "Home", link: "/" },
    {
      name: "Api Documentation",
      link: `${isLogin ? "/dashboard/doc/api-guide" : "/api-guide"}`,
    },
    ...(isLogin ? [{ name: "Dashboard", link: "/dashboard" }] : []),
  ];
  return (
    <nav className="z-50 bg-opacity-30 backdrop-blur-lg sticky top-0 p-4 border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700 transition-colors">
      <div className="container mx-auto flex items-center justify-between lg:px-8">
        {/* Logo */}
        <MobileNavbar navItems={navItems} />
        <Link href="/">
          <Image src="/logo.jpg" alt="logo" className="rounded-full border-2 border-sky-500" width={50} height={50} />
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="hover:underline truncate font-semibold"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* login || profile || MobileNav */}
        <div className="flex items-center space-x-4">
          <ModeToggle2 />
          {isLogin ? (
            <Profile />
          ) : (
            <Link href="/auth/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
