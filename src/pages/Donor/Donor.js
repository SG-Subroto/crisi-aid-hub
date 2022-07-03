import React from 'react';
import ActiveEvent from '../../components/ActiveEvent/ActiveEvent';
import Header from '../../components/Header/Header';

const Donor = () => {
    return (
        <div>
            <Header />
            <div className='bg-indigo-500 h-80 flex justify-center items-center'>
                <div className='text-center'>
                    <h1 className='text-6xl text-white font-bold'>CRISIS AID HUB</h1>
                    <i><q className='text-white text-xl'>Every penny visiable, <br /> Every penny accountable</q></i>
                </div>
            </div>
            <div className='container'>
                <ActiveEvent />
            </div>

        </div>
    );
};

export default Donor;