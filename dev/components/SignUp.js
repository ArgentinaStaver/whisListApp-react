import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            mail: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.registerUser = this.registerUser.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    registerUser() {
       let vm = this;
        axios.post('http://localhost:8000/api/user', this.state)
            .then(function (response) {
                vm.resetForm();
            });
    }

    resetForm() {
        this.setState({
            firstname: '',
            lastname: '',
            mail: '',
            password: ''
        });
    }

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
                                           value={this.state.mail}
                                           onChange={this.handleInputChange}
                                           type="email"
                                           name="mail"
                                           data-constraints="@Email @Required"
                                    />
                                </div>
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-email">Nume</label>
                                    <input className="form-input"
                                           value={this.state.lastname}
                                           onChange={this.handleInputChange}
                                           type="text"
                                           name="lastname"
                                           data-constraints="@Required"
                                    />
                                </div>
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-email">Prenume</label>
                                    <input className="form-input"
                                           value={this.state.firstname}
                                           onChange={this.handleInputChange}
                                           type="text"
                                           name="firstname"
                                           data-constraints="@Required"
                                        />
                                </div>
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-password">Password</label>
                                    <input className="form-input"
                                           value={this.state.password}
                                           onChange={this.handleInputChange}
                                           type="password"
                                           name="password"
                                           data-constraints="@Required"
                                    />
                                </div>
                                <button className="button button-primary button-effect-ujarak button-block"
                                        type="button"
                                        onClick={this.registerUser}>
                                    Creaza-ti cont
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

export default SignUp;