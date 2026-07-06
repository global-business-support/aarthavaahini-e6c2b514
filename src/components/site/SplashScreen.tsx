import { useEffect, useState } from "react";

export function SplashScreen() {
  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    // Show once per browser session
    if (typeof window === "undefined") return;
    try {
      if (sessionStorage.getItem("av_splash_seen") === "1") {
        setRemove(true);
        return;
      }
      sessionStorage.setItem("av_splash_seen", "1");
    } catch {}

    setMounted(true);
    const t1 = setTimeout(() => setHide(true), 2600);
    const t2 = setTimeout(() => setRemove(true), 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (remove) return null;

  return (
    <div
      className={`splash-root ${mounted ? "splash-in" : ""} ${hide ? "splash-out" : ""}`}
      aria-hidden={hide}
    >
      <div className="splash-bg" />
      <div className="splash-orb splash-orb-1" />
      <div className="splash-orb splash-orb-2" />
      <div className="splash-orb splash-orb-3" />
      <div className="splash-grid" />

      <div className="splash-stage">
        <div className="splash-logo-wrap">
          <div className="splash-logo-ring" />
          <div className="splash-logo">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="avg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#7dd3fc" />
                  <stop offset="50%" stopColor="#818cf8" />
                  <stop offset="100%" stopColor="#f0abfc" />
                </linearGradient>
              </defs>
              <path
                d="M32 6 L56 54 H44 L40 44 H24 L20 54 H8 Z M28 34 H36 L32 22 Z"
                fill="url(#avg)"
              />
            </svg>
          </div>
        </div>

        <h1 className="splash-title">
          <span>W</span><span>e</span><span>l</span><span>c</span><span>o</span><span>m</span><span>e</span>
          <span className="splash-space">&nbsp;</span>
          <span>t</span><span>o</span>
        </h1>
        <h2 className="splash-brand">
          <span>A</span><span>a</span><span>r</span><span>t</span><span>h</span>
          <span>v</span><span>a</span><span>a</span><span>h</span><span>i</span><span>n</span><span>i</span>
        </h2>
        <p className="splash-tag">Srijan se Samriddhi tak</p>

        <div className="splash-progress">
          <div className="splash-progress-bar" />
        </div>
      </div>

      <style>{`
        .splash-root {
          position: fixed;
          inset: 0;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: radial-gradient(ellipse at 50% 30%, #1e1b4b 0%, #0b0f2a 55%, #05060f 100%);
          perspective: 1400px;
          transform-style: preserve-3d;
          opacity: 1;
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .splash-out {
          opacity: 0;
          transform: scale(1.08);
          pointer-events: none;
        }
        .splash-bg {
          position: absolute; inset: -20%;
          background:
            radial-gradient(circle at 20% 30%, rgba(125,211,252,0.35), transparent 40%),
            radial-gradient(circle at 80% 20%, rgba(167,139,250,0.35), transparent 42%),
            radial-gradient(circle at 60% 80%, rgba(240,171,252,0.28), transparent 45%);
          filter: blur(20px);
          animation: splashDrift 8s ease-in-out infinite alternate;
        }
        .splash-orb {
          position: absolute;
          border-radius: 9999px;
          filter: blur(60px);
          opacity: 0.7;
          animation: splashFloat 6s ease-in-out infinite;
        }
        .splash-orb-1 { width: 320px; height: 320px; background: #38bdf8; top: -60px; left: -60px; }
        .splash-orb-2 { width: 380px; height: 380px; background: #a78bfa; bottom: -100px; right: -80px; animation-delay: 1.5s; }
        .splash-orb-3 { width: 260px; height: 260px; background: #f472b6; top: 40%; left: 55%; animation-delay: 3s; }
        .splash-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at center, black 40%, transparent 75%);
          transform: perspective(800px) rotateX(60deg) translateY(20%);
          transform-origin: center;
          animation: splashGrid 8s linear infinite;
        }
        .splash-stage {
          position: relative;
          text-align: center;
          padding: 24px;
          transform-style: preserve-3d;
          animation: splashStage 2.6s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .splash-logo-wrap {
          position: relative;
          width: 120px;
          height: 120px;
          margin: 0 auto 24px;
          transform-style: preserve-3d;
          animation: splashLogoSpin 3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .splash-logo-ring {
          position: absolute; inset: -14px;
          border-radius: 9999px;
          background: conic-gradient(from 0deg, #7dd3fc, #818cf8, #f0abfc, #7dd3fc);
          filter: blur(10px);
          opacity: 0.85;
          animation: splashRing 3.5s linear infinite;
        }
        .splash-logo {
          position: relative;
          width: 100%; height: 100%;
          border-radius: 28px;
          background: linear-gradient(145deg, rgba(255,255,255,0.14), rgba(255,255,255,0.04));
          border: 1px solid rgba(255,255,255,0.18);
          box-shadow:
            0 20px 60px -10px rgba(129,140,248,0.55),
            inset 0 0 40px rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          backdrop-filter: blur(12px);
        }
        .splash-logo svg { width: 62%; height: 62%; filter: drop-shadow(0 6px 14px rgba(125,211,252,0.55)); }

        .splash-title, .splash-brand {
          margin: 0;
          font-family: "Sora", -apple-system, sans-serif;
          color: #fff;
          letter-spacing: -0.02em;
          text-shadow: 0 6px 30px rgba(129,140,248,0.55);
        }
        .splash-title {
          font-size: clamp(1rem, 2.6vw, 1.6rem);
          font-weight: 500;
          opacity: 0.9;
          margin-bottom: 6px;
        }
        .splash-brand {
          font-size: clamp(2.4rem, 8vw, 5.2rem);
          font-weight: 800;
          background: linear-gradient(120deg, #e0f2fe 0%, #a5b4fc 40%, #f0abfc 75%, #e0f2fe 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: splashShine 3s linear infinite;
        }
        .splash-title span, .splash-brand span {
          display: inline-block;
          transform: translateY(20px) rotateX(-60deg);
          opacity: 0;
          animation: splashLetter 700ms cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }
        .splash-space { width: 0.4em; }
        .splash-title span:nth-child(1){animation-delay:.05s}
        .splash-title span:nth-child(2){animation-delay:.10s}
        .splash-title span:nth-child(3){animation-delay:.15s}
        .splash-title span:nth-child(4){animation-delay:.20s}
        .splash-title span:nth-child(5){animation-delay:.25s}
        .splash-title span:nth-child(6){animation-delay:.30s}
        .splash-title span:nth-child(7){animation-delay:.35s}
        .splash-title span:nth-child(8){animation-delay:.40s}
        .splash-title span:nth-child(9){animation-delay:.45s}
        .splash-title span:nth-child(10){animation-delay:.50s}

        .splash-brand span:nth-child(1){animation-delay:.60s}
        .splash-brand span:nth-child(2){animation-delay:.68s}
        .splash-brand span:nth-child(3){animation-delay:.76s}
        .splash-brand span:nth-child(4){animation-delay:.84s}
        .splash-brand span:nth-child(5){animation-delay:.92s}
        .splash-brand span:nth-child(6){animation-delay:1.00s}
        .splash-brand span:nth-child(7){animation-delay:1.08s}
        .splash-brand span:nth-child(8){animation-delay:1.16s}
        .splash-brand span:nth-child(9){animation-delay:1.24s}
        .splash-brand span:nth-child(10){animation-delay:1.32s}
        .splash-brand span:nth-child(11){animation-delay:1.40s}
        .splash-brand span:nth-child(12){animation-delay:1.48s}

        .splash-tag {
          margin-top: 12px;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.85rem, 1.6vw, 1.05rem);
          color: rgba(226, 232, 240, 0.75);
          letter-spacing: 0.24em;
          text-transform: uppercase;
          opacity: 0;
          animation: splashFadeUp 800ms ease 1.6s forwards;
        }
        .splash-progress {
          width: min(220px, 60vw);
          height: 2px;
          margin: 28px auto 0;
          background: rgba(255,255,255,0.12);
          border-radius: 4px;
          overflow: hidden;
          opacity: 0;
          animation: splashFadeUp 600ms ease 1.8s forwards;
        }
        .splash-progress-bar {
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #7dd3fc, #a78bfa, #f0abfc);
          animation: splashBar 1s ease-out 1.9s forwards;
          box-shadow: 0 0 12px rgba(167,139,250,0.8);
        }

        @keyframes splashLetter {
          to { transform: translateY(0) rotateX(0); opacity: 1; }
        }
        @keyframes splashStage {
          0% { transform: translateZ(-200px) rotateX(20deg); }
          60% { transform: translateZ(0) rotateX(0deg); }
          100% { transform: translateZ(0) rotateX(0deg); }
        }
        @keyframes splashLogoSpin {
          0% { transform: rotateY(-180deg) scale(0.6); opacity: 0; }
          60% { transform: rotateY(20deg) scale(1.05); opacity: 1; }
          100% { transform: rotateY(0deg) scale(1); opacity: 1; }
        }
        @keyframes splashRing { to { transform: rotate(360deg); } }
        @keyframes splashShine { to { background-position: -200% 0; } }
        @keyframes splashFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-20px) scale(1.08); }
        }
        @keyframes splashDrift {
          to { transform: translate(4%, -3%); }
        }
        @keyframes splashGrid {
          to { background-position: 48px 48px, 48px 48px; }
        }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashBar {
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
