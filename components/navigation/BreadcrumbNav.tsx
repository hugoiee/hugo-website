"use client";

import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator} from "@/components/ui/breadcrumb";
import React from "react";
import {usePathname} from "next/navigation";

interface BreadcrumbNavProps {
  OneNav: string
  TwoNav?: string
}

const BreadcrumbNav = ({OneNav, TwoNav}: BreadcrumbNavProps) => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');
  
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={`/${pathSegments[0]}`}>{OneNav}</BreadcrumbLink>
          </BreadcrumbItem>
          {TwoNav && (
            <>
              <BreadcrumbSeparator/>
              <BreadcrumbItem>
                <BreadcrumbLink href="#">{TwoNav}</BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default BreadcrumbNav;