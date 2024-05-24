/* eslint-disable no-unused-vars */
import React from 'react'
import data from "../Data_Folder/LandingPage";
import SectionLink from './SectionLink';
import DelivarySvg from './DelivarySvg';

function LandingPage() {
  return (
    <div className='w-full'>
      <img src={data[1]?.img} className='w-full h-[90vh] bg-black object-contain' alt="" />
      <SectionLink/>
      <DelivarySvg/>
    </div>
  )
}

export default LandingPage
