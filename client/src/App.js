import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './utils/PrivateRoute';
import { loadUser } from './redux/actions/auth';
import Alert from './components/layout/Alert';
import Loader from './components/layout/Loader';
import HomePage from './components/home/HomePage';

function App() {
    const dispatch = useDispatch();
    const {
        auth: { loading },
    } = useSelector((state) => state);

    useEffect(() => {
        dispatch(loadUser());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return loading ? (
        <Loader />
    ) : (
        <div className='main-container'>
            <Router>
                <Navbar />
                <Alert />
                <div>
                    <Switch>
                        <PrivateRoute exact path='/' component={HomePage} />
                        <Route exact path='/register' component={Register} />
                        <Route exact path='/login' component={Login} />
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
