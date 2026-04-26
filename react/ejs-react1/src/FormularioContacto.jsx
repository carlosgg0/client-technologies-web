import { useState } from "react";

function FormularioContacto({ nombreIni, correoIni, temaIni }) {

  const [formData, setFormData] = useState({
    nombre: nombreIni || "",
    correo: correoIni || "",
    tema: temaIni || ""
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <div style={{fontFamily: "Arial", display: "flex", gap: "2em"}}>
      <form style={{backgroundColor: "lightblue", padding: "2em"}}>
        <h2>Formulario de Contacto</h2>
        <fieldset>
          <legend>Nombre:</legend>
          <input 
            type="text" 
            name="nombre" 
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </fieldset>

        <fieldset>
          <legend>Correo:</legend>
          <input 
            type="email" 
            name="correo" 
            placeholder="tu@correo.es"
            value={formData.correo}
            onChange={handleChange}
          />
        </fieldset>

        <label htmlFor="tema">Tema:</label>
        <select name="tema" value={formData.tema} onChange={handleChange}>
          <option value="general">Consulta General</option>
          <option value="soporte">Soporte</option>
          <option value="ventas">Ventas</option>
          <option value="otros">Otros</option>
        </select>
      </form>

      <div className="preview">
        <h3>Vista previa de los datos:</h3>
        <p><strong>Nombre: </strong>{formData.nombre}</p>
        <p><strong>Correo: </strong>{formData.correo}</p>
        <p><strong>Tema seleccionado: </strong>{formData.tema}</p>
      </div>

    </div>
  );
}

export default FormularioContacto;