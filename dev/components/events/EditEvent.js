import React, { Component } from 'react';
import Gifts from './Gifts';
import Persons from './Persons';
import axios from 'axios';

class EditEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            event: {
                id: '',
                title: '',
                description: '',
                event_date: ''
            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.updateEvent = this.updateEvent.bind(this);
    }

    componentDidMount() {
        let {id} = this.props.match.params;
        this.getEvent(id);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let state = this.state;
        state.event[name] = value;

        this.setState(state);
    }

    updateEvent() {
        let {id} = this.props.match.params;
        axios.put('http://localhost:8000/api/event/' + id, this.state.event)
            .then(function (response) {
            });
    }

    getEvent(id) {
        let vm = this;
        axios.get('http://localhost:8000/api/event/' + id)
            .then(function (response) {
                let state = vm.state;
                state.event = response.data;

                vm.setState(state);
            });
    }

    render() {
        return(
            <section className="section-md bg-white text-center">
                <div className="shell shell-custom">
                    <div className="range range-50 range-lg-justify">
                        <div className="cell-md-12 cell-xs-12">
                            <div className="box-product">
                                <div className="unit unit-spacing-0 unit-sm-horizontal box-product-content">
                                    <div className="cell-md-4">
                                        <a href="single-product.html"><img src="http://via.placeholder.com/301x306" alt="" width="301" height="306"/></a>
                                    </div>
                                    <div className="cell-md-8 width70pr">
                                        <form className="form-label-left">
                                            <div className="form-wrap">
                                                <div className="unit__body">
                                                        <div className="box-product-content-wrap">
                                                            <label className="form-label-outside"> Titlu eveniment</label>
                                                            <input className="form-input"
                                                                   value={this.state.event.title}
                                                                   onChange={this.handleInputChange}
                                                                   type="text"
                                                                   name="title"
                                                                   data-constraints="@Required" />
                                                            <label className="form-label-outside">Data eveniment</label>
                                                            <input className="form-input"
                                                                   value={this.state.event.event_date}
                                                                   onChange={this.handleInputChange}
                                                                   type="date"
                                                                   name="event_date"
                                                                   data-constraints="@Required" />
                                                            <label className="form-label-outside">Descriere eveniment</label>
                                                            <textarea className="form-input"
                                                                      value={this.state.event.description}
                                                                      onChange={this.handleInputChange}
                                                                      name="description">
                                                            </textarea>
                                                            <a className="button button-effect-ujarak button-gray-1"
                                                                onClick={this.updateEvent}>
                                                                Salveaza
                                                            </a>
                                                        </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cell-md-4 cell-xs-8">
                            {
                                this.state.event.id !== '' &&
                                <Persons eventId={this.state.event.id}/>
                            }
                        </div>
                        <div className="cell-md-8 cell-xs-8">
                            {
                                this.state.event.id !== '' &&
                                <Gifts eventId={this.state.event.id}/>
                            }

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default EditEvent;