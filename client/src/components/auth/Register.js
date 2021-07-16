import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './auth.css';
import { register } from '../../redux/actions/auth';

const Register = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        email: '',
        username: '',
        fullname: '',
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
        dispatch(register(formData));
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
                    <label htmlFor='username' className='form-label'>
                        Username
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='username'
                        name='username'
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='mb-3'>
                    <label htmlFor='fullname' className='form-label'>
                        Full Name
                    </label>
                    <input
                        type='text'
                        className='form-control'
                        id='fullname'
                        name='fullname'
                        onChange={onChange}
                        required
                    />
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
                    Already have an account?<Link to='/login'>Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
