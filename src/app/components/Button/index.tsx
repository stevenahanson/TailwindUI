"use client";

import { useState } from "react";

export default function Button() {
  const [showButton, setShowButton] = useState(true);

  return (
    <>
      <div className="w-full h-full flex items-center justify-center absolute">
        <a
          href="#"
          className={`bg-blue-400 text-white text-5xl p-5 ${
            showButton ? "" : "hidden"
          }`}
          onClick={() => setShowButton(false)}
        >
          Button
        </a>
      </div>
    </>
  );
}
