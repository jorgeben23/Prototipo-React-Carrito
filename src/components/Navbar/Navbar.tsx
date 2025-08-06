import { Box, Home, LogOut, Menu, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { AppStore } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/states/usuario";
import { limpiarProductos } from "../../redux/states";
import { setLocalStorage } from "../../utilities";

export const NavbarComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const usuarioStorage = useSelector((state: AppStore) => state.usuario);
    const productosSeleccionados = useSelector((state: AppStore) => state.productos);

    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const cerrarSesion = () => {
        dispatch(logout());
        dispatch(limpiarProductos());
        setLocalStorage("PRODUCTOS", JSON.stringify([]));
        navigate("/login");
    }


    return (<>
        <div className="bg-gray-50 flex flex-col">
            <nav className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold text-indigo-600">Jorge's Store</div>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link to="/" className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    <Home className="w-4 h-4 mr-1" />
                                    Inicio
                                </Link>
                                <Link to="/productos" className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    <Box className="w-4 h-4 mr-1" />
                                    Productos
                                </Link>
                            </div>
                        </div>

                        <div className="hidden md:flex items-center space-x-4">
                            {usuarioStorage.usuario ? (
                                <>
                                    <Link to="/seleccionados" className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100 transition-colors relative">
                                        <ShoppingCart className="w-5 h-5" />
                                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{productosSeleccionados.length}</span>
                                    </Link>
                                    <button onClick={cerrarSesion} className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer" title="Cerrar sesión">
                                        <LogOut className="w-5 h-5" />
                                    </button>
                                </>
                            ) : (<>
                                <Link to="/login" className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                                    <User className="w-5 h-5" />
                                </Link>
                            </>)}


                        </div>

                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-700 hover:text-indigo-600 p-2 rounded-md transition-colors"
                            >
                                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">

                            {usuarioStorage.usuario ? (<>
                                <Link to="/" className="flex items-center text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                                    <Home className="w-4 h-4 mr-2" />
                                    Inicio
                                </Link>
                                <Link to="/productos" className="flex items-center text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                                    <Box className="w-4 h-4 mr-1" />
                                    Productos
                                </Link>
                                <Link to="/seleccionados" className="flex items-center text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                                    <ShoppingCart className="w-5 h-5 mr-1" />
                                    Carrito
                                </Link>
                                <button onClick={cerrarSesion} className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer inline-flex gap-2" title="Cerrar sesión">
                                    <LogOut className="w-5 h-5 " />
                                    <div className="font-bold">Cerrar sesión</div>
                                </button>
                            </>) : (<>

                                <Link to="/" className="flex items-center text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                                    <Home className="w-4 h-4 mr-2" />
                                    Inicio
                                </Link>
                                <Link to="/productos" className="flex items-center text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                                    <Box className="w-4 h-4 mr-1" />
                                    Productos
                                </Link>
                                <Link to="/login" className="flex items-center text-gray-700 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">
                                    <User className="w-5 h-5" />
                                    Iniciar Sesión
                                </Link>
                            </>)}


                        </div>
                    </div>
                )}
            </nav>
        </div>
    </>);
}

export default NavbarComponent