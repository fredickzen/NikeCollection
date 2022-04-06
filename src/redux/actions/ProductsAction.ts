import { IProduct } from "@interfaces/models/IProduct";
import { createAction } from "@reduxjs/toolkit";

export const ProductInitAction = createAction(
    "PRODUCT_INIT",
    (reponse: IProduct[]) => {
        return {
            payload: reponse,
        };
    }
);

export const ProductCategorySelectAction = createAction(
    "PRODUCT_CATEGORY_SELECT",
    (category: string) => {
        return {
            payload: category,
        };
    }
);


export const ProductSelectAction = createAction(
    "PRODUCT_SELECT",
    (product: IProduct | null) => {
        return {
            payload: product,
        };
    }
);
