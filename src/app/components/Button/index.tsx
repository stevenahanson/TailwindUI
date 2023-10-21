"use client";

export default function Button() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center absolute">
        <a
          href="#"
          className="bg-blue-400 text-white text-5xl p-5"
          onClick={() => console.log("clicked!")}
        >
          Button
        </a>
      </div>
    </>
  );
}
