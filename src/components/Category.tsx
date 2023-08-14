import React from "react";
import { SiCoffeescript } from "react-icons/si";

interface CategoryProps {
  label: string;
}

const Category: React.FC<CategoryProps> = ({ label}) => {
  return (
      <div className="text-center">
        <SiCoffeescript className="sm:text-xl md:text-2xl lg:text-5xl" />
        <h3 className="sm:text-xs md:text-sm lg:text-base">{label}</h3>
      </div>
  );
};

export default Category;
