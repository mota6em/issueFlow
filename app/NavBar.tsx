"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoBugOutline } from "react-icons/io5";
import classNames from "classnames";
import { useSession } from "next-auth/react";

const NavBar = () => {
  return (
    <>
      <div className="navbar md:hidden fixed top-0 left-0 w-full z-50 bg-base-200/30 backdrop-blur   flex justify-between h-12">
        <Link href="/" className="flex items-center space-x-1">
          <IoBugOutline size={32} />{" "}
          <p className="text-2xl font-medium">Issue Flow</p>
        </Link>
        <div className="flex items-center space-x-2">
          <ModeToggle />
          <MobileDropdown />
        </div>
      </div>
      <div className="hidden md:flex fixed z-50 top-0 left-0 right-0 w-full bg-base-200/30 backdrop-blur   items-center justify-between space-x-8 h-12 border-b px-10 pe-5 overflow-x-hidden">
        <NavBarLinks />
        <ModeToggle />
      </div>
    </>
  );
};

export default NavBar;

const ModeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <button className="flex items-center">
      <label className="flex cursor-pointer gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>{" "}
        <input
          type="checkbox"
          value="synthwave"
          className="toggle theme-controller"
          onChange={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      </label>
    </button>
  );
};

const NavBarLinks = () => {
  const Links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];
  const currentPath = usePathname();

  return (
    <div className="flex items-center space-x-10">
      <Link href="/">
        <IoBugOutline size={32} />
      </Link>
      <ul className="flex items-center space-x-8">
        {Links.map(({ href, label }) => (
          <li key={`${href}${label}`}>
            <Link
              href={href}
              className={classNames({
                "opacity-70": currentPath === href,
                "opacity-100": currentPath !== href,
              })}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
const MobileDropdown = () => {
  const { status, data: session } = useSession();
  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  const currentPath = usePathname();

  if (status === "loading") {
    return <div className="skeleton h-5 w-10 p-0"></div>;
  }

  if (status === "unauthenticated") {
    return (
      <div className="flex items-center space-x-2">
        <Link
          href="/api/auth/signin"
          className="btn btn-sm btn-outline  text-base-content"
        >
          Login
        </Link>

        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-40"
          >
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={classNames({
                    "opacity-70": currentPath === href,
                    "opacity-100": currentPath !== href,
                  })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  // Authenticated
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="w-10 rounded-full">
          <img
            alt="User avatar"
            src={
              session?.user?.image ||
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-50 border border-base-content/10 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-lg font-medium border-b border-base-content/10"
            >
              {label}{" "}
            </Link>
          </li>
        ))}
        <li>
          <Link href="/api/auth/signout" className="text-lg font-medium">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};
