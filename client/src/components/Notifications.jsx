import React from 'react'
import Header from './common/Header'
import noti from '../../public/notification.png';
export default function Notifications() {
  return (
    <div>
      <Header />
      <div className='absolute left-[600px] top-52'>
        <img src={noti} alt=".." className=''/>
        <h1 className='absolute left-32 font-poppins font-semibold text-[25px]'>No new notifications</h1>
      </div>
    </div>
  )
}
