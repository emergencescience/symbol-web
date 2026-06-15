export default function SymbolLogo({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer diamond */}
      <rect
        x="1"
        y="1"
        width="26"
        height="26"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="0"
        transform="skewX(-12)"
        className="text-zinc-600 transition-colors"
      />
      {/* Inner diamond */}
      <rect
        x="6"
        y="6"
        width="16"
        height="16"
        stroke="currentColor"
        strokeWidth="1.5"
        rx="0"
        transform="rotate(45 14 14)"
        className="text-zinc-500 transition-colors"
      />
    </svg>
  );
}
