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
import AWS from '../../public/images/articles/AWS.png'
import git from '../../public/images/articles/git.png'
import sqlLogo from '../../public/images/articles/SQL_Logo.png'
import swLogo from '../../public/images/articles/solidworks_logo.png'
import jenkins from '../../public/images/articles/jenkins.png'
import jira from '../../public/images/articles/jira.png'
import vscode from '../../public/images/articles/vscode.png'
import { motion } from 'framer-motion';

function skills() {
  return (
    <Layout>
        <section className="text-gray-400 bg-gray-900 body-font rounded-lg">
        <div className="container sm:px-2 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Areas of Expertise</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Transitioning from Design to Coding
                </p>
            </div>
            <p className="px-8 leading-relaxed text-white text-sm">
                *Touch/Tap on Items below to see the details
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-20 rounded-lg" alt="gallery" src={jslogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">JavaScript</h2>
                            <p className="leading-relaxed">JavaScript (JS) is a high-level programming language commonly used for creating interactive and dynamic web content. It enables developers to manipulate website elements, handle events, and build complex web applications.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-8 sm:p-4 rounded-lg" alt="gallery" src={reactLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">React JS</h2>
                            <p className="leading-relaxed">React.js is a JavaScript library for building user interfaces, renowned for its component-based architecture and efficient rendering. It enables developers to create dynamic web applications with ease, enhancing performance and maintainability.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-8 sm:p-4 rounded-lg" alt="gallery" src={nextLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Next JS</h2>
                            <p className="leading-relaxed">Next.js is a powerful React framework that simplifies building fast and scalable web applications with features like server-side rendering and automatic code splitting making it ideal for building high-performance web applications.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-8 sm:p-4 rounded-lg" alt="gallery" src={nodeLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Node JS</h2>
                            <p className="leading-relaxed">Node.js is a runtime environment that allows developers to run JavaScript code on the server-side, enabling fast and scalable network application creation. It utilizes event-driven model, making it efficient for building real-time applications and APIs.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-12 rounded-lg" alt="gallery" src={pythonLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Python</h2>
                            <p className="leading-relaxed">Python is a high-level programming language known for its simplicity and readability, favored by developers for its extensive standard library. It&apos;s widely used for web development, data analysis, artificial intelligence, and automation.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-20 rounded-lg" alt="gallery" src={bootstrapLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Bootstrap</h2>
                            <p className="leading-relaxed">Bootstrap is a Front-end framework for responsive web design, offering pre-designed CSS and JavaScript components for building modern, mobile-friendly websites with ease. It has many ready to use styled HTML components.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-20 rounded-lg" alt="gallery" src={tailwindLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Tailwind CSS</h2>
                            <p className="leading-relaxed">Tailwind CSS revolutionizes styling with utility-first approach, offering a flexible and customizable framework that streamlines the creation of modern designs without writing custom CSS. It facilitates the creation of modern, responsive websites with ease.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-20 rounded-lg" alt="gallery" src={muiLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Material-UI (MUI)</h2>
                            <p className="leading-relaxed">Material-UI, is a popular React UI framework that implements Google&apos;s Material Design principles. With its easy customization and integration with React projects, MUI simplifies the process of creating modern and consistent user interfaces.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-4 aspect-h-3 max-h-1/2 object-center p-20 rounded-lg" alt="gallery" src={htmlLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">HTML5</h2>
                            <p className="leading-relaxed">HTML5 is a standard markup language for creating web pages and applications, introducing new features like multimedia support, and enhanced accessibility. Its robust capabilities empower developers to build dynamic web experiences.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-8 sm:p-4 rounded-lg" alt="gallery" src={cssLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">CSS3</h2>
                            <p className="leading-relaxed">Cascading Style Sheets language, offers advanced styling capabilities such as gradients, transitions, and animations. With its expanded feature set, CSS3 enables designers to create visually stunning and responsive web designs.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-8 sm:p-4 rounded-lg" alt="gallery" src={AWS} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">AWS</h2>
                            <p className="leading-relaxed">
                            <span className='font-bold text-light'>AWS Lambda: </span>A serverless compute service that automatically runs code in response to events, allowing developers to focus on writing applications without managing servers. <br />
                            <span className='font-bold text-light'>AWS EC2: </span>A scalable cloud service that provides virtual computing environments (instances) for hosting applications, enabling users to launch and manage servers with flexible configurations.<br />
                            <span className='font-bold text-light'>AWS S3: </span>An object storage service that offers secure, scalable, and durable storage for storing and retrieving any amount of data from anywhere on the web.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-16 rounded-lg" alt="gallery" src={git} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">GIT</h2>
                    <p className="leading-relaxed">A distributed version control system that tracks changes in source code during development, allowing multiple developers to collaborate and manage project history with branches, commits, and merges.<br />
                    <span className='font-bold text-light'>GitHub/GitLab: </span>Cloud-based platforms built on top of Git, providing repositories for code storage, collaboration tools, and integrated version control for development teams.
                    </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-16 rounded-lg" alt="gallery" src={sqlLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                        <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">SQL</h2>
                    <p className="leading-relaxed">Structured Query Language (SQL) is a powerful domain-specific language used for managing and manipulating relational databases, facilitating data handling tasks such as retrieval, insertion, updating, and deletion of objects from tables.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg overflow-hidden">
                            <Image 
                                width={300} 
                                height={200} 
                                className="bg-light aspect-w-4 aspect-h-2 max-h-full object-center p-20 rounded-lg" 
                                alt="gallery" 
                                src={jenkins} 
                            />
                         </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Jenkins</h2>
                            <p className="leading-relaxed">Jenkins is an open-source automation server that facilitates continuous integration and continuous delivery (CI/CD) in software development. It automates the building, testing, and deployment of applications, enhancing efficiency and reliability. Jenkins extensive plugin ecosystem allows seamless integration with various tools, making it a versatile choice for managing CI/CD pipelines.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg overflow-hidden">
                            <Image 
                                width={300} 
                                height={200} 
                                className="bg-light aspect-w-4 aspect-h-2 max-h-full object-center p-20 rounded-lg" 
                                alt="gallery" 
                                src={jira} 
                            />
                         </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Jira</h2>
                            <p className="leading-relaxed">Jira is a project management and issue tracking tool by Atlassian, widely used in agile software development. It enables teams to plan, track, and manage work with customizable workflows, task assignments, and progress monitoring. Supporting Scrum and Kanban methodologies, Jira enhances productivity and collaboration through robust reporting and integration with other tools.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg overflow-hidden">
                            <Image 
                                width={300} 
                                height={200} 
                                className="bg-light aspect-w-4 aspect-h-2 max-h-full object-center p-20 rounded-lg" 
                                alt="gallery" 
                                src={vscode} 
                            />
                         </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Visual Studio Code</h2>
                            <p className="leading-relaxed">Visual Studio Code (VS Code) is a free, open-source code editor developed by Microsoft. It is widely used for its versatility and support for various programming languages. VS Code offers features like debugging, integrated Git control, syntax highlighting, and extensions, making it a powerful tool for developers. Its lightweight design and extensive customization options enhance productivity and streamline the coding process.</p>
                        </div>
                    </div>
                </motion.div>
                <motion.div className="p-4 h-full"
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.9 }}>
                    <div className="flex relative min-h-80 h-full">
                        <div className="flex justify-center items-center bg-light absolute inset-0 w-full h-full object-fit object-center rounded-lg">
                            <Image width={300} height={200} className="bg-light aspect-w-16 aspect-h-9 max-h-1/2 object-center p-8 sm:p-4 rounded-lg" alt="gallery" src={swLogo} />
                        </div>
                        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                            <h2 className="tracking-widest text-lg title-font font-medium text-indigo-400 mb-1">Solidworks</h2>
                            <p className="leading-relaxed">SolidWorks is a leading 3D CAD (Computer-Aided Design) software known for its intuitive interface and robust modeling capabilities, enabling engineers and designers to create intricate mechanical designs with precision and efficiency.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
        </section>
    </Layout>
  )
}

export default skills