import { useState } from "react";
import { LogIn, Store } from "lucide-react";
import { LoginService } from "../../api/services";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { login } from "../../redux/states/usuario";
import { useNavigate } from "react-router-dom";


export const LoginComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [usuario, setUsuario] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            usuario: usuario,
            password: password
        }
        const validarCredenciales = LoginService({ data: payload });
        if (!validarCredenciales) {
            Swal.fire({
                icon: 'error',
                title: 'Error en credenciales',
                text: 'Por favor ingresa usuario y contraseña nuevamente.',
            });
        } else {
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: `Credenciales corerctas`,
            });

            // -- se genera el Inicio de sesión exitoso
            dispatch(login(payload));
            navigate("/");
        }
    };

    return (
        <div className="flex items-center justify-center px-4">
            <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h2 className="inline-flex gap-2 text-3xl font-bold text-center text-blue-800 mb-6 ">
                    <Store /> Jorge's Store
                </h2>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <div>
                        <label
                            htmlFor="usuario"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Usuario:
                        </label>
                        <input
                            type="text"
                            id="usuario"
                            name="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu usuario"
                            required
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-1"
                        >
                            Contraseña:
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Ingresa tu contraseña"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full inline-flex justify-center items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition cursor-pointer"
                    >
                        <LogIn className="w-5 h-5" />
                        Iniciar Sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default LoginComponent;
