import React from 'react'

const Layout = ({children, className=''}) => {
  return (
<div className={`w-full h-full inline-block z-0 bg-light lg:px-32 py-8 px-20 ${className}`}>{children}</div>
  )
}

export default Layout