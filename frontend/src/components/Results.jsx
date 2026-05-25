import React from "react";
import useReveal from "../hooks/useReveal";
import {
    TrendingUp,
    Target,
    Zap,
} from "lucide-react";

const META_SHOT_1 =
    "https://customer-assets.emergentagent.com/job_d5d9d62d-a8cb-402b-871a-858009070525/artifacts/n72lfn0m_image.png";
const META_SHOT_2 =
    "https://customer-assets.emergentagent.com/job_d5d9d62d-a8cb-402b-871a-858009070525/artifacts/m6nc060o_image.png";

const highlights = [
    { icon: TrendingUp, value: "847.9%", label: "Peak ROAS" },
    { icon: Target, value: "₹0.69", label: "Lowest CPC" },
    { icon: Zap, value: "3.63%", label: "Best CTR" },
];

const Results = () => {
    const ref = useReveal();
    return (
        <section
            id="results"
            data-testid="results-section"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div className="aurora bg-amber-600 -top-20 right-1/4 w-[380px] h-[380px] opacity-20" />
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <div ref={ref} className="reveal max-w-3xl mb-14">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-amber-400">
                        Meta Ads · Real Numbers
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
                        Performance you can{" "}
                        <span className="text-gold">measure</span>.
                    </h2>
                    <p className="mt-4 text-slate-400 text-lg">
                        A snapshot from Meta Ads Manager. Campaigns executed
                        across wellness, insurance, fitness and construction
                        verticals.
                    </p>
                </div>

                {/* Highlight stats */}
                <div className="grid grid-cols-3 gap-3 md:gap-5 mb-12">
                    {highlights.map((h, i) => (
                        <div
                            key={h.label}
                            data-testid={`result-stat-${i}`}
                            className="rounded-2xl bg-gradient-to-br from-amber-500/10 via-transparent to-cyan-500/10 border border-white/10 p-5 hover:border-amber-400/40 transition-all"
                        >
                            <h.icon size={18} className="text-amber-400 mb-2" />
                            <div className="text-2xl md:text-3xl font-black text-white">
                                {h.value}
                            </div>
                            <div className="text-xs uppercase tracking-wider text-slate-400 font-semibold mt-1">
                                {h.label}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Side-by-side screenshots */}
                <div className="grid md:grid-cols-2 gap-5 md:gap-6">
                    {[META_SHOT_1, META_SHOT_2].map((src, i) => (
                        <div
                            key={i}
                            data-testid={`meta-ad-screenshot-${i}`}
                            className="relative group rounded-2xl glass p-3 md:p-4 overflow-hidden hover:border-cyan-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between px-2 pb-3">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500">
                                    Meta Ads Manager Real Snapshots
                                </span>
                            </div>
                            <div className="rounded-xl overflow-hidden border border-white/5 bg-white/5">
                                <img
                                    src={src}
                                    alt={`Meta ads campaign result ${i + 1}`}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -inset-px rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-cyan-400/0 via-amber-400/10 to-cyan-400/0" />
                        </div>
                    ))}
                </div>

                <p className="text-center mt-8 text-xs text-slate-500 uppercase tracking-[0.25em] font-semibold">
                    Real campaign data · Names retained as in Ads Manager
                </p>
            </div>
        </section>
    );
};

export default Results;
