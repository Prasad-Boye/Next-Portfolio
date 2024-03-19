import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

function Footer() {
    const getCurrentPosition = () => {
        return "Bengaluru, KA, IND"
    }
  return (
    <footer className="w-full border-t-2 border-solid border-dark
    text-lg font-medium
    " >
        <Layout className="py-8 flex items-center justify-between">
            <span>{new Date().getFullYear()} &copy; All Rights Rerserved.</span>
            <div className="flex items-center">
                Built with <span className="mx-2 text-2xl text-red-800">&hearts;</span>
                by&nbsp;<Link  href="/">
                Prasad Boye
                </Link>
            </div>
            <span>{getCurrentPosition()}</span>
        </Layout>
    </footer>
  )
}

export default Footer