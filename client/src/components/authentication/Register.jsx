import React from 'react'
import { register } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function Register() {

  const navigateTo = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirm = e.target.cnfrmpswrd.value;

    if(password !== confirm){
      alert('Password missmatch');
      return;
    };

    const request = await register(name, email, password);

    if(!request.success){
      alert('User already Exist');
    }else{
      localStorage.setItem('logged', true);
      localStorage.setItem('user_id', request.id);
      navigateTo('/');
    };
  };

  return (
    <div>
      <form onSubmit={handleForm} className='flex flex-col gap-10 bg-slate-500'>
        <label htmlFor="name">Name : 
          <input type="text" name='name' />
        </label>
        <label htmlFor="email">Email : 
          <input type="email"  name='email'/>
        </label>
        <label htmlFor="password">Password : 
          <input type="password" name='password' />
        </label>
        <label htmlFor="cnfrmpswrd">Confirm Password : 
          <input type="password" name='cnfrmpswrd' />
        </label>
        <input type="submit" className='cursor-pointer'/>
      </form>
    </div>
  );
};