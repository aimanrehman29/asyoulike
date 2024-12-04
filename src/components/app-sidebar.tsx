"use client"

import * as React from "react"
import {
  CircleUserRound, 
  Settings2,
  Truck,
  Shirt,
  SquareActivity,
  Combine,
  BadgePoundSterling,
  Plane
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "account",
    email: "me@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "User@1345",
      logo : CircleUserRound ,
      plan: "mee",
    },
    
  ],
  navMain: [
    {
      title: "Best sells",
      url: "#",
      icon:  Shirt,
      isActive: true,
      items: [
        {
          title: "Electronic",
          url: "#",
        },
        {
          title: "Clothing",
          url: "#",
        },
        {
          title: "Tools",
          url: "#",
        },
      ],
    },
    {
      title: "Programs & Features",
      url: "#",
      icon: SquareActivity,
      items: [
        {
          title: "Health Care",
          url: "#",
        },
        {
          title: "Membership ",
          url: "#",
        },
        {
          title: "Physical Store",
          url: "#",
        },
      ],
    },
    {
      title: "Order",
      url: "#",
      icon: Truck,
      items: [
        {
          title: "Your Orders",
          url: "#",
        },
        {
          title: "Message",
          url: "#",
        },
        {
          title: "Shipping",
          url: "#",
        },
        {
          title: "Details",
          url: "#",
        },
      ],
    },
    {
      title: "Help & Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "Language",
          url: "#",
        },
        {
          title: "State",
          url: "#",
        },
        {
          title: "Customer Service ",
          url: "#",
        },
        {
          title: "Sign Up",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "shopes",
      url: "#",
      icon: Combine,
    },
    {
      name: "Sales & Marketing",
      url: "#",
      icon: BadgePoundSterling,
    },
    {
      name: "Travel",
      url: "#",
      icon:Plane,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent >
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
