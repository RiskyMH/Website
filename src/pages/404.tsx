import React from "react";
import Layout from "../layouts/layout";

const NotFoundPage = () => (
  <Layout title="404 | RiskyMH">
    <style>{`body { background-color: #1a1a1a; }`}</style>
     <main className="flex h-dvh w-screen flex-col items-center justify-center bg-[#1a1a1a] text-white" aria-labelledby="notfound-title" tabIndex={-1}>
       <h1 id="notfound-title" className="text-5xl font-bold">404</h1>
      <p className="text-[#8f8f8f]">Page not found</p>
     </main>
  </Layout>
);

export default NotFoundPage;
