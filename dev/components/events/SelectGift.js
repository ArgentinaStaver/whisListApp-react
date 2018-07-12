import React, { Component } from 'react';
import axios from 'axios';

class SelectGift extends Component {
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
        this.selectGift = this.selectGift.bind(this);
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

    selectGift(id) {
        let vm = this;
        axios.put('http://localhost:8000/api/event/' + id +'/select/gift')
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
                            <a className="mdi" onClick={this.selectGift.bind(this, gift.id)}>
                                {
                                    gift.reserved && <i className="fa fa-check"></i>
                                }
                                {
                                    !gift.reserved && <i className="fa fa-times"></i>
                                }
                            </a>
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
                    <h4>Lista mea de cadouri</h4>
                </div>
                <div className="unit unit-spacing-0 unit-sm-horizontal box-product-content">
                    {
                        this.state.giftMenu === 'seeGifts' &&
                        this.renderGifts()
                    }
                </div>
            </div>
        );
    }
}

export default SelectGift;