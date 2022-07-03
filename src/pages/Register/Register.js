import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const [userData, setUserData] = useState({});

    const { registerUser, authError } = useAuth()

    // const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // setAuthError('');
    }, []);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...userData };
        newLoginData[field] = value;
        setUserData(newLoginData);
    }
    const handleLoginSubmit = e => {

        registerUser(userData.name, userData.email, userData.password, userData.password_confirm, userData.role_id, navigate)
        e.preventDefault();
    }
    return (
        <div className='max-w-4xl mx-auto mt-12'>
            <div className='rounded-xl p-4 flex justify-center shadow-lg py-20'>
                <form onSubmit={handleLoginSubmit}>
                    <h2 className='mb-4 text-3xl font-bold'>Please Register</h2>
                    <div className='mb-4'>
                        <label className='block' htmlFor="name">Name:</label>
                        <input className='border px-2' onChange={handleOnChange} type="text" name='name' placeholder='Enter Fullname' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="email">Email:</label>
                        <input className='border px-2' onChange={handleOnChange} type="email" name='email' placeholder='Enter email' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="password">Password:</label>
                        <input className='border px-2' onChange={handleOnChange} type="password" name='password' placeholder='Enter password' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="password_confirm">Re-Type Password:</label>
                        <input className='border px-2' onChange={handleOnChange} type="password" name='password_confirm' placeholder='Enter password again' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="role_id">Role Id:</label>
                        <input className='border px-2' onChange={handleOnChange} type="text" name='role_id' placeholder='Enter role id' />
                    </div>

                    <button className='px-4 py-2 text-white bg-primary' type='submit'>Register</button>
                </form>
            </div>

            <p className="mt-4 text-center text-danger">{authError}</p>
        </div>
    );
};

export default Register;