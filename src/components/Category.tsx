import React from "react";
import { SiCoffeescript } from "react-icons/si";

interface CategoryProps {
    label: string;
}

const Category: React.FC<CategoryProps> = ({ label }) => {
    return (
        <li className="p-3 border-2 rounded-xl my-3 cursor-pointer">
            <div className="flex-initial items-center justify-center text-3xl">
                <SiCoffeescript />
                <h3>{label}</h3>
            </div>
        </li>
    );
    
};

export default Category;
