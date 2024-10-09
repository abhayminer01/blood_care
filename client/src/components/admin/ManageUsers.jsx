import React, { useEffect, useState } from 'react'
import { getUsers } from '../../services/api'
import { Link } from 'react-router-dom';

export default function ManageUsers() {

    const [data, setData] = useState([]);

    const fetchData = async() => {
        const data = await getUsers();
        setData(data);
    };

    useEffect(()=>{
        fetchData();
    },[]);

  return (
    <div>
        <div>
          <div className='absolute left-[15%] top-[3%] h-[800px] w-[70vw] bg-red-300 rounded-[50px] border border-black text-center p-5'>
            <h1 className='text-red-600 font-poppins font-bold text-[50px]'>All Users</h1>
            <div className='bg-red-500 rounded-[30px] h-10 pl-5 pr-5 pt-2 text-white font-poppins font-medium'>
              <ul className='flex justify-between'>
                <li>Id</li>
                <li>Name</li>
                <li>Email Updated</li>
              </ul>
              <div className='flex flex-col gap-10'>
                {data.map((item, index) => {
                  return(
                    <div className='relative top-10 bg-red-500 rounded-[30px] h-10 pl-5 pr-5 pt-2 text-white font-poppins font-medium'>
                      <ul className='flex justify-between'>
                        <li key={index+1}>{item.id}</li>
                        <li key={index+2}>{item.name} ml</li>
                        <li key={index+3}>{item.email}</li>
                      </ul>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-[90%] left-[40%] text-center text-white font-poppins font-medium flex gap-10'>
            <Link to='/admin-page'><button className='bg-red-500 rounded-[20px] p-2 w-28 h-10'>Go Back</button></Link>
        </div>
    </div>
  )
}
