
'use client'
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import yo from '@/assets/yo.jpg';
import Burguer from './Burguer';
import Aside from './Aside';


import { useRef } from 'react'


import { handleDownloadPDF } from '@/utils';

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

  //console.log(open);
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

  const curriculumRef = useRef<HTMLDivElement>(null);


  //handleDownloadPDF(curriculumRef);
  // {t('')}
  return (
    <main>
      <div ref={curriculumRef} className='p-0 lg:w-[1000px] md:w-[768px] sm:w-[640px] min-w-[350px] mx-auto h-max'>
        <article className='h-max grid grid-cols-12 border border-gray-400'>

          <Aside open={open} />

          <section className="col-span-12 md:col-span-8 bg-yellow-100 overflow-y-auto overflow-x-hidden"> {/* CHANGE BACKGROUND HERE */}

            <div className='flex justify-between mt-2'>
              <div className='ml-2 mt-2 space-y-2'>
                <h1 className='font-bold text-lg pb-2 md:pb-0 md:text-2xl pl-2 underline'>{t('title')}</h1>
                <h2 className='text-sm pb-2 md:pb-0 md:text-lg xl:text-lg pl-2'>{t('name', { name: person.firstName + " " + person.lastName })}</h2>
                <h3 className='text-sm md:text-lg xl:text-lg pl-2'>{t('location')}: Buenos Aires, Argentina</h3>
                <h6 className='text-[10px] pl-2 xl:text-lg'>{t('description')}</h6>
              </div>
              <span className='hover:text-white mt-2'><Burguer toggle={toggle} /></span>
              <Image src={yo} alt='Dan Chanivet' width={100} height={100} className='object-cover border-black border-2 mr-2 aspect-square w-auto h-auto' />
            </div>
            <br />
            <div className='space-y-4 md:space-y-2'>
              <h2 className='font-bold text-3xl pl-4 -mt-2 md:mt-0 pb-2'>{t('profile')}</h2>

              <div className='space-y-2'>
                <p className='pl-4 pr-4 text-md'>{t('profile1')}</p>
                <p className='pl-4 pr-4 text-md'>{t('profile2')}</p>
                <p className='pl-4 pr-4 text-md'>{t('profile3')}</p>
                <p className='pl-4 pr-4 text-md'>{t('profile4')}</p>
                <p className='pl-4 pr-4 text-md'>{t('profile5')}</p>
              </div>
              <br />



              <h2 className='font-bold text-3xl pl-4 pb-2'>{t('education')}</h2>

              <ul className='space-y-4 '>

                <li className="ml-4 mt-1 text-md">{t('education2')}</li>
                <li className="ml-4 mt-1 text-md">{t('education3')}</li>
                <li className="ml-4 mt-1 text-md">{t('education4')}</li>
                <li className="ml-4 mt-1 text-md">{t('education5')}</li>
                <li className="ml-4 mt-1 text-md">{t('education6')}</li>
                <li className="ml-4 mt-1 text-md">{t('education7')}</li>
                <li className="ml-4 mt-1 text-md">{t('education8')}</li>
                <li className="ml-4 mt-1 text-md">{t('education9')} <a className='text-blue-400 underline' href='https://www.danchanivet.tech/certifications' target='_blank'>https://www.danchanivet.tech/certifications</a></li>
              </ul>

              <br />


              <h2 className='font-bold text-3xl pl-4 pb-2'>{t('language')}</h2>

              <ul className='space-y-4 '>
                <li className="ml-4 mt-1 text-md ">{t('language1')} | {t('language2')}</li>
              </ul>
              <br />


              <h2 className='font-bold text-3xl pl-4 pb-2'>{t('employment')}</h2>

              <ul className='space-y-4 pr-1'>
                <li className="ml-4 mt-1 text-md">{t('employment1')}</li>
                <li className="ml-4 mt-1 text-md">{t('employment2')}</li>
                <li className="ml-4 mt-1 text-md">{t('employment3')}</li>
                <li className="ml-4 pr-4 text-md">{t('employment4')} <a href='https://www.2kceltics.xyz' target="_blank" className='-pl-4 text-md text-blue-400 underline'>https://www.2kceltics.xyz</a></li>
                <li className="ml-4 mt-1 text-md">{t('employment5')}</li>
                <li className="ml-4 mt-1 text-md">{t('employment6')} <a href='https://www.danchanivet.tech/projects' target="_blank" className='-pl-4 text-md text-blue-400 underline'>https://www.danchanivet.tech/projects</a></li>
              </ul>
              <br />

            </div>
          </section>
        </article>
      </div>
      <button className='absolute top-40 left-4 xl:top-16 xl:left-8 bg-black hover:bg-black/80 font-bold text-gray-200 px-4 py-2 rounded-lg' onClick={(e) => handleDownloadPDF(curriculumRef, e)}>Descargar PDF</button>
    </main>
  )
}

export default CurriculumVitae

/*
   <p>{t('welcome')}</p>
        <p>{t('name', { firstName })}</p>
        <p>{t('person', { ...person })}</p>
        <p>{t('age', { age: person.age })}</p>
...
*/