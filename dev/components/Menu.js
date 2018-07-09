import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SiteMenu extends Component {

    render() {
        return(
            <div className="rd-navbar-nav-wrap">
                {
                    this.props.logged &&
                    <ul className="rd-navbar-nav">
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/event">Evenimentele mele</Link>
                        </li>
                        <li>
                            <Link to="/event">Invitatii</Link>
                        </li>
                    </ul>
                }
                {
                    !this.props.logged &&
                    <ul className="rd-navbar-nav">
                        <li className="active">
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/signUp">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                }

            </div>
        );
    }
}

export default SiteMenu;
