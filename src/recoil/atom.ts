import { atom } from 'recoil';
import { ICartItem } from '../commonTypes';


export const cartState = atom<ICartItem[]>({
  key: 'cartState',
  default: []
});