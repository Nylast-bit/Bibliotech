import { useState } from "react";
import CarritoCompras from "@/assets/CarritoCompras.png";
import Libreria from "@/assets/SignUpFondo.png";
import "./index.css";
import { LogInAccount } from "../../../API/authentication";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    loginStart,
    loginSuccess,
    loginFailure,
} from "../../../redux/userSlice";

interface Inputs {
    email?: string;
    password?: string;
}

function LogIn() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [inputs, setInputs] = useState<Inputs>({
        email: undefined,
        password: undefined,
    });

    const handleChange = (e: any) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handelLogIn = async () => {
        if (inputs.email && inputs.password) {
            try {
                dispatch(loginStart());
                const response = await LogInAccount(inputs.email, inputs.password);
                if (response.success === true) {
                    dispatch(loginSuccess(response.response));
                    toast.success(
                        `Welcome ${response.userData.NOMBRE.charAt(0).toUpperCase() +
                        response.userData.NOMBRE.slice(1).toLowerCase()
                        }!`
                    );
                    navigate("../Navigation/home");
                } else {
                    dispatch(loginFailure());
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
                <div id="Controls">
                    <div id="Register">
                        <h1 id="h1Welcomeback">Bienvenido!</h1>
                        <img id="imgCarrito_de_compras" src={CarritoCompras} />
                        <input
                            name="email"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            className="Username_y_Password"
                            placeholder="Email"
                            tabIndex={1}
                            type="text"
                        />
                        <input
                            name="password"
                            onChange={(e) => {
                                handleChange(e);
                            }}
                            className="Username_y_Password"
                            placeholder="Contraseña"
                            tabIndex={2}
                            type="password"
                        />
                        <div
                            style={{
                                position: "relative",
                                alignItems: "center",
                                justifyContent: "space-between",
                                left: "-2.5%",
                                marginTop: "-5%",
                                display: "flex",
                                flexDirection: "row",
                                width: "89%",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <input type="checkbox" id="chbxRemenberMe" value="Remeber Me" />
                                <h4 id="h4RemenberMe"> Recuérdame</h4>
                            </div>
                            <a
                                href="https://www.youtube.com"
                                className="Links"
                                style={{
                                    position: "relative",
                                    height: "40%",
                                    maxHeight: "40%",
                                    font: "1em Oswald MS",
                                    fontFamily: "'Oswald', sans-serif",
                                    color: "#D1E9F9",
                                    left: "-5%",
                                }}
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <input
                            id="LogIn"
                            type="button"
                            tabIndex={3}
                            value="Iniciar sesión"
                            onClick={handelLogIn}
                        />
                        <div id="divLinks1">
                            <a
                                href="https://www.youtube.com"
                                className="Links1"
                                style={{ color: "#D1E9F9" }}
                            >
                                ¿Todavía no tienes cuenta?
                            </a>
                            <a
                                href="https://www.youtube.com"
                                className="Links1"
                                style={{ color: "#1E608E", fontWeight: 'bold' }}
                            >
                                Crear cuenta
                            </a>
                        </div>
                    </div>
                </div>
                <img id="imgFondo" src={Libreria} />
            </div>
        </>
    );
}

export default LogIn;
