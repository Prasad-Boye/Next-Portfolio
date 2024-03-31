import React from 'react'

const Layout = ({children, className=''}) => {
  return (
<div className={`w-full h-full inline-block z-0 bg-light py-8 px-4 md:px-20 sm:p-10 ${className}`}>{children}</div>
  )
}

export default Layout