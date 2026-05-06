import { Link } from "lucide-react";

interface CardProps {
  imageSrc: string;
  link?: string;
}

export default function Card({ imageSrc, link }: CardProps) {
  return (
    <div
      className="w-full h-[210px] md:h-[400px] rounded-3xl overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg relative group cursor-pointer border-1 border-red-500/30 bg-black"
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      onClick={() => link && window.open(link, "_blank")}
    >
      {/* Rotating neon border */}
      <svg
        className="absolute inset-[-2px] w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="12"
          fill="none"
          stroke="#ef4444"
          strokeWidth="0.5"
          className="animate-neonPath"
          style={{
            strokeDasharray: "400",
            strokeDashoffset: "400",
            filter: "drop-shadow(0 0 4px rgba(239,68,68,0.6))",
          }}
        />
      </svg>
      {/* Blur overlay on hover */}
      <div
        className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
        style={{ backdropFilter: "blur(8px)" }}
      >
        <div className="text-center flex flex-col items-center gap-5">
          <Link className="text-white h-10 w-10" strokeWidth={1.3} />
          <span className="text-white text-sm tracking-widest font-medium">
            VISITAR AGORA
          </span>
        </div>
      </div>
    </div>
  );
}
