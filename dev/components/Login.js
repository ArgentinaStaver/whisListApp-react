import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                mail: '',
                password: ''
            },
            redirect: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(event) {
        console.log(event);
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let state = this.state;
        state.user[name] = value;

        this.setState(state);
    }

    loginUser() {
        let vm = this;
        axios.post('http://localhost:8000/api/login', this.state.user)
            .then(function (response) {
                vm.resetForm();
            });
    }

    resetForm() {
        this.setState({
            user: {
                mail: '',
                password: ''
            },
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/event' />;
        }
        return(
            <section className="section-md bg-white text-center">
                <div className="shell">
                    <div className="range range-sm-center range-50">
                        <div className="cell-xs-12">
                            <h3>Login la lista visurilor</h3>
                            <p className="big text-width-medium">Casuta dorintelor</p>
                        </div>
                        <div className="cell-sm-9 cell-md-7 cell-lg-6">
                            <div className="inset-sm-25">
                                <p className="large text-gray-darker">my dream list</p>
                                <div className="group-sm group-sm-justify">
                                    <a className="button button-facebook button-rounded button-icon button-icon-left" href="#">
                                        <span className="icon fa fa-facebook"></span>Facebook
                                    </a>
                                    <a className="button button-twitter button-rounded button-icon button-icon-left" href="#">
                                        <span className="icon fa fa-twitter"></span>Twitter
                                    </a>
                                    <a className="button button-google button-rounded button-icon button-icon-left" href="#">
                                        <span className="icon fa fa-google-plus"></span>Google+
                                    </a>
                                </div>
                                <div className="text-decoration-lines">
                                    <span className="text-decoration-lines-content">or</span>
                                </div>
                                <form className="rd-mailform form-label-centered">
                                    <div className="form-wrap">
                                        <label className="form-label-outside" for="login-email">E-mail</label>
                                        <input className="form-input"
                                           value={this.state.user.mail}
                                           onChange={this.handleInputChange}
                                           type="email"
                                           name="mail"
                                           data-constraints="@Email @Required"
                                        />
                                    </div>
                                    <div className="form-wrap">
                                        <label className="form-label-outside" for="login-password">Password</label>
                                        <input className="form-input"
                                           value={this.state.user.password}
                                           onChange={this.handleInputChange}
                                           type="password"
                                           name="password"
                                           data-constraints="@Required"
                                        />
                                    </div>
                                    <button className="button button-primary button-effect-ujarak button-block"
                                        type="button"
                                        onClick={this.loginUser}>
                                        Intra in cont
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Login;