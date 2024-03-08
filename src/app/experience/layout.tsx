import { Suspense } from 'react'
import { RiReactjsLine, RiHtml5Fill } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { HiTerminal } from 'react-icons/hi'
import { SiBlockchaindotcom } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { CiMusicNote1 } from "react-icons/ci";
import { FaCode } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { IoLogoGameControllerA } from "react-icons/io";
import { FaBitcoin } from "react-icons/fa";
import { SiAccenture } from "react-icons/si";
import { SiSchneiderelectric } from "react-icons/si";
import { GiWireCoil } from "react-icons/gi";
import { MdConstruction } from "react-icons/md";
import { FaSheetPlastic } from "react-icons/fa6";
import { FaRegSquare } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";


import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { AsideLink } from '@/components/atoms/aside-link'
import { FadeInStagger, FadeIn } from '@/components/atoms/fade-in'
import { ENV } from '@/lib/constants'
import { generateSEO } from '@/lib/generateSEO'

const title = 'experience'
const description =
  'Discover the interactive brilliance of my experience, peruse my polished portfolio, and delve into a sneak peek of my formidable technical prowess. Uncover a world where innovation meets functionality, showcased through a meticulously crafted Next.js application. Elevate your digital experience with a seamless blend of creativity and technical finesse.'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/experience`
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
                        <AsideLink href={listItem.href} startWith='/experience' title={listItem.title}>
                          {listItem.icon}
                          {listItem.title}
                        </AsideLink>
                      </Suspense>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84dvh] md:h-auto'>{children}</section>
    </section>
  )
}

const data = [
  {
    title: 'Experience',
    list: [
      {
        title: 'T5 Data Centers',
        href: '/experience?tag=T5',
        icon: <FaRegBuilding className='w-4 h-4' />
      },
      {
        title: 'CN',
        href: '/experience?tag=CN',
        icon: <GiWireCoil className='w-4 h-4' />
      },
      {
        title: 'Schneider Electric',
        href: '/experience?tag=Schneider Electric',
        icon: <SiSchneiderelectric className='w-4 h-4' />
      },
      {
        title: 'Self Employed',
        href: '/experience?tag=Self Employed',
        icon: <MdConstruction className='w-4 h-4' />
      },
      {
        title: 'Delfingen',
        href: '/experience?tag=Delfingen',
        icon: <FaSheetPlastic className='w-4 h-4' />
      },
      {
        title: 'Dal-Tile',
        href: '/experience?tag=Dal-Tile',
        icon: <FaRegSquare className='w-4 h-4' />
      }
    ]
  }
]
