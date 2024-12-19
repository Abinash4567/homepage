import Image from "next/image";
import logo from "../../../../public/Group 37110.png";
import Button from "../Button";

export default function Sidebar() {
  return(<div className="md:flex flex-col justify-between md:w-60 h-screen px-5 border-r">
  <div>
    <div className="h-[92px] my-5">
      <div className="flex">
        <Image
          src={logo}
          alt="Picture of the logo"
          width={28.5}
          height={32}
        />
        <div className="ml-2 text-xl text-[#181D27]">CodeAnt AI</div>
      </div>

      <div className="mt-4">
        <select className="border text-gray-900 rounded-lg block w-full py-2 border-slate-300 bg-slate-50 placeholder-white" defaultValue="NP">
          <option value="NP">UtkarshDhairyaPa...</option>
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
</div>)
}