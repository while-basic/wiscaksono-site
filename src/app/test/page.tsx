import { FadeIn } from '@/components/atoms/fade-in'
import { GridPattern } from '@/components/atoms/grid-pattern'
import { AnimatedName } from '@/components/molecules/animated-name'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from '@/components/ui/menubar'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home() {
  return (

    
    <section className='flex items-start justify-start gap-20 p-5'>

      <FadeIn>
   

      </FadeIn>





        {/* Background opacity */}
      <GridPattern
        className='absolute inset-x-0 -top-14 -z-10 h-full w-full dark:fill-secondary/20 fill-neutral-100 dark:stroke-secondary/30 stroke-neutral-700/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]'
        yOffset={-96}
        interactive
      />

      
    </section>

    
  )
}
