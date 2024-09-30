import React, { useEffect, useState } from 'react'
import { getInventory } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';

export default function EditInventory() {

    const [inventory, setInventory] = useState([]);
    const navigateTo = useNavigate();

    const fetchInventory = async () => {
        const data = await getInventory();
        setInventory(data);        
    };

    const handleForm = async(e) => {
        const group = e.target.group.value;
        const quantity = e.target.quantity.value;
        navigateTo('/manager-panel/manage-inv')
    };

    const handleChange = (e) => {
        console.log(e.target.value);
    };
    
    useEffect(() => {
        fetchInventory();
    },[]);

  return (
    <div>
        <div className='absolute left-[15%] top-[8%] h-[800px] w-[70vw] bg-red-300 rounded-[50px] border border-black text-center p-5'>
            <h1 className='font-poppins font-bold text-red-600 text-[50px]'>Edit Inventory</h1>
            <div className='relative flex flex-col gap-10 top-[8%] left-[21%]'>
                {inventory.map((item, index)=>{
                    return(
                        <form onSubmit={handleForm} className='flex gap-12 font-poppins font-medium text-center'>
                            <label htmlFor="group">Blood Group  :
                                <input onChange={handleChange} name='group' className='text-center rounded-lg relative left-5 text-[#7b169a]' type="text" value={item.blood_group}/>
                            </label>
                            <label htmlFor="quantity">Quantity  : 
                                <input onChange={handleChange} name='quantity' type="text" className='text-center rounded-lg relative left-5 text-[#7b169a]' value={item.quantity}/>
                            </label>
                            <input type="submit"  className='bg-red-500 w-20 h-8 rounded-[20px] cursor-pointer text-white'/>
                        </form>
                    )
                })}
            </div>
            <Link to='/manager-panel/manage-inv'><button className='absolute bottom-5 bg-red-500 rounded-[20px] w-36 h-10 left-[45%]'>Go Back</button></Link>
        </div>
    </div>
  )
}
