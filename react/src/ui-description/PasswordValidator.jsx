import { useState } from "react";

function PasswordValidator() {

    let [password, setPassword] = useState('');

    const tieneLongitud = password.length > 8;
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const esFuerte = tieneLongitud && tieneMayuscula && tieneNumero;

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <label>
                Introduce tu contraseña:
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    style={{ display: 'block', marginTop: '10px' }}
                />
            </label>

            <div style={{ marginTop: '15px' }}>
                {/* Renderizado condicional de requisitos individuales */}
                {!tieneLongitud && <p style={{ color: 'red' }}>✘ Debe tener más de 8 caracteres.</p>}
                {tieneLongitud && <p style={{ color: 'green' }}>✔ Longitud suficiente.</p>}

                {!tieneMayuscula && <p style={{ color: 'red' }}>✘ Falta una letra mayúscula.</p>}
                {tieneMayuscula && <p style={{ color: 'green' }}>✔ Contiene mayúsculas.</p>}

                {!tieneNumero && <p style={{ color: 'red' }}>✘ Falta al menos un número.</p>}
                {tieneNumero && <p style={{ color: 'green' }}>✔ Contiene números.</p>}

                {/* Mensaje adicional de éxito */}
                {esFuerte && (
                    <div style={{ padding: '10px', backgroundColor: '#e6fffa', border: '1px solid #38b2ac', marginTop: '10px' }}>
                        <strong style={{ color: '#2c7a7b' }}>¡Seguridad Máxima! La contraseña es fuerte.</strong>
                    </div>
                )}
            </div>
        </div>
    );
}

export default PasswordValidator;