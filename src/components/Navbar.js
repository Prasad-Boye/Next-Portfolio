import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Logo from './Logo';
import { TwitterIcon, PinterestIcon, GitHubIcon, LinkedinIcon, HamburgerIcon, CloseIcon } from './icons';

const CustomLink = ({ href, title, className = "" , highlight}) => {
    const router = useRouter();
    return (
        <>
            {highlight ? <Link href={href} className={`${className} relative group`}>
                {title}
                <span className={
                    `h-[1px] inline-block bg-dark
                    absolute left-0 -bottom-0.5
                    group-hover:w-full transition-[width] ease duration-300
                    ${router.asPath === href ? 'w-full' : 'w-0'}
                    `
                }
                >&nbsp;</span>
            </Link> :
            <Link href={href} className={`${className} relative group w-full ${router.asPath === href ? 'bg-dark p-2 text-light' : 'w-0'}`}>
                {title}
            </Link>
            }
        </>
    );
};

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className='w-full px-8 lg:px-32 shadow py-8 font-medium flex justify-between md:items-between relative'>
            <nav className='hidden md:flex items-center justify-start'>
                <CustomLink href='/' title='Home' className='mr-4' highlight={true}/>
                <CustomLink href='/about' title='About' className='mx-4' highlight={true}/>
                <CustomLink href='/projects' title='Projects' className='mx-4' highlight={true}/>
                <CustomLink href='/skills' title='Skills' className='ml-4' highlight={true}/>
            </nav>
            <div className="flex flex-grow items-center">
                <nav className='hidden flex-grow items-center md:flex  md:justify-end justify-start flex-wrap mr-auto'>
                    <motion.a href='https://twitter.com/prasad_boya' target='_blank' className={'mr-3 w-5 md:w-7'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}>
                        <TwitterIcon />
                    </motion.a>
                    <motion.a href='https://www.linkedin.com/in/prasad-boye/' target='_blank' className={'mx-3 w-5 md:w-7'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}>
                        <LinkedinIcon />
                    </motion.a>
                    <motion.a href='https://github.com/Prasad-Boye' target='_blank' className={'mx-3 w-5 md:w-7'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}>
                        <GitHubIcon />
                    </motion.a>
                    <motion.a href='https://in.pinterest.com/prasad_boye/' target='_blank' className={'ml-3 w-5 md:w-7'}
                        whileHover={{ y: -2 }}
                        whileTap={{ scale: 0.9 }}>
                        <PinterestIcon />
                    </motion.a>
                </nav>
                <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none ml-auto">
                    <HamburgerIcon />
                </button>
                {menuOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex justify-end">
                        <div className="bg-white w-64 h-full flex flex-col items-start justify-start pt-16">
                            <div className='flex items-center absolute top-4 right-4' >
                                <nav className='flex flex-grow items-center md:hidden mr-10 md:justify-end justify-start flex-wrap'>
                                    <motion.a href='https://twitter.com/prasad_boya' target='_blank' className={'mr-3 w-5 md:w-7'}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}>
                                        <TwitterIcon />
                                    </motion.a>
                                    <motion.a href='https://www.linkedin.com/in/prasad-boye/' target='_blank' className={'mx-3 w-5 md:w-7'}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}>
                                        <LinkedinIcon />
                                    </motion.a>
                                    <motion.a href='https://github.com/Prasad-Boye' target='_blank' className={'mx-3 w-5 md:w-7'}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}>
                                        <GitHubIcon />
                                    </motion.a>
                                    <motion.a href='https://in.pinterest.com/prasad_boye/' target='_blank' className={'ml-3 w-5 md:w-7'}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.9 }}>
                                        <PinterestIcon />
                                    </motion.a>
                                </nav>
                                <button onClick={toggleMenu} className=" text-gray-800 focus:outline-none">
                                    <CloseIcon />
                                </button>
                            </div>

                            <nav className="flex flex-col items-start w-full">
                                <CustomLink href='/' title='Home' className='my-4 px-6' highlight={false} />
                                <CustomLink href='/about' title='About' className='my-4 px-6' highlight={false}/>
                                <CustomLink href='/projects' title='Projects' className='my-4 px-6' highlight={false} />
                                <CustomLink href='/skills' title='Skills' className='my-4 px-6' highlight={false}/>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    );
};

export default Navbar;
