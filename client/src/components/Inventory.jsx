import React, { useEffect, useState } from 'react';
import Header from './common/Header';
import { getInventory } from '../services/api';

export default function Inventory() {

  const [inventory, setInventory] = useState([]);

  const fetchInventory = async () => {
    const data = await getInventory();
    setInventory(data);    
  };

  useEffect(() => {
    fetchInventory();
  },[]);

  return (
    <div>
        <Header />
        <div>
          <div className='absolute left-[15%] top-[12%] h-[800px] w-[70vw] bg-red-300 rounded-[50px] border border-black text-center p-5'>
            <h1 className='text-red-600 font-poppins font-bold text-[50px]'>Blood Inventory</h1>
            <div className='bg-red-500 rounded-[30px] h-10 pl-5 pr-5 pt-2 text-white font-poppins font-medium'>
              <ul className='flex justify-between'>
                <li>Blood Group</li>
                <li>Quantity</li>
                <li>Last Updated</li>
              </ul>
              <div className='flex flex-col gap-10'>
                {inventory.map((item, index) => {
                  return(
                    <div className='relative top-10 bg-red-500 rounded-[30px] h-10 pl-5 pr-5 pt-2 text-white font-poppins font-medium'>
                      <ul className='flex justify-between'>
                        <li key={index+1}>{item.blood_group}</li>
                        <li key={index+2}>{item.quantity} ml</li>
                        <li key={index+3}>{item.last_updated}</li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};