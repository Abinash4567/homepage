import { Search } from "lucide-react";
import Button from "../Button";
import Repo from "../Repo";

export default function Hero() {
  return (
  <div className="border w-screen m-4 rounded-lg  pt-4">
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

      <div>
        <Search color="#414651" size={18} className="absolute mt-2 ml-2"/>
        <input type="text" placeholder="Search Repositories" className="border p-[5px] w-72 rounded-lg text-sm pl-10"></input>
      </div>
    </div>

    <div className="mt-4">
      <Repo />
    </div>
  </div>
)}