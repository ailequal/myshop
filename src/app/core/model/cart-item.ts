import {Product} from "../../shared/model/product";

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
}
