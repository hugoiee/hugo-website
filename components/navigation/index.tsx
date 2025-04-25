"use client";

import {ModeToggle} from "@/components/ModeToggle";
import BreadcrumbNav from "@/components/navigation/BreadcrumbNav";
import {SidebarTrigger} from "@/components/ui/sidebar";
import React from "react";
import {Separator} from "@/components/ui/separator"
import {usePathname} from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  const firstNav = pathSegments.length > 0 ? pathSegments[0] : 'Home';
  const secondNav = pathSegments.length > 1 ? pathSegments[1] : undefined;
  
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 bg-sidebar dark:bg-sidebar-dark fixed top-0 z-10">
      <div className="flex items-center space-x-4 text-sm h-5">
        <SidebarTrigger/>
        <Separator orientation="vertical"/>
        <BreadcrumbNav OneNav={firstNav} TwoNav={secondNav}/>
      </div>
      <ModeToggle/>
    </div>
  )
}

export default Navigation;