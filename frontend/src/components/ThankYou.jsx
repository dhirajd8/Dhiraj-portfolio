import React from "react";
import { Heart } from "lucide-react";

const ThankYou = () => {
    const scrollTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer
            data-testid="thankyou-section"
            className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden border-t border-white/5"
        >
            <div className="aurora bg-cyan-600 -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] opacity-25" />
            <div className="relative max-w-5xl mx-auto px-6 md:px-12 text-center">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                    <Heart size={14} className="text-rose-400 fill-rose-400" />
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-slate-300">
                        With Gratitude
                    </span>
                </span>

                <h2
                    data-testid="thankyou-heading"
                    className="text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] font-black tracking-tight leading-none"
                >
                    <span className="text-gradient animate-gradient-x">
                        Thank You
                    </span>
                </h2>

                <p className="mt-8 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    For taking the time to explore my portfolio. Every project
                    here is a small chapter — and I'd love to write the next one
                    with you.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    <a
                        data-testid="footer-hire-btn"
                        href="mailto:dhirajdayanand8@gmail.com?subject=Let%27s%20Work%20Together"
                        className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#040814] font-bold py-3 px-7 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)]"
                    >
                        Start a Project
                    </a>
                    <button
                        data-testid="back-to-top-btn"
                        onClick={scrollTop}
                        className="inline-flex items-center gap-2 bg-transparent border border-white/15 hover:border-white/40 text-white font-semibold py-3 px-7 rounded-full transition-all duration-300"
                    >
                        Back to Top
                    </button>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                    <span className="font-medium tracking-wider">
                        © {new Date().getFullYear()} DHIRAJ DAYANAND · ALL
                        RIGHTS RESERVED
                    </span>
                    <span className="font-medium tracking-wider uppercase">
                        Crafted with care · Pune, India
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default ThankYou;
