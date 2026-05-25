import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Results from "../components/Results";
import Connect from "../components/Connect";
import ThankYou from "../components/ThankYou";

const PortfolioPage = () => {
    return (
        <main data-testid="portfolio-page" className="relative min-h-screen bg-[#040814] text-white">
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Results />
            <Connect />
            <ThankYou />
        </main>
    );
};

export default PortfolioPage;
