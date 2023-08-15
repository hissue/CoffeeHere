import { atom, selector } from 'recoil';
import { ICartItem } from '../commonTypes';


export const cartState = atom<ICartItem[]>({
  key: 'cartState',
  default: []
});

// export const totalPriceSelector = selector({
//   key: 'totalPriceSelector',
//   get: ({ get }) => {
//     const cart = get(cartState);
//     const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
//     return total;
//   }
// });

// import { useRecoilValue } from 'recoil';
// import { totalPriceSelector } from './selectors'; // 위에서 정의한 selector

// const CartTotal = () => {
//   const totalPrice = useRecoilValue(totalPriceSelector);

//   return (
//     <div>
//       <p>Total Price: {totalPrice}원</p>
//     </div>
//   );
// };