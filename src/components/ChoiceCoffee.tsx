import { PiXBold } from "react-icons/pi";
import { ICartItem, IOption } from "../commonTypes";
import QuantityButton from "./QuantityButton";

// recoil
import { useRecoilState } from 'recoil';
import { cartState } from '../recoil/atom';

// 수량 증가 감소 하면서 각 항목의 총 합계 작성 필요
// total은 selector로 구현
// pay에서는 quantityButoon이 필요 없고 여기서는 필요 따라서 이거 구별해서 props 전달
export default function ChoiceCoffee({ selectedItem }: { selectedItem: ICartItem }) {
  const [myList, setMyList] = useRecoilState(cartState);

  // recoil Delete
  const handleDelete = () => {
    const updatedList = myList.filter(item => item !== selectedItem);
    setMyList(updatedList);
  };

  // Recoil Change
  const handleQuantityChange = (newQuantity: number) => {
    const updatedCart = myList.map(cartItem =>
      cartItem.name === selectedItem.name
        ? { ...cartItem, quantity: newQuantity, subTotal: selectedItem.price * newQuantity + newQuantity * calculateOptionTotal(selectedItem.option || [])}
        : cartItem
    );

    setMyList(updatedCart);
  };

  const calculateOptionTotal = (options: IOption[]) => {
    return options.reduce((total, option) => total + (option.price || 0), 0);
  };

  return (
    <div className="flex justify-between my-6 border-b-2">
      <div className="mx-3 text-right">
        <div className="text-gray-600 mb-1 sm:text-sm lg:text-xl">
          {selectedItem.name}
        </div>

        {selectedItem.option?.map((op) => (
          <div className="flex justify-end text-sm text-gray-400 mb-2" key={op.name}>
            <div>{op.name}</div>
            {op.price && (
              <div>{`${op.price * selectedItem.quantity}원`}</div>
            )}
            
          </div>
        ))}
        <QuantityButton
          handleIncProp={() => handleQuantityChange(selectedItem.quantity + 1)}
          handleDecProp={() => handleQuantityChange(selectedItem.quantity - 1)}
          quantityProp={selectedItem.quantity}
        />
      </div>
      <div className="text-gray-600 mb-1 sm:text-sm lg:text-xl">
        {selectedItem.price * selectedItem.quantity}원
      </div>
      <button onClick={handleDelete} className="flex justify-end mr-4 mt-0 rounded-md text-gray-400 hover:text-gray-700">
        <PiXBold />
      </button>
    </div >
  );
}