const BannerHero = () => {
  return (
    <div className="bg-base-200 min-h-screen mx-4 mt-10 flex flex-col justify-center align-middle">
      <div className="max-w-md text-center my-0 mx-auto">
        <h1 className="text-5xl font-bold">¡Bienvenido a TemperaTest!</h1>
        <p className="py-6 text-lg">
          ¿Te has preguntado alguna vez por qué reaccionas de cierta manera en situaciones específicas? ¿O cómo tu personalidad influye en tus decisiones diarias? TemperaTest está aquí para ayudarte a descubrirlo.
        </p>
        <ul className="list-disc list-inside text-start py-2">
          <li className="py-2">Lee cuidadosamente y selecciona la característica que más te distingue en cada fila.</li>
          <li className="py-2">Recuerda seleccionar la característica que realmente te describe, no la que te gustaría tener.</li>
          <li className="py-2">Sé honesto contigo mismo mientras respondes. No hay respuestas correctas o incorrectas; simplemente se trata de conocerte mejor.</li>
        </ul>
        <div className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default BannerHero;