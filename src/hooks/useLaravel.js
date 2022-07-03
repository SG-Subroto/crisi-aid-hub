import React, { useEffect, useState } from 'react';
import jwt_decode from "jwt-decode";
import axios from 'axios';

const useLaravel = () => {

    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState({})
    const [isExpire, setIsExpire] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    let registerUser = async (name, email, password, password_confirm, role_id, navigate) => {
        setIsLoading(true);
        let response = await fetch('http://127.0.0.1:8000/api/v1/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'name': name, 'email': email, 'password': password, 'password_confirm': password_confirm, "role_id": role_id })
        })
        // console.log(email, password);
        // let data = await response.json()
        // console.log(data.token);
        if (response.status === 201) {
            // setAuthTokens(data.token);
            // setUpUser(data.token, true);
            // localStorage.setItem('authTokens', JSON.stringify(data.token));
            // const destination = location?.state?.from || '/donor';
            navigate('/login');
            setAuthError('');
            setIsLoading(false);
        } else {
            setAuthError('Registration failed')
            setIsLoading(false);
        }


    }

    let loginUser = async (email, password, location, navigate) => {
        let response = await fetch('http://127.0.0.1:8000/api/v1/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': email, 'password': password })
        })
        // console.log(email, password);
        let data = await response.json()
        // console.log(data.token);
        if (response.status === 200) {
            setAuthTokens(data.token);
            setUpUser(data.token, true, location, navigate);
            localStorage.setItem('authTokens', JSON.stringify(data.token));
            // const destination = location?.state?.from || '/donor';
            // navigate(destination);
            setAuthError('');
        } else {
            setAuthError('Email or password is invalid')
        }
    }


    let logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
    }


    // let updateToken = async () => {

    //     let response = await fetch('http://127.0.0.1:8000/api/v1/auth/token-refresh/', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({ 'refresh': authTokens?.refresh })
    //     })

    //     let data = await response.json()

    //     if (response.status === 200) {
    //         setAuthTokens(data)
    //         setUpUser(data, false)
    //         localStorage.setItem('authTokens', JSON.stringify(data))
    //     } else {
    //         logoutUser()
    //     }

    // }

    const setUpUser = (data, isFirst, location, navigate) => {
        console.log("calling....");
        const token = jwt_decode(data)
        // console.log(token);
        const userId = token['sub']
        // isFirst && setIsLoading(true)
        const userData = { user_id: userId }
        axios.post('http://127.0.0.1:8000/api/v1/get-user-info/', userData, {
            headers: {
                Authorization: 'Bearer ' + String(data)
            }
        })
            .then(res => {
                setUser(res.data)
                // console.log(res.data.role_id);
                if (res.data.role_id === 1) {
                    const destination = location?.state?.from || '/donor';
                    navigate(destination);
                } else if (res.data.role_id === 2) {
                    const destination = location?.state?.from || '/organization';
                    navigate(destination);
                }
            })
            .catch(err => console.log(err))
            .finally(() => {
                setIsLoading(false)
                // setIsExpire(false)
            })
    }


    useEffect(() => {

        // if (isLoading && authTokens) {
        //     updateToken()
        // }
        // if (isLoading && !authTokens) {
        setIsLoading(false)
        // }
        // let fourMinutes = 1000 * 60 * 4

        // let interval = setInterval(() => {
        //     if (authTokens) {
        //         updateToken()
        //     }
        // }, fourMinutes)
        // return () => clearInterval(interval)

    }, [authTokens])

    return {
        user,
        authTokens,
        loginUser,
        registerUser,
        logoutUser,
        isLoading,
        authError
    }
}

export default useLaravel;