import { Database } from "lucide-react";

const data = [
  {
    name: "design-system",
    visibility: "Public",
    tech: "React",
    size: "7320 KB",
    updated: "1 day ago",
  },
  {
    name: "codeant-ci-app",
    visibility: "Private",
    tech: "Javascript",
    size: "5871 KB",
    updated: "2 days ago",
  },
  {
    name: "analytics-dashboard",
    visibility: "Private",
    tech: "Python",
    size: "4521 KB",
    updated: "5 days ago",
  },
  {
    name: "mobile-app",
    visibility: "Public",
    tech: "Swift",
    size: "3096 KB",
    updated: "3 days ago",
  },
  {
    name: "e-commerce-platform",
    visibility: "Private",
    tech: "Java",
    size: "6210 KB",
    updated: "6 days ago",
  },
  {
    name: "blog-website",
    visibility: "Public",
    tech: "HTML/CSS",
    size: "1876 KB",
    updated: "4 days ago",
  },
  {
    name: "social-network",
    visibility: "Private",
    tech: "PHP",
    size: "5432 KB",
    updated: "7 days ago",
  },
];


export default function Repo(){
  return(
    <div className="w-full hover:cursor-pointer">
      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 sm:p-3 border-t hover:bg-slate-100 hover:cursor-pointer">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-lg font-medium text-black">{item.name}</h3>
                <span
                  className="text-xs px-2 sm:py-0.5 rounded-xl bg-blue-100 text-blue-500 border border-blue-500">
                  {item.visibility}
                </span>
              </div>
              <div className="flex">
                <div className="flex">
                  <p className="text-xs sm:text-sm text-gray-700 mr-2">{item.tech}</p>
                  <div className="bg-blue-600 w-2 h-2 rounded-full mt-[6px]"></div>
                </div>

              <div className="ml-10 flex">
                <Database color="#181616" size={13} className="mt-[4px]"/>
                <p className="text-xs sm:text-sm text-gray-700 mr-2 ml-1">{item.size}</p>
              </div>

                <p className="text-xs sm:text-sm text-gray-700 ml-6">Updated {item.updated}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
)}