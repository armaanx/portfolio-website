import Card from "./Card";

export default function Projects() {
  return (
    <div className="p-12 h-screen  flex flex-col items-center justify-center">
      <h1 className="">Projects</h1>
      <div className="flex flex-col items-center justify-center md:flex-row">
        <Card />
        <Card />
      </div>
    </div>
  );
}
