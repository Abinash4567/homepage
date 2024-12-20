import { Search } from "lucide-react";
import Button from "../Button";
import Repo from "../Repo";

export default function Hero({isOpen}: {isOpen: boolean}) {
  return (
    <div className={`border w-full sm:m-4 rounded-lg pt-2 sm:pt-4 ${isOpen ? "bg-[#6C6C6C4D] opacity-55 z-10" : "sm:w-full"}`}>
      <div className="px-4">
        <div className="md:flex justify-between">
          <div>
            <div className="font-bold text-lg">Repositories</div>
            <div className="mb-2 text-sm text-[#414651]">33 total repositories</div>
          </div>

          <div>
            <div className="flex">
              <Button text="Refresh All" iconName="RefreshCcw" variant="outlined" />
              <Button text="Add Repository" iconName="Plus" />
            </div>
          </div>
        </div>

        <div className="relative sm:mt-4">
          {/* Adjusted styles to keep the Search icon inside the input field */}
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 z-0">
            <Search color="#414651" size={18} />
          </div>
          <input
            type="text"
            placeholder="Search Repositories"
            className="border p-[5px] w-72 rounded-lg text-sm pl-10"
          />
        </div>
      </div>

      <div className="mt-2 sm:mt-4">
        <Repo />
      </div>
    </div>
  );
}
