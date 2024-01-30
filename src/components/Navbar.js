import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {useRouter} from 'next/router'
import {TwitterIcon, PinterestIcon, GitHubIcon, LinkedinIcon} from './icons'
import {motion} from "framer-motion"

const CustomLink = ({href, title, className=""}) => {
    const router = useRouter();
    return(
    <Link href={href} className={ `${className} relative group`}>
    {title}  
    <span className={
        `h-[1px] inline-block bg-dark
        absolute left-0 -bottom-0.5
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? 'w-full' : 'w-0'}
        `
    }
    >&nbsp;</span>
    </Link>
    )
}

const Navbar = () => {
  return (
    <header
    className='w-full px-32 py-8 font-medium flex items-center justify-between'
    >
        <nav>
            <CustomLink href='/' title='Home' className='mr-4'/>
            <CustomLink href='/about' title='About' className='mx-4' />
            <CustomLink href='/projects'title='Projects' className='mx-4' />
            <CustomLink href='/articles' title='Articles' className='ml-4'/>
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
            <motion.a href='https://twitter.com/prasad_boya' target='_blank' className={'mr-3 w-7'} 
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}>
                <TwitterIcon />
            </motion.a>
            <motion.a href='https://www.linkedin.com/in/prasad-boye/' target='_blank' className={'mx-3 w-7'}  
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}>
                <LinkedinIcon />
            </motion.a>
            <motion.a href='https://github.com/Prasad-Boye' target='_blank' className={'mx-3 w-7'}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}>
                <GitHubIcon />
            </motion.a>
            <motion.a href='https://in.pinterest.com/prasad_boye/' target='_blank' className={'ml-3 w-7'}
            whileHover={{y:-2}}
            whileTap={{scale:0.9}}>
                <PinterestIcon />
            </motion.a>
        </nav>
        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo/>
        </div>
    </header>
  )
}

export default Navbar