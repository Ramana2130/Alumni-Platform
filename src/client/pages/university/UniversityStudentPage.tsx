import { UniversityStudentProfile } from '@/components/university/studentdetails/UniversityStudentProfile'
import { StudentsAddForm } from '@/components/university/StudentsAddForm'
import { GraduationCap, UserRound } from 'lucide-react'

const UniverSityStudentPage = () => {
  return (
    <div className='px-6 py-6 bg-gray-100'>
      <div className='flex justify-start gap-2'>
        <UserRound className='size-8 ' />
        <h1 className='text-2xl font-bold tracking-tight  pb-4'>Student details</h1>
      </div>
            <StudentsAddForm />
          <div className='py-3'>
          <UniversityStudentProfile />
          </div>
    </div>
  )
}

export default UniverSityStudentPage