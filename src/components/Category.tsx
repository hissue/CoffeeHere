import React from "react";
import { SiCoffeescript } from "react-icons/si";

interface CategoryProps {
  label: string;
}

const Category: React.FC<CategoryProps> = ({ label}) => {
  return (
    <li className="p-3 border-2 rounded-xl my-3 cursor-pointer flex items-center justify-center ">
      <div className="text-center">
        <SiCoffeescript className="sm:text-xl md:text-2xl lg:text-5xl" />
        <h3 className="sm:text-xs md:text-sm lg:text-base">{label}</h3>
      </div>
    </li>
  );
};

export default Category;
