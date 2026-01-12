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
    <div className="-mt-16 flex w-full justify-center" aria-hidden>
      <button
        id="scroll-hint"
        className="z-0 cursor-pointer rounded-xl p-2 pb-1 text-center text-text-secondary hover:text-white/90 flex flex-col gap-1 transition-alll duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:bg-card"
        // @ts-expect-error i know im being sus
        _onclick="document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })"
        tabIndex={-1}
        aria-hidden="true"
      >
        <p>Scroll to projects!</p>
        <div className="flex justify-center w-full">
          <svg
            className="h-4 w-4 animate-bounce motion-reduce:animate-none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            width={16}
            height={16}
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
