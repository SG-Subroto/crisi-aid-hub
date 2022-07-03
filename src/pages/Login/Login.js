import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [loginData, setLoginData] = useState({});

    const { loginUser, authError } = useAuth()

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // setAuthError('');
    }, []);

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
    }
    return (
        <div className='max-w-4xl mx-auto mt-12'>
            <div className='rounded-xl p-4 flex justify-center shadow-lg py-20'>
                <form onSubmit={handleLoginSubmit}>
                    <h2 className='mb-4 text-3xl font-bold'>Please Login</h2>
                    <div className='mb-4'>
                        <label className='block' htmlFor="email">Email:</label>
                        <input className='border px-2' onChange={handleOnChange} type="text" name='email' placeholder='Enter email' />
                    </div>
                    <div className='mb-4'>
                        <label className='block' htmlFor="password">Password:</label>
                        <input className='border px-2' onChange={handleOnChange} type="password" name='password' placeholder='Enter password' />
                    </div>

                    <button className='px-4 py-2 text-white bg-primary' type='submit'>Login</button>
                </form>
            </div>

            <p className="mt-4 text-center text-danger">{authError}</p>
        </div>
    );
};

export default Login;