import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center h-12 mt-3">
      {/* left side with the icon */}
      <Link href={"/"} className="w-[40px] h-[40px] flex items-center gap-4 ">
        <Image src="/icons/logo.svg" alt="logo" className="" width={40} height={40}/>
        <span className=" font-bold text-2xl">InkSpire</span>
      </Link>
      {/* right side with the menu bar and titles */}
      <div className="hidden sm:flex items-center gap-8">
        <Link href="/explore">Explore</Link>
        <Link href="/community">Community</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
};

export default Navbar;
