import React, { useEffect, useState } from 'react';

const AddReliefReceieved = () => {
    const [people, setPeople] = useState({});

    useEffect(() => {
        // axios.get(`https://sks-watch.herokuapp.com/products/${id}`)
        //     .then(res => setProduct(res.data))
        //     .then(() => setLoading(false))
        //     .catch(err => console.log(err))
    }, []);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...people };
        newInfo[field] = value;
        setPeople(newInfo);
    }
    const handleCreatePeople = e => {

        console.log(people);
        e.preventDefault();
    }
    return (
        <div className='max-w-4xl mx-auto mt-12'>
            <div className='rounded-xl p-4 flex justify-center shadow-lg py-10'>
                <form className='w-2/4' onSubmit={handleCreatePeople}>
                    <h2 className='mb-4 text-3xl font-bold'>Crete New People</h2>
                    <div className='mb-4'>
                        <label className='block' htmlFor="name">Name:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="text" name='name' placeholder='Enter Name' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="nid">NID:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="number" name='nid' placeholder='Enter nid' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="amount">Amount:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="number" name='amount' placeholder='Enter Amount' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="address">Address:</label>
                        <input className='w-full border border-black px-2' onChange={handleOnChange} type="number" name='address' placeholder='Enter address' />
                    </div>

                    <button className='px-4 py-2 text-white bg-primary' type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddReliefReceieved;