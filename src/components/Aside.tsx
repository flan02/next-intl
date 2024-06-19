'use client'

import { useTranslations } from "next-intl";

type Props = {
  open: boolean
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

  console.log('Inside aside component value', props.open);
  return (
    <aside className={`${props.open ? 'block' : 'hidden'} space-y-1 absolute order-2 mt-24 md:mt-0 text-xs md:text-md md:relative md:block md:col-span-4 bg-gray-800 text-blue-400`}>
      <h3 className='font-bold text-xl md:text-2xl pl-2 mt-2'>{t('website')}</h3>
      <a href="https://www.chanivetdan.tech" target='_blank' className='text-white pl-4 text-md md:text-lg hover:underline'>https://www.chanivetdan.tech</a>
      <h3 className='font-bold text-xl md:text-2xl pl-2'>Email</h3>
      <p className='pl-3 text-md md:text-lg'>chanivetdan@hotmail.com</p>
      <h3 className='font-bold text-xl md:text-2xl pl-2'>{t('phone')}</h3>
      <p className='pl-3 text-md md:text-lg'>+549-11-2482-1510</p>
      <h3 className='font-bold text-xl md:text-2xl pl-2'>Linkedin</h3>
      <a href="https://www.linkedin.com/in/dan-chanivet-574084b2/" target='_blank' className='text-white pl-4 text-md hover:underline'>https://www.linkedin.com/in/dan-chanivet-574084b2/</a>
      <h3 className='font-bold text-xl md:text-2xl pl-2'>Github</h3>
      <a href="https://www.github.com/flan02" target='_blank' className='text-white pl-4 text-md md:text-lg hover:underline'>https://www.github.com/flan02</a>

      <p className='pb-4'>{ }</p>
      <hr />
      <p className='pt-2'>{ }</p>
      <h3 className='text-xl font-bold pl-2'>{t('skills')}</h3>
      <p className='md:pt-2'>{ }</p>
      <ul className="pb-4">
        {
          skills.map((skill, index) => (
            <li key={index} className='text-xs md:text-sm hover:underline pl-4'>{skill.toUpperCase()}</li>
          ))
        }
      </ul>
    </aside>
  )
}

export default Aside