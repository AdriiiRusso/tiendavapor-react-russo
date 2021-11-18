import React, { Component } from 'react'

import 'bootstrap-icons/font/bootstrap-icons.css';

export default class CartWidget extends Component {
    render() {
        return (
            <button class="btn">
                <i class="bi bi-cart text-info" style={{ fontSize: 30 }}></i>
            </button>
        )
    }
}
