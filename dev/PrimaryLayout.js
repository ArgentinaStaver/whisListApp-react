import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProfilePage from './components/ProfilePage';
import AddEvents from './components/events/AddEvents';
import Events from './components/events/Events';

export default class PrimaryLayout extends Component {
    render() {
        return (
            <div className="text-center text-sm-left page">
                <Header />
                <Route path="/" exact component={Home} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/user" component={ProfilePage} />
                <Route path="/addEvent" component={AddEvents} />
                <Route path="/event" component={Events} />
                <Footer />
            </div>
        );
    }
}