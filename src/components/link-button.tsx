import React from "react";

interface LinkButtonProps {
  url: string;
  text: string;
  Icon: React.ComponentType<{ className?: string }>;
  newTab?: boolean;
  noMobile?: boolean;
  disabled?: string | boolean;
  small?: boolean;
  primary?: boolean;
  obfuscate?: string | boolean;
}

export default function LinkButton({ url = "", text, Icon, newTab = false, noMobile = false, disabled = false, small = false, primary = false, obfuscate = false }: LinkButtonProps) {
  function encodeObfuscated(str: string): string {
    return btoa(unescape(encodeURIComponent(str))).split("").reverse().join("");
  }

  return (
    <a
      href={obfuscate ? (typeof obfuscate === "string" ? obfuscate : "#") : (url === "" ? "#" : url)}
      target={newTab ? "_blank" : "_self"}
      rel="noopener noreferrer"
      title={disabled ? typeof disabled === "string" ? disabled : text : text}
      className={
        "rounded-lg bg-button shadow-sm flex items-center justify-center gap-1 text-text " +
        (primary
          ? (small ? "px-3 py-1 text-xs min-w-14" : "p-1.5 text-sm min-w-21")
          : (small ? "w-12 h-8 max-w-12" : "w-full md:w-20 h-9 md:max-w-20")) + " " +
        (disabled ? "opacity-25 cursor-default" : "hover:bg-button-hover") + " " +
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-focus transition-shadow duration-100"
      }
      aria-disabled={!!disabled}
      tabIndex={disabled ? -1 : 0}
      data-obfuscated={obfuscate ? encodeObfuscated(url) : undefined}
    >
      <Icon className="w-4 h-4" />
      {primary && <span className="ml-1 inline">{text}</span>}
    </a>
  );
}
