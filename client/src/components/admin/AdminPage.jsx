import React from 'react';
import { Link } from 'react-router-dom';

export default function ManagerPanel() {
  return (
    <div>
        <div className='flex w-full justify-between absolute font-poppins font-medium p-10 opacity-90'>
            <Link to='/'><button className='w-56 h-20 bg-white rounded-lg'>Home</button></Link>
            <Link to='/admin-page/user'><button className='w-56 h-20 bg-white rounded-lg'>Users</button></Link>
        </div>
        <img className='w-full h-screen' src="https://global.discourse-cdn.com/business4/uploads/dfn/original/2X/d/d9159252583cb434bac140468b430024aae64ccb.gif" alt="" />
    </div>
  );
};