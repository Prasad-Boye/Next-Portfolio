import React from 'react'
import { motion } from 'framer-motion'

const quote = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}

const AnimatedText = ({ text, className = '' }) => {
  return (
    <div className='text-left items-center font-bold w-full inline-block py-2'>
      <motion.h1 variants={quote}
        initial='initial'
        animate='animate'
        className=" capitalizes text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl"
      >
        {text.split('').map((char, i) => (
          <motion.span key={`${char}-${i}`} className={`${className}`}
            variants={singleWord}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default AnimatedText
