'use client'

import { useTranslations } from "next-intl";

type Props = {

}

const Aside = (props: Props) => {
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

  return (
    <aside className='absolute order-2 text-xs text-md md:relative md:block md:col-span-4 bg-gray-800 text-blue-400'>
      <h3 className='font-bold text-xl pl-2 mt-2'>{t('website')}</h3>
      <a href="https://www.chanivetdan.tech" target='_blank' className='text-white pl-4 text-md hover:underline'>https://www.chanivetdan.tech</a>
      <h3 className='font-bold text-xl pl-2'>Email</h3>
      <p className='pl-3'>chanivetdan@hotmail.com</p>
      <h3 className='font-bold text-xl pl-2'>{t('phone')}</h3>
      <p className='pl-3'>+549-11-2482-1510</p>
      <h3 className='font-bold text-xl pl-2'>Linkedin</h3>
      <a href="https://www.linkedin.com/in/dan-chanivet-574084b2/" target='_blank' className='text-white pl-4 text-md hover:underline'>https://www.linkedin.com/in/dan-chanivet-574084b2/</a>
      <h3 className='font-bold text-xl pl-2'>Github</h3>
      <a href="https://www.github.com/flan02" target='_blank' className='text-white pl-4 text-md hover:underline'>https://www.github.com/flan02</a>

      <p className='pb-4'>{ }</p>
      <hr />
      <p className='pt-4'>{ }</p>
      <h3 className='text-xl font-bold pl-2'>{t('skills')}</h3>
      <p className='md:pt-4'>{ }</p>
      <ul>
        {
          skills.map((skill, index) => (
            <li key={index} className='text-sm hover:underline pl-4'>{skill.toUpperCase()}</li>
          ))
        }
      </ul>
    </aside>
  )
}

export default Aside