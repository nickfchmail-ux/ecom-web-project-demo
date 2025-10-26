"use client"; //
import "@/app/scss/main.scss";

export default function Picture({ URL, KEY }) {
  let number = KEY + 1;
  return (
    <div
      className={`spiritPic${number} spiritPic`}
      style={{
        backgroundImage: `url(${URL})`,
        backgroundSize: "cover",
      }}
      src={URL}
      alt=""
    />
  );
}
