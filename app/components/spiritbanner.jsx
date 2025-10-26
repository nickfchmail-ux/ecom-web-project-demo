"use client"; //
import "@/app/scss/main.scss";
import Picture from "./picture.jsx";

export default function SpiritBanner({ URL, Slogan }) {
  return (
    <div className="spiritBanner">
      <video autoPlay loop muted>
        <source src="spirit.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="spiritBanner__pictures">
        {URL.map((picURL, index) => (
          <Picture key={index} URL={picURL} KEY={index} />
        ))}
      </div>
      <div className="spiritBanner__slogans">
        {Slogan.map((slo, index) => (
          <h2 className={`slogan${index}`}>{slo}</h2>
        ))}
      </div>
    </div>
  );
}
