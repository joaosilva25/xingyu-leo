import { Mouse } from "lucide-react";
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
      <section className="relative h-full pt-24 md:pt-0 md:min-h-[80vh] overflow-hidden bg-black">
        {/* Content */}
        <div className="relative z-10 mt-1 px-6 md:px-20 mx-auto md:py-24 w-full grid md:grid-cols-1 gap-12 items-center text-center md:text-center">
          {/* LEFT */}
          <div className="text-white">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl text-red-500 uppercase  font-regular leading-[1.0] tracking-tight mb-8">
              Leo China
            </h1>

            {/* Subtitle */}
            <div className="flex flex-col gap-4 mb-6">
              <p className="text-white md:pr-32 leading-7 uppercase  flex items-center justify-center">
                Escolha o caminho abaixo, eu quero ajudar você.
              </p>
            </div>
            <div
              className={`mt-0 flex md:hidden justify-center md:justify-start transition-all duration-500 ${
                showScrollHint
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2 pointer-events-none"
              }`}
            >
              <button
                type="button"
                aria-label="Rolar para baixo"
                className="h-12 w-12 rounded-full mt-2 mb-6 border border-white/50 shadow-[0_10px_24px_rgba(0,0,0,0.5)] backdrop-blur-sm animate-bounce cursor-default flex items-center justify-center"
              >
                <Mouse className="h-5 w-5 text-red-500" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
