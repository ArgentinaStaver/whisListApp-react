import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class InvitationEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
            redirect: false
        };
    }

    componentDidMount() {
        let vm = this;
        axios.get('http://localhost:8000/api/user/events')
            .then(function (response) {
                vm.setEvents(response.data);
            });
    }

    setEvents(events) {
        this.setState({
            events: events
        });
    }

    render() {
        return(
            <section class="section-md bg-white">
                <div class="shell shell-custom">
                    <div className="group-xl">
                        <h4>Evenimente la care particip</h4>
                    </div>
                    <div class="range range-50 range-lg-justify">
                        <div class="cell-md-9 cell-xs-12 cell-lg-container-3">
                            <div className="range range-30 range-center">
                                {
                                    this.state.events.map((event) =>
                                        <div className="cell-sm-12 cell-xs-10">
                                            <div className="box-product-horizontal">
                                                <div className="unit unit-spacing-0 unit-sm-horizontal">
                                                    <div className="unit__left"><a href="single-product.html"><img src="http://via.placeholder.com/301x306" alt="" width="301" height="306"/></a></div>
                                                    <div className="unit__body">
                                                        <div className="box-product-content">
                                                            <div className="box-product-content-wrap">
                                                                <h4><a href="single-product.html">{event.title}</a></h4>
                                                                <div className="box-product-price"><span className="price">{event.eventDate.date}</span></div>
                                                                <p>{event.description}</p>
                                                                <button type="button" className="button button-effect-ujarak button-gray-1" href="cart-page.html">
                                                                    <Link to={`/editEvent/${event.id}`}>
                                                                        Vezi detalii
                                                                    </Link>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default InvitationEvents;