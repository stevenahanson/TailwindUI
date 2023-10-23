"use client";

import { useState } from "react";
import Image from "next/image";

export default function Button() {
  const [showButton, setShowButton] = useState(true);
  const imgSource = "/image/batman-bam.png";

  return (
    <>
      <div className="w-full h-full flex items-center justify-center absolute">
        <a
          href="#"
          className={`bg-blue-400 text-white text-5xl p-5 hover:bg-violet-500 rounded ${
            showButton ? "" : "hidden"
          }`}
          onClick={() => setShowButton(false)}
        >
          Button
        </a>
        <div>
          <Image
            className={`${showButton ? "hidden" : ""}`}
            alt="bam"
            width={200}
            height={200}
            src={imgSource}
          />
        </div>
      </div>
    </>
  );
}
