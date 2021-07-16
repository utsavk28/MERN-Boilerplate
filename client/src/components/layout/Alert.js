import React from 'react';
import { useSelector } from 'react-redux';

const Alert = () => {
    const { alert } = useSelector((state) => state);
    return (
        alert !== null &&
        alert.length > 0 && (
            <div className="alert-parent-container" >
                <div className='alert-container'>
                    {alert.map((al) => {
                        const { id, alertType, msg } = al;
                        return (
                            <div
                                key={id}
                                className={`alert alert-${alertType} alert-msg`}
                            >
                                {msg}
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    );
};

export default Alert;
