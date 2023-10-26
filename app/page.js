'use client'
import { useState, useEffect } from "react";
import RadioButton from './components/radioButton';
import BannerHero from './components/bannerHero.js'
import fortalezas from './assets/fortalezas';
import debilidades from './assets/debilidades';
import Link from 'next/link';

export default function Home() {
  const [ selectedFortalezas, setSelectedFortalezas ] = useState([]);
  const [ selectedDebilidades, setSelectedDebilidades ] = useState([]);
  
  const handleSelectedFortalezas = (e) => {
    const { name, value } = e.target;
    const existingObjIndex = selectedFortalezas.findIndex(obj => obj.hasOwnProperty(name));

    if (existingObjIndex !== -1) {
      const updatedOption = { ...selectedFortalezas[ existingObjIndex ], [ name ]: value };
      const updatedOptions = [ ...selectedFortalezas ];
      updatedOptions.splice(existingObjIndex, 1, updatedOption);
      setSelectedFortalezas(updatedOptions);
    } else {
      const newOption = { [ name ]: value };
      setSelectedFortalezas(prevOptions => [ ...prevOptions, newOption ]);
    }
  }
  
  const handleSelectedDebilidades = (e) => {
    const { name, value } = e.target;
    const existingDebIndex = selectedDebilidades.findIndex(obj => obj.hasOwnProperty(name));

    if (existingDebIndex !== -1) {
      const updatedOption = { ...selectedDebilidades[ existingDebIndex ], [ name ]: value };
      const updatedOptions = [ ...selectedDebilidades ];
      updatedOptions.splice(existingDebIndex, 1, updatedOption);
      setSelectedDebilidades(updatedOptions);
    } else {
      const newOption = { [ name ]: value };
      setSelectedDebilidades(prevOptions => [ ...prevOptions, newOption ]);
    }
  }

  const countDefault = {
    fortalezas: 0,
    debilidades: 0,
    total: 0
  }

  const [ sanResults, setSanResults ] = useState(countDefault);
  const [ colResults, setColResults ] = useState(countDefault);
  const [ melResults, setMelResults ] = useState(countDefault);
  const [ flemResults, setFlemResults ] = useState(countDefault);

  const handleResults = () => {
    const fortalezasValues = selectedFortalezas.map(obj => Object.values(obj).toString())
    const debilidadesValues = selectedDebilidades.map(obj => Object.values(obj).toString())

    const countSanFortalezas = 
      fortalezasValues.filter(value => value === 'san').length
    const countColFortalezas = 
      fortalezasValues.filter(value => value === 'col').length;
    const countMelFortalezas = 
      fortalezasValues.filter(value => value === 'mel').length;
    const countFlemFortalezas = 
      fortalezasValues.filter(value => value === 'flem').length; 

    const countSanDebilidades = 
      debilidadesValues.filter(value => value === 'san').length
    const countColDebilidades = 
      debilidadesValues.filter(value => value === 'col').length;
    const countMelDebilidades =
      debilidadesValues.filter(value => value === 'mel').length;
    const countFlemDebilidades = 
      debilidadesValues.filter(value => value === 'flem').length; 

    setSanResults({
      fortalezas: countSanFortalezas,
      debilidades: countSanDebilidades,
      total: countSanFortalezas + countSanDebilidades });
    setColResults({ 
      fortalezas: countColFortalezas, 
      debilidades: countColDebilidades,
      total: countColFortalezas + countColDebilidades });
    setMelResults({ 
      fortalezas: countMelFortalezas,
      debilidades: countMelDebilidades, 
      total: countMelFortalezas + countMelDebilidades });
    setFlemResults({
      fortalezas: countFlemFortalezas,
      debilidades: countFlemDebilidades, 
      total: countFlemFortalezas + countFlemDebilidades });
  }

  useEffect(() => {
    const handleData = () => {
      localStorage.setItem('san-fortalezas', sanResults.fortalezas.toString());
      localStorage.setItem('san-debilidades', sanResults.debilidades.toString());
      localStorage.setItem('san-total', sanResults.total.toString());

      localStorage.setItem('col-fortalezas', colResults.fortalezas.toString());
      localStorage.setItem('col-debilidades', colResults.debilidades.toString());
      localStorage.setItem('col-total', colResults.total.toString());

      localStorage.setItem('mel-fortalezas', melResults.fortalezas.toString());
      localStorage.setItem('mel-debilidades', melResults.debilidades.toString());
      localStorage.setItem('mel-total', melResults.total.toString());

      localStorage.setItem('flem-fortalezas', flemResults.fortalezas.toString());
      localStorage.setItem('flem-debilidades', flemResults.debilidades.toString());
      localStorage.setItem('flem-total', flemResults.total.toString());
    }

    handleData()
  }, [sanResults, colResults, melResults, flemResults])

  return (
    <div className='bg-base-100 w-full'>
      <BannerHero />
      <div id="question-rows" className="flex flex-col justify-center text-center">
        <div id="fortalezas-rows" className='mx-2 md:m-auto md:w-10/12 lg:w-8/12'>
          <h1 className='text-lg text-gray-900 uppercase tracking-wide'>Fortalezas</h1>
          {fortalezas.map((row, index) => (
            <fieldset
              id={`row-fort-${index}`}
              key={index}
              className=" bg-slate-200 p-3 my-10 rounded-md grid grid-cols-12 gap-2">
              <div className="flex items-center	justify-center">
                <h2 className="text-lg font-semibold text-slate-700	">{index + 1}</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-4 col-span-11">
                {row.map((item) => (
                  <div key={item.id}>
                    <RadioButton
                      name={item.name}
                      keyassign={item.keyassign}
                      text={item.text}
                      id={item.id}
                      value={item.value}
                      info={item.info}
                      handleAnswers={handleSelectedFortalezas}
                    />
                  </div>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        <div id="debilidades-rows" className='mx-2 md:m-auto md:w-10/12 lg:w-8/12'>
          <h1 className='text-lg text-gray-900 uppercase tracking-wide'>Debilidades</h1>
          {debilidades.map((row, index) => (
            <fieldset
              id={`row-deb-${index}`}
              key={index}
              className=" bg-slate-200/80 p-3 my-10 rounded-md grid grid-cols-12 gap-2">
              <div className="flex items-center	justify-center">
                <h2 className="text-lg font-semibold text-slate-700	">{index + 1}</h2>
              </div>
              <div className="grid md:grid-cols-4 gap-4 col-span-11">
                {row.map((item) => (
                  <div key={item.id}>
                    <RadioButton
                      name={item.name}
                      keyassign={item.keyassign}
                      text={item.text}
                      id={item.id}
                      value={item.value}
                      info={item.info}
                      handleAnswers={handleSelectedDebilidades}
                    />
                  </div>
                ))}
              </div>
            </fieldset>
          ))}
        </div>
        <div id="count-results" className='mx-2 md:mx-10 pb-8'>
          <Link
            href='/results'
            onClick={handleResults}
            className="mt-5 inline-block rounded-full border border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            Resultados
          </Link>
        </div>
      </div>
    </div>
  )
}
