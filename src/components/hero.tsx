import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
export default function Hero() {
  const [showScrollHint, setShowScrollHint] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollHint(window.scrollY <= 1);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className="relative flex-1 pt-24 md:pt-0 flex flex-col justify-center overflow-hidden">
        {/* Content */}
        <div className="relative z-10 mt-1 px-6 md:px-20 mx-auto md:py-24 w-full grid md:grid-cols-1 gap-12 items-center text-center md:text-center">
          {/* LEFT */}
          <div
            className="text-white flex flex-col items-center mt-6 py-6"
            style={{
              background:
                "radial-gradient(ellipse 90% 80% at 50% 50%, rgba(0,0,0,0.5) 0%, transparent 60%)",
            }}
          >
            {/* Title */}
            <h1
              className="text-4xl md:text-9xl text-white uppercase leading-[0.85] tracking-[0.08em]  mb-3"
              style={{
                fontFamily: "'Parabolica', sans-serif",
                fontWeight: 500,
                textShadow: "0 4px 30px rgba(0,0,0,0.4)",
              }}
            >
              LEO CHINA
            </h1>

            {/* Decorative line */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6" />

            {/* Subtitle */}
            <p
              className="text-xs md:text-sm text-white/85 uppercase tracking-[0.2em] leading-relaxed"
              style={{
                fontFamily: "'Parabolica', sans-serif",
                fontWeight: 500,
              }}
            >
              Escolha o caminho abaixo<br /><strong>quero ajudar você</strong>
            </p>

            {/* Scroll hint (mobile only) */}
            <div
              className={`mt-8 flex md:hidden justify-center transition-all duration-700 ${
                showScrollHint
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            >
              <div className="flex flex-col items-center -space-y-1">
                <ChevronDown
                  className="w-6 h-6 text-red-500 animate-[chevronPulse_2s_ease-in-out_infinite]"
                  strokeWidth={2}
                  style={{ filter: "drop-shadow(0 0 6px rgba(239,68,68,0.8))" }}
                />
                <ChevronDown
                  className="w-6 h-6 text-red-400 animate-[chevronPulse_2s_ease-in-out_infinite_0.3s]"
                  strokeWidth={2}
                  style={{ filter: "drop-shadow(0 0 4px rgba(239,68,68,0.6))" }}
                />
                <ChevronDown
                  className="w-6 h-6 text-red-300/70 animate-[chevronPulse_2s_ease-in-out_infinite_0.6s]"
                  strokeWidth={2}
                  style={{ filter: "drop-shadow(0 0 3px rgba(239,68,68,0.4))" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
