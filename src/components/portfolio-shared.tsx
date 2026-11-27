import { minify } from "../tools/minify.macro" with { type: "macro" };

// SMIL needs the same path commands in every value; that lets the crest move.
export function WavePath({ className, d, lifted, dropped, duration }: {
  className: string;
  d: string;
  lifted: string;
  dropped: string;
  duration: string;
}) {
  return (
    <path className={className} d={d}>
      <animate
        attributeName="d"
        values={`${d};${lifted};${d};${dropped};${d}`}
        dur={duration}
        repeatCount="indefinite"
        calcMode="spline"
        keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
      />
    </path>
  );
}

type IconComponent = React.ComponentType<{ className?: string }>;

export function Brand({ icon: Icon, className = "" }: { icon: IconComponent; className?: string }) {
  return <Icon className={`brand-image ${className}`} />;
}

export function ProjectIcon({ icon: Icon, className = "" }: { icon: IconComponent; className?: string }) {
  return <Icon className={`size-[38px] rounded-lg bg-white/[.045] object-contain ${className}`} />;
}

export function encodeObfuscated(str: string): string {
  return btoa(unescape(encodeURIComponent(str))).split("").reverse().join("");
}

// Deferred so it never blocks paint.
export const revealObfuscatedScript = minify(/* js */`
  {
    var reveal = function () {
      document.querySelectorAll("a[data-obfuscated]").forEach(function (link) {
        var decode = function () {
          var encoded = (link.getAttribute("data-obfuscated") || "").split("").reverse().join("");
          if (!encoded) return;
          link.setAttribute("href", decodeURIComponent(escape(atob(encoded))));
          link.removeAttribute("data-obfuscated");
          link.removeEventListener("mouseover", decode);
          link.removeEventListener("focus", decode);
          link.removeEventListener("click", decode);
        };
        link.addEventListener("mouseover", decode);
        link.addEventListener("focus", decode);
        link.addEventListener("click", decode);
      });
    };
    var start = function () {
      if (window.requestIdleCallback) requestIdleCallback(reveal);
      else reveal();
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
    else start();
  }
`);

// CSS can't pause SMIL; do it here.
export const reducedMotionScript = minify(/* js */`
  {
    var lines = document.querySelector(".hero-lines");
    if (lines && lines.pauseAnimations && window.matchMedia("(prefers-reduced-motion: reduce)").matches) lines.pauseAnimations();
  }
`);
