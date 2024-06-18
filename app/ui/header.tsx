"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import { AmcyLogo, AmcyLogoLight, MenuIcon } from "./icons";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header>
      <div className='absolute left-0 right-0 top-2 z-40 pt-14'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:max-w-none'>
            <div className='flex items-center justify-between'>
              <a aria-label='Home' href='/'>
                <AmcyLogo aria-hidden='true' className='group/logo h-12' />
              </a>
              <div className='flex items-center gap-x-8'>
                <a className='inline-flex rounded-full px-4 py-1.5 text-sm font-semibold transition bg-[#123f33] text-white hover:bg-[#123f33]/80' href='/get-started'>
                  <span className='relative top-px'>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
