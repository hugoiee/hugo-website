'use client'

import React from 'react'

const MainContent = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="mx-auto flex w-full max-w-[1024px] flex-col px-7.5 pt-8 pb-4">
      {children}
    </div>
  )
}

export default MainContent
