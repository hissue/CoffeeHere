// Category Type
export interface ICategories {
    id: string;
    name: string;
}

// Product Type
export interface IProduct {
    categoryId: string;
    name: string;
    price: number;
    option?: IOption[];
}

// Option Type
export interface IOption {
    name: string;
    price?: number;
}

// Cart Product Type
export interface ICartProduct {
    name: string;
    price: number;
    quantity: number;
    option?: IOption[];
    subTotal: number; 
  }

// Coupon Type
export interface ICoupons {
    id: string;
    type: string;
    name: string;
    price: number;
}