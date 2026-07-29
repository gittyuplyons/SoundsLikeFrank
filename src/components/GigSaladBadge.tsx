import { Star, ExternalLink } from "lucide-react";

const GIGSALAD_URL = "https://www.gigsalad.com/soundslikefrank";

export default function GigSaladBadge({ size = "default" }: { size?: "default" | "small" }) {
  const isSmall = size === "small";

  return (
    <a
      href={GIGSALAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-2.5 rounded-full border border-gold/50 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-gold hover:bg-black/60 ${
        isSmall ? "px-3.5 py-1.5" : "px-5 py-2.5"
      }`}
    >
      <div className={`flex items-center ${isSmall ? "gap-0.5" : "gap-1"}`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={isSmall ? "h-3 w-3" : "h-4 w-4"}
            fill="#D4AF37"
            strokeWidth={0}
          />
        ))}
      </div>
      <span
        className={`font-sans font-semibold text-white ${isSmall ? "text-xs" : "text-sm"}`}
      >
        5.0
      </span>
      <span
        className={`font-sans font-medium text-white/90 ${isSmall ? "text-xs" : "text-sm"}`}
      >
        Top Rated on GigSalad
      </span>
      <ExternalLink
        className={`text-gold opacity-70 transition-opacity duration-200 group-hover:opacity-100 ${isSmall ? "h-3 w-3" : "h-3.5 w-3.5"}`}
        strokeWidth={2}
      />
    </a>
  );
}
