import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './layout.css';


const Navbar = () => {
    const {
        auth: { isAuthenticated, user },
    } = useSelector((state) => state);

    return (
        <div className='bg-light'>
            <nav className='navbar navbar-light'>
                <div className='container-lg'>
                    Logo
                    {isAuthenticated && user ? (
                        <Fragment>
                            Hello
                        </Fragment>
                    ) : (
                        <div className='d-flex center'>
                            <ul className='nav' id='navbar-panel'>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/register'>
                                        Register
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' to='/login'>
                                        Login
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
