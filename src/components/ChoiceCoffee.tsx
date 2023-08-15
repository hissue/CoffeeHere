import { PiCoffeeDuotone, PiXBold } from "react-icons/pi";
import { ICartItem } from "../commonTypes";
// 수량 증가 감소 하면서 각 항목의 총 합계 작성 필요
// total은 selector로 구현
// pay에서는 quantityButoon이 필요 없고 여기서는 필요 따라서 이거 구별해서 props 전달
export default function ChoiceCoffee({ selectedItem }: { selectedItem: ICartItem }) {
  console.log(selectedItem);
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
        {/* <QuantityButton /> */}
      </div>
      <div className="text-gray-600 mb-1 sm:text-sm lg:text-xl">
        {selectedItem.price * selectedItem.quantity}원
      </div>
      <button className="flex justify-end mr-4 mt-0 rounded-md text-gray-400 hover:text-gray-700">
        <PiXBold />
      </button>
    </div >
  );
}

// import { useRecoilState } from 'recoil';
// import { cartState } from './atoms'; // cartState는 이전에 정의한 atom

// const CartItemComponent = ({ item }: { item: CartItem }) => {
//   const [cart, setCart] = useRecoilState(cartState);

//   const handleQuantityChange = (newQuantity: number) => {
//     const updatedCart = cart.map(cartItem =>
//       cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
//     );

//     setCart(updatedCart);
//   };

//   return (
//     <div>
//       <h3>{item.name}</h3>
//       <p>Price: {item.price}</p>
//       <p>Quantity: {item.quantity}</p>
//       <button onClick={() => handleQuantityChange(item.quantity + 1)}>Increase Quantity</button>
//       <button onClick={() => handleQuantityChange(item.quantity - 1)}>Decrease Quantity</button>
//     </div>
//   );
// };





