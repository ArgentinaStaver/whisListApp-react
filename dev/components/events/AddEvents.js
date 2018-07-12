import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class AddEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: {
                title: '',
                description: '',
                event_date: ''
            },
            redirect: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.registerEvent = this.registerEvent.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let state = this.state;
        state.events[name] = value;

        this.setState(state);
    }

    registerEvent() {
        let vm = this;
        axios.post('http://localhost:8000/api/event', this.state.events)
            .then(function (response) {
                vm.resetForm();
            });
    }

    resetForm() {
        this.setState({
            events: {
                title: '',
                description: '',
                event_date: ''
            },
            redirect: true
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/event' />;
        }
        return (
            <section className="section-md bg-white text-center">
                <div className="shell">
                    <div className="range range-sm-center range-50">
                        <div className="cell-xs-12">
                            <h3>The big wish</h3>
                            <p className="big text-width-medium">With forms you can get almost any kind of information from your visitors, who will definitely appreciate this attractive element.</p>
                        </div>
                        <div className="cell-sm-9 cell-md-7 cell-lg-6">
                            <div className="inset-sm-25">
                                <p className="large text-gray-darker">Creaza un eveniment</p>
                                <form className="rd-mailform form-label-centered">
                                    <div className="form-wrap">
                                        <label className="form-label-outside" for="login-email">Titlu</label>
                                        <input className="form-input"
                                               value={this.state.events.title}
                                               type="text"
                                               name="title"
                                               onChange={this.handleInputChange}
                                               data-constraints="@Required"/>
                                    </div>
                                    <div className="form-wrap">
                                        <label className="form-label-outside" for="login-password">Descriere</label>
                                        <input className="form-input"
                                               value={this.state.events.description}
                                               id="login-password"
                                               type="text"
                                               name="description"
                                               onChange={this.handleInputChange}
                                               data-constraints="@Required"/>
                                    </div>
                                    <div className="form-wrap">
                                        <label className="form-label-outside" for="login-password">Data eveniment</label>
                                        <input className="form-input"
                                               value={this.state.events.event_date}
                                               type="date"
                                               name="event_date"
                                               onChange={this.handleInputChange}
                                               data-constraints="@Required"/>
                                    </div>
                                    <button
                                        className="button button-primary button-effect-ujarak button-block"
                                        type="button"
                                        onClick={this.registerEvent}>
                                        Adauga evenimentul
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

export default AddEvents;