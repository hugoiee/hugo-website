import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible";
import {DropdownMenu, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubItem,} from "@/components/ui/sidebar"
import {BrainCircuit, ChevronRight, ChevronUp, CircleUser, Code, Home, User2} from "lucide-react"
import Link from "next/link";

const itemsA = [
  {
    title: "首页",
    url: "/",
    icon: Home,
  },
  {
    title: "关于我",
    url: "/about",
    icon: CircleUser,
  }
]
const AiItems = [
  {
    title: "Agent",
    url: "/",
  },
  {
    title: "Rag",
    url: "/",
  },
]
const CodeList = [
  {
    title: "Next",
    url: "/",
  },
  {
    title: "React",
    url: "/",
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton>
                  Hugo成长之路
                </SidebarMenuButton>
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
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon/>
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
              
              {/*AI专栏*/}
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href="/ai">
                        <BrainCircuit/>
                        <span>AI大模型</span>
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"/>
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        {AiItems.map((item) => (
                          <SidebarMenuButton asChild key={item.title}>
                            <Link href={item.url}>
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        ))}
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              
              </Collapsible>
              
              {/*代码专栏*/}
              <Collapsible defaultOpen className="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton asChild>
                      <Link href="/web">
                        <Code/>
                        <span>Web Dev</span>
                        <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"/>
                      </Link>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem>
                        {CodeList.map((item) => (
                          <SidebarMenuButton asChild key={item.title}>
                            <Link href={item.url}>
                              <span>{item.title}</span>
                            </Link>
                          </SidebarMenuButton>
                        ))}
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
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
                  <User2/> Username
                  <ChevronUp className="ml-auto"/>
                </SidebarMenuButton>
              </DropdownMenuTrigger>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    
    </Sidebar>
  )
}
