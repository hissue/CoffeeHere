import { atom, selector } from 'recoil';
import { ICartProduct } from '../commonTypes';

// Products in cart
export const cartState = atom<ICartProduct[]>({
  key: 'cartState',
  default: []
});

// Discount Price
export const discountPriceState = atom<number>({
  key: 'discountPriceState',
  default: 0,
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