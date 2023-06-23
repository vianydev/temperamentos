'use client'
import { useState } from "react";
import InfoPopUp from "./infoPopUp";

const RadioButton = ({
  name,
  id,
  text,
  value,
  info,
  handleAnswers,
  keyassign }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const onOpen = () => {
    const element = document.getElementById(`Pop-${id}`)
    element.classList.remove('popup-closed');
    element.classList.add('block');

    if (isOpen) {
      setIsOpen(false)
      element.classList.add('popup-closed');
    } else {
      setIsOpen(true)
      element.classList.remove('popup-closed');
    }
  } 
  
  return (
    <div className={id} >
      <input
        type="radio"
        name={name}
        value={value}
        id={id}
        accessKey={keyassign}
        className="peer hidden [&:checked_+_label_svg]:block"
        onClick={handleAnswers}
      />

      <label
        htmlFor={id}
        className="block mb-1 cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-400 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
      >
        <div className="flex items-center justify-between">
          <p className="text-gray-700">{ text }</p>

          <svg
            className="hidden h-5 w-5 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </label>
      <div className="flex justify-end">
        <button
          className="text-gray-400  hover:text-gray-800 mr-1"
          onClick={onOpen} >
          { !isOpen ? 
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor"
            aria-label="Agregar a favoritos"  
            className="w-6 h-6">
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg> :
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          }
        </button>
      </div>
      <InfoPopUp info={info} id={id} />
    </div>
  )
}

export default RadioButton;