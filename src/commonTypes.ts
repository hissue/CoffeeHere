export interface ICategories {
    id: string;
    name: string;
}
  
export interface IProduct {
    categoryId: string;
    name: string;
    price: number;
    option?: IOption[];
}
  
export interface IOption {
    name: string;
    price?: number;
}

export interface ICoupons {
    id: string;
    type: string;
    name: string;
    price: number;
}

export interface ICartProduct {
    name: string;
    price: number;
    quantity: number;
    option?: IOption[];
    subTotal: number; 
  }