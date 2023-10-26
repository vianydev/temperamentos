'use client'
import BannerResultados from "../components/bannerResultados";
import Link from "next/link";

export default function ResultPage() {
  const isBrowser = typeof window !== "undefined";

  let sanFortalezas = 0;
  let colFortalezas = 0;
  let melFortalezas = 0;
  let flemFortalezas = 0;

  let sanDebilidades = 0;
  let colDebilidades = 0;
  let melDebilidades = 0;
  let flemDebilidades = 0;

  let sanTotal = 0;
  let colTotal = 0;
  let melTotal = 0;
  let flemTotal = 0;

  if (isBrowser) {    
    sanFortalezas = parseInt(localStorage.getItem('san-fortalezas')) * 100 / 20;
    colFortalezas = parseInt(localStorage.getItem('col-fortalezas')) * 100 / 20;
    melFortalezas = parseInt(localStorage.getItem('mel-fortalezas')) * 100 / 20;
    flemFortalezas = parseInt(localStorage.getItem('flem-fortalezas')) * 100 / 20;
    
    sanDebilidades = parseInt(localStorage.getItem('san-debilidades')) * 100 / 20;
    colDebilidades = parseInt(localStorage.getItem('col-debilidades')) * 100 / 20;
    melDebilidades = parseInt(localStorage.getItem('mel-debilidades')) * 100 / 20;
    flemDebilidades = parseInt(localStorage.getItem('flem-debilidades')) * 100 / 20;
    
    sanTotal = parseInt(localStorage.getItem('san-total')) * 100 / 40;
    colTotal = parseInt(localStorage.getItem('col-total')) * 100 / 40;
    melTotal = parseInt(localStorage.getItem('mel-total')) * 100 / 40;
    flemTotal = parseInt(localStorage.getItem('flem-total')) * 100 / 40;
  }

  return (
    <div>
      <BannerResultados />
      <div className="py-2 min-h-screen text-gray-500">
        <div id="resultado" className="mx-2 md:m-auto w-full md:w-10/12 lg:w-8/12 grid grid-cols-1 md:grid-cols-2 gap-2">

          <div className="block h-auto p-4 pb-6 my-2 bg-white rounded-lg shadow">
            <span className="text-lg inline-block py-1 uppercase rounded-2 text-red-400 tracking-wider">
              Sanguíneo
            </span>
            <p className='ml-2 inline-block text-2xl font-extrabold text-red-400'>
              {sanTotal}%
            </p>
            <p className="ml-2 py-2 h-28">
              Caracterizado por la sociabilidad, la energía y la extroversión. Las personas sanguíneas son a menudo optimistas y entusiastas.
            </p>
            <div className='pt-2'>
              <h2 className='text-md font-light inline-block pt-1'>Fortalezas</h2>
              <div className="w-full h-8 bg-gray-200 rounded-full mt-1">
                <div className={`h-full text-center text-sm text-white font-extrabold bg-red-400 rounded-tl-full rounded-bl-full`}
                  style={{ width: `${sanFortalezas}%` }}>
                  <p className='ml-2 h-[inherit] flex items-center'>{sanFortalezas}%</p>
                </div>
              </div>
            </div>
            <div className='pt-2'>
              <h2 className='text-md font-light inline-block pt-1'>Debilidades</h2>
              <div className="w-full h-8 bg-gray-200 rounded-full mt-1">
                <div className={`h-full text-center text-sm text-white font-extrabold bg-red-400 rounded-tl-full rounded-bl-full`}
                  style={{ width: `${sanDebilidades}%` }}>
                  <p className='ml-2 h-[inherit] flex items-center'>{sanDebilidades}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="block h-auto p-4 pb-6 my-2 bg-white rounded-lg shadow">
            <span className="text-lg inline-block py-1 uppercase text-yellow-500 tracking-wider">
              Colérico
            </span>
            <p className='ml-2 inline-block text-2xl font-extrabold text-yellow-500'>
              {colTotal}%
            </p>
            <p className="ml-2 py-2 h-28">
              Caracterizado por la acción, la determinación y la toma de decisiones rápidas. Las personas coléricas son a menudo líderes fuertes y orientadas a objetivos.
            </p>
            <div className='pt-2'>
              <h2 className='text-md font-light inline-block pt-1'>Fortalezas</h2>
              <div className="w-full h-8 bg-gray-200 rounded-full mt-1">
                <div className={`h-full text-center text-sm text-white font-extrabold bg-yellow-500 rounded-tl-full rounded-bl-full`}
                  style={{ width: `${colFortalezas}%` }}>
                  <p className='ml-2 h-[inherit] flex items-center'>{colFortalezas}%</p>
                </div>
              </div>
            </div>
            <div className='pt-2'>
              <h2 className='text-md font-light inline-block pt-1'>Debilidades</h2>
              <div className="w-full h-8 bg-gray-200 rounded-full mt-1">
                <div className={`h-full text-center text-sm text-white font-extrabold bg-yellow-500 rounded-tl-full rounded-bl-full`}
                  style={{ width: `${colDebilidades}%` }}>
                  <p className='ml-2 h-[inherit] flex items-center'>{colDebilidades}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="block h-auto p-4 pb-6 my-2 bg-white rounded-lg shadow">
            <span className="text-lg inline-block py-1 px-2 uppercase text-blue-500 tracking-wider">
              Melancólico
            </span>
            <p className='ml-2 inline-block text-2xl font-extrabold text-blue-500'>
              {melTotal}%
            </p>
            <p className="ml-2 py-2 h-28">
              Caracterizado por la sensibilidad, la creatividad y el perfeccionismo. Las personas melancólicas suelen ser reflexivas y profundas.
            </p>
            <div className='pt-2'>
              <h2 className='text-md font-light inline-block pt-1'>Fortalezas</h2>
              <div className="w-full h-8 bg-gray-200 rounded-full mt-1">
                <div className={`h-full text-center text-sm text-white font-extrabold bg-blue-500 rounded-tl-full rounded-bl-full`}
                  style={{ width: `${melFortalezas}%` }}>
                  <p className='ml-2 h-[inherit] flex items-center'>{melFortalezas}%</p>
                </div>
              </div>
            </div>
            <div className='pt-2'>
              <h2 className='text-md font-light inline-block pt-1'>Debilidades</h2>
              <div className="w-full h-8 bg-gray-200 rounded-full mt-1">
                <div className={`h-full text-center text-sm text-white font-extrabold bg-blue-500 rounded-tl-full rounded-bl-full`}
                  style={{ width: `${melDebilidades}%` }}>
                  <p className='ml-2 h-[inherit] flex items-center'>{melDebilidades}%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="block h-auto p-4 pb-6 my-2 bg-white rounded-lg shadow">
            <span className="text-lg inline-block py-1 px-2 uppercase text-green-500 tracking-wider">
              Flemático
            </span>
            <p className='ml-2 inline-block text-2xl font-extrabold text-green-500'>
              {flemTotal}%
            </p>
            <p className="ml-2 py-2 h-28">
              Caracterizado por la calma, la paciencia y la adaptabilidad. Las personas flemáticas tienden a ser relajadas y no se alteran fácilmente.
            </p>
            <div className='pt-2'>
              <h2 className='text-md font-light inline-block pt-1'>Fortalezas</h2>
              <div className="w-full h-8 bg-gray-200 rounded-full mt-1">
                <div className={`h-full text-center text-sm text-white font-extrabold bg-green-500 rounded-tl-full rounded-bl-full`}
                  style={{ width: `${flemFortalezas}%` }}>
                  <p className='ml-2 h-[inherit] flex items-center'>{flemFortalezas}%</p>
                </div>
              </div>
            </div>
            <div className='pt-2'>
              <h2 className='text-md font-light inline-block pt-1'>Debilidades</h2>
              <div className="w-full h-8 bg-gray-200 rounded-full mt-1">
                <div className={`h-full text-center text-sm text-white font-extrabold bg-green-500 rounded-tl-full rounded-bl-full`}
                  style={{ width: `${flemDebilidades}%` }}>
                  <p className='ml-2 h-[inherit] flex items-center'>{flemDebilidades}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="w-full text-center">
      
        <Link href='/' passHref className="inline-flex content-center m-auto px-6 py-3 text-sm font-medium rounded-full text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500">
          <p>Regresar al inicio</p>
          <span className="pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
          </span>

        </Link>
      
      </div>

    </div>
  )
}
