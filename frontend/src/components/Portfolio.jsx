import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";
import useReveal from "../hooks/useReveal";
import { Layers, ImageIcon, Expand } from "lucide-react";

const AD_CREATIVE =
    "https://static.prod-images.emergentagent.com/jobs/d5d9d62d-a8cb-402b-871a-858009070525/images/a5ffab54b7db00260374b3f75dd21c988b80aa1502790d03a8d79d7f1a246091.png";
const FESTIVAL =
    "https://static.prod-images.emergentagent.com/jobs/d5d9d62d-a8cb-402b-871a-858009070525/images/515ca4f4da164c11bae299b3b570bc9067a3d9b91fb4201259e3bad3d59f0887.png";
const CAROUSEL =
    "https://static.prod-images.emergentagent.com/jobs/d5d9d62d-a8cb-402b-871a-858009070525/images/a83f0f472d478b640024f7aa8f57ff0c8a9b117615bf95d4642671a1800cc1c2.png";

const categories = {
    ads: {
        label: "Ad Creatives",
        desc: "Performance-driven creatives engineered for clicks, leads & ROAS.",
        items: [
            { title: "Wellness Lead Gen Creative", tag: "Meta Ads", img: AD_CREATIVE },
            { title: "Insurance Awareness Set", tag: "Meta Ads", img: AD_CREATIVE },
            { title: "Construction Lead Magnet", tag: "Meta Ads", img: AD_CREATIVE },
            { title: "Fitness Studio Promo", tag: "Meta Ads", img: AD_CREATIVE },
        ],
    },
    festival: {
        label: "Festival Posts",
        desc: "Brand-celebratory visuals for festive moments across India.",
        items: [
            { title: "Diwali Greeting Post", tag: "Festival", img: FESTIVAL },
            { title: "Republic Day Tribute", tag: "Festival", img: FESTIVAL },
            { title: "Eid Mubarak Brand Post", tag: "Festival", img: FESTIVAL },
            { title: "Ganesh Chaturthi Wishes", tag: "Festival", img: FESTIVAL },
        ],
    },
    carousel: {
        label: "LinkedIn Carousels",
        desc: "Editorial-style carousels that build thought-leadership feeds.",
        items: [
            { title: "5 Meta Ads Mistakes", tag: "Carousel", img: CAROUSEL },
            { title: "Performance Marketing 101", tag: "Carousel", img: CAROUSEL },
            { title: "Creative Testing Framework", tag: "Carousel", img: CAROUSEL },
            { title: "Funnel Stages Explained", tag: "Carousel", img: CAROUSEL },
        ],
    },
};

const Card = ({ item, idx, catKey }) => (
    <Dialog>
        <DialogTrigger asChild>
            <button
                data-testid={`portfolio-item-${catKey}-${idx}`}
                className="group relative overflow-hidden rounded-2xl bg-[#0B1221] border border-white/10 hover:border-cyan-400/40 transition-all duration-500 text-left"
            >
                <div className="aspect-[4/5] overflow-hidden bg-slate-900">
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#040814] via-[#040814]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-cyan-400">
                            {item.tag}
                        </span>
                        <h4 className="text-white font-bold mt-1 flex items-center gap-2">
                            {item.title}
                            <Expand size={14} className="text-cyan-400" />
                        </h4>
                    </div>
                </div>
                <span className="absolute top-3 right-3 px-2 py-1 rounded-md bg-[#040814]/70 backdrop-blur text-[10px] uppercase tracking-wider font-bold text-cyan-300 border border-white/10">
                    {item.tag}
                </span>
            </button>
        </DialogTrigger>
        <DialogContent className="bg-[#0B1221] border border-white/10 max-w-3xl p-2">
            <img src={item.img} alt={item.title} className="rounded-lg w-full" />
            <div className="px-4 pt-2 pb-3">
                <p className="text-xs uppercase tracking-widest text-cyan-400 font-bold">
                    {item.tag}
                </p>
                <h4 className="text-white font-bold text-lg">{item.title}</h4>
            </div>
        </DialogContent>
    </Dialog>
);

const Portfolio = () => {
    const ref = useReveal();
    const [active, setActive] = useState("ads");

    return (
        <section
            id="portfolio"
            data-testid="portfolio-section"
            className="relative py-24 md:py-32 overflow-hidden"
        >
            <div className="aurora bg-cyan-700 top-32 right-0 w-[400px] h-[400px] opacity-20" />
            <div className="relative max-w-7xl mx-auto px-6 md:px-12">
                <div ref={ref} className="reveal text-center max-w-3xl mx-auto mb-12">
                    <span className="text-xs uppercase tracking-[0.3em] font-bold text-cyan-400">
                        Graphic Design Portfolio
                    </span>
                    <h2 className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white">
                        Creatives that{" "}
                        <span className="text-gradient">earn attention</span>.
                    </h2>
                    <p className="mt-4 text-slate-400">
                        A curated selection of ad creatives, festival posts and
                        LinkedIn carousels — built for scroll-stopping impact.
                    </p>
                </div>

                <Tabs value={active} onValueChange={setActive} className="w-full">
                    <div className="flex justify-center mb-10">
                        <TabsList
                            data-testid="portfolio-tabs"
                            className="bg-[#0B1221] border border-white/10 p-1.5 rounded-full h-auto"
                        >
                            {Object.entries(categories).map(([key, c]) => (
                                <TabsTrigger
                                    key={key}
                                    value={key}
                                    data-testid={`tab-${key}`}
                                    className="rounded-full px-5 py-2.5 text-sm font-semibold data-[state=active]:bg-cyan-500 data-[state=active]:text-[#040814] data-[state=active]:shadow-[0_0_20px_rgba(6,182,212,0.45)] text-slate-300 transition-all"
                                >
                                    {c.label}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>

                    {Object.entries(categories).map(([key, c]) => (
                        <TabsContent key={key} value={key} className="mt-0">
                            <p className="text-center text-slate-400 mb-8 max-w-2xl mx-auto">
                                {c.desc}
                            </p>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {c.items.map((it, i) => (
                                    <Card key={i} item={it} idx={i} catKey={key} />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
                    <span className="inline-flex items-center gap-2">
                        <ImageIcon size={14} className="text-cyan-400" /> 12+ Creatives
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span className="inline-flex items-center gap-2">
                        <Layers size={14} className="text-amber-400" /> 3 Categories
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
