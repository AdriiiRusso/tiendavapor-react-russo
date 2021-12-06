import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import 'bootstrap-icons/font/bootstrap-icons.css';

export default class CartWidget extends Component {
    render() {
        return (
            <Link to='/cart'>
                <button class="btn">
                    <i class="bi bi-cart text-info" style={{ fontSize: 30 }}></i>
                </button>
            </Link>
        )
    }
}
