import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const SKIP_PREFIXES = ["/crm", "/partner", "/admin", "/dashboard", "/login"];

export function SplashScreen() {
  // Never rendered during SSR — avoids hydration mismatches, since whether the
  // splash shows depends on sessionStorage + the current path.
  const [show, setShow] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Staff/app areas load straight away — no intro animation there.
    const path = window.location.pathname;
    if (SKIP_PREFIXES.some((p) => path === p || path.startsWith(p + "/"))) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) return;

    try {
      if (sessionStorage.getItem("av_splash_seen") === "1") return;
      sessionStorage.setItem("av_splash_seen", "1");
    } catch {}

    setShow(true);
    const t0 = setTimeout(() => setMounted(true), 20);
    const t1 = setTimeout(() => setHide(true), 1600);
    const t2 = setTimeout(() => setShow(false), 2100);

    const skip = () => {
      setHide(true);
      setTimeout(() => setShow(false), 400);
    };
    window.addEventListener("pointerdown", skip, { once: true });
    window.addEventListener("keydown", skip, { once: true });

    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener("pointerdown", skip);
      window.removeEventListener("keydown", skip);
    };
  }, []);

  if (!show) return null;



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
            <img src={logo} alt="Aarthvaahini" />
          </div>
        </div>

        <p className="splash-welcome">Welcome to</p>
        <h1 className="splash-brand">Aarthvaahini</h1>
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
          opacity: 1;
          transition: opacity 700ms ease, transform 700ms ease;
        }
        .splash-out {
          opacity: 0;
          transform: scale(1.06);
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
          opacity: 0.6;
        }
        .splash-stage {
          position: relative;
          text-align: center;
          padding: 24px;
          max-width: 92vw;
          animation: splashRise 900ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .splash-logo-wrap {
          position: relative;
          width: 140px;
          height: 140px;
          margin: 0 auto 26px;
          animation: splashLogoIn 1100ms cubic-bezier(0.2, 0.8, 0.2, 1) both;
        }
        .splash-logo-ring {
          position: absolute; inset: -14px;
          border-radius: 9999px;
          background: conic-gradient(from 0deg, #7dd3fc, #818cf8, #f0abfc, #7dd3fc);
          filter: blur(14px);
          opacity: 0.9;
          animation: splashRing 3.5s linear infinite;
        }
        .splash-logo {
          position: relative;
          width: 100%; height: 100%;
          border-radius: 32px;
          background: linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06));
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow:
            0 20px 60px -10px rgba(129,140,248,0.55),
            inset 0 0 40px rgba(255,255,255,0.08);
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
          -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
        }
        .splash-logo img {
          width: 78%;
          height: 78%;
          object-fit: contain;
          filter: drop-shadow(0 6px 14px rgba(125,211,252,0.55));
        }

        .splash-welcome {
          margin: 0 0 6px;
          font-family: "Sora", -apple-system, sans-serif;
          font-size: clamp(0.95rem, 2vw, 1.25rem);
          font-weight: 500;
          color: rgba(226, 232, 240, 0.92);
          letter-spacing: 0.02em;
          text-shadow: 0 4px 20px rgba(129,140,248,0.5);
          animation: splashFadeUp 700ms ease 300ms both;
        }
        .splash-brand {
          margin: 0;
          font-family: "Sora", -apple-system, sans-serif;
          font-weight: 800;
          font-size: clamp(2.2rem, 8vw, 4.8rem);
          line-height: 1.05;
          letter-spacing: -0.02em;
          color: #fff;
          background: linear-gradient(120deg, #e0f2fe 0%, #a5b4fc 40%, #f0abfc 75%, #e0f2fe 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 6px 30px rgba(129,140,248,0.35);
          animation: splashFadeUp 800ms ease 500ms both, splashShine 3.5s linear 1.2s infinite;
        }
        .splash-tag {
          margin: 14px 0 0;
          font-family: "Inter", sans-serif;
          font-size: clamp(0.8rem, 1.5vw, 1rem);
          color: rgba(226, 232, 240, 0.75);
          letter-spacing: 0.24em;
          text-transform: uppercase;
          animation: splashFadeUp 600ms ease 450ms both;
        }
        .splash-progress {
          width: min(220px, 60vw);
          height: 2px;
          margin: 28px auto 0;
          background: rgba(255,255,255,0.14);
          border-radius: 4px;
          overflow: hidden;
          animation: splashFadeUp 500ms ease 600ms both;
        }
        .splash-progress-bar {
          height: 100%;
          width: 0;
          background: linear-gradient(90deg, #7dd3fc, #a78bfa, #f0abfc);
          animation: splashBar 1000ms ease-out 500ms forwards;
          box-shadow: 0 0 12px rgba(167,139,250,0.8);
        }

        @keyframes splashRise {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashLogoIn {
          0% { transform: rotateY(-180deg) scale(0.5); opacity: 0; }
          60% { transform: rotateY(15deg) scale(1.06); opacity: 1; }
          100% { transform: rotateY(0deg) scale(1); opacity: 1; }
        }
        @keyframes splashRing { to { transform: rotate(360deg); } }
        @keyframes splashShine {
          0% { background-position: 0% 0; }
          100% { background-position: -200% 0; }
        }
        @keyframes splashFloat {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px,-20px) scale(1.08); }
        }
        @keyframes splashDrift {
          to { transform: translate(4%, -3%); }
        }
        @keyframes splashFadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes splashBar {
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
}
