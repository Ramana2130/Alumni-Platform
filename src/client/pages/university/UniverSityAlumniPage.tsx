import { DataTable } from '@/components/alumni/alumni-profiles/data-table'
import { JobStudiesComapreCharts } from '@/components/university/charts/JobStudiesComapreCharts'
import tasks from "../../components/data/alumni-profiles/tasks.json"
import { columns } from '@/components/alumni/alumni-profiles/columns'
import { AlumniAddForm } from '@/components/university/AlumniAddForm'
import { UniverSityAlumniProfile } from '@/components/university/alumnidetails/UniversityAlumniProfile'




const UniverSityAlumniPage = () => {
  return (
    <div className='px-6 py-6 bg-gray-100'>
          <UniverSityAlumniProfile />
          <div className='py-3'>
            <AlumniAddForm />
          </div>
        {/* <JobStudiesComapreCharts />    */}
         {/* <div className="hidden  flex-1 flex-col gap-8 p-8 md:flex">
                <DataTable data={tasks} columns={columns} />
          </div>      */}
    </div>
  )
}

export default UniverSityAlumniPage