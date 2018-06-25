import React, { Component } from 'react';

class SignUp extends Component {
    render() {
        return(
            <section class="section-md bg-white text-center">
                <div class="shell">
                    <div class="range range-sm-center range-50">
                        <div class="cell-xs-12">
                            <h3>Make a wish come true</h3>
                            <p class="big text-width-medium">Create a dream list account</p>
                        </div>
                    <div className="cell-sm-9 cell-md-7 cell-lg-6">
                        <div className="inset-sm-25">
                            <p className="large text-gray-darker">Creaza lista visurilor tale</p>
                            <form className="rd-mailform form-label-centered">
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-email">E-mail</label>
                                    <input className="form-input"
                                           id="login-email"
                                           type="email"
                                           name="mail"
                                           data-constraints="@Email @Required"
                                    />
                                </div>
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-email">Nume</label>
                                    <input className="form-input"
                                           id="login-name"
                                           type="text"
                                           name="lastname"
                                           data-constraints="@Required"
                                    />
                                </div>
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-email">Prenume</label>
                                    <input className="form-input"
                                           id="login-name"
                                           type="text"
                                           name="firstname"
                                           data-constraints="@Required"
                                        />
                                </div>
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-password">Password</label>
                                    <input className="form-input"
                                           id="login-password"
                                           type="password"
                                           name="password"
                                           data-constraints="@Required"
                                    />
                                </div>
                                <button className="button button-primary button-effect-ujarak button-block" type="submit">Creaza-ti cont</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SignUp;