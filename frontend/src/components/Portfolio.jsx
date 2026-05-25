import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "../components/ui/dialog";
import useReveal from "../hooks/useReveal";
import { Expand } from "lucide-react";

const AD_CREATIVES_REAL = [
    {
        title: "Shravani Multiservices",
        tag: "Service Ad",
        img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/vx45ievl_WhatsApp%20Image%202025-07-17%20at%2012.11.23%20PM%20%281%29.jpeg",
    },
    {
        title: "Renuka Constructions & Suppliers",
        tag: "Construction",
        img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/4s4qa8t2_Renuka%20Construction.jpg",
    },
    {
        title: "Pikvima Crop Insurance",
        tag: "Agriculture",
        img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/o09agalw_20250716_200430%20%281%29%20%282%29.jpg",
    },
    {
        title: "Shravani Service Promo",
        tag: "Service Ad",
        img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/ifm2m6jf_20250627_215001%20%282%29.jpg",
    },
];

const categories = {
    ads: {
        label: "Ad Creatives",
        desc: "Performance driven creatives engineered for clicks, leads & ROAS.",
        items: AD_CREATIVES_REAL,
    },
    festival: {
        label: "Festival Posts",
        desc: "Brand celebratory visuals for festive moments across India.",
        items: [
            {
                title: "Happy Ram Navami",
                tag: "Festival",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/qzzquuyp_HAPPY%20RAM%20NAVAMI%20%281%29.jpg",
            },
            {
                title: "Happy Mother's Day",
                tag: "Festival",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/s9w8sn1k_WhatsApp%20Image%202026-05-10%20at%2011.21.33%20AM%20%281%29.jpeg",
            },
            {
                title: "Happy Gudi Padwa",
                tag: "Festival",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/t5fhcvr7_WhatsApp%20Image%202026-03-19%20at%209.41.46%20AM%20%281%29.jpeg",
            },
            {
                title: "World Earth Day",
                tag: "Festival",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/athrksnp_WORLD%20EARTH%20DAY%20%281%29%20%281%29.png",
            },
        ],
    },
    carousel: {
        label: "LinkedIn Carousels",
        desc: "Editorial style carousel: India Solar Policy Updates 2026 (5 slide series).",
        items: [
            {
                title: "Slide 1 · Cover",
                tag: "Carousel",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/2n40e1hf_TOD%20Carousel%20%282%29%20%281%29.png",
            },
            {
                title: "Slide 2 · Subsidies & Banking",
                tag: "Carousel",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/xjh8hw9h_TOD%20Carousel%20%283%29%20%281%29.png",
            },
            {
                title: "Slide 3 · TOD Tariff",
                tag: "Carousel",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/3ofk2dj9_TOD%20Carousel%20%284%29%20%281%29.png",
            },
            {
                title: "Slide 4 · Grid Charges",
                tag: "Carousel",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/0jbzddn8_TOD%20Carousel%20%285%29%20%281%29.png",
            },
            {
                title: "Slide 5 · CTA",
                tag: "Carousel",
                img: "https://customer-assets.emergentagent.com/job_dhiraj-designer/artifacts/qoml9sk4_TOD%20Carousel%20%286%29.png",
            },
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
                <div className="aspect-square overflow-hidden bg-[#040814] flex items-center justify-center p-2">
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-contain"
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
            <DialogTitle className="sr-only">{item.title}</DialogTitle>
            <DialogDescription className="sr-only">{item.tag} preview</DialogDescription>
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
                        LinkedIn carousels, built for scroll stopping impact.
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
            </div>
        </section>
    );
};

export default Portfolio;
