'use client'

import {
  BrainCircuit,
  ChevronUp,
  CircleUser,
  Code,
  Home,
  MessageCircleMore,
  Palette,
  User2,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
  DropdownMenu,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'

const itemsA = [
  {
    title: '首页',
    url: '/',
    icon: Home,
  },
  {
    title: '关于我',
    url: '/About',
    icon: CircleUser,
  },
]
const itemsB = [
  {
    title: 'AI 大模型',
    url: '/AI',
    icon: BrainCircuit,
    number: 2,
  },
  {
    title: 'Web Dev',
    url: '/Web',
    icon: Code,
    number: 2,
  },
  {
    title: 'Design',
    url: '/Design',
    icon: Palette,
    number: 1,
  },
  {
    title: 'Chat',
    url: '/Chat',
    icon: MessageCircleMore,
    number: 0,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>Hugo成长之路</SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsA.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link
                      href={item.url}
                      className={pathname === item.url ? 'text-primary' : ''}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>文章专栏</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {itemsB.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.url}>
                    <Link
                      href={item.url}
                      className={pathname === item.url ? 'text-primary' : ''}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                  <SidebarMenuBadge>{item.number}</SidebarMenuBadge>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  <User2 /> Username
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
