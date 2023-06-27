'use client'
import { useEffect } from 'react';
import Navbar from '../components/navbav';
import MainFooter from '../components/mainFooter.js';
import BannerHero from '../components/bannerHero';

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
    // const sanFortalezas = parseInt(localStorage.getItem('san-fortalezas')) * 100 / 20;
    // const colFortalezas = parseInt(localStorage.getItem('col-fortalezas')) * 100 / 20;
    // const melFortalezas = parseInt(localStorage.getItem('mel-fortalezas')) * 100 / 20;
    // const flemFortalezas = parseInt(localStorage.getItem('flem-fortalezas')) * 100 / 20;
    
    // const sanDebilidades = parseInt(localStorage.getItem('san-debilidades')) * 100 / 20;
    // const colDebilidades = parseInt(localStorage.getItem('col-debilidades')) * 100 / 20;
    // const melDebilidades = parseInt(localStorage.getItem('mel-debilidades')) * 100 / 20;
    // const flemDebilidades = parseInt(localStorage.getItem('flem-debilidades')) * 100 / 20;
    
    // const sanTotal = parseInt(localStorage.getItem('san-total')) * 100 / 40;
    // const colTotal = parseInt(localStorage.getItem('col-total')) * 100 / 40;
    // const melTotal = parseInt(localStorage.getItem('mel-total')) * 100 / 40;
    // const flemTotal = parseInt(localStorage.getItem('flem-total')) * 100 / 40;
  }
  


  return (
    <main>
      <Navbar />
      <BannerHero />
      <div className="py-2 mx-2 grid grid-cols-1 md:grid-cols-2 gap-2">
        
        <div className="block p-4 my-2 bg-white rounded-lg shadow w-full lg:w-2/3 lg:place-self-end">
          <span className="text-lg font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-red-400">
            Sanguíneo
          </span>
          <p className='ml-2 inline-block text-2xl font-extrabold text-red-400'>
            {sanTotal}%</p>
          <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Fortalezas</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-red-400 rounded-full`}
                style={{ width: `${sanFortalezas}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{sanFortalezas}%</p>
              </div>
            </div>
          </div>
          <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Debilidades</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-red-400 rounded-full`}
                style={{ width: `${sanDebilidades}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{sanDebilidades}%</p>
              </div>
            </div>
          </div>
          {/* <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Total</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-red-400 rounded-full`}
                style={{ width: `${sanTotal}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{sanTotal}%</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="block p-4 my-2 bg-white rounded-lg shadow w-full lg:w-2/3 lg:place-self-start">
          <span className="text-lg font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-yellow-500">
            Colérico
          </span>
          <p className='ml-2 inline-block text-2xl font-extrabold text-yellow-500'>
            {colTotal}%</p>
          <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Fortalezas</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-yellow-500 rounded-full`}
                style={{ width: `${colFortalezas}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{colFortalezas}%</p>
              </div>
            </div>
          </div>
          <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Debilidades</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-yellow-500 rounded-full`}
                style={{ width: `${colDebilidades}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{colDebilidades}%</p>
              </div>
            </div>
          </div>
          {/* <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Total</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-yellow-500 rounded-full`}
                style={{ width: `${colTotal}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{colTotal}%</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="block p-4 my-2 bg-white rounded-lg shadow w-full lg:w-2/3 lg:place-self-end">
          <span className="text-lg font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-blue-500">
            Sanguíneo
          </span>
          <p className='ml-2 inline-block text-2xl font-extrabold text-blue-500'>
            {melTotal}%</p>
          <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Fortalezas</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-blue-500 rounded-full`}
                style={{ width: `${melFortalezas}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{melFortalezas}%</p>
              </div>
            </div>
          </div>
          <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Debilidades</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-blue-500 rounded-full`}
                style={{ width: `${melDebilidades}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{melDebilidades}%</p>
              </div>
            </div>
          </div>
          {/* <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Total</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-blue-500 rounded-full`}
                style={{ width: `${melTotal}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{melTotal}%</p>
              </div>
            </div>
          </div> */}
        </div>

        <div className="block p-4 my-2 bg-white rounded-lg shadow w-full lg:w-2/3 lg:place-self-start">
          <span className="text-lg font-light inline-block py-1 px-2 uppercase rounded-full text-white bg-green-500">
            Colérico
          </span>
          <p className='ml-2 inline-block text-2xl font-extrabold text-green-500'>
            {flemTotal}%</p>
          <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Fortalezas</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-green-500 rounded-full`}
                style={{ width: `${flemFortalezas}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{flemFortalezas}%</p>
              </div>
            </div>
          </div>
          <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Debilidades</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-green-500 rounded-full`}
                style={{ width: `${flemDebilidades}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{flemDebilidades}%</p>
              </div>
            </div>
          </div>
          {/* <div className='pt-2'>
            <h2 className='text-md font-light inline-block pt-1'>Total</h2>
            <div className="w-full h-8 bg-gray-400 rounded-full mt-1">
              <div className={`h-full text-center text-sm text-white font-extrabold bg-green-500 rounded-full`}
                style={{ width: `${flemTotal}%` }}>
                <p className='ml-2 h-[inherit] flex items-center'>{flemTotal}%</p>
              </div>
            </div>
          </div> */}
        </div>

      </div>

      <MainFooter />
    </main>
  )
}
