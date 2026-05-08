export function EkgLine({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="ekg-line"
        d="M0 30 L120 30 L150 30 L165 10 L180 50 L200 20 L215 40 L235 30 L380 30 L400 30 L415 5 L430 55 L450 18 L465 42 L485 30 L600 30"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
