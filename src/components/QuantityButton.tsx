import { FiPlus, FiMinus } from "react-icons/fi";

export default function QuantityButton({handleIncProp, handleDecProp, quantityProp} : {handleIncProp : () => void, handleDecProp : () => void, quantityProp: number}) {
    return (
        <div className="flex justify-end my-5 mx-3">
          {/* Quantity increase */}
        <button onClick={handleDecProp} className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-xl text-bold"><FiMinus /></button>
        {/* Quantity */}
        <div className="text-xl text-bold mx-3 w-6 flex items-center justify-center">{quantityProp}</div>
        {/* Quantity decrease */}
        <button onClick={handleIncProp} className="p-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-xl text-bold"><FiPlus /></button>
      </div>
    );
}

