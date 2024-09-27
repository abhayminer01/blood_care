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
          <form onSubmit={handleForm}>
            <label htmlFor="blood_group">Blood Group : 
              <input type="text" name='blood_group'/>
            </label>
            <label htmlFor="weight">Body Weight :
              <input type="number" name='weight'/>
            </label>
            <label htmlFor="details">Are you facing any health issues ?
              <input type="text" placeholder='enter if any' name='details'/>
            </label>
            <label htmlFor="medicines">Are you taking any medicines ?
              <input type="text" placeholder='enter if any'  name='medicines'/>
            </label>
            <label htmlFor="ques1">Are you willing to donate blood?
              <input type="checkbox" name='ques1'/>
            </label>
            <input type="submit" />
          </form>
        </div>
    </div>
  );
};
