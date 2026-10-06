"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "../content";

const navigation = [{ label: "Home", href: "/#top" }, { label: "Projects", href: "/projects" }, { label: "Experience", href: "/#experience" }, { label: "About", href: "/#about" }, { label: "Contact", href: "/#contact" }];

export default function SiteShell({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [menu, setMenu] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const saved = localStorage.getItem("portfolio-theme");
      setDark(saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  function toggleTheme() {
    setDark(!dark);
    localStorage.setItem("portfolio-theme", dark ? "light" : "dark");
  }
  return <div className="portfolio" data-theme={dark ? "dark" : "light"}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header shell"><Link className="wordmark" href="/" aria-label={`${profile.name}, home`}>SM<span>.</span></Link><nav className={menu ? "navigation open" : "navigation"} aria-label="Main navigation">{navigation.map((item) => <Link key={item.href} href={item.href} onClick={() => setMenu(false)} aria-current={item.href === "/projects" && pathname.startsWith("/projects") ? "page" : undefined}>{item.label}</Link>)}</nav><div className="header-actions"><button className="icon-button" onClick={toggleTheme} aria-label={`Switch to ${dark ? "light" : "dark"} theme`}>{dark ? "☀" : "☾"}</button><button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu}>Menu {menu ? "−" : "+"}</button></div></header>
    {children}
    <footer className="site-footer shell"><p>© {new Date().getFullYear()} {profile.name}</p><span>Built with curiosity & Next.js</span><Link href="/#top">Back to top ↑</Link></footer>
  </div>;
}
