import React from 'react'
import Header from '../common/Header';
import { donorRegistration } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export default function DonorRegistration() {

  const navigateTo = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();

    const blood = e.target.blood_group.value;
    const weight = e.target.weight.value;
    const userId = localStorage.getItem('user_id');

    const request = await donorRegistration(userId, blood, weight);

    if(request.success){
      localStorage.setItem('donor', true);
      navigateTo('/');
      alert('Successfully registered as a donor');
    }else{
      alert('Failed to register..try again');
    };
  };

  return (
    <div>
        <Header />
        <div>
          <div className='absolute left-[35%] top-[20%] h-[500px] w-[35vw] bg-red-300 rounded-[50px] border border-black text-center p-5'>
            <h1 className='font-poppins font-bold text-red-600 text-[40px]'>Donor Registration</h1>
            <form onSubmit={handleForm} className='flex flex-col gap-5 relative top-10 font-poppins font-medium'>
              <label htmlFor="blood_group">Blood Group : 
                <input type="text" name='blood_group' className='rounded-lg relative left-5'/>
              </label>
              <label htmlFor="weight">Body Weight :
                <input type="number" name='weight' className='rounded-lg relative left-5'/>
              </label>
              <label htmlFor="details">Are you facing any health issues ?
                <input type="text" className='rounded-lg relative left-5' placeholder='enter if any' name='details'/>
              </label>
              <label htmlFor="medicines">Are you taking any medicines ?
                <input type="text" placeholder='enter if any'  name='medicines' className='rounded-lg relative left-5'/>
              </label>
              <label htmlFor="ques1">Are you willing to donate blood?
                <input type="checkbox" name='ques1' className='relative left-2 size-5'/>
              </label>
              <input type="submit" className='bg-red-400 w-24 h-10 rounded-[20px] cursor-pointer relative top-10 left-[40%]'/>
            </form>
          </div>
        </div>
    </div>
  );
};
