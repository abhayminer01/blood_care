import React, { useState } from 'react'
import Header from '../common/Header';

export default function Donation() {

    const [status, setStatus] = useState('available');

    const handleSelect = (e) => {
        setStatus(e.target.value);
    };

  return (
    <div>
        <Header />
        <div>
            <select name="availability" id="availability" onChange={handleSelect}>
                <option value="available">Available</option>
                <option value="unavailable">UnAvailable</option>
            </select>
        </div>
    </div>
  )
};