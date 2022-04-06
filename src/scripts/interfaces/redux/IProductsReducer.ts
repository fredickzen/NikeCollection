import { IProduct } from "@interfaces/models/IProduct";

export interface IProductsReducer {
    list: IProduct[] | null;
    categorySelected: string | null;
    selected: IProduct | null;
}
