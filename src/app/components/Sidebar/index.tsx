'use client';

import Image from "next/image";
import logo from "../../../../public/Group 37110.png";
import Button from "../Button";
import { Menu, X } from "lucide-react";

export default function Sidebar({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}) {
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Hamburger Menu for mobile */}
      <div className="sm:hidden flex justify-between items-center px-5 py-4 border-b w-svw z-10">
        <div className="flex items-center">
          <Image src={logo} alt="Picture of the logo" width={28.5} height={32} />
          <div className="ml-2 text-xl text-[#181D27]">CodeAnt AI</div>
        </div>
        <button onClick={toggleSidebar} aria-label="Toggle Sidebar">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed sm:static bg-white sm:flex flex-col justify-between sm:w-60 z-10 ${
          isOpen ? "w-full" : "hidden"
        } sm:block px-5 border-r sm:h-screen`}
      >
        <div>
          <div className="sm:h-[92px] sm:my-5">
            <div>
              <div className="hidden sm:flex justify-between">
                <div className="flex">
                  <Image
                    src={logo}
                    alt="Picture of the logo"
                    width={28.5}
                    height={32}
                  />
                  <div className="ml-2 text-xl text-[#181D27]">CodeAnt AI</div>
                </div>
              </div>
            </div>

            <div className="mt-2 sm:mt-4">
              <select
                className="text-gray-900 rounded-lg block w-full py-2 border-slate-300 bg-slate-50 placeholder-white"
                defaultValue="NP"
              >
                <option value="NP">UtkarshDhairyaPanwar</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
          <div>
            <Button text="Repositories" iconName="House" />
            <Button text="AI Code Review" iconName="CodeXml" variant="skeleton" />
            <Button text="Cloud Security" iconName="Cloud" variant="skeleton" />
            <Button text="How to Use" iconName="Book" variant="skeleton" />
            <Button text="Settings" iconName="Settings" variant="skeleton" />
          </div>
        </div>

        <div>
          <Button text="Support" iconName="Phone" variant="skeleton" />
          <Button text="Logout" iconName="LogOut" variant="skeleton" />
        </div>
      </div>
    </div>
  );
}
