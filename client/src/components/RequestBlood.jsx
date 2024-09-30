import React, { useState } from 'react'
import Header from './common/Header'
import { useNavigate } from 'react-router-dom';
import { bloodRequest } from '../services/api';

export default function RequestBlood() {

    const navigateTo = useNavigate();

    const [urgency, setUrgency] = useState();
    const [group, setGroup] = useState();

    const handleGroup = (e) => {
        setGroup(e.target.value);
    };

    const handleUrgency = (e) =>{
        setUrgency(e.target.value);
    };

    const handleForm = async (e) => {
        e.preventDefault();

        const userId = localStorage.getItem('user_id');
        const amount = e.target.amount.value;
        const purpose = e.target.purpose.value;
        const location = e.target.location.value;

        const request = await bloodRequest(userId, group, amount, urgency, purpose, location);

        console.log(request);
        
        if(request.success){
            alert('Request Submitted Successfully');
            navigateTo('/');
        }else{
            alert('Error occured while submitting data...Try again...');
        };
    };

  return (
    <div>
        <Header />
        <div>
            <div className='absolute left-[30%] top-[15%] h-[600px] w-[30vw] bg-red-300 rounded-[50px] border border-black text-center p-5'>
                <h1 className='font-poppins font-bold text-red-600 text-[40px]'>Request Blood</h1>
                <form onSubmit={handleForm} className='flex flex-col gap-10 w-full h-full relative top-20 font-poppins font-medium text-center'>
                    <label>Blood Group : 
                        <select required name="group" id="group" onChange={handleGroup} className='rounded-[20px] relative left-5'>
                            <option value="none">select</option>
                            <option value="a+">A+</option>
                            <option value="b+">B+</option>
                            <option value="o+">O+</option>
                            <option value="a-">A-</option>
                            <option value="b-">B-</option>
                            <option value="o-">O-</option>
                            <option value="ab+">AB+</option>
                            <option value="ab-">AB-</option>
                        </select>
                    </label>
                    <label>Amount(ml) : 
                        <input required type="number" name='amount' className='rounded-[20px] relative left-5'/>
                    </label>
                    <label htmlFor="">Urgency : 
                        <select required name="urgency" id="urgency" onChange={handleUrgency} className='rounded-[20px] relative left-5'>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </label>
                    <label htmlFor="">Location : 
                        <input required type="text" name='location' className='rounded-[20px] relative left-5'/>
                    </label>
                    <label htmlFor="">Purpose : 
                        <input required type="text" name='purpose' className='rounded-[20px] relative left-5'/>
                    </label>
                    <input type="submit" className='rounded-[20px] cursor-pointer bg-red-500 w-28 h-10 relative left-[40%]' />
                </form>
            </div>
        </div>
    </div>
  )
}
