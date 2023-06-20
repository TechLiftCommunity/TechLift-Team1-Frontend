import React from 'react'
import { Hero, JoinUs, OurMission } from './HomeCompScreen'
import MemberList from './HomeCompScreen/MembersList'

const HomeView = () => {
  return (
    <div className='overflow-hidden space-y-8 '>
      <Hero />
      <MemberList />
      <OurMission />
      
    </div>
  )
}

export default HomeView
