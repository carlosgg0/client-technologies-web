import { useState } from 'react';
import { useReducer } from 'react';

function AnadirTarea({ onAddTarea }) {
  const [texto, setTexto] = useState('');
  return (
    <>
      <input
        placeholder="Añadir tarea"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />
      <button
        onClick={() => {
          setTexto('');
          onAddTarea(texto);
        }}>
        Añadir
      </button>
    </>
  );
}

function ListaTareas({ tareas, onChangeTarea, onDeleteTarea }) {
  return (
    <ul>
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          <Tarea tarea={tarea} onChange={onChangeTarea} onDelete={onDeleteTarea} />
        </li>
      ))}
    </ul>
  );
}

function Tarea({ tarea, onChange, onDelete }) {
  const [estaEditando, setEstaEditando] = useState(false);
  let contenidoTarea;
  if (estaEditando) {
    contenidoTarea = (
      <>
        <input
          value={tarea.texto}
          onChange={(e) => {
            onChange({
              ...tarea,
              texto: e.target.value,
            });
          }}
        />
        <button onClick={() => setEstaEditando(false)}>Guardar</button>
      </>
    );
  } else {
    contenidoTarea = (
      <>
        {tarea.texto}<> </>
        <button onClick={() => setEstaEditando(true)}>Modificar</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="checkbox"
        checked={tarea.hecho}
        onChange={(e) => {
          onChange({
            ...tarea,
            hecho: e.target.checked,
          });
        }}
      />
      {contenidoTarea}<> </>
      <button onClick={() => onDelete(tarea.id)}>Eliminar</button>
    </label>
  );
}

export default function TareasApp() {

  const [tareas, dispatch] = useReducer(tareasReducer, tareasIniciales);

  function handleAddTarea(texto) {
    dispatch({
      type: 'anadir',
      id: nextId++,
      texto: texto
    });
  }

  function handleChangeTarea(tarea) {
    dispatch({
      type: 'cambiar',
      tarea: tarea
    });
  }

  function handleDeleteTarea(tareaId) {
    dispatch({
      type: 'eliminar',
      tareaId: tareaId
    });
  }

  function tareasReducer(tareas, accion) {
    switch (accion.type) {
      case 'anadir': {
        return [
          ...tareas,
          {
            id: accion.id,
            texto: accion.texto,
            hecho: false
          }
        ];
      }
      case 'cambiar': {
        return tareas.map((t) => {
          if (t.id === accion.tarea.id) {
            return accion.tarea;
          } else {
            return t;
          }
        });
      }
      case 'eliminar': {
        return tareas.filter((t) => t.id !== accion.tareaId);
      }
      default: {
        throw Error('Acción desconocida: ' + accion.type);
      }
    }
  }

  return (
    <>
      <h1>Itinerario de Córdoba</h1>
      <AnadirTarea onAddTarea={handleAddTarea} />
      <ListaTareas
        tareas={tareas}
        onChangeTarea={handleChangeTarea}
        onDeleteTarea={handleDeleteTarea}
      />
    </>
  );
}

let nextId = 3;
const tareasIniciales = [
  { id: 0, texto: 'Puente romano', hecho: true },
  { id: 1, texto: 'Mezquita', hecho: false },
  { id: 2, texto: 'Judería', hecho: false },
];
