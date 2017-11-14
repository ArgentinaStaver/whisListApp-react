import React, { Component } from 'react';
import SocialMedia from './SocialMedia';
import Menu from './Menu';

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
                            <div className="rd-navbar-brand"><a className="brand-name" href="http://wesbos.com/react-jsx-comments/"><img src="images/logo-dark-165x53.png" alt="" width="165" height="53"/></a></div>
                        </div>
                        <div className="rd-navbar-aside-social">
                            <div className="rd-navbar-search"><a className="rd-navbar-search-toggle" data-rd-navbar-toggle=".rd-navbar-search" href="http://wesbos.com/react-jsx-comments/"><span></span></a>
                                <form className="rd-search" action="search-results.html" data-search-live="rd-search-results-live" method="GET">
                                    <div className="form-wrap">
                                        <label className="form-label form-label" htmlFor="rd-navbar-search-form-input">Search...</label>
                                        <input className="rd-navbar-search-form-input form-input" id="rd-navbar-search-form-input" type="text" name="s" autoComplete="off" />
                                        <div className="rd-search-results-live" id="rd-search-results-live"></div>
                                    </div>
                                    <button className="rd-search-form-submit fl-budicons-launch-search81"></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="rd-navbar-aside-right">
                        <Menu />
                    </div>
                </nav>
            </div>
            </header>
    </div>
        );
    }
}

export default Header;