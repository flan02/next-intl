
'use client'
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import yo from '@/assets/yo.jpg';

import Burguer from './Burguer';
import Aside from './Aside';
type Props = {
  person: {
    firstName: string
    lastName: string
    age: number
  }
}


const CurriculumVitae = ({ person }: Props) => {
  const [open, setOpen] = React.useState(false)
  const toggle = () => setOpen(!open)
  const t = useTranslations('Index');

  console.log(open);
  const skills = [
    "Javascript & Typescript",
    "Git & Github",
    "Linux Ubuntu & Debian",
    "MongoDB Atlas",
    "React",
    "Redux & Hooks",
    "Zustand",
    "React Query & SWR",
    "Node.js & Express.js",
    "API RESTFUL",
    "GraphQL",
    "TailwindCSS & SASS",
    "Framer Motion",
    "Particles.js",
    "Next.js",
    "Vercel CI/CD",
    "tRCP",
    "Prisma ORM & Zod",
    "Figma",
    "Postman",
    "Python",
    "Cloudinary & Bunnynet"
  ]


  // {t('')}
  return (
    <main className='lg:w-[1000px] md:w-[768px] sm:w-[640px] min-w-[350px] mx-auto'>
      <article className='h-max md:h-[94vh]  grid grid-cols-12 border border-gray-400'>

        <Aside open={open} />

        <section className="col-span-12 md:col-span-8 bg-blue-300 overflow-y-auto">
          <div className='flex justify-between mt-2'>
            <div className='ml-2 mt-2 space-y-2'>
              <h1 className='font-bold text-2xl pb-2 md:pb-0 md:text-4xl pl-2 underline'>{t('name', { name: person.firstName + " " + person.lastName })}</h1>
              <h2 className='text-sm md:text-lg pl-2'>Argentina {'>'} Buenos Aires</h2>
              <h6 className='text-[10px] pl-2'>{t('description')}</h6>
            </div>
            <span className='hover:text-white mt-2'><Burguer toggle={toggle} /></span>
            <Image src={yo} alt='Dan Chanivet' width={100} height={100} className='border border-transparent hover:border hover:border-black mr-2 rounded-full w-auto h-auto' />
          </div>
          <br />
          <div className='space-y-4 md:space-y-2'>
            <h2 className='font-bold text-2xl pl-4 -mt-2 md:mt-0'>{t('profile')}</h2>
            <p className='pl-4 pr-4 text-sm'>{t('profile1')}</p>
            <p className='pl-4 pr-4 text-sm'>{t('profile2')}</p>
            <p className='pl-4 pr-4 text-sm'>{t('profile3')}</p>
            <p className='pl-4 pr-4 text-sm'>{t('profile4')}</p>

            <h2 className='font-bold text-2xl pl-4'>{t('education')}</h2>
            <p className="pl-4 pr-4 text-sm">{t('education1')}</p>
            <p className="pl-4 pr-4 text-sm">{t('education2')}</p>
            <p className="pl-4 pr-4 text-sm">{t('education3')}</p>
            <p className="pl-4 pr-4 text-sm">{t('education4')}</p>
            <p className="pl-4 pr-4 text-sm">{t('education5')}</p>
            <p className="pl-4 pr-4 text-sm">{t('education6')}</p>


            <h2 className='font-bold text-2xl pl-4'>{t('employment')}</h2>
            <p className="pl-4 pr-4 text-sm">{t('employment1')}</p>
            <p className="pl-4 pr-4 text-sm">{t('employment2')}</p>
            <p className="pl-4 pr-4 text-sm">{t('employment3')}</p>
            <p className="ml-4 pr-4 text-sm"> <a href='https://www.2kceltics.xyz' target="_blank" className='-pl-4 text-md hover:underline'>www.2kceltics.xyz</a>. {t('employment4')}</p>
            <p className="pl-4 pr-4 pb-4 md:pb-0 text-sm">{t('employment5')}</p>
          </div>
        </section>
      </article>
    </main>
  )
}

export default CurriculumVitae

/*
   <p>{t('welcome')}</p>
        <p>{t('name', { firstName })}</p>
        <p>{t('person', { ...person })}</p>
        <p>{t('age', { age: person.age })}</p>
*/