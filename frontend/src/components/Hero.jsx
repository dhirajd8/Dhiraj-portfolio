import React from "react";
import { Download, Mail, Phone, Sparkles, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const USER_PHOTO =
    "https://customer-assets.emergentagent.com/job_d5d9d62d-a8cb-402b-871a-858009070525/artifacts/l73o5rga_dhiraj%20photo%20%284%29.png";

const experiences = [
    {
        role: "Digital Marketing Executive",
        company: "OSG Oriana India Pvt Ltd",
        period: "Jan 2026 — Present",
        location: "Pune, Maharashtra · On-site",
        type: "Full-time",
        active: true,
        points: [
            "Executing SEO strategy to improve organic search visibility.",
            "Managing content calendar, creatives & social strategy.",
        ],
    },
    {
        role: "Digital Marketing Associate",
        company: "Pooinfotech Digital Solutions",
        period: "Sep 2025 — Dec 2025",
        location: "Pune, Maharashtra · Hybrid",
        type: "Full-time",
        points: [
            "Managed Meta Ads campaigns with structured planning & tracking.",
            "Achieved 847.9% ROAS for a health industry client.",
        ],
    },
    {
        role: "Digital Marketing Intern",
        company: "POOINFOTECH",
        period: "Mar 2025 — Aug 2025",
        location: "Pune, Maharashtra · Remote",
        type: "Internship",
        points: [
            "Hands-on with Meta Ads, organic content & analytics.",
            "Built foundation in lead-gen funnels and ad creative testing.",
        ],
    },
];

const Hero = () => {
    const handleResume = () => {
        toast.info(
            "Resume will be available shortly — Dhiraj is updating the latest version.",
        );
    };

    return (
        <section
            id="hero"
            data-testid="hero-section"
            className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
        >
            {/* Aurora background */}
            <div
                className="aurora bg-cyan-500 -top-32 -left-20 w-[480px] h-[480px]"
                aria-hidden="true"
            />
            <div
                className="aurora bg-blue-600 top-40 right-0 w-[420px] h-[420px]"
                aria-hidden="true"
            />
            <div
                className="aurora bg-amber-500 bottom-0 left-1/3 w-[300px] h-[300px] opacity-20"
                aria-hidden="true"
            />

            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                {/* Mini eyebrow */}
                <div
                    data-testid="hero-eyebrow"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
                    </span>
                    <span className="text-xs uppercase tracking-[0.25em] font-semibold text-cyan-300">
                        Available for opportunities
                    </span>
                </div>

                {/* Bento grid: Hire Me + Experience */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                    {/* HIRE ME CARD */}
                    <div
                        data-testid="hire-me-card"
                        className="lg:col-span-5 relative rounded-3xl glass p-8 md:p-10 overflow-hidden group"
                        style={{ animation: "fade-up 0.9s ease-out 0.1s both" }}
                    >
                        {/* Decorative ring */}
                        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full border border-cyan-400/10 animate-spin-slow" />
                        <div className="absolute -bottom-32 -left-16 w-64 h-64 rounded-full border border-amber-400/10" />

                        <div className="relative">
                            <span className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-400">
                                Hire Me
                            </span>

                            <div className="mt-6 flex items-start gap-5">
                                <div className="relative shrink-0">
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 blur-md opacity-60 animate-glow" />
                                    <img
                                        src={USER_PHOTO}
                                        alt="Dhiraj Dayanand"
                                        data-testid="profile-photo"
                                        className="relative w-28 h-28 md:w-32 md:h-32 rounded-2xl object-cover border-2 border-white/10"
                                    />
                                </div>
                                <div className="pt-1">
                                    <h1
                                        data-testid="hero-name"
                                        className="text-3xl md:text-4xl font-black tracking-tight text-white leading-tight"
                                    >
                                        Dhiraj
                                        <br />
                                        Dayanand
                                    </h1>
                                    <p className="mt-2 text-sm font-semibold text-cyan-300">
                                        Digital Marketing Executive
                                    </p>
                                </div>
                            </div>

                            <p className="mt-6 text-slate-300 text-[15px] leading-relaxed">
                                Performance-driven marketer crafting data-led
                                Meta Ads campaigns and bold creative systems
                                that turn impressions into outcomes.
                            </p>

                            {/* Contact pills */}
                            <div className="mt-6 space-y-3">
                                <a
                                    data-testid="hero-email-link"
                                    href="mailto:dhirajdayanand8@gmail.com"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-400/40 transition-all group/item"
                                >
                                    <span className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                                        <Mail size={16} />
                                    </span>
                                    <span className="text-sm font-medium text-slate-200 truncate">
                                        dhirajdayanand8@gmail.com
                                    </span>
                                    <ArrowUpRight
                                        size={14}
                                        className="ml-auto text-slate-500 group-hover/item:text-cyan-400 group-hover/item:rotate-45 transition-all"
                                    />
                                </a>
                                <a
                                    data-testid="hero-phone-link"
                                    href="tel:+917219332803"
                                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-cyan-400/40 transition-all group/item"
                                >
                                    <span className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                                        <Phone size={16} />
                                    </span>
                                    <span className="text-sm font-medium text-slate-200">
                                        +91 72193 32803
                                    </span>
                                    <ArrowUpRight
                                        size={14}
                                        className="ml-auto text-slate-500 group-hover/item:text-amber-400 group-hover/item:rotate-45 transition-all"
                                    />
                                </a>
                            </div>

                            {/* CTAs */}
                            <div className="mt-7 flex flex-col sm:flex-row gap-3">
                                <a
                                    data-testid="hire-me-btn"
                                    href="mailto:dhirajdayanand8@gmail.com?subject=Let%27s%20Work%20Together"
                                    className="flex-1 inline-flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#040814] font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_40px_rgba(6,182,212,0.7)] hover:-translate-y-0.5"
                                >
                                    <Sparkles size={16} />
                                    Hire Me
                                </a>
                                <button
                                    data-testid="resume-download-btn"
                                    onClick={handleResume}
                                    className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-white/15 hover:border-white/40 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Download size={16} />
                                    Resume
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* EXPERIENCE CARD */}
                    <div
                        data-testid="experience-card"
                        className="lg:col-span-7 relative rounded-3xl glass p-8 md:p-10 overflow-hidden"
                        style={{ animation: "fade-up 0.9s ease-out 0.25s both" }}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs uppercase tracking-[0.3em] font-bold text-amber-400">
                                Experience
                            </span>
                            <span className="text-xs font-semibold text-slate-400">
                                1.5+ Years
                            </span>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                            A focused journey through{" "}
                            <span className="text-gradient">
                                performance marketing
                            </span>
                            .
                        </h2>

                        {/* Timeline */}
                        <div className="mt-8 relative">
                            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-400/60 via-blue-500/30 to-transparent" />
                            <ul className="space-y-7">
                                {experiences.map((exp, i) => (
                                    <li
                                        key={i}
                                        data-testid={`exp-item-${i}`}
                                        className="relative pl-12"
                                    >
                                        <span
                                            className={`absolute left-[10px] top-1 w-3 h-3 rounded-full ring-4 ${
                                                exp.active
                                                    ? "bg-cyan-400 ring-cyan-400/20 shadow-[0_0_15px_#06b6d4]"
                                                    : "bg-slate-500 ring-slate-500/20"
                                            }`}
                                        />
                                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                                            <h3 className="text-base md:text-lg font-bold text-white">
                                                {exp.role}
                                            </h3>
                                            <span className="text-xs font-semibold text-slate-400">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <p className="text-sm font-medium text-cyan-300/90 mt-0.5">
                                            {exp.company}{" "}
                                            <span className="text-slate-500 font-normal">
                                                · {exp.type}
                                            </span>
                                        </p>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            {exp.location}
                                        </p>
                                        <ul className="mt-3 space-y-1.5">
                                            {exp.points.map((p, idx) => (
                                                <li
                                                    key={idx}
                                                    className="text-sm text-slate-300 flex gap-2"
                                                >
                                                    <span className="text-cyan-400 mt-1">
                                                        ▹
                                                    </span>
                                                    <span>{p}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
