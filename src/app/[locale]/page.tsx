import CurriculumVitae from '@/components/CurriculumVitae';
import Navbar from '@/components/Navbar';


export default function Index() {

  const person = {
    firstName: 'Dan',
    lastName: 'Chanivet',
    age: 36
  }

  return (
    <>
      <Navbar />
      <CurriculumVitae person={person} />
    </>

  );
}