'use client'

import React from 'react'

import { TableOfContents } from '@/components/main-content/TableOfContents'

const MainContent = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] px-7.5 pt-8 pb-4">
      <article className="max-w-[1024px]">{children}</article>
      <aside className="sticky top-24 hidden w-64 self-start overflow-hidden text-ellipsis whitespace-nowrap lg:block">
        <TableOfContents className="pl-4" />
      </aside>
    </div>
  )
}

export default MainContent
