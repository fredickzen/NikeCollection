import ProductsReducer from "@redux/reducers/ProductsReducer";
import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { loadFromSessionStorage, saveToSessionStorage } from "./localStorage";


const rootReducer = combineReducers({
  products: ProductsReducer,
  });

const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromSessionStorage(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  devTools: process.env.NODE_ENV !== "production",
});

// listen for store changes and use saveToLocalStorage to
// save them to localStorage en cada cambio
// store.subscribe(() => saveToSessionStorage(store.getState()));
//save on close o refresh
window.onbeforeunload = () => saveToSessionStorage(store.getState());

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;
