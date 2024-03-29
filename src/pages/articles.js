import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
import jslogo from '../../public/images/articles/jsLogo.png'
import reactLogo from '../../public/images/articles/React_Logo.png'
import nextLogo from '../../public/images/articles/Nextjs_Logo.png'
import nodeLogo from '../../public/images/articles/node_js_logo.png'
import pythonLogo from '../../public/images/articles/Python_Logo.png'
import bootstrapLogo from '../../public/images/articles/bootstrap_logo.png'
import tailwindLogo from '../../public/images/articles/tailwind_Logo.png'
import muiLogo from '../../public/images/articles/muiLogo.png'
import htmlLogo from '../../public/images/articles/HTMLLogo.png'
import cssLogo from '../../public/images/articles/CSS3_Logo.png'
import sqlLogo from '../../public/images/articles/SQL_Logo.png'
import swLogo from '../../public/images/articles/solidworks_logo.png'

function articles() {
  return (
    <Layout>
        <section className="text-gray-400 bg-gray-900 body-font rounded-lg">
        <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Areas of Expertise</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Transitioning from Design to Coding
            </p>
            </div>
            <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} className="px-20 py-7 bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg" alt="gallery" src={jslogo} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">JavaScript</h2>
                    <p className="leading-relaxed">JavaScript (JS) is a high-level programming language commonly used for creating interactive and dynamic web content. It enables developers to manipulate website elements, handle events, and build complex web applications.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-3 bg-white absolute inset-0 w-full h-full object-cover object-center rounded-lg" src={reactLogo} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">React JS</h2>
                    <p className="leading-relaxed">React.js is a JavaScript library for building user interfaces, renowned for its component-based architecture and efficient rendering. It enables developers to create dynamic web applications with ease, enhancing performance and maintainability.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-3 bg-light absolute inset-0 w-full h-full object-cover object-center rounded-lg" src={nextLogo} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Next JS</h2>
                    <p className="leading-relaxed">Next.js is a powerful React framework that simplifies building fast and scalable web applications with features like server-side rendering and automatic code splitting making it ideal for building high-performance web applications.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-3 bg-light absolute inset-0 w-full h-full object-cover object-center rounded-lg" src={nodeLogo} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Node JS</h2>
                    <p className="leading-relaxed">Node.js is a runtime environment that allows developers to run JavaScript code on the server-side, enabling fast and scalable network application creation. It utilizes event-driven model, making it efficient for building real-time applications and APIs.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-3 bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg" src={pythonLogo} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Python</h2>
                    <p className="leading-relaxed">Python is a high-level programming language known for its simplicity and readability, favored by developers for its extensive standard library. It&apos;s widely used for web development, data analysis, artificial intelligence, and automation.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-7 bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg" src={bootstrapLogo}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Bootstrap</h2>
                    <p className="leading-relaxed">Bootstrap is a Front-end framework for responsive web design, offering pre-designed CSS and JavaScript components for building modern, mobile-friendly websites with ease. It has many ready to use styled HTML components.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-5 bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg" src={tailwindLogo}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Tailwind CSS</h2>
                    <p className="leading-relaxed">Tailwind CSS revolutionizes styling with utility-first approach, offering a flexible and customizable framework that streamlines the creation of modern designs without writing custom CSS. It facilitates the creation of modern, responsive websites with ease. </p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-10 bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg" src={muiLogo}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Material-UI (MUI)</h2>
                    <p className="leading-relaxed">Material-UI, is a popular React UI framework that implements Google&apos;s Material Design principles. With its easy customization and integration with React projects, MUI simplifies the process of creating modern and consistent user interfaces.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-10 bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg" src={htmlLogo}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">HTML5</h2>
                    <p className="leading-relaxed">HTML5 is a standard markup language for creating web pages and applications, introducing new features like multimedia support, and enhanced accessibility. Its robust capabilities empower developers to build dynamic web experiences.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-8 bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg" src={cssLogo}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">CSS3</h2>
                    <p className="leading-relaxed">Cascading Style Sheets language, offers advanced styling capabilities such as gradients, transitions, and animations. With its expanded feature set, CSS3 enables designers to create visually stunning and responsive web designs.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="px-20 py-5 bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg" src={sqlLogo}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">SQL</h2>
                    <p className="leading-relaxed">Structured Query Language (SQL) is a powerful domain-specific language used for managing and manipulating relational databases, facilitating data handling tasks such as retrieval, insertion, updating, and deletion of objects from tables.</p>
                </div>
                </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                <Image width={300} height={200} alt="gallery" className="bg-light absolute inset-0 w-full h-full object-cover object-center rounded-lg" src={swLogo}/>
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Solidworks</h2>
                    <p className="leading-relaxed">SolidWorks is a leading 3D CAD (Computer-Aided Design) software known for its intuitive interface and robust modeling capabilities, enabling engineers and designers to create intricate mechanical designs with precision and efficiency.</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </Layout>
  )
}

export default articles