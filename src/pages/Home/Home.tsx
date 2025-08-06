import { Box } from "lucide-react";
import { Link } from "react-router-dom";

export const HomeComponent = () => {
    return (<>
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
                👨‍🎓 Alumno: Jorge Bryhan Benites Vera
            </h2>
            <p className="text-gray-600 mb-4">
                Curso: Desarrollo Web Full Stack con Java & React
            </p>

            <div className="text-sm text-gray-700 space-y-1">
                <p>👨‍🏫 Docente: Victor Villazón</p>
                <p>📚 Proyecto: Prototipo de carrito de compras</p>
                <p>🛠️ Tecnologías: React, Tailwind, React-router, Barrel & Redux</p>
                <p>🔑 <b>Usuario : </b> bjorge <b>Contraseña : </b> 123456</p>
                <p className="text-red-600  font-bold"> * Para realizar la compra se debe de iniciar Sesion con las credenciales asiganadas</p>
            </div>

            <Link
                to="/productos"
                className="mt-5 inline-flex items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition"
            >
                <Box className="w-5 h-5" />
                Ir a Productos
            </Link>
        </div>
    </>);
}

export default HomeComponent