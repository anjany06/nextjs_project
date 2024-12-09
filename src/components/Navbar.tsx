'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
// link tag hamare a tag ki trah page reloads ni krte
import Link from "next/link";

function Navbar({ className }: { className?: string })  {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
    {/* so menu ko koi na koi children chaiye hota h wrna errr */}
      <Menu setActive={setActive}> 
      <Link href = {"/"}>
      <MenuItem setActive={setActive} active={active} item = "Home">
      {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
      </MenuItem>
      </Link  >
      <MenuItem setActive={setActive} active={active} item = "Our Coures">
      <div className="flex flex-col space-y-4 text-sm">
      <HoveredLink href="/courses">All Courses</HoveredLink>
      <HoveredLink href="/s">Basic Music Theory</HoveredLink>
      <HoveredLink href="/courses">Advanced Composition</HoveredLink>
      <HoveredLink href="/courses">Songwriting</HoveredLink>
      <HoveredLink href="/courses">Music Production</HoveredLink>
      </div>
      </MenuItem>
      <Link href = {"/contact"}>
      <MenuItem setActive={setActive} active={active} item = "Contact Us">
      </MenuItem>
      </Link>
      </Menu>
    </div>
  )
}

export default Navbar