import React from 'react'
import { CircularText } from './icons'
import Link from 'next/link';

function HireMe() {
  return (
    <div className="fixed sm:left-0 bottom-4
    flex items-center justify-center overflow-hidden">
        <div className="w-20 h-20 md:w-40 md:h-40 flex items-center justify-center relative">
            <CircularText className="fill-dark animate-spin-slow w-20 h-20 md:w-40 md:h-40"/>
            <Link href="mailto:boyaprasad05@outlook.com" className='flex items-center justify-center
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark
              text-light shadow-md border border-solid border-dark rounded-full
              font-semi-bold hover:bg-light hover:text-dark text-xs
              w-10 h-10 md:w-20 md:h-20
              ' >
              Hire&nbsp;<span className='hidden sm:block'>Me</span>
              </Link>
        </div>
    </div>
  )
}

export default HireMe