import React, { Component } from 'react';

class SocialMedia extends Component {
    render() {
        return(
            <div className="rd-navbar-aside-social">
                <div className="rd-navbar-collapse">
                    <ul className="list-inline">
                        <li><a href="http://wesbos.com/react-jsx-comments/"><i className="icon fa fa-instagram text-gray-4" ></i></a></li>
                        <li><a href="http://wesbos.com/react-jsx-comments/"><i className="icon fa fa-facebook text-gray-4" ></i></a></li>
                        <li><a className="icon fa fa-twitter text-gray-4" href="http://wesbos.com/react-jsx-comments/"></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SocialMedia;