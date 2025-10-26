"use client";

import "@/app/scss/main.scss";
import Nav from "./components/nav";
import Hero from "./components/hero";

import Script from "next/script";

// In your JSX:
export default function Home() {
  return (
    <div className="view">
      {/* render script inside the component so Next will include it */}
      <Script
        src="/scripts/MyScript.js"
        strategy="beforeInteractive"
        onLoad={() => console.log("Script executed!")}
      />
      <Nav />
      <Hero />
    </div>
  );
}
