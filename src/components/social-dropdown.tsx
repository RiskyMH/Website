import React from "react";
import EllipsisIcon from "./icons/ellipsis-icon.svg";
import { minify } from "../tools/minify.macro" with { type: "macro" };

export default function SocialDropdown({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative group-[social-dropdown]">
      <style>{`
        .relative:hover .dropdown-menu,
        .relative:focus-within .dropdown-menu,
        label:hover ~ .dropdown-menu,
        .hover-bridge:hover ~ .dropdown-menu,
        .dropdown-menu:hover {
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
        }
      `.replace(/\s+/g, " ")}</style>
      <script
        dangerouslySetInnerHTML={{ __html: minify(`window.addEventListener('click', (e) => {
  const menu = document.getElementById('social-dropdown-menu');
  const checkbox = document.getElementById('social-dropdown-toggle');
  if (!menu || !checkbox) return;
  if (
    checkbox.checked &&
    !menu.contains(e.target) &&
    !document.querySelector('label[for=social-dropdown-toggle]')?.contains(e.target)
  ) {
    checkbox.checked = false;
  }
});`) }}
      />
      <input
        id="social-dropdown-toggle"
        type="checkbox"
        className="peer hidden"
        tabIndex={-1}
      />
<label
          htmlFor="social-dropdown-toggle"
          className="cursor-pointer flex items-center justify-center md:w-20 h-9 md:max-w-20 rounded-lg bg-[#4a4a4a] hover:bg-white hover:text-[#1a1a1a] transition border border-transparent select-none z-20 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6e6e6e] transition-shadow duration-100"
          tabIndex={0}
          role="button"
          aria-label="More links"
      >
        <span className="sr-only">More links</span>
        <EllipsisIcon className="w-6 h-6" />
      </label>
      <div
        className="hover-bridge absolute z-10 left-0 right-0 h-[15px] md:top-[35px] md:bottom-auto top-auto bottom-[35px]"
        tabIndex={-1}
        aria-hidden="true"
        style={{ pointerEvents: "auto" }}
      />
      <div
        id="social-dropdown-menu"
        className="dropdown-menu absolute right-0 md:top-12 md:bottom-auto top-auto bottom-12 mt-0 z-30 min-w-full max-h-[90vh] overflow-y-auto rounded-xl bg-[#242424] shadow-lg ring-1 ring-white/10 opacity-0 invisible pointer-events-none peer-checked:opacity-100 peer-checked:visible peer-checked:pointer-events-auto focus-within:opacity-100 focus-within:visible focus-within:pointer-events-auto hover:opacity-100 hover:visible hover:pointer-events-auto transition-all duration-200"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ul className="py-2 text-sm font-medium text-white flex flex-col min-w-[12rem]">
          {children}
        </ul>
      </div>
    </div>
  );
}

export function DropdownLink({ url, text, Icon, newTab = false }: { url: string; text: string; Icon: React.ComponentType<{ className?: string }>; newTab?: boolean; }) {
  return (
    <li>
      <a
        href={url || "#"}
        target={newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        tabIndex={0}
        className="flex items-center gap-2 px-4 py-2 hover:bg-[#363636] text-white text-sm font-medium transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6e6e6e]"
      >
        <Icon className="w-4 h-4 inline" /> {text}
      </a>
    </li>
  );
}