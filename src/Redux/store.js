import { configureStore } from "@reduxjs/toolkit";
import reducer from "./Slices/slices";

export const store = configureStore({
    reducer:{
        nav: reducer,
    },
});