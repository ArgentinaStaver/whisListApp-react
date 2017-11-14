import React, { Component } from 'react';

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
                                    <li><a href="about-us.html">About</a></li>
                                    <li><a href="health.html">Health</a></li>
                                    <li><a href="food.html">Food</a></li>
                                    <li><a href="love.html">Love</a></li>
                                    <li><a href="fitness.html">Fitness</a></li>
                                    <li><a href="beauty.html">Beauty</a></li>
                                </ul>
                            </div>
                            <div className="cell-md-5 cell-xs-10">
                                <h4>Join Our Newsletter</h4>
                                <form className="rd-mailform rd-mailform-lg form-inline" data-form-output="form-output-global" data-form-type="subscribe" method="post" action="bat/rd-mailform.php">
                                    <div className="form-wrap">
                                        <input className="form-input" id="subscribe-email" type="email" name="email" data-constraints="@Email @Required" />
                                            <label className="form-label form-label-dark" for="subscribe-email">E-mail</label>
                                        </div>
                                        <button className="button button-lg button-effect-ujarak button-secondary-dark" type="submit">Subscribe</button>
                                    </form>
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