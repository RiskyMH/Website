import React from "react";
import { minify } from "../tools/minify.macro" with { type: "macro" };

const scrollHintScript = minify(/* js */`
  window.addEventListener("DOMContentLoaded", function () {
    var hint = document.getElementById("scroll-hint");
    var target = document.getElementById("projects");
    if (hint && target) {
      var scrollParent = document.getElementById("main");
      function onScroll() {
        var rect = target.getBoundingClientRect();
        var parentRect =
          scrollParent === window
            ? { top: 0, bottom: window.innerHeight }
            : scrollParent.getBoundingClientRect();
        var visible = Math.max(
          0,
          Math.min(rect.bottom, parentRect.bottom) - Math.max(rect.top, parentRect.top)
        );
        var ratio = Math.max(0, Math.min(1, visible / rect.height));
        hint.style.opacity = 1 - ratio;
      }
      if (scrollParent === window) window.addEventListener("scroll", onScroll);
      else scrollParent.addEventListener("scroll", onScroll);
      hint.classList.remove("transition-opacity", "duration-300");
      onScroll();
    }
  });
`);

const ScrollHint = () => (
  <>
    <div className="-mt-[4rem] flex w-full justify-center">
      <button
        id="scroll-hint"
        className="z-0 cursor-pointer rounded-xl p-2 pb-1 text-center text-[#8f8f8f] hover:text-white/90 flex flex-col gap-1 transition-alll duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6e6e6e] focus-visible:bg-[#2a2a2a]"
        // @ts-expect-error i know im being sus
        _onclick="document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })"
        aria-label="Scroll to projects section"
      >
        <p>Scroll to projects!</p>
        <div className="flex justify-center w-full">
          <svg
            className="h-4 w-4 animate-bounce"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 00-1 1v10.586l-2.293-2.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l4-4a1 1 0 10-1.414-1.414L11 15.586V4a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>
    </div>
    <script dangerouslySetInnerHTML={{ __html: scrollHintScript }} />
  </>
);

export default ScrollHint;
