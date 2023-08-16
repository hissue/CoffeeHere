import { atom, selector } from 'recoil';
import { ICartProduct } from '../commonTypes';

// Cart History
export const cartState = atom<ICartProduct[]>({
  key: 'cartState',
  default: []
});

// Total Price
export const totalPriceSelector = selector({
  key: 'totalPriceSelector',
  get: ({ get }) => {
    const cart = get(cartState);
    const total = cart.reduce((acc, product) => acc + product.subTotal, 0);
    return total;
  }
});