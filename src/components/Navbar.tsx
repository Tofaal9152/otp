import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Profile from "@/components/Profile/Profile";
import Link from "next/link";
import { Button } from "./ui/button";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
];

const isLogin = true; // Replace with actual authentication logic

const Navbar = () => {
  return (
    <nav className="z-50 bg-opacity-30 backdrop-blur-lg sticky top-0 p-4 border-b dark:bg-gray-900/50">
      <div className="container mx-auto flex items-center justify-between lg:px-8">
        {/* Logo */}
        <Link href="/" className="font-bold text-2xl cursor-pointer">
          BlogApp
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="hover:underline">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* User Session */}
        <div>
          {isLogin ? (
            <Profile />
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>

        {/* Mobile Nav Trigger */}
        <div className="md:hidden block">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger aria-label="Open menu">
        <svg
          className="w-6 h-6 text-black dark:invert"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent side="top" className="bg-white dark:bg-gray-800">
        {/* Header & Profile Section */}
        <div className="flex flex-col items-center space-y-4 py-4">
          <Profile />
          <SheetHeader className="text-center">
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription className="text-gray-500 dark:text-gray-400">
              Explore the site
            </SheetDescription>
          </SheetHeader>
        </div>

        {/* Nav Items */}
        <ul className="space-y-4 mt-4 p-4">
          {navItems.map((item, index) => (
            <li key={index}>
              <SheetTrigger asChild>
                <Link
                  href={item.link}
                  className="flex items-center space-x-2 cursor-pointer hover:underline"
                >
                  {item.name}
                </Link>
              </SheetTrigger>
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
