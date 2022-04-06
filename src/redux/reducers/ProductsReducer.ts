import { IProductsReducer } from "@interfaces/redux/IProductsReducer";
import {
    ProductCategorySelectAction,
    ProductInitAction,
    ProductSelectAction,
} from "@redux/actions/ProductsAction";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IProductsReducer = {
    list: null,
    categorySelected: null,
    selected: null,
};

const slice = createSlice({
    name: "products",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ProductInitAction, (state, action) => {
                state.list = action.payload;
            })
            .addCase(ProductCategorySelectAction, (state, action) => {
                state.categorySelected = action.payload;
            })
            .addCase(ProductSelectAction, (state, action) => {
                state.selected = action.payload;
            })
            .addDefaultCase((_state) => { });
    },
});

export default slice.reducer;
