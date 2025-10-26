"use client"; //
import "@/app/scss/main.scss";

export default function Slogan({ slogans }) {
  return (
    <>
      {slogans.map((slogan) => (
        <h2 className="slogan">{slogan}</h2>
      ))}
    </>
  );
}
