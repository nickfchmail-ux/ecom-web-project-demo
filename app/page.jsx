"use client";

import "@/app/scss/main.scss";
import Nav from "./components/nav";
import Hero from "./components/hero";
import SpiritBanner from "./components/spiritbanner.jsx";
import Script from "next/script";

// In your JSX:
export default function Home() {
  const picURL = [
    "/spirit1.jpg",
    "/spirit2.jpg",
    "/spirit3.jpg",
    "/spirit4.jpg",
  ];

  const slogan = [
    "Chase the Horizon, Fear No Path",
    "Unleash Your Wild, Conquer the Climb",
    "Roam Free, Thrive Untamed",
  ];

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
      <SpiritBanner URL={picURL} Slogan={slogan} />
    </div>
  );
}
