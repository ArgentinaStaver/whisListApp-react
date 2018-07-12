import React, { Component } from 'react';
import SelectGift from './SelectGift';
import axios from 'axios';

class InvitationEventPage extends Component {
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

        this.updateEvent = this.updateEvent.bind(this);
    }

    componentDidMount() {
        let {id} = this.props.match.params;
        this.getEvent(id);
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
                                        <a href="single-product.html">
                                            <img src="../../../images/cadou1.jpg" alt="" width="301" height="306"/>
                                        </a>
                                    </div>
                                    <div className="cell-md-4">
                                        <div className="unit__body">
                                            <div className="box-product-content">
                                                <div className="box-product-content-wrap">
                                                    <h4><a href="single-product.html">{this.state.event.title}</a></h4>
                                                    <div className="box-product-price"><span className="price">{this.state.event.event_date}</span></div>
                                                    <p>{this.state.event.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="cell-md-12 cell-xs-12">
                            {
                                this.state.event.id !== '' &&
                                <SelectGift eventId={this.state.event.id}/>
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default InvitationEventPage;