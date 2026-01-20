import React from "react";
import Layout from "../layouts/layout";
import ScrollHint from "../components/scroll-hint";
import Projects from "../components/projects";
import MainCard from "../components/main-card";

const Index = () => (
  <Layout canonical="/">
    <style>{`body { background-color: var(--background); overflow: hidden; }`}</style>
     <div
       id="main"
       className="h-dvh w-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll bg-background text-white"
       aria-labelledby="page-title"
       tabIndex={-1}
     >
      <div className="h-dvh snap-start justify-center">
        <div className="flex h-full items-center justify-center">
          <MainCard />
        </div>
        <ScrollHint />
      </div>
      <div id="projects" className="md:snap-start flex flex-col gap-10 mx-8 md:pb-8 min-h-[calc(100dvh-5rem)]">
        <div className="flex flex-col h-dvh snap-start items-center justify-center md:snap-none md:h-auto">
           <h2 className="pt-4 text-3xl font-bold leading-9">
             Projects<span className="hidden md:inline">:</span>
           </h2>
          <p className="text-text-secondary">The things that I have worked on!</p>
        </div>
        <Projects />
      </div>
     </div>
   </Layout>
);

export default Index;
