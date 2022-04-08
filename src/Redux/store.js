import { configureStore } from "@reduxjs/toolkit";
import cockTailsSlice from "./features/cockTailsSlice";

export default configureStore({
    reducer:{
        app:cockTailsSlice,
    },
})