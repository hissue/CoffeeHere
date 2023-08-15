import { PiCoffeeDuotone, PiXBold } from "react-icons/pi";
import { ICartItem } from "../commonTypes";
export default function ChoiceCoffee({selectedItem} : {selectedItem : ICartItem}) {

  return (
    <div className="flex justify-between my-6 border-b-2">
      <PiCoffeeDuotone className="text-4xl ml-2" />
      <div className="mx-3 text-right ">
        <div className="text-gray-600 mb-1 sm:text-sm lg:text-xl">
          {selectedItem.name}
        </div>
        <div className="text-sm text-gray-400 mb-2">Just Now</div>
        {/* <QuantityButton /> */}
      </div>
      <button className="flex justify-start mr-4 mt-0 rounded-md text-gray-400 hover:text-gray-700">
        <PiXBold />
      </button>
    </div>
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





