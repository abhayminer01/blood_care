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
      <form className='flex flex-col gap-8' onSubmit={handleFormSubmit}>
        <label htmlFor="email">Email
          <input type="email" name='email' />
        </label>
        <label htmlFor="password">Password : 
          <input type="password" name='password'/>
        </label>
        <input type="submit" className='cursor-pointer'/>
      </form>
      <p>Dont have an account? <Link to='/auth/reg'>Register</Link></p>
    </div>
  );
};