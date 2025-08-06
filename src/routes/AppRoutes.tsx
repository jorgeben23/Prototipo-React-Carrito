import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./../pages").then(module => ({ default: module.Home })));
const Login = lazy(() => import("./../pages").then(module => ({ default: module.Login })));
const Gustos = lazy(() => import("./../pages").then(module => ({ default: module.Gustos })));
const Productos = lazy(() => import("./../pages").then(module => ({ default: module.Productos })));
const Seleccionados = lazy(() => import("./../pages").then(module => ({ default: module.Seleccionados })));

export const AppRoutes = () => {
    return (
        <Suspense fallback={<p>Cargando ...</p>} >
            <Routes >
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/favoritos" element={<Gustos />} />
                <Route path="/productos" element={<Productos />} />
                <Route path="/seleccionados" element={<Seleccionados />} />
            </Routes>
        </Suspense>
    );
}

export default AppRoutes