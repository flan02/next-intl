
import React from 'react'
import { useTranslations } from 'next-intl';
type Props = {
  person: {
    firstName: string
    lastName: string
    age: number
  }
}

const CurriculumVitae = ({ person }: Props) => {
  const t = useTranslations('Index');
  const firstName = 'John Doe'
  return (
    <main>
      <p>{t('welcome')}</p>
      <p>{t('name', { firstName })}</p>
      <p>{t('person', { ...person })}</p>
      <p>{t('age', { age: person.age })}</p>


    </main>
  )
}

export default CurriculumVitae