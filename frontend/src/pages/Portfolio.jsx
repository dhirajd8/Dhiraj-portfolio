import { useState, useEffect } from "react";

const designs = [
  { id: 1, title: "BRAND IDENTITY", category: "Branding", placeholder: "#1a1a2e" },
  { id: 2, title: "POSTER DESIGN", category: "Print", placeholder: "#16213e" },
  { id: 3, title: "SOCIAL MEDIA", category: "Digital", placeholder: "#0f3460" },
  { id: 4, title: "PACKAGING", category: "3D Design", placeholder: "#533483" },
  { id: 5, title: "TYPOGRAPHY", category: "Type Art", placeholder: "#e94560" },
  { id: 6, title: "LOGO DESIGN", category: "Branding", placeholder: "#1a1a2e" },
  { id: 7, title: "EDITORIAL", category: "Print", placeholder: "#16213e" },
  { id: 8, title: "UI DESIGN", category: "Digital", placeholder: "#0f3460" },
];

const PortfolioPage = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f5f0e8",
      fontFamily: "'Anton', sans-serif",
      overflow: "hidden",
      position: "relative",
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2px;
          background: #000;
        }

        .design-card {
          position: relative;
          aspect-ratio: 4/3;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .design-card:hover { transform: scale(1.02); z-index: 2; }

        .design-card .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0);
          transition: background 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px;
        }

        .design-card:hover .overlay { background: rgba(0,0,0,0.75); }

        .design-card .card-text {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.3s ease;
        }

        .design-card:hover .card-text { opacity: 1; transform: translateY(0); }

        .expand-btn {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 40px;
          height: 40px;
          background: #f5f0e8;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          font-size: 18px;
        }

        .design-card:hover .expand-btn { opacity: 1; }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.95);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .header-animate {
          animation: slideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }
        .header-animate:nth-child(1) { animation-delay: 0.1s; }
        .header-animate:nth-child(2) { animation-delay: 0.3s; }
        .header-animate:nth-child(3) { animation-delay: 0.5s; }

        .card-animate {
          animation: slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          opacity: 0;
        }

        .social-link {
          color: #000;
          text-decoration: none;
          font-family: 'Space Mono', monospace;
          font-size: 13px;
          letter-spacing: 1px;
          padding: 10px 20px;
          border: 1.5px solid #000;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .social-link:hover { background: #000; color: #f5f0e8; }

        .marquee-wrapper {
          overflow: hidden;
          border-top: 2px solid #000;
          border-bottom: 2px solid #000;
          background: #000;
          padding: 10px 0;
        }

        .marquee-track {
          display: flex;
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .marquee-item {
          color: #f5f0e8;
          font-family: 'Anton', sans-serif;
          font-size: 14px;
          letter-spacing: 4px;
          padding: 0 40px;
          text-transform: uppercase;
        }

        .marquee-dot { color: #e94560; padding: 0 10px; }
      `}</style>

      {/* Corner decorations */}
      <div style={{ position: "fixed", top: 20, left: 20, width: 60, height: 60, borderTop: "3px solid #000", borderLeft: "3px solid #000", zIndex: 10, pointerEvents: "none" }} />
      <div style={{ position: "fixed", top: 20, right: 20, width: 60, height: 60, borderTop: "3px solid #000", borderRight: "3px solid #000", zIndex: 10, pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: 20, left: 20, width: 60, height: 60, borderBottom: "3px solid #000", borderLeft: "3px solid #000", zIndex: 10, pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: 20, right: 20, width: 60, height: 60, borderBottom: "3px solid #000", borderRight: "3px solid #000", zIndex: 10, pointerEvents: "none" }} />

      {/* Header */}
      <header style={{ padding: "80px 60px 40px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px" }} className={loaded ? "header-animate" : ""}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "3px", color: "#666", textTransform: "uppercase" }}>GRAPHIC DESIGNER</span>
          <div style={{ width: "40px", height: "2px", background: "#000" }} />
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "3px", color: "#666", textTransform: "uppercase" }}>PUNE, INDIA</span>
        </div>

        <div className={loaded ? "header-animate" : ""} style={{ position: "relative" }}>
          <h1 style={{ fontSize: "clamp(64px, 14vw, 180px)", fontFamily: "'Anton', sans-serif", fontWeight: "900", letterSpacing: "-2px", color: "#000", textTransform: "uppercase", lineHeight: 0.9, position: "relative", zIndex: 1 }}>MY</h1>
          <h1 style={{ fontSize: "clamp(64px, 14vw, 180px)", fontFamily: "'Anton', sans-serif", fontWeight: "900", letterSpacing: "-2px", color: "transparent", WebkitTextStroke: "3px #000", textTransform: "uppercase", lineHeight: 0.9, marginLeft: "clamp(30px, 5vw, 80px)", position: "relative", zIndex: 1 }}>WORK</h1>
          <div style={{ position: "absolute", top: "10px", right: "clamp(20px, 10vw, 200px)", width: "clamp(30px, 5vw, 80px)", height: "clamp(30px, 5vw, 80px)", borderRadius: "50%", background: "#e94560", zIndex: 0 }} />
        </div>

        <div className={loaded ? "header-animate" : ""} style={{ display: "flex", alignItems: "center", gap: "20px", marginTop: "30px" }}>
          <div style={{ width: "60px", height: "2px", background: "#e94560" }} />
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "14px", letterSpacing: "4px", color: "#333", textTransform: "uppercase" }}>DHIRAJ DAYANAND — VISUAL IDENTITY & BRAND DESIGN</p>
        </div>
      </header>

      {/* Marquee */}
      <div className="marquee-wrapper" style={{ margin: "20px 0", position: "relative", zIndex: 1 }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, i) => (
            <span key={i} style={{ display: "flex" }}>
              {["BRANDING", "POSTER", "TYPOGRAPHY", "PACKAGING", "IDENTITY", "EDITORIAL", "UI DESIGN", "SOCIAL MEDIA"].map((item, j) => (
                <span key={j} style={{ display: "flex", alignItems: "center" }}>
                  <span className="marquee-item">{item}</span>
                  <span className="marquee-dot">✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* Grid */}
      <main style={{ padding: "40px 60px", position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "24px" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "3px", color: "#999", textTransform: "uppercase" }}>SELECTED WORKS — {designs.length} PROJECTS</p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "12px", letterSpacing: "2px", color: "#999" }}>CLICK TO EXPAND ↗</p>
        </div>

        <div className="portfolio-grid">
          {designs.map((design, index) => (
            <div
              key={design.id}
              className={`design-card ${loaded ? "card-animate" : ""}`}
              style={{ animationDelay: `${0.6 + index * 0.1}s`, background: design.placeholder }}
              onClick={() => setSelectedDesign(design)}
            >
              <div style={{ width: "100%", height: "100%", background: `linear-gradient(135deg, ${design.placeholder} 0%, #000 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", width: "150px", height: "150px", border: "2px solid rgba(255,255,255,0.15)", transform: "rotate(45deg)" }} />
                <div style={{ position: "absolute", width: "100px", height: "100px", border: "2px solid rgba(255,255,255,0.1)", transform: "rotate(20deg)" }} />
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "13px", letterSpacing: "4px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", zIndex: 1 }}>YOUR DESIGN HERE</p>
              </div>

              <div className="overlay">
                <div className="card-text">
                  <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "3px", color: "#e94560", textTransform: "uppercase", marginBottom: "6px" }}>{design.category}</p>
                  <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "22px", letterSpacing: "2px", color: "#fff", textTransform: "uppercase" }}>{design.title}</p>
                </div>
              </div>

              <button className="expand-btn">↗</button>
              <div style={{ position: "absolute", top: "16px", left: "16px", fontFamily: "'Space Mono', monospace", fontSize: "11px", color: "rgba(255,255,255,0.4)", letterSpacing: "2px" }}>{String(index + 1).padStart(2, "0")}</div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ padding: "80px 60px", borderTop: "2px solid #000", position: "relative", zIndex: 1, marginTop: "40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          <div>
            <h2 style={{ fontFamily: "'Anton', sans-serif", fontSize: "clamp(36px, 5vw, 72px)", letterSpacing: "2px", textTransform: "uppercase", lineHeight: 1, marginBottom: "24px" }}>
              LET'S<br /><span style={{ WebkitTextStroke: "2px #000", color: "transparent" }}>WORK</span><br />TOGETHER
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <a href="mailto:dhirajdayanand8@gmail.com" style={{ fontFamily: "'Space Mono', monospace", fontSize: "13px", letterSpacing: "1px", color: "#000", textDecoration: "none", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>✉ dhirajdayanand8@gmail.com</a>
              <a href="tel:+917219332803" style={{ fontFamily: "'Space Mono', monospace", fontSize: "13px", letterSpacing: "1px", color: "#000", textDecoration: "none", borderBottom: "1px solid #ccc", paddingBottom: "8px" }}>✆ +91 72193 32803</a>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "3px", color: "#999", textTransform: "uppercase", marginBottom: "24px" }}>FIND ME ON</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <a href="https://instagram.com/dhiraj.dayanand" target="_blank" rel="noreferrer" className="social-link">IG — INSTAGRAM</a>
              <a href="https://linkedin.com/in/dhirajdayanand" target="_blank" rel="noreferrer" className="social-link">IN — LINKEDIN</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-link">FB — FACEBOOK</a>
              <a href="https://twitter.com/DhirajMuthal4" target="_blank" rel="noreferrer" className="social-link">X — TWITTER</a>
            </div>
            <div style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "16px" }}>
              <div style={{ width: "40px", height: "3px", background: "#e94560" }} />
              <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "2px", color: "#999", textTransform: "uppercase" }}>AVAILABLE FOR FREELANCE</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "60px", paddingTop: "24px", borderTop: "1px solid #ddd", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "2px", color: "#999" }}>© 2025 DHIRAJ DAYANAND</p>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "2px", color: "#999" }}>GRAPHIC DESIGNER — PUNE, INDIA</p>
        </div>
      </footer>

      {/* Modal */}
      {selectedDesign && (
        <div className="modal-overlay" onClick={() => setSelectedDesign(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#f5f0e8", maxWidth: "900px", width: "100%", maxHeight: "90vh", overflow: "auto", animation: "slideUp 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards" }}>
            <div style={{ padding: "24px 32px", borderBottom: "2px solid #000", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "11px", letterSpacing: "3px", color: "#e94560", textTransform: "uppercase", marginBottom: "4px" }}>{selectedDesign.category}</p>
                <h3 style={{ fontFamily: "'Anton', sans-serif", fontSize: "28px", letterSpacing: "2px", textTransform: "uppercase" }}>{selectedDesign.title}</h3>
              </div>
              <button onClick={() => setSelectedDesign(null)} style={{ background: "#000", color: "#f5f0e8", border: "none", width: "44px", height: "44px", fontSize: "20px", cursor: "pointer" }}>✕</button>
            </div>

            <div style={{ width: "100%", aspectRatio: "16/9", background: `linear-gradient(135deg, ${selectedDesign.placeholder} 0%, #000 100%)`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", width: "300px", height: "300px", border: "2px solid rgba(255,255,255,0.1)", transform: "rotate(45deg)" }} />
              <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "16px", letterSpacing: "6px", color: "rgba(255,255,255,0.3)", textTransform: "uppercase", zIndex: 1 }}>REPLACE WITH YOUR DESIGN IMAGE</p>
            </div>

            <div style={{ padding: "32px", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px", borderTop: "2px solid #000" }}>
              <div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: "#999", textTransform: "uppercase", marginBottom: "8px" }}>PROJECT</p>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "16px", letterSpacing: "1px", textTransform: "uppercase" }}>{selectedDesign.title}</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: "#999", textTransform: "uppercase", marginBottom: "8px" }}>CATEGORY</p>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "16px", letterSpacing: "1px", textTransform: "uppercase" }}>{selectedDesign.category}</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "10px", letterSpacing: "3px", color: "#999", textTransform: "uppercase", marginBottom: "8px" }}>DESIGNER</p>
                <p style={{ fontFamily: "'Anton', sans-serif", fontSize: "16px", letterSpacing: "1px", textTransform: "uppercase" }}>DHIRAJ DAYANAND</p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default PortfolioPage;
