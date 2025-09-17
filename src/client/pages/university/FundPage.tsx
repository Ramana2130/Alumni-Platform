import FundList from '@/components/university/fund/FundList'
import React from 'react'

const FundPage = () => {
  return (
    <div>
        <FundList onBack={() => { /* TODO: implement back navigation */ }} />
    </div>
  )
}

export default FundPage