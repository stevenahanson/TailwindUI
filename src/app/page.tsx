import Button from "./components/Button";

export default function Home() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center absolute">
        <a href="#" className="bg-orange-400 text-white text-5xl p-5">
          Button
        </a>
      </div>
      <Button />
    </>
  );
}
