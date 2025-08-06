import { configureStore } from "@reduxjs/toolkit";
import { usuarioSlice, productoSlice } from "./states";
import type { User } from "../models/user";
import type { Producto } from "../models";

export interface AppStore {
    usuario: User;
    productos: Producto[];
}


export const store = configureStore<AppStore>({
    reducer: {
        usuario: usuarioSlice.reducer,
        productos: productoSlice.reducer
    }
})

export default store