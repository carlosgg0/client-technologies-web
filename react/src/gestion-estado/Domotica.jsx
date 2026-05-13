import { useState } from 'react';

const INITIAL_DEVICES = {
    'luz-salon': { id: 'luz-salon', name: 'Luz Salón', type: 'light', value: 0 },
    'luz-cocina': { id: 'luz-cocina', name: 'Luz Cocina', type: 'light', value: 0 },
    'termostato-1': { id: 'termostato-1', name: 'Termostato Principal', type: 'thermostat', value: 20 },
    'persiana-salon': { id: 'persiana-salon', name: 'Persiana Salón', type: 'blind', value: 100 }
};

export default function HomeAutomationPanel() {
    // Estado aplanado: un objeto de dispositivos por ID para evitar jerarquías profundas
    const [devices, setDevices] = useState(INITIAL_DEVICES);

    // Estado elevado: Manejamos las actualizaciones de los hijos desde aquí
    const handleDeviceChange = (id, newValue) => {
        setDevices(prev => ({
            ...prev,
            [id]: { ...prev[id], value: newValue }
        }));
    };

    const turnAllLightsOn = () => {
        setDevices(prev => {
            const next = { ...prev };
            Object.values(next).forEach(dev => {
                if (dev.type === 'light') {
                    next[dev.id] = { ...dev, value: 100 }; // 100% de brillo
                }
            });
            return next;
        });
    };

    const turnAllLightsOff = () => {
        setDevices(prev => {
            const next = { ...prev };
            Object.values(next).forEach(dev => {
                if (dev.type === 'light') {
                    next[dev.id] = { ...dev, value: 0 };
                }
            });
            return next;
        });
    };

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '600px' }}>
            <h1>Panel de Domótica</h1>
            
            <div style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
                <h2>Control Maestro (Luces)</h2>
                <button onClick={turnAllLightsOn} style={{ marginRight: '1rem' }}>Encender Todas</button>
                <button onClick={turnAllLightsOff}>Apagar Todas</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {Object.values(devices).map(dev => (
                    <Device 
                        key={dev.id} 
                        device={dev} 
                        onChange={(val) => handleDeviceChange(dev.id, val)} 
                    />
                ))}
            </div>
        </div>
    );
}

function Device({ device, onChange }) {
    // Estados declarativos derivados y sin redundancias
    const isActive = device.value > 0;

    return (
        <div style={{
            padding: '1rem',
            border: '1px solid #eee',
            borderRadius: '8px',
            backgroundColor: isActive ? '#f0f8ff' : '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <div>
                <h3 style={{ margin: '0 0 0.5rem 0' }}>{device.name} <span>({device.type})</span></h3>
                <span style={{ color: isActive ? 'green' : 'gray' }}>
                    {isActive ? 'Activo' : 'Inactivo'}
                </span>
            </div>
            
            <div>
                {device.type === 'light' && (
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={device.value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        title="Nivel de brillo"
                    />
                )}
                {device.type === 'thermostat' && (
                    <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                        <button onClick={() => onChange(device.value - 1)}>-</button>
                        <span>{device.value}°C</span>
                        <button onClick={() => onChange(device.value + 1)}>+</button>
                    </div>
                )}
                {device.type === 'blind' && (
                    <input 
                        type="range" 
                        min="0" 
                        max="100" 
                        value={device.value}
                        onChange={(e) => onChange(Number(e.target.value))}
                        title="Nivel de apertura"
                    />
                )}
            </div>
        </div>
    );
}
