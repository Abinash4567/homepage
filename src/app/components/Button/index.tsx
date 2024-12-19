import { icons } from "lucide-react";

interface ButtonProps {
  text: string;
  iconName?: keyof typeof icons;
  variant?: "default" | "skeleton" | "outlined";
}

export default function Button({ text, iconName, variant = "default" }: ButtonProps) {
  const IconComponent = iconName ? icons[iconName] : null;

  const defaultClasses = "flex items-center sm:text-black md:text-white font-semibold md:bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2 me-2 mb-2";
  const skeletonClasses = "flex items-center py-2 px-2 me-2 text-sm font-bold text-gray-700 bg-white hover:cursor-pointer hover:text-gray-600";
  const outlinedClasses = "flex items-center py-2 px-4 me-2 mb-2 text-sm font-normal text-gray-500 bg-transparent border border-gray-300 rounded-lg hover:bg-gray-100";
  

  const buttonClasses = variant === "skeleton" ? skeletonClasses : variant === "outlined" ? outlinedClasses : defaultClasses;

  return (
    <button className={buttonClasses}>
      {IconComponent && <IconComponent className="mr-2" size={20} />}
      {text}
    </button>
  );
}