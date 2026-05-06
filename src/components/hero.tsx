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
          <div className="text-white flex flex-col items-center">
            {/* Title */}
            <h1
              className="text-5xl md:text-9xl text-white uppercase leading-[0.85] tracking-wide mb-3"
              style={{
                fontFamily: "'Parabolica', sans-serif",
                fontWeight: 600,
                textShadow: "0 4px 30px rgba(0,0,0,0.4)",
              }}
            >
              LEO CHINA
            </h1>

            {/* Decorative line */}
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent mb-6" />

            {/* Subtitle */}
            <p
              className="text-sm md:text-sm text-white/70 uppercase tracking-[0.1em] leading-relaxed"
              style={{
                fontFamily: "'Parabolica', sans-serif",
                fontWeight: 400,
              }}
            >
              Escolha o caminho abaixo, eu quero ajudar você.
            </p>

            {/* Scroll hint (mobile only) */}
            <div
              className={`mt-8 flex md:hidden justify-center transition-all duration-700 ${
                showScrollHint
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-3 pointer-events-none"
              }`}
            >
              <div className="flex flex-col items-center gap-2">
                <span className="text-[8px] tracking-[0.3em] text-white/40 uppercase">
                  Rolar para baixo
                </span>
                <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-3 bg-white/60 animate-[slideDown_1.5s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
