import { FundList } from '@/components/students/fund/FundList'
import FundRequest from '@/components/students/fund/FundRequest'
import React from 'react'

const FundRequestPage = () => {
  return (
    <div className='bg-gray-100'>
        <FundRequest onBack={() => { /* handle back action here */ }} />
        <FundList />
    </div>
  )
}

export default FundRequestPage