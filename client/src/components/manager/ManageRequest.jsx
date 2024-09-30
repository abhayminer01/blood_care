import React, { useEffect, useState } from 'react'
import { getRequests } from '../../services/api';
import { Link } from 'react-router-dom';

export default function ManageRequest() {

    const [request, setRequest] = useState([]);

    const getData = async () => {
        const request = await getRequests();
        setRequest(request);
    };

    useEffect(()=>{
        getData();
    },[]);

  return (
    <div>
        <div>
            <div className='absolute left-[15%] top-[8%] h-[800px] w-[70vw] bg-red-300 rounded-[50px] border border-black text-center p-5'>
                <h1 className='font-poppins font-bold text-[50px] text-red-700'>Blood Requests</h1>
                <div className='bg-red-500 rounded-[30px] h-10 pl-5 pr-5 pt-2 text-white font-poppins font-medium'>
                    <ul className='flex justify-between'>
                        <li>User Id</li>
                        <li>Blood Group</li>
                        <li>Quantity</li>
                        <li>Urgency</li>
                        <li>Location</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-10'>
                {request.map((item, index) => {
                  return(
                    <div className='relative top-10 bg-red-500 rounded-[30px] h-10 pl-5 pr-5 pt-2 text-white font-poppins font-medium'>
                      <ul className='flex justify-between'>
                        <li key={index+1}>{item.user_id}</li>
                        <li key={index+2}>{item.blood_group} ml</li>
                        <li key={index+4}>{item.amount} ml</li>
                        <li key={index+5}>{item.urgency}</li>
                        <li key={index+6}>{item.location}</li>
                      </ul>
                    </div>
                  )
                })}
              </div>
              <Link to='/manager-panel'><button className='absolute bg-red-500 bottom-5 w-28 h-10 rounded-[20px] text-white font-poppins font-medium left-[45%]'>Go Back</button></Link>
            </div>
        </div>
    </div>
  )
}
