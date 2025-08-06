import { createSlice } from "@reduxjs/toolkit";
import type { User } from "../../models/user";
import Cookies from "js-cookie";

const usuarioCookie = Cookies.get('usuario')
const usuarioParse = usuarioCookie && JSON.parse(usuarioCookie)

const initialState : User = {
    usuario: usuarioParse?.usuario || '',
    password: usuarioParse?.password || ''
} 

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState: initialState,
    reducers: {
        login: (state, action) => {
            const newUsuario = {
                usuario: action.payload.usuario,
                password: action.payload.password
            }
            Cookies.set('usuario', JSON.stringify(newUsuario), { expires: 7})
            state.usuario = action.payload.usuario
            state.password = action.payload.password
        },
        logout : (state) => {
            Cookies.remove('usuario')
            state.usuario = ''
            state.password = ''
        }
    }
})

export const { login, logout } = usuarioSlice.actions
export default usuarioSlice