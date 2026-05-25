import React from "react";
import { FaInstagram, FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import useReveal from "../hooks/useReveal";
import { ArrowUpRight, Mail, Phone } from "lucide-react";

const socials = [
    {
        name: "Instagram",
        handle: "@dhiraj.dayanand",
        url: "https://www.instagram.com/dhiraj.dayanand/",
        Icon: FaInstagram,
        bg: "bg-gradient-to-br from-[#feda75] via-[#fa7e1e] via-[#d62976] via-[#962fbf] to-[#4f5bd5]",
        ring: "hover:shadow-[0_0_30px_rgba(214,41,118,0.5)]",
    },
    {
        name: "LinkedIn",
        handle: "in/dhirajdayanand",
        url: "https://www.linkedin.com/in/dhirajdayanand/",
        Icon: FaLinkedinIn,
        bg: "bg-[#0A66C2]",
        ring: "hover:shadow-[0_0_30px_rgba(10,102,194,0.6)]",
    },
    {
        name: "Facebook",
        handle: "Dhiraj Dayanand",
        url: "https://www.facebook.com/profile.php?id=61576040181777",
        Icon: FaFacebookF,
        bg: "bg-[#1877F2]",
        ring: "hover:shadow-[0_0_30px_rgba(24,119,242,0.6)]",
    },
    {
        name: "X (Twitter)",
        handle: "@DhirajMuthal4",
        url: "https://x.com/DhirajMuthal4",
        Icon: FaXTwitter,
        bg: "bg-black border border-white/20",
        ring: "hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]",
    },
];

const Connect = () => {
    const ref = useReveal();
    return (
        <section
            id="connect"
            data-testid="connect-section"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div className="aurora bg-cyan-500 -bottom-32 left-1/4 w-[500px] h-[500px] opacity-25" />
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <div ref={ref} className="reveal text-center max-w-3xl mx-auto mb-14">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-400">
                        Connect With Me
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
                        Let's build something{" "}
                        <span className="text-gradient">remarkable</span>.
                    </h2>
                    <p className="mt-5 text-slate-400 text-lg">
                        Reach me on any of these platforms — or drop a direct
                        line. I respond fast.
                    </p>
                </div>

                {/* Direct contacts */}
                <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-12">
                    <a
                        data-testid="connect-email"
                        href="mailto:dhirajdayanand8@gmail.com"
                        className="group flex items-center gap-4 px-6 py-5 rounded-2xl glass hover:border-cyan-400/40 transition-all"
                    >
                        <span className="w-12 h-12 rounded-xl bg-cyan-500/15 text-cyan-400 flex items-center justify-center shrink-0">
                            <Mail size={20} />
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-500">
                                Email
                            </div>
                            <div className="text-white font-semibold truncate">
                                dhirajdayanand8@gmail.com
                            </div>
                        </div>
                        <ArrowUpRight
                            size={18}
                            className="text-slate-500 group-hover:text-cyan-400 group-hover:rotate-45 transition-all"
                        />
                    </a>
                    <a
                        data-testid="connect-phone"
                        href="tel:+917219332803"
                        className="group flex items-center gap-4 px-6 py-5 rounded-2xl glass hover:border-amber-400/40 transition-all"
                    >
                        <span className="w-12 h-12 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0">
                            <Phone size={20} />
                        </span>
                        <div className="min-w-0 flex-1">
                            <div className="text-[10px] uppercase tracking-[0.25em] font-bold text-slate-500">
                                Phone · WhatsApp
                            </div>
                            <div className="text-white font-semibold">
                                +91 72193 32803
                            </div>
                        </div>
                        <ArrowUpRight
                            size={18}
                            className="text-slate-500 group-hover:text-amber-400 group-hover:rotate-45 transition-all"
                        />
                    </a>
                </div>

                {/* Social cards */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                    {socials.map((s, i) => (
                        <a
                            key={s.name}
                            data-testid={`social-${s.name.toLowerCase().replace(/[^a-z]/g, "")}`}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative rounded-2xl glass p-6 hover:border-white/30 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden ${s.ring}`}
                            style={{
                                animation: `fade-up 0.6s ease-out ${i * 0.1}s both`,
                            }}
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                            >
                                <s.Icon size={22} />
                            </div>
                            <div className="mt-5">
                                <div className="text-white font-bold text-lg">
                                    {s.name}
                                </div>
                                <div className="text-sm text-slate-400 truncate">
                                    {s.handle}
                                </div>
                            </div>
                            <ArrowUpRight
                                size={18}
                                className="absolute top-5 right-5 text-slate-500 group-hover:text-white group-hover:rotate-45 transition-all"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Connect;
