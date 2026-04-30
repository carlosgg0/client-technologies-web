import { useState } from "react";

const API_URL = "http://localhost:8080/";

function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(API_URL + "inicio", {
                method: "POST",
                headers: { "Content-type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams(formData)
            });

            if (response.ok) {
                console.log("Login correcto");
            } else {
                alert("Usuario o contraseña incorrectos");
            }
        } catch (err) {
            console.log(`Hubo un problema: ${err}`);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}
                className="login-form">
                
                <fieldset>
                    <legend>Nombre de usuario:</legend>
                    <input type="text" name="username" id="usuario" 
                        onChange={handleChange}
                        required/>
                </fieldset>
                
                <fieldset>
                    <legend>Contraseña:</legend>
                    <input type="password" name="password" id="contrasena" 
                        onChange={handleChange}
                        required/>    
                </fieldset>

                <button type="submit">Iniciar sesión</button>
            </form>
        </>
    );
}

export default Login;