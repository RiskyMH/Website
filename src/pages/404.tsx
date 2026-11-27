import React from "react";
import Layout from "../layouts/layout";
import FireIcon from "../../public/fire_flat.svg";
import { ArrowRightIcon } from "../components/icons";

const NotFoundPage = () => (
  <Layout title="404 | RiskyMH">
    <div id="top" className="site-shell">
      <header className="site-header flex h-16 items-center justify-between max-[600px]:h-[60px]">
        <a className="wordmark inline-flex items-center gap-[9px] whitespace-nowrap text-sm font-[680] tracking-[-.025em]" href="/" aria-label="RiskyMH home">
          <FireIcon className="size-[23px] object-contain" aria-hidden="true" />
          <span>RiskyMH</span>
        </a>
      </header>
      <main className="hero relative isolate flex min-h-[clamp(400px,60svh,560px)] w-screen [margin-left:calc(50%_-_50vw)] items-stretch">
        <div className="mx-auto grid min-h-[inherit] w-[min(calc(100%_-_2*var(--page-padding)),var(--page-width))] grid-cols-1 content-center items-center px-[7.5%]">
          <div className="min-w-0 pb-[5px] before:mb-[15px] before:block before:h-[3px] before:w-[25px] before:rounded-[2px] before:bg-accent before:content-['']">
            <h1 className="m-0 text-[clamp(2.6rem,5vw,3.65rem)] font-[730] leading-[1.06] tracking-[-.055em]">
              404<span className="text-accent">.</span>
            </h1>
            <p className="m-[18px_0_0] text-[16px] leading-[1.65] text-secondary">
              Page not found.{" "}
              <a className="inline-flex items-center gap-1 text-accent hover:text-accent-hover" href="/">
                Head back home <ArrowRightIcon className="size-3.5" />
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  </Layout>
);

export default NotFoundPage;
