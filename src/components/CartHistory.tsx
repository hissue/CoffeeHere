
import { IoReturnUpForward } from "react-icons/io5";
import { PiXBold } from "react-icons/pi";

// recoil
import { useRecoilValue, useRecoilState } from 'recoil';
import { cartState, totalPriceSelector } from '../recoil/atom';

import { ICartProduct, IOption } from "../commonTypes";
import QuantityButton from "./QuantityButton";

export default function CartHistory({handleShowStatus} : {handleShowStatus : () => void}) {
    const cart = useRecoilValue(cartState);
    const totalPrice = useRecoilValue(totalPriceSelector);

    return (
        <div>
            <div className="fixed top-0 right-0 h-full w-1/4 text-black shadow-xl z-10">
                <div className="h-4/5 flex flex-col bg-white rounded-tl-3xl">
                    {/* Cart Banner */}
                    <div className="flex justify-between items-center mt-7 mx-6">
                        <div className="sm:text-xl lg:text-4xl">주문 내역</div>
                        <button onClick={handleShowStatus} className="flex items-center sm:text-md lg:text-xl">
                            뒤로 <IoReturnUpForward className="ml-2 text-2xl" />
                        </button>
                    </div>
                    <div className="ml-7 my-2 h-full overflow-y-scroll overflow-x-hidden">
                        {/* ChoiceCoffee 컴포넌트 또는 내용 */}
                        {cart.map((product, index) => (
                            <SelectedProduct key={`cart_${product.name}_${index}`} selectedProduct={product} />
                        ))}
                    </div>
                </div>
                <div className="relative h-1/5 flex flex-col justify-end rounded-bl-3xl custom-pay-color">
                    <div className="ml-7 flex justify-between items-center h-full">
                        Total
                        <div className="sm:text-xl lg:text-3xl mr-7">
                            {totalPrice}원
                        </div>
                    </div>
                    {/* 모달이 나오게 */}
                    <button className="mx-7 mb-5 mt-3 custom-button flex justify-center">결제</button>
                </div>
            </div>
        </div>
    );
}


function SelectedProduct({ selectedProduct }: { selectedProduct: ICartProduct }) {
    const [myList, setMyList] = useRecoilState(cartState);
  
    // recoil Delete
    const handleDelete = () => {
      const updatedList = myList.filter(product => product !== selectedProduct);
      setMyList(updatedList);
    };
  
    // Recoil Change
    const handleQuantityChange = (newQuantity: number) => {
      const updatedCart = myList.map(cartProduct =>
        cartProduct.name === selectedProduct.name
          ? { ...cartProduct, quantity: newQuantity, subTotal: selectedProduct.price * newQuantity + newQuantity * calculateOptionTotal(selectedProduct.option || [])}
          : cartProduct
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
            {selectedProduct.name}
          </div>
  
          {selectedProduct.option?.map((op) => (
            <div className="flex justify-end text-sm text-gray-400 mb-2" key={op.name}>
              <div>{op.name}</div>
              {op.price ? (
                <div>{`${op.price * selectedProduct.quantity}원`}</div>
              ) : <div>0원</div>}
  
            </div>
          ))}
          <QuantityButton
            handleIncProp={() => handleQuantityChange(selectedProduct.quantity + 1)}
            handleDecProp={() => handleQuantityChange(selectedProduct.quantity - 1)}
            quantityProp={selectedProduct.quantity}
          />
        </div>
        <div>
          subTotal : {selectedProduct.subTotal}
          </div>
        <div className="text-gray-600 mb-1 sm:text-sm lg:text-xl">
          {selectedProduct.price * selectedProduct.quantity}원
        </div>
        <button onClick={handleDelete} className="flex justify-end mr-4 mt-0 rounded-md text-gray-400 hover:text-gray-700">
          <PiXBold />
        </button>
      </div >
    );
}