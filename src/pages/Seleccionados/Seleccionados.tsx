import { useDispatch, useSelector } from "react-redux";
import type { AppStore } from "../../redux/store";
import { Trash } from "lucide-react";
import { removeProducto } from "../../redux/states";
import type { Producto } from "../../models";
import Swal from "sweetalert2";

export const SeleccionadosComponent = () => {
    const dispatch = useDispatch();
  const productos = useSelector((state: AppStore) => state.productos);

  const eliminarProducto = (id: number) => {
    const productoFound = productos.find((p:Producto) => p.id === id);
    if (productoFound) {
        dispatch(removeProducto(productoFound));
        Swal.fire({
            title: "Producto Eliminado",
            text: `El producto ${productoFound.title} ha sido eliminado de tus seleccionados.`,
            icon: "success",
            confirmButtonText: "Aceptar"
        });
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          🛒 Productos Seleccionados
        </h2>

        {productos.length === 0 ? (
          <p className="text-gray-500">No hay productos guardados.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-600">
              <thead className="text-xs uppercase bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3">ID</th>
                  <th className="px-4 py-3">Nombre</th>
                  <th className="px-4 py-3">Precio</th>
                  <th className="px-4 py-3 text-center">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {productos.map((producto) => (
                  <tr key={producto.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-2">{producto.id}</td>
                    <td className="px-4 py-2 font-medium text-gray-800">{producto.title}</td>
                    <td className="px-4 py-2">{producto.price}</td>
                    <td className="px-4 py-2 text-center">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white text-xs px-4 py-1 rounded-full transition cursor-pointer"
                        onClick={() => eliminarProducto(producto.id)}
                      >
                        <Trash/>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SeleccionadosComponent;
