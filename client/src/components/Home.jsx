import React, { useEffect, useState } from 'react'
import Header from './common/Header'
import image from '../../public/bg1.svg';
import { getProfile } from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  
  const [perm, setPerm] = useState();

  const getData = async() => {
    const userId = localStorage.getItem('user_id');
    const data = await getProfile(userId);
    setPerm(data.permission);
  };

  useEffect(()=>{
    getData();
  });
  
  return (
    <div className='h-screen w-screen'>
        <Header />
        <div>
          <div className='absolute font-poppins text-red-600 top-[250px] left-[300px]'>
            <h1 className='font-bold text-[100px]'>Donate Blood</h1>
            <h1 className='font-medium text-[35px] text-center'>“A single pint can save three lives,<br/>a single gesture can create a million smiles”</h1>
          </div>
          <div className='absolute top-[600px] left-[600px] font-poppins font-medium'>
            {perm === 'admin' ? <Link to='admin-page'><button className='bg-red-200 w-44 h-14 rounded-[50px]'>admin panel</button></Link> : <button></button>}
            {perm === 'donor-manager' ? <Link to='manager-panel'><button className='bg-red-200 w-44 h-14 rounded-[50px]'>manager panel</button></Link> : <button></button>}    
          </div>
          <img src={image} alt="" className='absolute left-[700px]'/>
        </div>
    </div>
  )
};