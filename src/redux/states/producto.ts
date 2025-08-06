import { createSlice, current } from "@reduxjs/toolkit";
import type { Producto } from "../../models";
import { setLocalStorage, getLocalStorage } from "../../utilities";

const initialState: Producto[] = [];
const key = "PRODUCTOS";

export const productoSlice = createSlice({
  name: "producto",
  initialState: getLocalStorage(key)
    ? JSON.parse(getLocalStorage(key) as string)
    : initialState,
  reducers: {
    addProducto: (state, action) => {
      setLocalStorage(key, action.payload);
      return action.payload;
    },
    removeProducto: (state, action) => {
      const filteredState = current(state).filter(
        (p: Producto) => p.id !== action.payload.id
      );
      setLocalStorage(key, filteredState);
      return filteredState;
    },
    limpiarProductos : () => {
      return [];
    }
  },
});

export const { addProducto, removeProducto, limpiarProductos } = productoSlice.actions
export default productoSlice  
