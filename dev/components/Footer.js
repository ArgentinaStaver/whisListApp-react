import React, { Component } from 'react';
import Menu from './Menu';

class Footer extends Component {
    render() {
        return(
            <footer className="page-footer footer-var-3">
                <div className="shell">
                    <div className="page-footer-inner-top">
                        <div className="range range-50 range-md-0 range-center">
                            <div className="cell-md-4 cell-sm-5 cell-xs-10">
                                <div className="footer-brand"><a className="brand-name" href="./"><img src="images/logo-white-165x53.png" alt="" width="165" height="53"/></a></div>
                                <p>Inspire is an online magazine, giving its readers regular lifestyle tips, recommendations on fashion and style, and much more!</p>
                            </div>
                            <div className="cell-md-3 cell-sm-5 cell-xs-7">
                                <h4>Links</h4>
                                <ul className="list list-size-small list-bold list-uppercase list-white list-two-columns">
                                    <Menu />
                                </ul>
                            </div>
                        </div>
                        </div>
                        <div className="page-footer-inner-bottom text-center">
                            <div className="range range-20 range-sm-0 range-center range-middle">
                                <div className="cell-sm-4 text-sm-left">
                                    <p>Inspire &#169; <span id="copyright-year"></span>. <a href="privacy-policy.html">Privacy Policy</a>
                                    </p>
                                </div>
                                <div className="cell-sm-4 text-center">
                                    <ul className="list-inline">
                                        <li><a className="icon fa fa-instagram icon-xxs" href="#"></a></li>
                                        <li><a className="icon fa fa-facebook icon-xxs" href="#"></a></li>
                                        <li><a className="icon fa fa-twitter icon-xxs" href="#"></a></li>
                                    </ul>
                                </div>
                            <div className="cell-sm-4 text-sm-right"><a href="mailto:#">info@demolink.org</a></div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;