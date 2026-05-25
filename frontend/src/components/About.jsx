import React from "react";
import {
    TrendingUp,
    Target,
    Palette,
    BarChart3,
    Users,
    Zap,
} from "lucide-react";
import useReveal from "../hooks/useReveal";

const stats = [
    { value: "1.5+", label: "Years Experience", icon: TrendingUp },
    { value: "20+", label: "Campaigns Run", icon: Target },
    { value: "847%", label: "Peak ROAS", icon: BarChart3 },
    { value: "10+", label: "Happy Clients", icon: Users },
];

const skills = [
    "Meta Ads",
    "Google Ads",
    "SEO",
    "Content Strategy",
    "Graphic Design",
    "Canva",
    "Photoshop",
    "Analytics",
    "Lead Generation",
    "Performance Marketing",
];

const About = () => {
    const ref = useReveal();
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div className="aurora bg-blue-700 top-1/2 -translate-y-1/2 -left-32 w-[420px] h-[420px] opacity-25" />
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <div ref={ref} className="reveal grid lg:grid-cols-12 gap-12">
                    <div className="lg:col-span-5">
                        <span className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-400">
                            About Me
                        </span>
                        <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
                            Marketing that{" "}
                            <span className="text-gradient">
                                moves the needle
                            </span>
                            .
                        </h2>
                        <div className="mt-8 inline-flex items-baseline gap-3">
                            <span className="text-7xl md:text-8xl font-black text-gold leading-none">
                                1.5
                            </span>
                            <span className="text-lg font-semibold text-slate-300">
                                Years of focused digital
                                <br />
                                marketing execution.
                            </span>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-6">
                        <p className="text-lg text-slate-300 leading-relaxed">
                            I'm{" "}
                            <span className="text-white font-semibold">
                                Dhiraj Dayanand
                            </span>{" "}
                            — a Digital Marketing Executive currently driving
                            growth at{" "}
                            <span className="text-cyan-300 font-semibold">
                                OSG Oriana India
                            </span>
                            . Over the last 1.5 years, I've moved from
                            internships into full-time roles where I built and
                            scaled Meta Ads funnels, owned content calendars,
                            and shipped creatives that perform.
                        </p>
                        <p className="text-base text-slate-400 leading-relaxed">
                            My approach blends sharp performance marketing with
                            clean, brand-aware design — so the same hand that
                            tunes the campaign also crafts the creative. From
                            achieving{" "}
                            <span className="text-amber-400 font-semibold">
                                847.9% ROAS
                            </span>{" "}
                            for a health-industry client to designing festival
                            posts, ad creatives and LinkedIn carousels — I aim
                            to make every rupee and every pixel count.
                        </p>

                        {/* Skills chips */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {skills.map((s) => (
                                <span
                                    key={s}
                                    data-testid={`skill-${s.toLowerCase().replace(/\s+/g, "-")}`}
                                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-400/40 hover:text-cyan-300 transition-all"
                                >
                                    {s}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats grid */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((s, i) => (
                        <div
                            key={s.label}
                            data-testid={`stat-${i}`}
                            className="relative rounded-2xl glass p-6 md:p-7 group hover:border-cyan-400/30 transition-all hover:-translate-y-1 duration-300"
                            style={{
                                animation: `fade-up 0.7s ease-out ${0.1 * i}s both`,
                            }}
                        >
                            <s.icon
                                size={20}
                                className="text-cyan-400 mb-3 group-hover:scale-110 transition-transform"
                            />
                            <div className="text-3xl md:text-4xl font-black text-white tracking-tight">
                                {s.value}
                            </div>
                            <div className="text-xs uppercase tracking-wider font-semibold text-slate-400 mt-1">
                                {s.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
