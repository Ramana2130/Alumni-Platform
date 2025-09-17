import FundRequest from '@/components/students/fund/FundRequest'
import React from 'react'

const FundRequestPage = () => {
  return (
    <div>
        <FundRequest onBack={() => { /* handle back action here */ }} />
    </div>
  )
}

export default FundRequestPage