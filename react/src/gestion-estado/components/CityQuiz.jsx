export default function CityQuiz({
  // Intenta con 'enviando', 'error', 'exito':
  estado = 'vacio'
}) {
  if (estado === 'exito') {
    return <h1>¡Correcto!</h1>
  } else {
    return (
      <>
        <h2>Adivina la ciudad</h2>
        <p>
          ¿En qué ciudad hay una cartelera que convierte el aire en agua potable?
        </p>
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
      </>
    );
  }
}
