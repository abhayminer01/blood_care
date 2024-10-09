import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';

export default function Authentication() {
  const navigateTo = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const request = await login(email, password);
    console.log(request);

    if(request.success === true){
      localStorage.setItem('user_id', request.id);
      localStorage.setItem('logged', true);
      navigateTo('/');
    }else{
      alert('Failed to login');
    };
  };

  return (
    <div>
      <div className='absolute left-[38%] top-[10%] h-[500px] w-[20vw] bg-red-300 rounded-[50px] border border-black text-center p-5'>
      <h1 className='font-poppins font-bold text-red-600 text-[50px]'>Login</h1>
      <form className='relative font-poppins font-medium text-red-600 top-10 flex flex-col gap-8' onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email  :
          <input className='relative left-5 rounded-[20px] h-9' type="email" name='email' />
        </label>
        <label htmlFor="password">Password  : 
          <input className='relative left-5 rounded-[20px] h-9' type="password" name='password'/>
        </label>
        <input type="submit" className='cursor-pointer bg-red-500 text-white w-32 h-10 relative top-20 left-24 rounded-[20px]'/>
      </form>
      <p className='text-blue-600'>Dont have an account? <Link className='text-white cursor-pointer' to='/auth/reg'>Register</Link></p>
    </div>
    </div>
  );
};