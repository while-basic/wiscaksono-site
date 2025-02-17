import { Suspense } from 'react'
import { RiReactjsLine, RiHtml5Fill } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { HiTerminal } from 'react-icons/hi'
import { SiBlockchaindotcom } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CiMusicNote1 } from "react-icons/ci";
import { FaCode, FaServer } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { GiWireCoil } from "react-icons/gi";
import { SiSchneiderelectric } from "react-icons/si";
import { MdConstruction } from "react-icons/md";
import { FaSheetPlastic } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { AsideLink } from '@/components/atoms/aside-link'
import { FadeInStagger, FadeIn } from '@/components/atoms/fade-in'
import { ENV } from '@/lib/constants'
import { generateSEO } from '@/lib/generateSEO'

const title = 'projects'
const description =
  'Project section'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/projects`
const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`

export const metadata = generateSEO(title, description, image, url)

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (

    <section className='grid grid-cols-12 overflow-hidden h-full'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        
        <Accordion type='single' collapsible defaultValue='item-0'>
          {data.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left' data-umami-event='accordion-project'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='mt-5 space-y-1'>
                <FadeInStagger faster>
                  {item.list.map((listItem, j) => (
                    <FadeIn key={j}>
                      <Suspense fallback={<>Loading...</>}>
                        <AsideLink href={listItem.href} startWith='/projects' title={listItem.title}>
                          {listItem.icon}
                          {listItem.title}
                        </AsideLink>
                      </Suspense>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </AccordionContent>
            </AccordionItem>
          )
        )
      }
      </Accordion> 
    </aside>
    
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto'>{children}</section>
    </section>
    
  )
}

const data = [
  {
    title: 'Projects',
    list: [
      {
        title: 'All Tags',
        href: '/projects',
        icon: <HiTerminal className='w-4 h-4' />
      },
      {
        title: 'Blockchain',
        href: '/projects?tag=Blockchain',
        icon: <SiBlockchaindotcom className='w-4 h-4' />
      },
      {
        title: 'Artificial Intelligence',
        href: '/projects?tag=Artificial Intelligence',
        icon: <GiArtificialIntelligence className='w-4 h-4' />
      },
      {
        title: 'Music Production',
        href: '/projects?tag=Music Production',
        icon: <CiMusicNote1 className='w-4 h-4' />
      },
      {
        title: 'Full Stack',
        href: '/projects?tag=Full Stack',
        icon: <FaCode className='w-4 h-4' />
      },
      {
        title: 'Cyber Security',
        href: '/projects?tag=Cyber Security',
        icon: <MdOutlineSecurity className='w-4 h-4' />
      },
      {
        title: 'Game Development',
        href: '/projects?tag=Game Development',
        icon: <IoLogoGameControllerA className='w-4 h-4' />
      },
      {
        title: 'Software Development',
        href: '/projects?tag=Software Development',
        icon: <FaCode className='w-4 h-4' />
      },
      {
        title: 'Machine Learning',
        href: '/projects?tag=Machine Learning',
        icon: <GiArtificialIntelligence className='w-4 h-4' />
      },
      {
        title: 'Deep Learning',
        href: '/projects?tag=Deep Learning',
        icon: <GiArtificialIntelligence className='w-4 h-4' />
      },
      {
        title: 'Large Language Model',
        href: '/projects?tag=Large Language Model',
        icon: <GiArtificialIntelligence className='w-4 h-4' />
      },
      {
        title: 'Cryptocurrency',
        href: '/projects?tag=Cryptocurrency',
        icon: <FaBitcoin className='w-4 h-4' />
      }
    ]
  }
]

