import { DataTable } from '@/components/alumni/alumni-profiles/data-table'
import { JobStudiesComapreCharts } from '@/components/university/charts/JobStudiesComapreCharts'
import tasks from "../../components/data/alumni-profiles/tasks.json"
import { columns } from '@/components/alumni/alumni-profiles/columns'
import { AlumniAddForm } from '@/components/university/AlumniAddForm'
import { UniversityAlumniProfile } from '@/components/university/alumnidetails/UniversityAlumniProfile'




const UniverSityAlumniPage = () => {
  return (
    <div className='px-6 py-6 bg-gray-100'>
            <AlumniAddForm />
          <div className='py-3'>
          <UniversityAlumniProfile />
          </div>
    </div>
  )
}

export default UniverSityAlumniPage