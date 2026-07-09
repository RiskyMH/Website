import React from "react";

interface LinkButtonProps {
  url: string;
  text: string;
  Icon: React.ComponentType<{ className?: string; height?: number; width?: number }>;
  newTab?: boolean;
  noMobile?: boolean;
  disabled?: string | boolean;
  small?: boolean;
  primary?: boolean;
  obfuscate?: string | boolean;
  itemProp?: string;
  hidden?: boolean;
}

export default function LinkButton({ url = "", text, Icon, newTab = false, noMobile = false, disabled = false, small = false, primary = false, obfuscate = false, itemProp, hidden = false }: LinkButtonProps) {
  function encodeObfuscated(str: string): string {
    return btoa(unescape(encodeURIComponent(str))).split("").reverse().join("");
  }

  return (
    <li className="group/item">
      <a
        href={obfuscate ? (typeof obfuscate === "string" ? obfuscate : "#") : (url === "" ? "#" : url)}
        target={newTab ? "_blank" : "_self"}
        rel="noopener noreferrer"
        itemProp={itemProp}
        title={disabled ? typeof disabled === "string" ? disabled : text : text}
        className={
          "rounded-lg bg-button shadow-sm flex items-center gap-2 text-text  " +
          (primary
            ? (small ? "px-3 py-1 text-xs min-w-14 h-8 max-w-[200px] group-hover/item:px-4" : "p-1.5 text-sm h-8 min-w-21")
            : (small ? "w-max h-8 text-xs min-w-12 px-4 max-w-12 overflow-hidden group-hover/item:max-w-[200px]" : "w-full md:w-20 h-9 md:max-w-20 justify-center")) + " " +
          (disabled ? "opacity-25 cursor-default" : "hover:bg-button-hover") + " " +
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus whitespace-nowrap transition-all duration-150" +
          (hidden ? " hidden" : "")
        }
        aria-disabled={!!disabled}
        tabIndex={disabled ? -1 : 0}
        data-obfuscated={obfuscate ? encodeObfuscated(url) : undefined}
      >
        <Icon className="w-4 h-4 shrink-0" height={16} width={16} />
        {small ? (
          <span className={`overflow-hidden ${!primary ? 'opacity-0 group-hover/item:opacity-100 transition-opacity duration-150' : ''}`}>{text}</span>
        ) : (
          <span className="sr-only">{text}</span>
        )}
      </a>
    </li>
  );
}
