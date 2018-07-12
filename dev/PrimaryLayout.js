import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import ProfilePage from './components/ProfilePage';
import AddEvents from './components/events/AddEvents';
import Events from './components/events/Events';
import InvitationEvents from './components/events/InvitationEvents';
import EditEvent from './components/events/EditEvent';
import InvitationEventPage from './components/events/InvitationEventPage';
import axios from 'axios';


export default class PrimaryLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: localStorage.getItem('isLoggedIn')
        };
    }

    render() {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            axios.defaults.headers.common['X-UserId'] = user.id;
        }
        console.log(axios.defaults.headers);
        return (
            <div className="text-center text-sm-left page">
                <Header user={user} isLoggedIn={this.state.loggedIn} />
                <Route path="/" exact component={Home} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route path="/user" component={ProfilePage} />
                <Route path="/addEvent" component={AddEvents} />
                <Route path="/event" component={Events} />
                <Route path="/invitations" component={InvitationEvents} />

                <Route path="/editEvent/:id" component={EditEvent} />

                <Route path="/invitationPage/:id" component={InvitationEventPage} />
                <Footer />
            </div>
        );
    }
}
