import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './auth.css';
import { login } from '../../redux/actions/auth';

const Login = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    if (isAuthenticated) return <Redirect to='/' />;

    return (
        <div className='auth-container'>
            <form className='register-form m-4' onSubmit={submitForm}>
                <div className='mb-3'>
                    <label htmlFor='exampleInputEmail1' className='form-label'>
                        Email address
                    </label>
                    <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        aria-describedby='emailHelp'
                        name='email'
                        onChange={onChange}
                        required
                    />
                    <div id='emailHelp' className='form-text'>
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className='mb-3'>
                <label
                        htmlFor='exampleInputPassword1'
                        className='form-label'
                    >
                        Password
                    </label>
                    <input
                        type='password'
                        className='form-control'
                        id='exampleInputPassword1'
                        name='password'
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='mb-3 form-check'>
                    <input
                        type='checkbox'
                        className='form-check-input'
                        id='exampleCheck1'
                    />
                    <label className='form-check-label' htmlFor='exampleCheck1'>
                        Remember Me
                    </label>
                </div>
                <button type='submit' className='btn btn-primary'>
                    Submit
                </button>
                <p className='my-1'>
                    Don't have an account? <Link to='/register'>Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
