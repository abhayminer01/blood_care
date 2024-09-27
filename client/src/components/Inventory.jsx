import React from 'react'
import Header from './common/Header'

export default function Inventory() {
  return (
    <div>
        <Header />
        <div className='font-poppins font-medium absolute left-[700px] top-[300px] '>
          <p>Currently Nothing in inventory</p>
        </div>
    </div>
  );
};