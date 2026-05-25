import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "portfolio", label: "Portfolio" },
    { id: "results", label: "Results" },
    { id: "connect", label: "Connect" },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const goto = (id) => {
        setOpen(false);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header
            data-testid="navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#040814]/80 border-b border-white/5"
                    : "bg-transparent"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
                <button
                    data-testid="logo-btn"
                    onClick={() => goto("hero")}
                    className="flex items-center gap-2 group"
                >
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-black text-[#040814] text-lg group-hover:scale-110 transition-transform">
                        D
                    </span>
                    <span className="font-bold text-white tracking-tight hidden sm:block">
                        Dhiraj<span className="text-cyan-400">.</span>
                    </span>
                </button>

                <ul className="hidden md:flex items-center gap-1">
                    {links.map((l) => (
                        <li key={l.id}>
                            <button
                                data-testid={`nav-${l.id}`}
                                onClick={() => goto(l.id)}
                                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
                            >
                                {l.label}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-cyan-400 group-hover:w-5 transition-all duration-300" />
                            </button>
                        </li>
                    ))}
                </ul>

                <button
                    data-testid="cta-hire-nav"
                    onClick={() => goto("connect")}
                    className="hidden md:inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#040814] font-bold text-sm py-2.5 px-5 rounded-full transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)] hover:-translate-y-0.5"
                >
                    Let's Talk
                </button>

                <button
                    data-testid="mobile-menu-btn"
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-white p-2"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {open && (
                <div
                    data-testid="mobile-menu"
                    className="md:hidden border-t border-white/5 bg-[#040814]/95 backdrop-blur-xl"
                >
                    <ul className="px-6 py-4 space-y-1">
                        {links.map((l) => (
                            <li key={l.id}>
                                <button
                                    data-testid={`mobile-nav-${l.id}`}
                                    onClick={() => goto(l.id)}
                                    className="w-full text-left px-3 py-3 text-slate-200 hover:bg-white/5 rounded-lg font-medium"
                                >
                                    {l.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
