'use client';

import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/Group 37110.png";
import pie from "../../../public/Group 4.png";
import Spider from "../../../public/Subtract.png"; // Import the Spider image
import Leaderboard from "../components/leaderboard";
import { MoveUp } from "lucide-react";

const saaslogin = [
  { name: "Github", logo: "/Github.png" },
  { name: "Bitbucket", logo: "/Bitbucket.png" },
  { name: "Azure Devops", logo: "/Azure.png" },
  { name: "GitLab", logo: "/Gitlab.png" },
];

const selfhosted = [
  { name: "GitLab", logo: "/Gitlab.png" },
  { name: "SSO", logo: "/SSO.png" },
];

export default function Login() {
  const [loginType, setLoginType] = useState<"SAAS" | "Self Hosted">("SAAS");

  return (
    <div className="flex flex-col md:flex-row h-screen bg-white text-black">
      
      <div className="hidden md:flex basis-1/2 justify-center items-center border-r relative">
        <div>
          <div className="rounded-3xl shadow-[0px_0px_9px_4px_#08173529]">
            <div className="flex py-4 justify-center items-center">
              <Image src={logo} alt="CodeAnt Logo" width={20} />
              <div className="font-semibold text-sm ml-2">AI to Detect & Autofix Bad Code</div>
            </div>
            <div className="h-[1px] w-full bg-[#E6E8F0]"></div>
            <div className="flex justify-between pl-10 py-4">
              <Leaderboard amount="30" caption="Language Support" />
              <Leaderboard amount="10K" caption="Developers" />
              <Leaderboard amount="100K" caption="Hours Saved" />
            </div>
          </div>
          <div className="rounded-3xl shadow-[0px_0px_9px_4px_#08173529] flex ml-60 py-4 px-8 -mt-3 bg-white">
            <div>
              <Image src={pie} height={50} alt="Pie Chart" />
              <div className="text-xs font-semibold mt-2">Issues Fixed</div>
              <div className="font-bold text-3xl text-[#081735]">500K+</div>
            </div>
            <div className="ml-4">
              <div className="flex items-center">
                <MoveUp color="#0049c6" strokeWidth={3} size={20} />
                <div className="text-sm font-semibold text-[#0049c6] ml-1">14%</div>
              </div>
              <div className="text-[12px] text-[#171717]">This week</div>
            </div>
          </div>
        </div>
        <Image
          src={Spider}
          alt="Spider"
          width={200}
          height={200}
          className="absolute bottom-0 left-0"
        />
      </div>

      <div className="flex-grow bg-[#FAFAFA] flex justify-center items-center">
        <div className="w-full mx-4">
          <div className="rounded-md bg-white border p-6">
            <div className="flex justify-center items-center mb-6">
              <Image 
                src={logo} 
                alt="CodeAnt Logo" />
              <div className="mt-1 text-xl text-[#181D27]">CodeAnt AI</div>
            </div>
            <div className="text-2xl font-semibold text-center">Welcome to CodeAnt AI</div>
            <div className="flex justify-center mx-8 rounded-lg border-2 my-4">
              <button
                className={`basis-1/2 px-6 py-2 font-semibold ${loginType === "SAAS"
                  ? "bg-blue-600 text-white rounded-lg"
                  : "text-[#414651] bg-[#FAFAFA]"
                }`}
                onClick={() => setLoginType("SAAS")}
              >
                SAAS
              </button>
              <button
                className={`basis-1/2 px-6 py-2 font-semibold ${loginType === "Self Hosted"
                  ? "bg-blue-600 text-white rounded-lg"
                  : "text-[#414651] bg-[#FAFAFA]"
                }`}
                onClick={() => setLoginType("Self Hosted")}
              >
                Self Hosted
              </button>
            </div>
            <div className="h-[1px] w-full bg-[#E6E8F0] mb-4"></div>
            <div className="flex flex-col space-y-4 h-80 items-center px-4 sm:px-16 lg:px-32">
              {(loginType === "SAAS" ? saaslogin : selfhosted).map((method, index) => (
                <button
                  key={index}
                  className="w-full py-2 border hover:bg-gray-100 text-gray-800 font-semibold text-sm rounded-lg flex items-center space-x-3 pl-20"
                >
                  <Image 
                    src={method.logo} 
                    alt={method.name} 
                    width={20} 
                    height={20} 
                    className="w-5 h-5" />
                  <span>Sign in with {method.name}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="text-sm mt-2 text-center">
            By signing up you agree to the <span className="font-semibold">Privacy Policy.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
