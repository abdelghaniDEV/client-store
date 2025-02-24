
export interface Product {
    _id: string; // Optional since MongoDB assigns it automatically
    name: string;
    description?: string;
    details?: string;
    price: number;
    size?: string[];
    color?: string[];
    images?: string[];
    ShortDescription?: string;
    stock: number;
    categories: Category[]; // Store category IDs as strings
    ratings?: string[]; // Store rating IDs as strings
    created_at?: Date;
  }


export type Category = {
    _id: string;
    name: string;
    image: string;
    prroducts : any[]
    created_at: Date;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  size?: string;
  color?: string;
  image: string;
  quantity: number;
}

export interface reviewsItem {
  _id: string;
  fullName : string;
  rating : number;
  comment : string;
  image? : string;
  productId : string;
  createdAt : Date;
}