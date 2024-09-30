import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getProfile } from '../services/api';
import blood from '../../public/image.png';
import Header from './common/Header';

export default function Profile() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState();

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const id = localStorage.getItem('user_id');
        const data = await getProfile(id);

        setName(data.name);
        setEmail(data.email);
        setPassword(data.password);
    };

    const navigateTo = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('logged');
        localStorage.removeItem('user_id');
        navigateTo('/');
    };

  return (
    <div>
        <Header />
        <div className='absolute bg-red-300 w-[600px] h-[500px] left-[32%] top-[200px] rounded-[30px] font-poppins font-semibold
        p-10 text-center text-[20px] border border-black'>
            <form className='flex flex-col gap-10 relative top-10 font-poppins font-medium text-red-800'>
                <label htmlFor="name">Name : <input className='rounded-[20px] text-center' type="text" value={name} /></label>
                <label htmlFor="email">Email : <input className='rounded-[20px] text-center' type="text" value={email} /></label>
                <label htmlFor="password">Password : <input className='rounded-[20px] text-center' type="text" value={password} /></label>
            </form>
            <div className='relative top-56 text-red-700 flex gap-10 left-40'>
                <button className='bg-red-500  text-white w-20 h-10  rounded-[20px]' onClick={handleLogout}>logout</button>
                <button className='bg-red-500 text-white w-20 h-10  rounded-[20px]'>edit</button>
            </div>
        </div>
    </div>
  );
};