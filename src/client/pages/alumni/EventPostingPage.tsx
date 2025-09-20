import { EventsList } from '@/components/alumni/job-posting/EventList'
import { EventPostingForm } from '@/components/alumni/job-posting/EventPostionForm'
import React from 'react'

const EventPostingPage = () => {
  return (
    <div className='py-6'>
        <EventsList />
        <EventPostingForm />
    </div>
  )
}

export default EventPostingPage