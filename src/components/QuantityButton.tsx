import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

export default function QuantityButton() {
    const [quantity, setQuantity] = useState(0); // 숫자를 상태로 관리

    const handleIncrement = () => {
      setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
      if (quantity > 0) { // 0 이상까지만 감소 가능하도록
        setQuantity(quantity - 1);
      }
    };


    return (
        <div className="flex justify-end my-5 mx-3">
        <button onClick={handleDecrement} className="p-3 bg-indigo-600 rounded-lg text-white text-xl text-bold"><FiMinus /></button>
        <div className="text-xl text-bold mx-3 w-6 flex items-center justify-center">{quantity}</div>
        <button onClick={handleIncrement} className="p-3 bg-indigo-600 rounded-lg text-white text-xl text-bold"><FiPlus /></button>
      </div>
    );
}

