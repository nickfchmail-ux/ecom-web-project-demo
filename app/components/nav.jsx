"use client"; // Add this if you need client-side features like event handlers; skip for server component
import "@/app/scss/main.scss";
import Link from "next/link"; // For Next.js routing

export default function Nav({ activePage = "home" }) {
  const navItems = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Products" },
  ];

  return (
    <nav className="nav">
      {navItems.map((item) => (
        <a key={item.label} href={item.href} className="nav__item">
          {item.label}
        </a>
      ))}

      <div className="search-area">
        <input id="search" type="text" placeholder="Search for something..." />
        <button className="btn__search">
          <img src="search.svg" alt="Logo" />
        </button>
      </div>
    </nav>
  );
}
