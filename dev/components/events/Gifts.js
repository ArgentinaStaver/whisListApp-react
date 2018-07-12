import React, { Component } from 'react';
import axios from 'axios';

class Gifts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gift: {
                title: '',
                description: '',
                link: ''
            },
            gifts: [],
            giftMenu: 'seeGifts'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.selectGiftsMenu = this.selectGiftsMenu.bind(this);
        this.registerGift = this.registerGift.bind(this);
    }

    selectGiftsMenu() {
        let state = this.state;

        if (state.giftMenu === 'addGifts')
            state.giftMenu = 'seeGifts';
        else
            state.giftMenu = 'addGifts';

        this.setState(state);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        let state = this.state;
        state.gift[name] = value;

        this.setState(state);
    }

    registerGift() {
        let vm = this;
        axios.post('http://localhost:8000/api/event/' + this.props.eventId +'/gift', this.state.gift)
            .then(function (response) {
                vm.getGifts();
                vm.resetAddGiftForm();
            });
    }

    componentDidMount() {
        this.getGifts();
    }

    getGifts() {
        let vm = this;
        axios.get('http://localhost:8000/api/event/' + this.props.eventId +'/gifts')
            .then(function (response) {
                vm.setGifts(response.data.data);
            });
    }

    setGifts(gifts) {
        this.setState({
            gifts: gifts
        });
    }

    resetAddGiftForm() {
        let state = this.state;

        state.gift = {
            title: '',
            description: '',
            link: ''
        };
        this.setState(state);
    }

    renderGifts() {
        return <div className="range range-30 range-center widthFull">
            { this.state.gifts.map((gift) =>
                <div className="cell-md-4 cell-sm-6 cell-xs-10">
                    <div className="box-product">
                        <a href={gift.link} target="_blank">
                            <img src="../../../images/cadou2.jpg" alt="" width="240" height="235"/>
                        </a>
                        <h5>
                            <a href={gift.link}>
                                {gift.title}
                            </a>
                        </h5>
                        <span className="price">{gift.description}</span>
                        <div className="box-product-details">
                            <a className="mdi"><i className={gift.reserved ? "fa fa-check" : "fa fa-times"}></i></a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    }

    render() {
        return(
            <div className="box-product">
                <div className="rd-navbar-nav-wrap">
                    <ul className="rd-navbar-nav">
                        <li className={this.state.giftMenu === "addGifts" ?"active" : ""} onClick={this.selectGiftsMenu}>
                            <span href="#">+ Adauga un nou cadou</span>
                        </li>
                        <li className="active" className={this.state.giftMenu === "seeGifts" ?"active" : ""} onClick={this.selectGiftsMenu}>
                            <span href="#">Lista mea de cadouri</span>
                        </li>
                    </ul>
                </div>
                <div className="unit unit-spacing-0 unit-sm-horizontal box-product-content">
                    {
                        this.state.giftMenu === 'seeGifts' &&
                        this.renderGifts()
                    }
                    {
                        this.state.giftMenu === 'addGifts' &&
                        <div className="range range-30 range-center widthFull">
                            <form className="rd-mailform form-label-centered width70pr">
                                <div className="form-wrap ">
                                    <label className="form-label-outside" for="login-email">Nume Cadou</label>
                                    <input className="form-input"
                                           type="text"
                                           name="title"
                                           onChange={this.handleInputChange}
                                           value={this.state.gift.title}
                                           data-constraints="@Required"/>
                                </div>
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-password">Link cadou</label>
                                    <input className="form-input"
                                           type="url"
                                           name="link"
                                           value={this.state.gift.link}
                                           onChange={this.handleInputChange}
                                           data-constraints="@Required"/>
                                </div>
                                <div className="form-wrap">
                                    <label className="form-label-outside" for="login-password">Descriere</label>
                                    <input className="form-input"
                                           type="text"
                                           name="description"
                                           value={this.state.gift.description}
                                           onChange={this.handleInputChange}
                                           data-constraints="@Required"/>
                                </div>
                                <button
                                    className="button button-primary button-effect-ujarak button-block"
                                    type="button"
                                    onClick={this.registerGift}>
                                    Adauga cadoul
                                </button>
                            </form>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default Gifts;