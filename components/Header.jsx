import Link from "next/link";

const Header = () => {
  return (
<nav className="bg-[#121212] py-4 px-6 flex justify-between items-center shadow-lg border-b neon-border">
  <h1 className="text-2xl font-bold neon-text">Digital IT Agency</h1>
  <ul className="flex gap-6">
    <li className="neon-text hover:neon-hover px-4 py-2 rounded-md cursor-pointer">
      <Link href="/">Home</Link>
    </li>
    <li className="neon-text hover:neon-hover px-4 py-2 rounded-md cursor-pointer">
      <Link href="/services">Services</Link>
    </li>
    <li className="neon-text hover:neon-hover px-4 py-2 rounded-md cursor-pointer">
      <Link href="/portfolio">Portfolio</Link>
    </li>
    <li className="neon-text hover:neon-hover px-4 py-2 rounded-md cursor-pointer">
      <Link href="/contact">Contact</Link>
    </li>
  </ul>
</nav>

  );
};

export default Header;
