"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/custom/nav-main"
import { NavProjects } from "@/components/custom/nav-projects"
import { NavUser } from "@/components/custom/nav-user"
import { TeamSwitcher } from "@/components/custom/team-switcher"
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
    name: "harvey",
    email: "harvey@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Harvey",
      logo: GalleryVerticalEnd,
      plan: "Personal",
    },
    {
      name: "Aisha",
      logo: AudioWaveform,
      plan: "Free",
    },
    {
      name: "Dogson Corp",
      logo: Command,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Overview",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "1",
          url: "#",
        },
        {
          title: "2",
          url: "#",
        },
        {
          title: "3",
          url: "#",
        },
      ],
    },
    {
      title: "Stats",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "1",
          url: "#",
        },
        {
          title: "2",
          url: "#",
        },
        {
          title: "3",
          url: "#",
        },
      ],
    },
    {
      title: "Services",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "1",
          url: "#",
        },
        {
          title: "2",
          url: "#",
        },
        {
          title: "3",
          url: "#",
        },
        {
          title: "4",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Test 1",
      url: "#",
      icon: Frame,
    },
    {
      name: "Test 2",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Test 3",
      url: "#",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
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
