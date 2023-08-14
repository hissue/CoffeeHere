import React from "react";
import { PiCoffeeDuotone } from "react-icons/pi";

export default function ChoiceCoffee() {
  return (
    <div className="flex justify-between my-6">
      <PiCoffeeDuotone className="text-4xl ml-2" />
      <div className="mx-4 text-right border-b-2">
        <div className="text-gray-600 mb-1 sm:text-sm lg:text-xl">Cinnamon and Cocoa</div>
        <div className="text-sm text-gray-400 mb-2">Just Now</div>
        <div className="flex justify-end items-center mb-2">
          <button className="m-2 px-2 py-0 custom-button">-</button>
          <div className="m-2">0</div>
          <button className="m-2 px-2 py-0 custom-button">+</button>
        </div>
      </div>
    </div>
  );
}
