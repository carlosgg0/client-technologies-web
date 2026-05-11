import { useState } from "react";

const ITEMS = [
    {
        id: 0,
        title: 'Inicio',
        content: 'Bienvenido a la página principal de nuestra aplicación sincronizada.'
    },
    {
        id: 1,
        title: 'Perfil',
        content: 'Aquí puedes ver y editar la información de tu cuenta de usuario.'
    },
    {
        id: 2,
        title: 'Ajustes',
        content: 'Configura las preferencias de la aplicación y notificaciones.'
    },
    {
        id: 3,
        title: 'Ayuda',
        content: '¿Tienes problemas? Consulta nuestra sección de preguntas frecuentes.'
    }
];


export default function MainView() {

    const [selectedItemId, setSelectedItemId] = useState(0);

    return (
        <>
            <Sidebar
                items={ITEMS}
                setSelectedId={setSelectedItemId} 
            />
            <MainContent
                items={ITEMS}
                selectedItemId={selectedItemId} 
            />
        </>
    );
}

function Sidebar({ items, setSelectedId }) {

    return (
        <aside>
            <nav>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <button onClick={() => setSelectedId(item.id)}>
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}

function MainContent({ items, selectedItemId }) {
    return (
        <main>
            <h3>{items[selectedItemId].title}</h3>
            <p>{items[selectedItemId].content}</p>
        </main>
    )
}