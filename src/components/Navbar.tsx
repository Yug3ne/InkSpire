"use client";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center h-12 py-5 sticky top-0 left-0 bg-black z-10">
        {/* left side with the icon */}
        <Link href={"/"} className="w-[40px] h-[40px] flex items-center gap-4 ">
          <Image
            src="/icons/logo.svg"
            alt="logo"
            className=""
            width={40}
            height={40}
          />
          <span className=" font-bold text-2xl">InkSpire</span>
        </Link>
        {/* right side with the menu bar and titles */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/explore">Explore</Link>
          {/*<Link href="/community">Community</Link>*/}
          <Link href="/profile">Profile</Link>
        </div>

        {/* small screen menu bar */}
        {menuOpen ? (
          <X
            size={30}
            onClick={() => setMenuOpen(false)}
            className="block md:hidden z-10"
          />
        ) : (
          <MenuIcon
            size={30}
            onClick={() => setMenuOpen(true)}
            className="block md:hidden z-10"
          />
        )}

        {menuOpen && (
          <div className="flex flex-col top-12 justify-center items-center gap-8 text-4xl absolute bg-black w-full h-screen md:hidden">
            <Link href="/" onClick={() => setMenuOpen(false)} >Home</Link>
            <Link href="/explore" onClick={() => setMenuOpen(false)} >Explore</Link>
            {/*<Link href="/community" onClick={() => setMenuOpen(false)}>Community</Link>*/}
            <Link href="/profile" onClick={() => setMenuOpen(false)}>Profile</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
