import React, { useState, useEffect } from 'react'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import { HiX } from 'react-icons/hi'

export default function Modal({ show, handler, title, description, children }) {
  const [targetElement, setTargetElement] = useState(null)

  useEffect(() => {
    setTargetElement(document.querySelector('#modal'))
    if (targetElement) {
      if (show) disableBodyScroll(targetElement)
      else enableBodyScroll(targetElement)
    }
  }, [targetElement, show])

  return(
    <>
      <div
        id='modal'
        className={
          'fixed top-1/2 left-1/2 w-11/12 sm:w-[28rem] p-4 rounded bg-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-150 '
          + ( show ? 'z-[110] visible opacity-100' : 'z-0 invisible opacity-0' )
        }
      >
        <div className='flex flex-col gap-4 items-center w-full mb-8 text-lg'>
          <HiX
            className='self-end text-xl hover:text-accent-primary cursor-pointer'
            onClick={() => handler(false)}
          />
          <h1 className='text-center w-full max-w-sm font-semibold text-2xl'>
            {title}
          </h1>
          <p className='w-full max-w-sm'>
            {description}
          </p>
          <div className='w-full max-w-sm'>
            {children}
          </div>
        </div>
      </div>
      <div
        className={
          'fixed top-0 left-0 w-full h-full bg-overlay transition-opacity duration-150 '
          + ( show ? 'z-[100] visible opacity-100' : 'z-0 invisible opacity-0' )
        }
        onClick={() => handler(false)}
      />
    </>
  )
}