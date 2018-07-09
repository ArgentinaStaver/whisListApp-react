import React, { Component } from 'react';
import axios from 'axios';

class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guest: {
                id: '',
                name: ''
            },
            guestsToAdd: [],
            guests: [],
            users: [],
            guestMenu: 'seeGuests'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.selectGuestMenu = this.selectGuestMenu.bind(this);
        this.addGuests = this.addGuests.bind(this);
    }
    componentDidMount() {
        this.getGuests();
        this.getUsers();
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
        state.guestsToAdd = [];
        state.guestsToAdd.push(value);

        this.setState(state);
    }

    addGuests() {
        let vm = this;
        let ids = {guest_ids: this.state.guestsToAdd};
        axios.post('http://localhost:8000/api/event/'+ this.props.eventId +'/add/guests', ids)
            .then(function (response) {
                vm.getGuests()
            });
    }

    getGuests() {
        let vm = this;
        axios.get('http://localhost:8000/api/event/'+ this.props.eventId +'/get/guests')
            .then(function (response) {
                vm.setGuests(response.data);
            });
    }

    setGuests(guests) {
        let state = this.state;
        state.guests = guests;

        this.setState(state);
    }

    getUsers() {
        let vm = this;
        axios.get('http://localhost:8000/api/users/search')
            .then(function (response) {
                let state = vm.state;
                state.users = response.data;
                vm.setState(state);
            });
    }

    renderGuests() {
        return <ul className="list-marked" style={{marginTop: '20px'}}>
            {
                this.state.guests.map((guest) =>
                    <li>{guest.name}</li>
                )
            }
        </ul>
    }

    renderUsers() {
        return this.state.users.map((user) =>
                    <option value={user.id}>{user.name}</option>
                )

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
                    {
                        this.state.guestMenu === "addGuests"  &&
                        <div className="range range-30 range-center widthFull">
                            <form className="rd-mailform form-label-centered widthFull">
                                <div className="form-wrap ">
                                    <label className="form-label-outside" for="login-email">Alege invitat</label>
                                    <select className="form-input"
                                            name="user"
                                            placeholder="Select user"
                                            onChange={this.handleInputChange}
                                            data-constraints="@Required">
                                        {
                                            this.state.users &&
                                            this.renderUsers()
                                        }
                                    </select>
                                </div>

                                <button
                                    className="button button-primary button-effect-ujarak button-block"
                                    type="button"
                                    onClick={this.addGuests}>
                                    Adauga
                                </button>
                            </form>
                        </div>
                    }
                    {
                        this.state.guestMenu === "seeGuests" && this.state.guests &&
                        this.renderGuests()
                    }
                </div>
            </div>
        );
    }
}

export default Persons;