import Profile from "@/components/Profile/Profile";
import Link from "next/link";
import { Button } from "../ui/button";
import MobileNavbar from "./MobileNavar";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Dahsboard", link: "/dashboard" },
];

const isLogin = true;

const Navbar = () => {
  return (
    <nav className="z-50 bg-opacity-30 backdrop-blur-lg sticky top-0 p-4 border-b dark:bg-gray-900/50">
      <div className="container mx-auto flex items-center justify-between lg:px-8">
        {/* Logo */}
        <MobileNavbar navItems={navItems} />
        <Link href="/" className="font-bold text-2xl cursor-pointer">
          Sms service
        </Link>

        {/* Desktop Nav Items */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link href={item.link} className="hover:underline truncate font-semibold">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        {/* login || profile || MobileNav */}
        <div className="flex items-center space-x-4">
          {isLogin ? (
            <Profile />
          ) : (
            <Link href="/login">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
