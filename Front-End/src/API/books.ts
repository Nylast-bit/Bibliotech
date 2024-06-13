import axios from "axios";

export const getBooks = async () => {
    try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/book`, {
            headers: {
                "ngrok-skip-browser-warning": "true"
            }
        });
        return response.data;
    } catch (error) {
        throw new Error("Error al obtener los libros");
    }
};
