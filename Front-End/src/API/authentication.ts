import axios from "axios";

export const LogInAccount = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      correo_electronico: email,
      contrasena: password,
    });
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los contenidos");
  }
};

export const SignUpAccount = async (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/signup`,
      {
        nombre: name,
        correo_electronico: email,
        contrasena: password,
        confirmar_contrasena: confirmPassword,
      }
    );
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener los contenidos");
  }
};
