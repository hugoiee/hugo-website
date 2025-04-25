'use client'

import { ModeToggle } from '@/components/ModeToggle'
import BreadcrumbNav from '@/components/navigation/BreadcrumbNav'
import { Separator } from '@/components/ui/separator'
import { SidebarTrigger } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navigation = () => {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter((segment) => segment !== '')
  const firstNav = pathSegments.length > 0 ? pathSegments[0] : 'Home'
  const secondNav = pathSegments.length > 1 ? pathSegments[1] : undefined

  return (
    <div className="dark:bg-sidebar-dark sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-sidebar px-4">
      <div className="flex h-5 items-center space-x-4 text-sm">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <BreadcrumbNav OneNav={firstNav} TwoNav={secondNav} />
      </div>
      <ModeToggle />
    </div>
  )
}

export default Navigation
