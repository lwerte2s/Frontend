import { Product } from './product';

export interface Order {
    kunde: string,
    accountRating: string,
    orders: Product[],
}