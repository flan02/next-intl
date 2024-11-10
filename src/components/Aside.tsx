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
    "Custom Hooks",
    "Redux",
    "Zustand",
    "React Query",
    "SWR",
    "Node.js",
    "Express.js",
    "GraphQL",
    "API RESTFUL",
    "SASS",
    "TailwindCSS",
    "Framer Motion",
    "Particles.js",
    "Next.js",
    "Vercel CI/CD",
    "tRCP",
    "Prisma ORM",
    "Zod",
    "Figma",
    "Postman",
    "Bunnynet",
    "Cloudinary",
    "Python",
    "Jupyter Notebook",
    "Pandas",
    "Matplotlib",
    "Numpy",
    "Seaborn",
    "Langchain",
    "Flask",
    "Render"
  ]

  console.log('Inside aside component value', props.open);
  return (
    <>
      {/* MOBILE PHONE */}
      <aside className={`${props.open ? 'block' : 'hidden'} visible md:hidden z-10 space-y-1 absolute order-2 mt-24 md:mt-0 text-xs md:text-md md:relative md:col-span-4 bg-gray-800 text-emerald-700`}>
        <h3 className='font-bold text-xl md:text-2xl pl-2 mt-2'>{t('website')}</h3>
        <a href="https://www.chanivetdan.tech" target='_blank' className='text-white pl-4 text-md md:text-lg hover:underline'>https://www.danchanivet.tech</a>
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

      {/* WEBSITE */}
      <aside className={`hidden lg:visible space-y-4 pt-4 absolute order-2 mt-24 md:mt-0 text-xs md:text-md md:relative md:block md:col-span-4 bg-gray-800 text-emerald-700`}>
        <div>
          <h3 className='font-bold text-xl md:text-2xl pl-2 mt-2'>{t('website')}</h3>
          <a href="https://www.danchanivet.tech" target='_blank' className='text-white pl-4 text-md md:text-lg hover:underline'>https://www.danchanivet.tech</a>
        </div>
        <div>
          <h3 className='font-bold text-xl md:text-2xl pl-2'>Email</h3>
          <p className='pl-3 text-md md:text-lg'>chanivetdan@hotmail.com</p>
        </div>
        <div>
          <h3 className='font-bold text-xl md:text-2xl pl-2'>{t('phone')}</h3>
          <p className='pl-3 text-md md:text-lg'>+549-11-2482-1510</p>
        </div>
        <div>
          <h3 className='font-bold text-xl md:text-2xl pl-2'>Linkedin</h3>
          <a href="https://www.linkedin.com/in/dan-chanivet-574084b2/" target='_blank' className='text-white pl-4 text-md hover:underline'>https://www.linkedin.com/in/dan-chanivet-574084b2/</a>
        </div>
        <div>
          <h3 className='font-bold text-xl md:text-2xl pl-2'>Github</h3>
          <a href="https://www.github.com/flan02" target='_blank' className='text-white pl-4 text-md md:text-lg hover:underline'>https://www.github.com/flan02</a>
        </div>

        <p className='pb-4'>{ }</p>
        <hr />
        <p className='pt-1'>{ }</p>
        <h3 className='text-2xl text-center font-bold pl-2'>{t('skills')}</h3>

        <ul className="space-y-2">
          {
            skills.map((skill, index) => (
              <li key={index} className='text-xs md:text-sm hover:underline ml-4'>{skill.toUpperCase()}</li>
            ))
          }
        </ul>
      </aside>
    </>
  )
}

export default Aside