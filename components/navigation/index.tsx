'use client'

import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { ModeToggle } from '@/components/ModeToggle'
import BreadcrumbNav from '@/components/navigation/BreadcrumbNav'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'

const Navigation = () => {
  const pathname = usePathname()
  const [pageTitle, setPageTitle] = useState('')

  const pathSegments = pathname.split('/').filter((segment) => segment !== '')
  const firstNav = pathSegments.length > 0 ? pathSegments[0] : 'Home'

  useEffect(() => {
    // 获取当前页面的标题
    const title = document.title
    setPageTitle(title)
  }, [pathname]) // 当路径变化时重新获取标题

  return (
    <div className="dark:bg-sidebar-dark sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-sidebar px-4">
      <div className="flex h-5 items-center space-x-4 text-sm">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <BreadcrumbNav OneNav={firstNav} TwoNav={pageTitle} />
      </div>
      <ModeToggle />
    </div>
  )
}

export default Navigation
