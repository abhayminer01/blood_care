import React, { useEffect, useState } from 'react'
import blood from '../../../public/image.png';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  
  const [userId, setUserId] = useState(null);
  const [logged, setLogged] = useState(false);
  const [flag, setFlag] = useState(false);

  useEffect(()=>{
    const userId = localStorage.getItem('user_id');
    const logged = localStorage.getItem('logged');
    const donor = localStorage.getItem('donor');
    setFlag(donor);
    setUserId(userId);
    setLogged(logged);
  },[]);
  
  return (
    <div className='h-24 w-screen border border-red-600 border-b-4 border-t-0 flex'>
        <img src={blood} alt="blood"  className='absolute w-20 left-32 top-2'/>
        <div>
          <ul className='absolute flex gap-28 top-8 left-[400px] font-poppins font-[500] text-red-600 text-[20px]'>
            <Link to='/'><li>Home</li></Link>
            <li>{flag ? null : <Link to='/donor-reg'>Donor Registration</Link>}</li>
            <Link to='/inventory'><li>Inventory</li></Link>
            <Link to='/request-blood'><li>Blood Request</li></Link>
            <Link to='/notifications'><li>Notifications</li></Link>
          </ul>
        </div>
        <div className='absolute right-0'>
          <button className='bg-[#F1C5C5] w-[130px] h-[41px] cursor-pointer rounded-[20px] right-32 absolute top-6'>{logged ? <Link to={`/profile/${userId}`}>Profile</Link> : <Link to='/auth'>Login</Link>}</button>
        </div>
    </div>
  );
};