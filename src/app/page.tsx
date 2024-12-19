import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex bg-white text-gray-900 overflow-hidden">
      <Sidebar/>
      <Hero />
    </div>
  );
}