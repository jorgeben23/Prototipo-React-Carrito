import { Heart, ShoppingCart, Star } from "lucide-react";
import type { Producto } from "../../models";
import type { AppStore } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addProducto } from "../../redux/states";
import Swal from "sweetalert2";

export const ProductosComponent = () => {

    const dispacth = useDispatch();
    const productosSeleccionados = useSelector((state: AppStore) => state.productos);
    const usuarioStorage = useSelector((state: AppStore) => state.usuario);


    const products = [
        {
            id: 1,
            title: "Smartphone Pro Max",
            description: "El smartphone mas avanzado en el mercado.",
            price: "S/. 999 PEN",
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=300&fit=crop",
            rating: 4.8,
            category: "Tecnología"
        },
        {
            id: 2,
            title: "Auriculares Inalámbricos",
            description: "Sonido premium con cancelación de ruido activa y 30 horas de batería.",
            price: "S/. 299 PEN",
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
            rating: 4.6,
            category: "Audio"
        },
        {
            id: 3,
            title: "Laptop Gaming Ultra",
            description: "Potencia extrema para gaming y trabajo profesional con GPU dedicada.",
            price: "S/. 1,499 PEN",
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop",
            rating: 4.9,
            category: "Gaming"
        },
        {
            id: 4,
            title: "Smartwatch Fitness",
            description: "Monitor de salud completo con GPS, resistente al agua y pantalla AMOLED.",
            price: "S/. 399 PEN",
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
            rating: 4.7,
            category: "Fitness"
        },
        {
            id: 5,
            title: "Cámara Profesional 4K",
            description: "Captura momentos increíbles con calidad profesional y estabilización avanzada.",
            price: "S/. 1,299 PEN",
            image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
            rating: 4.8,
            category: "Fotografía"
        },
        {
            id: 6,
            title: "Tablet Creativa Pro",
            description: "Perfecta para diseño y creatividad con stylus incluido y pantalla de alta resolución.",
            price: "S/. 799 PEN",
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=300&fit=crop",
            rating: 4.5,
            category: "Diseño"
        }
    ];

    const findProducto = (producto: Producto) => productosSeleccionados.some((p: Producto) => p.id === producto.id);

    const comprarProducto = (product: Producto) => () => {
        const estaProducto = findProducto(product);
        if (!estaProducto) {
            dispacth(addProducto([...productosSeleccionados, product]));
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado al carrito',
                text: `Producto ${product.title} agregado correctamente`
            });
        }
    };


    return (<>
        <main className="flex-1 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Descubre la Tecnología del Futuro
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Los mejores productos tecnológicos al mejor precio. Calidad garantizada y envío gratuito.
                    </p>
                    <p className="font-bold text-2xl"> Estan en Jorge's Store</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                                        {product.category}
                                    </span>
                                </div>                              
                            </div>

                            <div className="p-6">
                                <div className="flex items-center mb-2">
                                    <div className="flex items-center">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600 ml-2">({product.rating})</span>
                                </div>

                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{product.description}</p>

                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                                    {findProducto(product) ? (
                                        <button
                                            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg flex items-center cursor-not-allowed"
                                            disabled
                                            title="Producto ya en el carrito"
                                        >
                                            <ShoppingCart className="w-4 h-4 mr-2" />
                                        </button>
                                    ) : (!usuarioStorage.usuario) ? (
                                        <button
                                            className="bg-gray-400 text-white px-4 py-2 rounded-lg flex items-center cursor-not-allowed"
                                            disabled
                                            title="Debes iniciar sesión para comprar"
                                        >
                                            <ShoppingCart className="w-4 h-4 mr-2" />
                                            Comprar
                                        </button>
                                    ) : (
                                        <button
                                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center transition-colors cursor-pointer"
                                            onClick={comprarProducto(product)}
                                        >
                                            <ShoppingCart className="w-4 h-4 mr-2" />
                                            Comprar
                                        </button>
                                    )}



                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    </>);
}

export default ProductosComponent