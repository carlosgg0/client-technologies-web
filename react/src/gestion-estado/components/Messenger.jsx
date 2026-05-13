import { useState } from 'react';

function Chat({ contacto }) {
  const [texto, setTexto] = useState('');
  return (
    <section className="chat">
      <textarea
        value={texto}
        placeholder={'Conversación con ' + contacto.nombre}
        onChange={e => setTexto(e.target.value)}
      />
      <br />
      <button>Enviar a {contacto.email}</button>
    </section>
  );
}

function ListaContactos({
  contactoSeleccionado,
  contactos,
  onSelect
}) {
  return (
    <section className="contact-list">
      <ul>
        {contactos.map(contacto =>
          <li key={contacto.id}>
            <button onClick={() => {
              onSelect(contacto);
            }}>
              {contacto.nombre}
            </button>
          </li>
        )}
      </ul>
    </section>
  );
}

export default function Messenger() {
  const [dest, setDest] = useState(contactos[0]);
  return (
    <div>
      <ListaContactos
        contactos={contactos}
        contactoSeleccionado={dest}
        onSelect={contacto => setDest(contacto)}
      />
      <Chat key={dest.id} contacto={dest} />
    </div>
  )
}

const contactos = [
  { id: 0, nombre: 'Pedro', email: 'pedro@mail.com' },
  { id: 1, nombre: 'Alicia', email: 'alicia@mail.com' },
  { id: 2, nombre: 'Roberto', email: 'roberto@mail.com' }
];
