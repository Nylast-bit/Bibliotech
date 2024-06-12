import { useState } from "react";
import Señorita from "@/assets/Señorita.png";
import Libreria from "@/assets/SignUpFondo.png";
import "./index.css";
import { SignUpAccount } from "../../../API/authentication";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface Inputs {
  name?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
}

function SignUp() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState<Inputs>({
    name: undefined,
    email: undefined,
    password: undefined,
    confirmpassword: undefined,
  });

  const handleChange = (e: any) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSignUp = async () => {
    if (
      inputs.name &&
      inputs.email &&
      inputs.password &&
      inputs.confirmpassword
    ) {
      try {
        const response = await SignUpAccount(
          inputs.name,
          inputs.email,
          inputs.password,
          inputs.confirmpassword
        );
        if (response.success === true) {
          toast.success("Account created successfully");
          navigate("/login");
        } else {
          toast.error("Incorrect credentials. Try again.");
        }
      } catch (error) {
        console.error("Error al validar el correo electrónico:", error);
      }
    }
  };

  return (
    <>
      <div className="container">
        <img id="imgFondo1" src={Libreria} />
        <div id="Controls1" className="Controls1">
          <div id="Register" className="Register">
            <h1 id="h1CreateAccount">Crear cuenta</h1>
            <img id="imgSeñorita" src={Señorita} />
            <input
              name="name"
              onChange={(e) => {
                handleChange(e);
              }}
              className="Email_y_Password"
              placeholder="Nombre"
              tabIndex={1}
              type="text"
            />
            <input
              name="email"
              onChange={(e) => {
                handleChange(e);
              }}
              className="Email_y_Password"
              placeholder="Email"
              tabIndex={3}
              type="text"
            />
            <input
              name="password"
              onChange={(e) => {
                handleChange(e);
              }}
              className="Email_y_Password"
              placeholder="Contraseña"
              tabIndex={4}
              type="password"
            />
            <input
              name="confirmpassword"
              onChange={(e) => {
                handleChange(e);
              }}
              className="Email_y_Password"
              placeholder="Confirmar contraseña"
              tabIndex={4}
              type="password"
            />
            <input
              id="SignUp"
              type="button"
              tabIndex={5}
              value="Registrarse"
              onClick={handleSignUp}
            />
            <div id="divLinks">
              <p className="Links" style={{ color: "#D1E9F9" }}>
                ¿Ya tienes una cuenta?
              </p>
              <p className="Links" style={{ color: "#1E608E" }}>
                Iniciar sesión
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
