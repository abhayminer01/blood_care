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
        <form onSubmit={handleForm}>
            <label>Blood Group : 
                <select name="group" id="group" onChange={handleGroup}>
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
                <input type="number" name='amount'/>
            </label>
            <label htmlFor="">Urgency : 
                <select name="urgency" id="urgency" onChange={handleUrgency}>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>
            </label>
            <label htmlFor="">Location : 
                <input type="text" name='location' />
            </label>
            <label htmlFor="">Purpose : 
                <input type="text" name='purpose' />
            </label>
            <input type="submit" />
        </form>
    </div>
  )
}
