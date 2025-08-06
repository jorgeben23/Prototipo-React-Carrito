import { dataCredenciales } from "../mocks";

export interface InicioSesionProps {
  usuario: string;
  password: string;
}

interface iniciarSe {
  data: InicioSesionProps;
}

export const ValidarInicioSesion = ({ data }: iniciarSe) => {
  const { usuario, password } = dataCredenciales;
  console.log(usuario);
  console.log(password);
  console.log(data);

  if (data.usuario === usuario && data.password === password) {
    return true;
  } else {
    return false;
  }
};

export default ValidarInicioSesion;
