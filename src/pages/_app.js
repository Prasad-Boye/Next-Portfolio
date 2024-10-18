/* eslint-disable @next/next/no-document-import-in-page */
import '@/styles/globals.css'
import Head from "next/head"
import {Montserrat} from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "-- font-mont"
})

export default function App({ Component, pageProps }) {
return (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Prasad Boye | Full Stack Developer Portfolio</title>

      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Full-stack web application developed using modern technologies like Next.js, React.js, Python, Node.js, and more. Focus on performance, UX, and scalable systems." />
      <meta name="keywords" content="React developer, Next.js developer, JavaScript developer, Front-end developer, Full Stack developer, Prasad Boye, web development, React, Next.js, Python, Node.js, Full Stack, JavaScript, Tailwind CSS, Material UI, Docker, AWS, Oracle, SQLite, Jira, Jenkins" />
      <meta name="author" content="Prasad Boye" />

      <meta property="og:title" content="Prasad Boye | Full Stack Developer Portfolio" />
      <meta property="og:description" content="Portfolio showcasing expertise in modern web technologies, including React.js, Next.js, Python, Node.js, and more. Focused on delivering high-performance, user-friendly applications." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.linkedin.com/in/prasad-boye/" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className="font-mont bg-light w-full min-h-screen">
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
  </>
)
}