const BannerResultados = () => {
  return (
    <div className="min-h-screen mx-4 mt-10 flex flex-col justify-center align-middle">
      <div className="max-w-md text-center my-0 mx-auto">  
        <h1 className="text-5xl font-bold tracking-widest">Resultados</h1>
        <p className="py-6 text-lg">
          El resultado del test de temperamentos se basa en la premisa de que todos tenemos una combinación de los cuatro temperamentos principales, pero <span className="font-semibold bg-yellow-100">dos</span> de ellos son <span className="font-semibold bg-yellow-100">predominantes </span>en nuestra personalidad.
        </p>
      </div>
      <div className="w-full">
        <a href="#resultado">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 m-auto">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </a>
      </div>

    </div>
  )
}

export default BannerResultados