import React, { Fragment } from 'react';
import loader from './loader.gif';

const Loader = () => {
    return (
        <Fragment>
            <div className='loading-container'>
                <div className="loader-container" >
                    <div className='loader'>
                        <img src={loader} alt='Loading...' />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Loader;
