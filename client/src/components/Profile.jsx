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
        <div className='absolute bg-red-300 w-[600px] h-[500px] left-[550px] top-[200px] rounded-[30px] font-poppins font-semibold
        p-10 text-center text-[20px]'>
            <p className=''>Name : {name}</p>
            <p>Email : {email}</p>
            <p>Password : {password}</p>
            <div className='relative top-64 text-red-700 flex gap-10 left-40'>
                <button className='bg-white w-20 h-10  rounded-lg' onClick={handleLogout}>logout</button>
                <button className='bg-white w-20 h-10  rounded-lg'>edit</button>
            </div>
        </div>
    </div>
  );
};