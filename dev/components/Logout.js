import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Logout extends Component {

    logout() {
        localStorage.clear();
        axios.defaults.headers.common['X-UserId'] = null;

        return true;
    }

    render() {

        return this.logout() && <Redirect to='/' />;
    }
}

export default Logout;
