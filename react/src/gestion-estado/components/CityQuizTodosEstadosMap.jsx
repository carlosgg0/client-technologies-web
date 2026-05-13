function Form({ status: estado }) {
  if (estado === 'exito') {
    return <h1>¡Correcto</h1>
  }
  return (
    <form>
      <textarea disabled={
        estado === 'enviando'
      } />
      <br />
      <button disabled={
        estado === 'vacio' ||
        estado === 'enviando'
      }>
        Submit
      </button>
      {estado === 'error' &&
        <p className="Error">
          Buen intento pero una respuesta incorrecta. ¡Inténtalo de nuevo!
        </p>
      }
    </form>
  );
}

let statuses = [
  'vacio',
  'escribiendo',
  'enviando',
  'exito',
  'error',
];

export default function CityQuizTodosEstadosMap() {
  return (
    <>
      {statuses.map(estado => (
        <section key={estado}>
          <h4>Form ({estado}):</h4>
          <Form estado={estado} />
        </section>
      ))}
    </>
  );
}