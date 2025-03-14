import Link from "next/link";
import React from "react";
import { IoBugOutline } from "react-icons/io5";

const NavBar = () => {
  const Links = [
    { href: "/", label: "Dashboard" },
    { href: "/", label: "Issues" },
  ];
  return (
    <div className="flex items-center space-x-8 h-12 border-b px-6">
      <Link href="/">
        <IoBugOutline size={32} />
      </Link>
      <ul className="flex items-center space-x-8">
        {Links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link href={href} className="text-zinc-900 hover:text-zinc-500 transition-colors">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
