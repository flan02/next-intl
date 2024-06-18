
import React from 'react'
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import yo from '@/assets/yo.jpg';
type Props = {
  person: {
    firstName: string
    lastName: string
    age: number
  }
}

const CurriculumVitae = ({ person }: Props) => {
  const t = useTranslations('Index');

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
    <main className='w-[1000px] mx-auto'>
      <article className='h-[94vh] grid grid-cols-12 border border-gray-400'>
        <aside className='col-span-4 bg-gray-800 text-blue-400'>
          <h3>{t('website')}</h3>
          <a href="https://www.chanivetdan.tech" target='_blank' className='text-white'>https://www.chanivetdan.tech</a>
          <h3>Email</h3>
          <p>chanivetdan@hotmail.com</p>
          <h3>{t('phone')}</h3>
          <p>+549-11-2482-1510</p>
          <h3>Linkedin</h3>
          <a href="https://www.linkedin.com/in/dan-chanivet-574084b2/" target='_blank' className='text-white'>https://www.linkedin.com/in/dan-chanivet-574084b2/</a>
          <h3>Github</h3>
          <a href="https://www.github.com/flan02" target='_blank' className='text-white'>https://www.github.com/flan02</a>
          <p className='pb-4'>{ }</p>
          <hr />
          <p className='pt-4'>{ }</p>
          <h3 className='text-xl'>{t('skills')}</h3>
          <p className='pt-4'>{ }</p>
          <ul>
            {
              skills.map((skill, index) => (
                <li key={index} className='text-sm hover:underline'>{skill.toUpperCase()}</li>
              ))
            }
          </ul>
        </aside>
        <section className="col-span-8 bg-blue-300">
          <div className='flex justify-between mt-2'>
            <div className='ml-2 mt-2 space-y-1'>
              <h1 className='font-bold text-4xl pl-2'>Dan Chanivet</h1>
              <h2 className='text-lg pl-2'>Argentina {'>'} Buenos Aires</h2>
              <h6 className='text-sm pl-2'>{t('description')}</h6>
            </div>
            <Image src={yo} alt='Dan Chanivet' width={100} height={100} className='mr-2 rounded-full' />
          </div>
          <br />
          <div className='space-y-2'>
            <h2 className='font-bold text-2xl pl-4'>{t('profile')}</h2>
            <p className='pl-4 text-sm'>{t('profile1')}</p>
            <p className='pl-4 text-sm'>{t('profile2')}</p>
            <p className='pl-4 text-sm'>{t('profile3')}</p>
            <p className='pl-4 text-sm'>{t('profile4')}</p>

            <h2 className='font-bold text-2xl pl-4'>{t('education')}</h2>
            <p className="pl-4 text-sm">High School degree: Maria Mazzarello Institute. Argentina 2004-2006</p>
            <p className="pl-4 text-sm">English Certificate B2 Cambridge Institute. Argentina 2001-2005</p>
            <p className="pl-4 text-sm">Javascript ES6+ Essencial I & II. Cisco Networking Academy (online). 2019-2020</p>
            <p className="pl-4 text-sm">React course Argentina Programa 4.0. Gobierno de la ciudad de Buenos Aires. 2020-2021</p>
            <p className="pl-4 text-sm">React Frontend Developer course. UTN (Universidad Tecnologica Nacional). 2021</p>
            <p className="pl-4 text-sm">Database Admin Manager. MongoDB University (online). 2022</p>

            <h2 className='font-bold text-2xl pl-4'>{t('employment')}</h2>
            <p className="pl-4 text-sm">FrontEnd developer with Javascript in Club Argentino Castelar. 08/2018 to 11/2019</p>
            <p className="pl-4 text-sm">React Developer in Federacion de Basquet Argentino. 05/2020 to 12/2021</p>
            <p className="pl-4 text-sm">Nextjs Developer in Picnic App for stores and delivery food. 01/2022 to 12/2022</p>
            <p className="-ml-4 text-sm"> <a href='https://www.2kceltics.xyz' target="_blank">www.2kceltics.xyz</a>. I managed my own site for boston celtics fans. 12/2020 to Present(2024)</p>
            <p className="pl-4 text-sm">FrontEnd dev with typescript, react, framermotion, figma developing apps for web 3.0 project. 03/2023 to Present(2024)</p>
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