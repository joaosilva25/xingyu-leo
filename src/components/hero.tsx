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
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-2">
              LEO CHINA
            </h1>

            {/* Decorative line */}
            <div className="w-12 h-0.5 bg-red-500 mb-5" />

            {/* Subtitle */}
            <p className="text-base md:text-lg text-white/70 font-light">
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
                <span className="text-[10px] tracking-[0.3em] text-white/40 uppercase">
                  Scroll
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
