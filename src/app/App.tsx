import AskAnything from "../imports/AskAnything/AskAnything";

export default function App() {
  return (
    <div className="size-full flex items-center justify-center bg-gradient-to-b from-[#f1f2f3] to-[#ffffff] p-8">
      <div className="aspect-square w-full max-w-[600px] overflow-hidden">
        <AskAnything />
      </div>
    </div>
  );
}