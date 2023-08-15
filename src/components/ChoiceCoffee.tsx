import { PiCoffeeDuotone, PiXBold } from "react-icons/pi";

import QuantityButton from "./QuantityButton"

export default function ChoiceCoffee() {


  return (
    <div className="flex justify-between my-6 border-b-2">
      <PiCoffeeDuotone className="text-4xl ml-2" />
      <div className="mx-3 text-right ">
        <div className="text-gray-600 mb-1 sm:text-sm lg:text-xl">
          Cinnamon and Cocoa
        </div>
        <div className="text-sm text-gray-400 mb-2">Just Now</div>
        <QuantityButton />
      </div>
      <button className="flex justify-start mr-4 mt-0 rounded-md text-gray-400 hover:text-gray-700">
        <PiXBold />
      </button>
    </div>
  );
}
