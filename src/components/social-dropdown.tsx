import React from "react";
import EllipsisIcon from "./icons/ellipsis-icon.svg";

export default function SocialDropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group-[social-dropdown]" id="social-dropdown">
      <button
        id="social-dropdown-button"
        className="peer cursor-pointer flex items-center justify-center md:w-20 h-9 w-full md:max-w-20 rounded-lg bg-button hover:bg-button-hover text-text transition border border-transparent select-none z-20 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-focus duration-100"
        tabIndex={0}
        role="button"
        aria-label="More links"
      >
        <span className="sr-only">More links</span>
        <EllipsisIcon className="w-6 h-6" />
      </button>
      <div
        id="social-dropdown-hover-bridge"
        className="absolute z-10 left-0 right-0 h-3.75 md:top-8.75 md:bottom-auto top-auto bottom-8.75"
        tabIndex={-1}
        aria-hidden="true"
        style={{ pointerEvents: "auto" }}
      />
      <div
        id="social-dropdown-menu"
        className="absolute peer right-0 md:top-12 md:bottom-auto top-auto bottom-12 mt-0 z-30 min-w-full max-h-[65vh] md:max-h-[calc(50vh-4.5rem)] overflow-y-auto overflow-x-hidden rounded-xl bg-dropdown shadow-lg ring-1 ring-dropdown-hover opacity-0 invisible pointer-events-none transition-all duration-200"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ul className="py-2 text-sm font-medium text-white flex flex-col min-w-48">
          {children}
        </ul>
      </div>
      <style>
        {`
          #social-dropdown:hover #social-dropdown-menu,
          #social-dropdown:focus-within #social-dropdown-menu,
          #social-dropdown-menu:hover,
          #social-dropdown-menu:focus-within {
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
          }
        `.replace(/\s+/g, " ").replaceAll("; ", ";").trim()}
      </style>
    </div>
  );
}

export function DropdownLink({ url, text, Icon, obfuscate }: { url: string; text: string; Icon: React.ComponentType<{ className?: string }>; newTab?: boolean; obfuscate?: string | boolean }) {
  function encodeObfuscated(str: string): string {
    return btoa(unescape(encodeURIComponent(str))).split("").reverse().join("");
  }
  return (
    <li>
      <a
        href={obfuscate ? (typeof obfuscate === "string" ? obfuscate : "#") : (url || "#")}
        rel="noopener noreferrer"
        tabIndex={0}
        data-obfuscated={obfuscate ? encodeObfuscated(url) : undefined}
        className="flex items-center gap-2 px-4 py-2 hover:bg-dropdown-hover text-white text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus"
      >
        <Icon className="w-4 h-4 inline" /> {text}
      </a>
    </li>
  );
}