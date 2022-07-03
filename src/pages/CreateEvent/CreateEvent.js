import React, { useEffect, useState } from 'react';

const CreateEvent = () => {
    const [eventInfo, setEventInfo] = useState({});

    useEffect(() => {
        // axios.get(`https://sks-watch.herokuapp.com/products/${id}`)
        //     .then(res => setProduct(res.data))
        //     .then(() => setLoading(false))
        //     .catch(err => console.log(err))
    }, []);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...eventInfo };
        newInfo[field] = value;
        setEventInfo(newInfo);
    }
    const handleCreateEvent = e => {

        console.log(eventInfo);
        e.preventDefault();
    }
    return (
        <div className='max-w-4xl mx-auto mt-12'>
            <div className='rounded-xl p-4 flex justify-center shadow-lg py-10'>
                <form className='w-2/4' onSubmit={handleCreateEvent}>
                    <h2 className='mb-4 text-3xl font-bold'>Crete New Event</h2>
                    <div className='mb-4'>
                        <label className='block' htmlFor="title">Title:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="text" name='title' placeholder='Enter Title' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="description">Description:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="text" name='description' placeholder='Enter Description' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="execution_date">Execution Date:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="date" name='execution_date' placeholder='' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="target_amount">Target Amount:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="number" name='target_amount' placeholder='Enter Target Amount' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="current_amount">Current Amount:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="number" name='current_amount' placeholder='Enter current amount' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="expense_amount">Expense Amount:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="text" name='expense_amount' placeholder='Enter expense amount' />
                    </div>

                    <button className='px-4 py-2 text-white bg-primary' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default CreateEvent;