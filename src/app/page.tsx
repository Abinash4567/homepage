'use client';

import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="sm:flex bg-white text-gray-900 overflow-hidden h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero isOpen={isOpen} />
    </div>
  );
}