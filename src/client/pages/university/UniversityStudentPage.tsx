import { UniversityStudentProfile } from '@/components/university/studentdetails/UniversityStudentProfile'
import { StudentsAddForm } from '@/components/university/StudentsAddForm'

const UniverSityStudentPage = () => {
  return (
    <div className='px-6 py-6 bg-gray-100'>
            <StudentsAddForm />
          <div className='py-3'>
          <UniversityStudentProfile />
          </div>
    </div>
  )
}

export default UniverSityStudentPage