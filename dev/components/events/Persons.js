import React, { Component } from 'react';

class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guest: {
                name: '',
                email: ''
            },
            guests: [],
            guestMenu: 'seeGuests'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.selectGuestMenu = this.selectGuestMenu.bind(this);
    }

    selectGuestMenu() {
        let state = this.state;

        if (state.guestMenu === 'addGuests')
            state.guestMenu = 'seeGuests';
        else
            state.guestMenu = 'addGuests';

        this.setState(state);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let state = this.state;
        state.guest[name] = value;

        this.setState(state);
    }

    render() {
        return(
            <div className="box-product">
                <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                        <li className={this.state.guestMenu === "addGuests" ?"active" : ""} onClick={this.selectGuestMenu}>
                            <span href="#">+ Invita o noua persoana</span>
                        </li>
                        <li className="active" className={this.state.guestMenu === "seeGuests" ?"active" : ""} onClick={this.selectGuestMenu}>
                            <span href="#">Lista mea de invitati</span>
                        </li>
                    </ul>
                </div>
                <div className="unit unit-spacing-0 unit-sm-horizontal box-product-content">
                    persoane
                </div>
            </div>
        );
    }
}

export default Persons;