import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import SiteMenu from './Menu';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return(
            <div>
                <div className="page-loader">
                    <div><img src="images/logo-dark-165x53.png" alt="" width="165" height="53"/>
                        <div className="page-loader-body">
                            <div className="cssload-square">
                                <div className="cssload-square-part cssload-square-green"></div>
                                <div className="cssload-square-part cssload-square-pink"></div>
                                <div className="cssload-square-blend"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <header className="page-header rd-navbar-default rd-navbar-top-panel">
            <div className="rd-navbar-wrap">
                <nav className="rd-navbar" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fullwidth" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-md-stick-up-offset="80px" data-lg-stick-up-offset="140px" data-stick-up="true" data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true">
                    <div className="rd-navbar-collapse-toggle" data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></div>
                    <div className="rd-navbar-inner">
                        <SocialMedia />
                        <div className="rd-navbar-panel">
                            <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
                            <div className="rd-navbar-brand">
                                <Link to="/"> <img src="images/logo-dark-165x53.png" alt="" width="165" height="53"/></Link>
                            </div>
                        </div>
                        <div className="rd-navbar-aside-social">
                            <div className="rd-navbar-search">
                                <h5>{this.props.user && this.props.user.full_name}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="rd-navbar-aside-right">
                        <SiteMenu logged={this.props.user}/>
                    </div>
                </nav>
            </div>
            </header>
    </div>
        );
    }
}

export default Header;